import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import FAQ from './components/FAQ';
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/faq">FAQ</Link>
      </nav>
    </>
  );
}


function NotFound(){
  return (
    <>
      <h2>404</h2>
      <Link to="/">go back home</Link>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;
