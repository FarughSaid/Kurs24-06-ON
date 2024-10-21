import React from "react";
import './App.css';  // Optional for CSS styles

function App() {
  // Definiere eine Variable mit einer einfachen Begrüßung oder dem aktuellen Tag
  const greeting = "Heute ist ein toller Tag!";

  // Funktion für den Button, um einen Alert anzuzeigen
  const showAlert = () => {
    alert("Button wurde geklickt!");
  };

  return (
    <>
      {/* Fragment */}
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{greeting}</h2>
      {/* H3-Tag für eine einfache Berechnung */}
      <h3>Die Addition von 2 + 3 ergibt: {2 + 3}</h3>

      {/* Button mit onClick-Handler für den Alert */}
      <button onClick={showAlert}>Klicke mich!</button>
    </>
  );
}

export default App;
