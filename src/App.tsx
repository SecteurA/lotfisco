import { AppRouter } from './components/Router';
import { AppProvider } from './components/Provider';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;