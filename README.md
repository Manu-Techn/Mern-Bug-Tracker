MERN BUG TRACKER
A minimal MERN (MongoDB, Express, React, Node.js) application that allows users to create, view, update, and delete bugs in a project. This project includes unit, integration, and component testing, along with error handling and debugging best practices.

TABLE OF CONTENTS:
- Features
- Project Structure
- Installation
- Running the App
- Testing
- Debugging
- Error Handling
- Contributing
- License

PROJECT STRUCTURE
```
mern-bug-tracker/
├── backend/
│   ├── models/                  # Mongoose schemas
│   │   └── Bug.js               # Bug model
│   ├── routes/                  # Express routes
│   │   └── bugs.js              # CRUD routes for bugs
│   ├── server.js                # Main backend server
│   ├── package.json             # Backend dependencies & scripts
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── BugForm.js       # Form to add new bugs
│   │   │   ├── BugList.js       # Display list of bugs
│   │   │   └── ErrorBoundary.js # Catch UI errors
│   │   ├── tests/               # Frontend tests
│   │   │   ├── App.test.js
│   │   │   ├── BugForm.test.js
│   │   │   └── BugList.test.js
│   │   ├── App.js               # Main React component
│   │   └── index.js             # React entry point
│   ├── package.json             # Frontend dependencies & scripts
│   └── ...
└── README.md                    # Project documentation
```


Features:
- Add new bugs through a simple form.
- View a list of all reported bugs.
- Update bug statuses (open, in-progress, resolved).
- Delete bugs.
- Backend API built with Express and MongoDB.
- Frontend built with React.
- Full error handling on frontend and backend.
- Unit, integration, and component tests using Jest, Supertest, and React Testing Library.

RUNNING THE APP

Backend:
- npm start/npm test

Frontend:
- npm start/npm test
