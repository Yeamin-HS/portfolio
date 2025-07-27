import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TransitionWrapper from './pages/TransitionWrapper';

function App() {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <TransitionWrapper>
                <Home />
              </TransitionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
