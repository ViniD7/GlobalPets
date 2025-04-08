import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

const StatusBarManager = ({ isClient }: { isClient: boolean }) => {
  useEffect(() => {
    StatusBar.setBarStyle(isClient ? 'light-content' : 'dark-content');
  }, [isClient]);

  return null;
};

export default StatusBarManager;
