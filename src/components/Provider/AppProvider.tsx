import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};