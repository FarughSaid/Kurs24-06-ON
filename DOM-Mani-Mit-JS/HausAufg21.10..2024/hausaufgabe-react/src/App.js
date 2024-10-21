import logo from './logo.svg';
import './App.css';

function App() {
  // Definiere eine Variable mit einer Begrüßung oder dem aktuellen Tag
  const greeting = "Heute ist ein schöner Tag!";

  return (
    <>
      {/* Fragment: Um mehrere Elemente zusammenzufassen */}
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{greeting}</h2>
      {/* H3-Tag für eine einfache Berechnung */}
      <h3>Die Addition von 7 + 3 ergibt: {7 + 3}</h3>
    </>
  );
}

export default App;