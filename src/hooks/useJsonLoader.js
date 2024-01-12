import { useEffect, useState } from 'react';

const useJsonLoader = (mockData) => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const loadJSON = async () => {
      try {
        const data = mockData;
        setJsonData(data);
      } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
      }
    };

    loadJSON();
  }, [mockData]);

  return jsonData;
};

export default useJsonLoader;
