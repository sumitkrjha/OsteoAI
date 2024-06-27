# OsteaoAI - Web Backend

This branch contains the backend code for OsteaoAI, an AI-powered web application designed to assist medical professionals in determining the presence of bone tumors and bone fractures in X-ray images.

**Live Application**: [OsteaoAI](https://osteoai.onrender.com)

### Problem Statement

To help medical professionals determine the presence of bone tumors and bone fractures in X-rays.

### Code Repositories

- **Main Repository**: [OsteaoAI Main](https://github.com/sumitkrjha/OsteoAI)
- **Web Frontend**: [OsteaoAI Web Frontend](https://github.com/sumitkrjha/OsteoAI/tree/WebFrontend)
- **AI Backend**: [OsteaoAI AI Backend](https://github.com/sumitkrjha/OsteoAI/tree/Backend)

### Features and Functions

- **JWT Authentication**: Ensures secure access, restricting it to authorized professionals.
- **API for Data Handling**: Facilitates sending and receiving data from MongoDB.
- **Secure Data Storage**: Utilizes MongoDB Atlas for secure and scalable data storage.

### Tech Stack

#### Web Backend

- **NodeJS**: A cross-platform, open-source JavaScript runtime environment.
- **ExpressJS**: A web application framework for Node.js, ideal for building APIs and web applications.
- **MongoDB Atlas**: A cloud database and data platform designed to simplify development with data.
- **JWT Auth**: A standard for securely transmitting information as JSON objects, used for user authentication and authorization.

### Installation and Setup

1. **Clone the repository**
    ```bash
    git clone <github backend branch link>
    cd <repository name>
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    ```

4. **Start the development server**
    ```bash
    cd src
    node app.js
    ```

### API Endpoints

- **Authentication**
    - **POST /auth/signup**: Register a new user.
    - **POST /auth/login**: Authenticate a user and return a JWT token.
    - **GET /api/user**: To get the user data.

- **Data Handling**
    - **POST /data/tumor**: Send Tumor data to the database.
    - **POST /find/returnTumor**: Get the Tumor data from the database.
    - **POST /upload/fracture**: Send Fracture data to the database.
    - **POST /get/returnFracture**: Get the Fracture data from the database.
    

### License

This project is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).

---

For any queries or support, please contact us at [Personal Website](https://sumitkrjha.onrender.com).

---

**OsteaoAI - Web Backend** - Empowering medical professionals with AI-driven insights.
