import React from 'react';

const Navbar = () => {
  const handleHomeClick = () => {
    alert("Hallo von Home");
  }

  return (
    <nav>
      <button onClick={handleHomeClick}>Home</button>
      {/* Andere Buttons */}
    </nav>
  );
}

export default Navbar;
