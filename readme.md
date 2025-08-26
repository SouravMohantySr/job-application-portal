# 📌 Job Application Portal

A Node.js + Express + MongoDB based application where users can view jobs, and apply by uploading their resume.

---

## ⚙️ Setup & Installation

### 1. Clone the repository

### 2. Install dependencies
npm install


### 3. Create `.env` file

Inside the root of your project, create a file named `.env`:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jobPortal
JWT_SECRET=your_jwt_secret


### 4. Start the server
# Development (with nodemon)
npm run dev

# Or normal start
npm start


Server will run on:
👉 `http://localhost:5000`


## 📂 Folder Structure

job-application-portal/
│── src/
│   ├── config/
│   │   └── db.js              # Database connection (MongoDB)
│   │
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication middleware
│   │
│   ├── models/
│   │   ├── User.js            # User schema (name, email, password, resume, etc.)
│   │   ├── Job.js             # Job schema (title, description, requirements)
│   │   └── Application.js     # Application schema (user, job, resume, status)
│   │
│   ├── routes/
│   │   ├── authRoutes.js      # Register/Login routes
│   │   ├── jobRoutes.js       # CRUD endpoints for jobs (list sample jobs)
│   │   └── applicationRoutes.js # Apply + View applications
│   │
│   ├── controllers/
│   │   ├── authController.js  # Handles register/login
│   │   ├── jobController.js   # Handles job listings
│   │   └── applicationController.js # Handles applications
│   │
│   ├── uploads/               # Stores uploaded resumes
│   │
│   ├── utils/
│   │   └── generateToken.js   # Helper to generate JWT
│   │
│   ├── app.js                 # Express app config (routes, middleware)
│   └── server.js              # Server entry point
│
├── .env                       # Environment variables (JWT_SECRET, DB_URI, PORT)
├── package.json
├── package-lock.json
└── README.md


## 📌 API Documentation

### 🔑 Auth Routes

#### 1️⃣ Register User

**POST** http://localhost:5000/api/auth/register

**Request (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "_id": "64f99a12c3a1b72a45c4f1a1",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

---

#### 2️⃣ Login User

**POST** `/api/auth/login`

**Request (JSON):**

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "_id": "64f99a12c3a1b72a45c4f1a1",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

---

### 💼 Job Routes

#### 3️⃣ Create Job (Admin)

**POST** `/api/jobs`
(Requires `Authorization: Bearer <token>`)

**Request:**

```json
{
  "title": "Software Engineer",
  "company": "Tech Corp",
  "location": "Remote",
  "description": "We are hiring engineers..."
}
```

**Response:**

```json
{
  "_id": "64f99a12c3a1b72a45c4f1a2",
  "title": "Software Engineer",
  "company": "Tech Corp",
  "location": "Remote",
  "description": "We are hiring engineers..."
}
```

---

#### 4️⃣ Get All Jobs

**GET** `/api/jobs`

**Response:**

```json
[
  {
    "_id": "64f99a12c3a1b72a45c4f1a2",
    "title": "Software Engineer",
    "company": "Tech Corp",
    "location": "Remote",
    "description": "We are hiring engineers..."
  }
]
```

---

### 📄 Application Routes

#### 5️⃣ Apply for a Job

**POST** `/api/applications`
(Requires `Authorization: Bearer <token>`)

Use **form-data** in Postman:

* `jobId` (Text) → Job’s `_id`
* `resume` (File) → Upload PDF/DOC

**Response:**

```json
{
  "_id": "64f99a12c3a1b72a45c4f1a3",
  "job": "64f99a12c3a1b72a45c4f1a2",
  "applicant": "64f99a12c3a1b72a45c4f1a1",
  "resume": "uploads/resume.pdf",
  "status": "Pending"
}
```

---

#### 6️⃣ Get All Applications (Admin only)

**GET** `/api/applications`

**Response:**

```json
[
  {
    "_id": "64f99a12c3a1b72a45c4f1a3",
    "job": "64f99a12c3a1b72a45c4f1a2",
    "applicant": "64f99a12c3a1b72a45c4f1a1",
    "resume": "uploads/resume.pdf",
    "status": "Pending"
  }
]
```

---

## ✅ Features

* User authentication with JWT
* Create & view jobs
* Apply for jobs with resume upload
* Admin can manage job applications

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Auth:** JWT
* **File Upload:** Multer


