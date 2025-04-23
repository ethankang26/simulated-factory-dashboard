const fs = require('fs');
let firedRules = new Set(); // Track which rules have already been triggered
let { devices, rules } = JSON.parse(fs.readFileSync('./backend/config.json', 'utf-8'));

function applyRules() {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const conditionKey = Object.keys(rule.if)[0];
      const expectedState = rule.if[conditionKey];
  
      const conditionMet = devices[conditionKey].state === expectedState;
  
      if (conditionMet && !firedRules.has(i)) {
        const actionKey = Object.keys(rule.then)[0];
        const newState = rule.then[actionKey];
        const delay = rule.delay || 0;
  
        setTimeout(() => {
          devices[actionKey].state = newState;
          console.log(`[Rule Fired] ${actionKey} => ${newState}`);
        }, delay);
  
        firedRules.add(i); // Prevent it from firing again immediately
      }
  
      // Optional: Reset rule if condition is no longer met
      if (!conditionMet && firedRules.has(i)) {
        firedRules.delete(i);
      }
    }
  }
  

function startEngine() {
  setInterval(() => {
    applyRules();
  }, 1000);
}

function toggleSensor(sensorId) {
  const sensor = devices[sensorId];
  sensor.state = sensor.state === 'on' ? 'off' : 'on';
  console.log(`[Sensor Toggled] ${sensorId} is now ${sensor.state}`);
}

function getDeviceStates() {
  return devices;
}

module.exports = { startEngine, toggleSensor, getDeviceStates };
