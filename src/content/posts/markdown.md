---
title: FastAPI Application at INSS
published: 2025-02-04
description: A storage management software for the INSS IT department
tags: [Markdown, Blogging, Demo]
category: Projects
draft: false
---

# SINGED

It is a full-stack system for device management integrated with the INSS. With an API developed in FastAPI and a responsive web interface built with HTML, CSS, and JavaScript, the project aims to facilitate device administration and monitoring, providing a practical and efficient experience.

Features

Device Management: Registration, consultation, and administration of devices.
Interactive Web Interface: Dynamic pages for registration and visualization (e.g., index.html, cadother.html, cadpc.html, selecao.html).
API with FastAPI: Endpoints for integration and communication between front-end and back-end.
Integrated Database: Uses MySQL (or another compatible DBMS) with scripts and a logical model for table creation.

## **Project Structure**  

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

## **Prerequisites**  

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