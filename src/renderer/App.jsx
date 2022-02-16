/* eslint-disable react/prop-types */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

const Page = ({ children }) => {
  return <div className="page">{children}</div>;
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <Calculator />
              </Page>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
