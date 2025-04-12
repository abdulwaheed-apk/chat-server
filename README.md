# 🧩 Microservices-Based Chat Application Backend

A scalable, containerized chat application built using the microservices architecture.

---

## 🚀 What I Built

This application showcases a complete microservices-based backend system that supports real-time chat, user management, and asynchronous notifications. The system is composed of independently deployable services, each responsible for a specific domain:

-   **User Service** – Handles user registration and authentication.
-   **Chat Service** – Manages real-time messaging between users.
-   **Notification Service** – Sends emails and push notifications using RabbitMQ for message queuing.
-   **API Gateway** – Routes and centralizes all incoming requests.
-   **Nginx** – Acts as a reverse proxy for seamless request forwarding.
-   **Docker** – Containerizes all services for consistent and portable deployment.

---

## 🧠 What I Learned / Skills Demonstrated

-   **Microservices Architecture**  
    Structured services by domain responsibility with decoupled communication.

-   **Node.js + Express.js**  
    Built REST APIs and middleware-based services.

-   **RabbitMQ (Message Broker)**  
    Enabled asynchronous communication for scalable notifications.

-   **Docker & Docker Compose**  
    Containerized each service and orchestrated them in isolated environments.

-   **Nginx Reverse Proxy**  
    Centralized routing and load balancing across services.

-   **API Gateway Design**  
    Implemented a single entry point for clients, handling internal routing.

-   **.env Configuration & Secrets Management**  
    Ensured secure and environment-specific setups for development and deployment.

-   **Manual Testing with Postman**  
    Verified APIs and debugged endpoints during integration.

---

## 🧰 Technologies Used

| Tech           | Role                              |
| -------------- | --------------------------------- |
| Node.js        | Server-side development           |
| TypeScript     | For type safety                   |
| Express.js     | REST APIs and middleware          |
| RabbitMQ       | Asynchronous message broker       |
| Docker         | Containerization of microservices |
| Docker Compose | Service orchestration             |
| Nginx          | Reverse proxy and load balancing  |
| MongoDB        | Data storage for services         |
| Postman        | Manual API testing                |

---

## 📁 Project Structure

chat-server
├── chat-service
├── gateway
├── nginx
├── notification-service
├── user-service
├── docker-compose.yml
├── README.md
└── .gitignore
