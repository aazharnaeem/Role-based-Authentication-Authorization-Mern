import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages';
import Layout from '../layout';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Layout>
            <Route path='/' element={<Home />} />
          </Layout>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
