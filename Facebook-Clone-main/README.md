# Facebook-Clone
A full-stack Facebook Clone built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. The application includes user authentication, post creation, image uploads, and a responsive interface, providing core social media functionality through a RESTful backend.

## 🚀 Features

- User Registration
- User Login Authentication
- Create Posts
- Image Upload Support
- MongoDB Database Integration
- Responsive User Interface
- Express.js REST API
- Secure Password Storage

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
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/facebook-clone.git
```

### Navigate to the project

```bash
cd facebook-clone
```

### Install backend dependencies

```bash
cd Backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

---

## ▶️ Run the Project

### Start Backend

```bash
npm start
```

or

```bash
npm run dev
```

### Open Frontend

Open the `index.html` file in your browser or use a Live Server extension in VS Code.


## 📖 Learning Outcomes

- Building REST APIs with Express.js
- Connecting Node.js with MongoDB
- User Authentication
- CRUD Operations
- Image Upload using Multer
- Backend Routing
- Database Design with Mongoose


