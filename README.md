
---

# 🎉 HelloEvents: Event Booking Web Application

## 📌 Overview

**HelloEvents** is a full-featured web application built with **Spring Boot** and **Angular** for managing and booking event tickets. Designed to be intuitive, responsive, and scalable, this app allows users to register, explore events, and book tickets with ease. Administrators can manage users, events, and monitor platform activity through a secure dashboard.

---

## 🚀 Features

### 👤 For Customers:

* 🏠 **Home Page**: View upcoming events
* 📝 **Register/Login**: Create an account and log in securely (JWT authentication)
* 👤 **Profile Management**: View and update personal details
* 🔍 **Search & Filter**: Browse events by category, location, and date
* 🎟️ **Book Events**: Reserve tickets for selected events
* 💡 **About Page**: Learn about the team and values behind the platform

### 🛠️ For Administrators:

* 📊 **Dashboard**: Monitor stats on events and customer activity
* 👥 **User Management**: Display and delete customer accounts
* 📅 **Event Management**: Create, update, delete, and view event details

---

## 🧰 Technologies Used

| Category             | Tools / Frameworks                      |
| -------------------- |-----------------------------------------|
| **Frontend**         | Angular 17, Angular Material            |
| **Backend**          | Spring Boot, Spring MVC                 |
| **Security**         | Spring Security (JWT)                   |
| **Persistence**      | Spring Data JPA                         |
| **Database**         | MySQL / PostgreSQL                      |
| **Testing**          | JUnit                                   |
| **Containerization** | Docker                                  |
| **Build Tools**      | Maven (Backend), Angular CLI (Frontend) |
| **Version Control**  | Git, GitHub                             |

---

## 🗂️ Project Structure

```
backend/
├── controller/       # REST Controllers (API endpoints)
├── model/            # JPA Entities (Event, User, Booking, etc.)
├── repository/       # JPA Repositories (data access)
├── service/          # Business logic
├── dto/              # Data Transfer Objects
├── mapper/           # Map DTOs to Entities and vice versa
├── security/         # JWT authentication & security config
├── tests/            # Unit and integration tests (JUnit)

frontend/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable Angular components
│   │   ├── pages/           # Views (Home, Events, Profile, etc.)
│   │   ├── services/        # API communication
│   │   ├── guards/          # Route guards for authentication
│   │   └── material.module.ts # Angular Material modules
│   ├── assets/              # Static assets
│   └── environments/        # Environment config
```

---

## 📦 Docker Support

* **Dockerfile** for both frontend and backend
* **docker-compose.yml** to orchestrate:

    * Spring Boot API
    * Angular frontend
    * MySQL/PostgreSQL database

    

## UMLs 

### USE CASE Diagram
![image](https://github.com/user-attachments/assets/9559df54-89d6-4b98-929f-94e8a0e923d1)
### CLASS Diagram
![image](https://github.com/user-attachments/assets/7e424ee4-9bda-496e-acbc-2ae9c8b581c2)
### SEQUENCE Diagram 
![image](https://github.com/user-attachments/assets/af502496-194c-4a4d-9bd8-0cebd700df0f)




## 🔗 API Testing

* Test and explore APIs using **Postman**: [Postman Link](https://yguhijopl.postman.co/workspace/My-Workspace~49aab289-6de5-487b-8f91-58ce1aacf8db/collection/41299916-f7f0ba6a-faad-4f0b-b3e3-91bdd037c54d?action=share&creator=41299916)
