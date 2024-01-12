import React, { createContext, useReducer, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Appointment {
    phone: string;
    full_name: string;
    office: string;
    email: string;
    date: string;
    selectedHour: string | null;
}

interface AppointmentsState {
    consultas: Appointment[];
}

type AppointmentsAction =
    | { type: 'ADICIONAR_CONSULTA'; payload: Appointment }
    | { type: 'DELETE_CONSULTA'; payload: { index: number } }
    | { type: 'CLEAR_ALL_CONSULTAS' }
    | { type: 'RESTORE_APPOINTMENTS'; payload: AppointmentsState };

interface AppointmentsContextType {
    state: AppointmentsState;
    dispatch: React.Dispatch<AppointmentsAction>;
}

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

const initialState: AppointmentsState = {
    consultas: [],
};

const appointmentsReducer = (state: AppointmentsState, action: AppointmentsAction): AppointmentsState => {
    switch (action.type) {
        case 'ADICIONAR_CONSULTA':
            return {
                ...state,
                consultas: [...state.consultas, action.payload],
            };
        case 'DELETE_CONSULTA':
            const newConsultas = [...state.consultas];
            newConsultas.splice(action.payload.index, 1);
            return {
                ...state,
                consultas: newConsultas,
            };
        case 'CLEAR_ALL_CONSULTAS':
            return {
                ...state,
                consultas: [],
            };
        case 'RESTORE_APPOINTMENTS':
            return action.payload;
        default:
            return state;
    }
};

interface AppointmentsProviderProps {
    children: React.ReactNode;
}

export const AppointmentsProvider: React.FC<AppointmentsProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(appointmentsReducer, initialState);

    useEffect(() => {
        const loadAsyncData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('@appointments_data');
                if (storedData) {
                    const parsedData = JSON.parse(storedData) as AppointmentsState;
                    dispatch({ type: 'RESTORE_APPOINTMENTS', payload: parsedData });
                }
            } catch (error) {
                console.error('Erro ao carregar dados do AsyncStorage:', error);
            }
        };

        loadAsyncData();
    }, []);

    useEffect(() => {
        const saveAsyncData = async () => {
            try {
                await AsyncStorage.setItem('@appointments_data', JSON.stringify(state));
            } catch (error) {
                console.error('Erro ao salvar dados no AsyncStorage:', error);
            }
        };

        saveAsyncData();
    }, [state]);

    return (
        <AppointmentsContext.Provider value={{ state, dispatch }}>
            {children}
        </AppointmentsContext.Provider>
    );
};

export const useAppointments = (): AppointmentsContextType => {
    const context = useContext(AppointmentsContext);
    if (!context) {
        throw new Error('useAppointments deve ser usado dentro de um AppointmentsProvider');
    }
    return context;
};
