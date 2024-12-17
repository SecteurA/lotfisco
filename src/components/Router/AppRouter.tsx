import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../Layout';
import { routes } from './routes';
import { Suspense } from 'react';

export const AppRouter = () => {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </AppLayout>
    </Router>
  );
};