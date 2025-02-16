# Quiz Management System

Quiz Management System is a web-based system where teachers can create, manage, and view quizzes. The application is built using React for the frontend and TypeScript with Prisma ORM for the backend. The project follows a clean architecture and modern UI principles using ShadCN components.

## Features

- User authentication (static credentials, no JWT required)
- Create, view, update, and delete quizzes
- Responsive design with ShadCN UI components
- RESTful API with Prisma ORM for database management

## Tech Stack

**Frontend:**
- React
- ShadCN UI
- Axios
- Vite

**Backend:**
- TypeScript
- Express
- Prisma ORM
- PostgreSQL

**Database:**
- PostgreSQL

## Prerequisites

- Node.js
- PostgreSQL/MySQL installed and running
- Git

## Setup Instructions

### 1. Clone the Repository
```bash
git clone
cd <directory-name>
```

### 2. Setup Backend

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Database
1. Replace the `DATABASE_URL` in the `.env` file with your actual database connection string
2. Update the `schema.prisma` file if necessary

#### Migrate Database
```bash
npx prisma migrate dev --name init
```

#### Run TypeScript Compilation
```bash
npx tsc
```

#### Start Backend Server
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Setup Frontend

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Start Frontend Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- **POST** `/login` - Logs in a user with static credentials

### Quiz Management
- **POST** `/quizzes` - Create a new quiz
- **GET** `/quizzes` - Get all quizzes
- **GET** `/quizzes/{id}` - Get quiz details
- **PUT** `/quizzes/{id}` - Update a quiz
- **DELETE** `/quizzes/{id}` - Delete a quiz
