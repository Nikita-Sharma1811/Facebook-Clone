# Facebook Clone

A full-stack Facebook Clone web application built using React, Node.js, Express.js, and MongoDB. The project is deployed on cloud platforms and includes automated backend testing with GitHub Actions CI.

## 🚀 Live Demo

**Frontend:** https://facebook-black-pi.vercel.app/

**Backend:** https://facebook-clone-3j2d.onrender.com/

**GitHub Repository:** 

https://github.com/Nikita-Sharma1811/Facebook-Clone.git


## 🏗️ System Architecture

```text
                    User
                     |
                     v
              +-------------+
              |   Vercel    |
              |  Frontend   |
              +-------------+
                     |
                     | API Requests
                     v
              +-------------+
              |   Render    |
              | Node +      |
              | Express     |
              +-------------+
                     |
                     | MongoDB Connection
                     v
              +-------------+
              | MongoDB     |
              | Atlas       |
              +-------------+


             GitHub Repository
                     |
                     v
              GitHub Actions
                     |
                     v
              Automated Tests
                     |
                PASS / FAIL


---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Packages
- dotenv
- multer
- bcryptjs
- express-session (if used)

---

## 📂 Project Structure

```
Facebook-Clone/
│
├── Backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │   ├── user.js
│   │   └── post.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── postRoutes.js
│   │
│   ├── uploads/
│   ├── .env
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── index.html
│   ├── home.html
│   ├── style.css
│   ├── design.css
│   └── post.js
│
└── README.md

### Automated Testing

The backend contains 4 automated API test cases.

Test file:

Backend/tests/user.test.js
| Test Case | Description                          | Expected Result          |
| --------- | ------------------------------------ | ------------------------ |
| 1         | Signup with empty email and password | `Please fill all fields` |
| 2         | Signup with missing/empty password   | `Please fill all fields` |
| 3         | Login with invalid credentials       | `Invalid credentials`    |
| 4         | Login with empty email and password  | `Please fill all fields` |


GitHub Actions CI

GitHub Actions automatically runs the backend tests when code is pushed to the main branch or when a pull request is created.

Workflow file:

.github/workflows/ci.yml

The CI workflow performs the following steps:

Checkout Code
      ↓
Setup Node.js
      ↓
Install Dependencies
      ↓
Run Tests
      ↓
4 Automated Tests
      ↓
PASS / FAIL

If all tests pass, the workflow completes successfully.

If a test fails, the GitHub Actions workflow fails.

##  Run the Project
Start Backend
cd Backend
npm install
npm start 

### Open Frontend
Open the `index.html` file in your browser or use a Live Server extension in VS Code.

###Run Tests

Inside the Backend folder:

npm test

Expected result:

Test Suites: 1 passed
Tests:       4 passed

###Deployment
####Frontend

The frontend is deployed using Vercel.

####Backend

The backend is deployed using Render.

####Database

The application uses MongoDB Atlas as the cloud database.

The deployed frontend communicates with the deployed backend through API requests.

###Environment Variables

Sensitive configuration such as the MongoDB connection string is stored using environment variables.

The .env file is excluded from Git using .gitignore and should not be uploaded to GitHub.




