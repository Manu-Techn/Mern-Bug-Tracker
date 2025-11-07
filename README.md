MERN Bug Tracker
A minimal MERN (MongoDB, Express, React, Node.js) application that allows users to create, view, update, and delete bugs in a project. This project includes unit, integration, and component testing, along with error handling and debugging best practices.

Table of Contents
- Features
- Project Structure
- Installation
- Running the App
- Testing
- Debugging
- Error Handling
- Contributing
- License

Features
- Add new bugs through a simple form.
- View a list of all reported bugs.
- Update bug statuses (open, in-progress, resolved).
- Delete bugs.
- Backend API built with Express and MongoDB.
- Frontend built with React.
- Full error handling on frontend and backend.
- Unit, integration, and component tests using Jest, Supertest, and React Testing Library.

PROJECT STRUCTURE
mern-bug-tracker/
├── backend/
│   ├── models/
│   │   └── Bug.js        # Bug Mongoose model
│   ├── routes/
│   │   └── bugs.js       # Bug API routes (CRUD)
│   ├── server.js         # Main backend server
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BugForm.js
│   │   │   ├── BugList.js
│   │   │   └── ErrorBoundary.js
│   │   ├── tests/
│   │   │   ├── App.test.js
│   │   │   ├── BugForm.test.js
│   │   │   └── BugList.test.js
│   │   └── App.js
│   ├── package.json
│   └── ...
└── README.md

RUNNING THE APP
Backend
- npm start/npm test
Frontend
- npm start/npm test
