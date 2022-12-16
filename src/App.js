import Header from '../src/components/Layout/Header';
import Meals from './components/Meals/Meals';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
