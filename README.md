# OsteaoAI - AI Backend

This repository contains the AI backend code for OsteaoAI, an AI-powered web application designed to assist medical professionals in determining the presence of bone tumors and bone fractures in X-ray images.

### Bone Tumor
![image](https://github.com/sumitkrjha/OsteoAI/assets/167055828/846a2709-0240-4fa0-8989-207faabd01d9)

### Bone Fracture
![image](https://github.com/sumitkrjha/OsteoAI/assets/167055828/ff92c8f3-ef5f-4ae4-a2b5-1442c0477f82)

### Live Application: [OsteaoAI](https://osteoai.onrender.com)

### Problem Statement

To help medical professionals determine the presence of bone tumors and bone fractures in X-rays.

### Code Repositories

- **Main Repository**: [OsteaoAI Main](https://github.com/sumitkrjha/OsteoAI)
- **Web Frontend**: [OsteaoAI Web Frontend](https://github.com/sumitkrjha/OsteoAI/tree/WebFrontend)
- **Web Backend**: [OsteaoAI Web Backend](https://github.com/sumitkrjha/OsteoAI/tree/WebBackend)

### Features and Functions

- **Flask API**: Connects the web application to the AI models.
- **AI Models**: Includes two models, one for detecting bone tumors and another for detecting bone fractures.
- **Model Storage**: Models are stored in the `/models` folder.

### Tech Stack

#### AI Backend

- **Python**: A general-purpose programming language used for web development, machine learning, and data science.
- **Flask**: A web framework that serves as an API between the web application and the AI models.
- **YOLOv8**: A state-of-the-art deep learning model for real-time object detection in computer vision applications.

### Installation and Setup

1. **Clone the repository**
    ```bash
    git clone <github backend branch link>
    cd <repository name>
    ```

2. **Install Anaconda (Miniconda)**
    Download and install Miniconda from [here](https://docs.conda.io/en/latest/miniconda.html).

3. **Create a new conda environment and activate it**
    ```bash
    conda create -n osteaoai python=3.8
    conda activate osteaoai
    ```

4. **Install dependencies**
    ```bash
    pip install -r requirements.txt
    ```

5. **Run the Flask application**
    ```bash
    python app.py
    ```

### API Endpoints

- **/predicttumor**: Analyze X-ray images for bone tumors and send results [Value (True or False), Img (Tumor area squared image)].
- **/predictfracture**: Analyze X-ray images for bone fractures and send results [Value (True or False), Img (Fracture area squared image)].

### Contribution

This branch was primarily developed by [Vibhu Raj](https://www.linkedin.com/in/vibhuraj01/), who created the AI models and the Flask API.

### License

This project is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).

### Acknowledgements

We would like to thank Vibhu Raj for developing the AI model and creating the Flask API that enables seamless communication between the web application and the AI model.

![1714978003725](https://github.com/sumitkrjha/OsteoAI/assets/167055828/a645c98e-8eca-4201-b31a-69712c6e55c9)

### Connect with Vibhu Raj on [LinkedIn](https://www.linkedin.com/in/vibhuraj01/).

---

For any queries or support, please contact us at [Personal Website](https://sumitkrjha.onrender.com).

---

**OsteaoAI - AI Backend** - Empowering medical professionals with AI-driven insights.
