// import Home from "./views/pages/Home";
import {Suspense, lazy} from 'react';
import Loading from './views/Loading/Loading';

const Home = lazy(() => import('./views/Pages/Home'));

function App() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Home />
    </Suspense>
    </>
  );
}

export default App
