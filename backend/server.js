const express = require('express');
const cors = require('cors');
const { startEngine, toggleSensor, getDeviceStates } = require('./logicEngine');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/devices', (req, res) => {
  res.json(getDeviceStates());
});

app.post('/toggle/:sensorId', (req, res) => {
  toggleSensor(req.params.sensorId);
  res.json({ status: 'toggled' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  startEngine();
});
