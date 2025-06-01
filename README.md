# Bracket Builder Platform

## Description

Bracket Builder Platform is a full-stack web application designed to help users create, manage, and visualize tournament brackets. The platform features a modern frontend built with React and a robust backend powered by Java and Spring Boot. It also includes a dedicated file storage service for managing user-uploaded files and assets.

---

## Features

- Create and customize tournament brackets
- User-friendly drag-and-drop interface
- Real-time bracket updates and visualization
- File upload and storage support
- Responsive design for desktop and mobile
- Modular backend services for scalability

---

## Technologies Used

### Frontend

- **React** (TypeScript) – UI development ([frontend/src/](frontend/src/))
- **Vite** – Fast development server and build tool ([frontend/vite.config.ts](frontend/vite.config.ts))
- **SCSS** – Styling ([frontend/src/index.scss](frontend/src/index.scss))
- **ESLint** – Code linting ([frontend/.eslintrc.cjs](frontend/.eslintrc.cjs))

### Backend

- **Java 17+**
- **Spring Boot** – REST API and application logic ([bracket-builder/src/main/](bracket-builder/src/main/))
- **Maven** – Build and dependency management ([bracket-builder/pom.xml](bracket-builder/pom.xml), [file-storage-main/pom.xml](file-storage-main/pom.xml))
- **JUnit** – Unit testing ([bracket-builder/src/test/](bracket-builder/src/test/), [file-storage-main/src/test/](file-storage-main/src/test/))

### File Storage Service

- **Java 17+**
- **Spring Boot** – File storage microservice ([file-storage-main/src/main/](file-storage-main/src/main/))

---

## Project Structure

```
bracket-builder-platform/
│
├── bracket-builder/         # Main backend service (Spring Boot)
│   ├── src/main/            # Application source code
│   ├── src/test/            # Unit tests
│   └── pom.xml              # Maven configuration
│
├── file-storage-main/       # File storage microservice (Spring Boot)
│   ├── src/main/            # Service source code
│   ├── src/test/            # Unit tests
│   └── pom.xml              # Maven configuration
│
├── frontend/                # Frontend application (React + Vite)
│   ├── src/                 # React components and styles
│   ├── public/              # Static assets
│   ├── package.json         # NPM configuration
│   └── vite.config.ts       # Vite configuration
│
└── README.md                # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- Java 17+
- Maven

### Backend Setup

1. **Bracket Builder Service**
   ```sh
   cd bracket-builder
   ./mvnw spring-boot:run
   ```

2. **File Storage Service**
   ```sh
   cd file-storage-main
   ./mvnw spring-boot:run
   ```

### Frontend Setup

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [React](https://react.dev/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Vite](https://vitejs.dev/)