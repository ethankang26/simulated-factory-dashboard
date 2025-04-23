README - Simulated Factory Automation System

Simulated Factory Automation System (SFAS)
==========================================

The Simulated Factory Automation System (SFAS) is a full-stack project that mimics how sensors, motors, and other factory components behave—entirely in software. It’s built using Node.js for the backend, and a live-updating dashboard using React (Next.js) and Tailwind CSS on the frontend.

This tool was designed to help engineers, students, and automation enthusiasts practice PLC-style logic, device toggling, and visualization without needing any hardware.

Key Features
------------
- Logic engine that simulates input/output control similar to a PLC
- Backend API for controlling and monitoring virtual devices
- Frontend dashboard with real-time updates and status visualization
- Toggle buttons to manually simulate sensor activity
- Easy to configure rules (e.g., “if sensor is on, turn motor on after delay”)
- Responsive layout for desktop and mobile

Tech Stack
----------
**Frontend**: Next.js, React, Tailwind CSS  
**Backend**: Node.js, Express, CORS  
**Logic Engine**: Custom rule processor using JSON config and timers

Project Structure
-----------------
sfas/
├── backend/              → Express server and control logic  
│   ├── server.js  
│   ├── logicEngine.js  
│   └── config.json  
├── frontend/             → Next.js dashboard UI  
│   └── src/pages/index.js  
├── shared/               → Shared logic definitions  
│   └── factoryModel.js  
└── README.md             → This file  

Getting Started
---------------

**Backend:**
```bash
cd backend
npm install
node server.js
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 in your browser.  
The backend API runs on http://localhost:3001

How to Configure Logic
----------------------

Edit `backend/config.json` like this:

```json
{
  "rules": [
    {
      "if": { "sensor1": "on" },
      "then": { "motor1": "on" },
      "delay": 2000
    }
  ]
}
```

Ideas for Future Improvements
-----------------------------
- Logging and state history for analysis
- Uptime and cycle time analytics
- Mobile-optimized layout
- More realistic visualizations and animations
- Video walkthrough or hosted demo

Author
------
Ethan Kang  
Automation Engineering Student at McMaster University  
[linkedin.com/in/ethankang26](https://www.linkedin.com/in/ethankang26)

License
-------
MIT License — free to modify and share.

