# Full Stack User Authentication System

A full-stack web application with secure user authentication, built with **Spring Boot** (backend) and **Angular** (frontend). The app provides signup, login, JWT-based authentication, and role-based access control.

## 🚀 Features

* User Registration & Login
* JWT Token Authentication
* Role-based Authorization (User/Admin)
* Secure Password Hashing (BCrypt)
* RESTful API (Spring Boot)
* Frontend Authentication with Protected Routes
* Error Handling & Validation

## 🛠 Tech Stack

**Frontend:**   Angular
**Backend:** Spring Boot, Spring Security, JWT
**Database:** MySQL
**Tools:** Postman, Swagger, Git

## 📂 Project Structure

```
/backend
   └── src/main/java/...   # Spring Boot backend
/frontend
   └── src/                # Angular frontend
```

## 📖 API Endpoints (Sample)

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/login`    | Login user        |
| POST   | `/api/auth/register` | Register new user |
| GET    | `/api/users/me`      | Get current user  |

## 🔮 Future Improvements

* Forgot Password & Email Verification
* OAuth2 (Google, GitHub) Login
* Dockerize App
* Deployment to Cloud (Heroku/AWS)


