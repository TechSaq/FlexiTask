import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CounterPage, CounterPageDetails } from './features/counter/pages';
import CounterProvider from './providers/CounterProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CounterPage />,
  },
  {
    path: "/details",
    element: <CounterPageDetails />,
  },
]);

function App() {

  return (
    <>
      <CounterProvider>
        <RouterProvider router={router} />
      </CounterProvider>
    </>
  )
}

export default App
