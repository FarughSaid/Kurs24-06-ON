const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// List of items
let items = []; // Liste der Gegenstände

// Middleware for input validation
function validateItem(req, res, next) {
  const { name, type } = req.body;
  
  // Check if `name` and `type` are provided and are non-empty strings
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Invalid or missing "name" field' });
  }
  
  if (!type || typeof type !== 'string' || type.trim() === '') {
    return res.status(400).json({ message: 'Invalid or missing "type" field' });
  }
  
  next(); // Proceed to the next middleware or route handler
}

// GET route for /items
app.get('/items', (req, res) => { 
  res.json(items); // Gibt die Liste zurück 
});

// POST route for /items with validateItem middleware
app.post('/items', validateItem, (req, res) => { 
  const { name, type } = req.body; 
  const newItem = { 
    id: items.length + 1, 
    name, 
    type, 
    power: Math.floor(Math.random() * 41) + 10, // Generates power between 10 and 50
    health: type === "Trank" ? 100 : 0 // Potions have max health, other items start with zero
  }; 
  items.push(newItem); 
  res.status(201).json(newItem); // Respond with the newly created item
});

// PATCH route for /items/:id/levelup
app.patch('/items/:id/levelup', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the item by id
  const item = items.find(item => item.id === itemId);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Increase the item's power by a random amount between 1 and 10
  const levelUpAmount = Math.floor(Math.random() * 10) + 1;
  item.power += levelUpAmount;

  // Respond with the updated item
  res.json({
    message: `Item power increased by ${levelUpAmount}`,
    item
  });
});

// POST route for /battle
app.post('/battle', (req, res) => { 
  const { id } = req.body;

  // Find the player's item by id
  const playerItem = items.find(item => item.id === id);

  if (!playerItem) {
    return res.status(404).json({ message: 'Item not found' }); // If the item isn't found
  }

  // Create a random enemy
  const enemy = {
    name: 'Random Enemy',
    power: Math.floor(Math.random() * 41) + 10, // Random power between 10 and 50
  };

  // Compare the power values and determine the winner
  let winner;
  if (playerItem.power > enemy.power) {
    winner = 'Player wins!';
  } else if (playerItem.power < enemy.power) {
    winner = 'Enemy wins!';
  } else {
    winner = 'It\'s a tie!';
  }

  // Return the result of the battle
  res.json({
    playerItem,
    enemy,
    winner,
  });
});

// POST route for /items/heal
app.post('/items/heal', (req, res) => {
  const { id } = req.body;

  // Find the item by id
  const item = items.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Check if item is a "potion"
  if (item.type !== "Trank") {
    return res.status(400).json({ message: 'Item is not a healing potion' });
  }

  // Heal amount between 1 and 20
  const healAmount = Math.floor(Math.random() * 20) + 1;
  const maxHealth = 100;

  // Add heal amount, but don't exceed max health
  item.health = Math.min(item.health + healAmount, maxHealth);

  // Respond with the healed item
  res.json({
    message: `Item healed by ${healAmount} points`,
    item
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${4000}`);
});

