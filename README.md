
---

# 🎉 HelloEvents: Event Booking Web Application

## 📌 Overview

**HelloEvents** is a full-featured Spring Boot web application built for managing and booking event tickets. Designed to be intuitive and responsive, this app allows users to register, explore events, and book tickets with ease. Administrators can manage users, events, and monitor platform activity through a secure dashboard.

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

| Category            | Tools / Frameworks      |
| ------------------- | ----------------------- |
| **Backend**         | Spring Boot, Spring MVC |
| **Security**        | Spring Security (JWT)   |
| **Persistence**     | Spring Data JPA         |
| **Database**        | MySQL / PostgreSQL      |
| **Testing**         | JUnit                   |
| **Build Tool**      | Maven                   |
| **Version Control** | Git, GitHub             |

---

## 🗂️ Project Structure

```
src/
├── controller/       # REST Controllers (API endpoints)
├── model/            # JPA Entities (Event, User, Booking, etc.)
├── repository/       # JPA Repositories (data access)
├── service/          # Business logic
├── dto/              # Data Transfer Objects
├── mapper/           # Map DTOs to Entities and vice versa
├── security/         # JWT authentication & security config
```
## [Postman Link](https://yguhijopl.postman.co/workspace/My-Workspace~49aab289-6de5-487b-8f91-58ce1aacf8db/collection/41299916-f7f0ba6a-faad-4f0b-b3e3-91bdd037c54d?action=share&creator=41299916)
