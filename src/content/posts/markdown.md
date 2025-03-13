---
title: FastAPI Application at INSS
published: 2025-02-04
description: A storage management software for the INSS IT department
tags: [Projects]
category: Projects
draft: false
---

## GitHub Repository 
::github{repo="Kenjibercysec/FastAPI-INSS"}

# SINGED

It is a full-stack system for device management integrated with the INSS. With an API developed in FastAPI and a responsive web interface built with HTML, CSS, and JavaScript, the project aims to facilitate device administration and monitoring, providing a practical and efficient experience.

Features

Device Management: Registration, consultation, and administration of devices.
Interactive Web Interface: Dynamic pages for registration and visualization (e.g., index.html, cadother.html, cadpc.html, selecao.html).
API with FastAPI: Endpoints for integration and communication between front-end and back-end.
Integrated Database: Uses MySQL (or another compatible DBMS) with scripts and a logical model for table creation.

**Project Structure**  

```plaintext
FastAPI-INSS/
├── backend/                              # Back-end code (API with FastAPI)
├── DEVICE DATABASE.sql                   # SQL script for database creation
├── LOGICAL MODEL BD INSS.txt             # Logical model of the database
├── cadother.html                         # Registration page for other devices
├── cadpc.html                            # Registration page for PCs
├── index.html                            # Main page
├── selecao.html                          # Selection page for options
├── inss.js                               # JavaScript script for specific functionalities
├── script.js                             # Other JavaScript scripts
├── style.css                             # CSS styles for the interface
└── requirements.txt                      # Python dependencies (e.g., PyMySQL)
```

**Prerequisites**  

- **Python 3.7+**  
- **MySQL** or another compatible DBMS  
- **Python Dependencies:** Listed in [`requirements.txt`](requirements.txt)  

> **Tip:** If the project uses additional dependencies (e.g., FastAPI and Uvicorn), ensure they are included in `requirements.txt`.  

---

## **Installation**  

### **1. Clone the Repository**  

```bash
git clone https://github.com/Kenjibercysec/FastAPI-INSS.git
cd FastAPI-INSS
```

## 2. Create and Activate a Virtual Environment (Optional but Recommended)  

### Linux/MacOS:  
```bash
python -m venv venv  
source venv/bin/activat
```

### Windows
```bash
python -m venv venv  
venv\Scripts\activate  
```
# 3. Install Dependencies
pip install -r requirements.txt

# 4. Database Configuration
Import the DEVICE DATABASE .sql file into your DBMS to create the necessary tables.
Adjust the connection settings (host, user, password, database name) in the back-end code as needed.

# Usage
Running the Back-end
In the backend directory, locate the main file (e.g., main.py or app.py) and start the FastAPI server:
```
uvicorn main:app --reload
```

# Accessing the Web Interface
After starting the server, open the index.html file or visit the indicated URL to interact with the application via a browser.

# Database Configuration (Complementary)
- SQL Script: Use the `DEVICE DATABASE .sql` file to create the tables.
- Logical Model: Refer to the `LOGICAL MODEL DB INSS.txt` file to understand the database structure.
- Make sure the database credentials and settings in the code match the environment being used.

# Contributions
Contributions to improve FastAPI-INSS are always welcome! To collaborate:

1. Fork this repository.
2. Create a branch for your feature or fix:
```
git checkout -b my-feature
```


# 3. Make commits with your changes:
git commit -m "Description of the change"

s
# 4. Push your branch to the remote repository:
git push origin my-feature

# 5. Open a Pull Request detailing your changes.

# License
This project is licensed under the MIT License. See the LICENSE file for more information.

