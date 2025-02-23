
import { useState } from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from "./components/UserProfile";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Correct placement of <WelcomeMessage /> */}
      <WelcomeMessage /> 
      <Header />
      <MainContent />
      <Footer />

      <div>
      <h1>Welcome to My App</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
    </div>

      <div>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">Click here</a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        <a href="https://react.dev" target="_blank" rel="noreferrer">>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
