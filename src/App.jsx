import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div className='app'>
      <Routes>
        {publicRoutes.map((route, i) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
