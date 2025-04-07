---
title: Task manager with HTML & C
published: 2025-03-14
description: 'This project implements an HTTP API in C to manage tasks, integrated with a simple HTML/JavaScript frontend. Below are the main functionalities and implementations performed.'
image: ''
tags: [Projects, C, HTTP, HTML]
category: ''
draft: false 
lang: ''
---

## GitHub Repository 
::github{repo="Kenjibercysec/API_C"}

--- 

# Task Management System with C API

This project implements an HTTP API in C to manage tasks, integrated with a simple HTML/JavaScript frontend. Below are the main features and implementations.

## Features

### Backend (C API)
- **Framework**: HTTP API in C using Winsock, running on port 8080 with support for multiple connections via threads.
- **Routes**:
  - \`GET /tasks\`: Lists all tasks in JSON format.
  - \`POST /tasks\`: Adds a new task.
  - \`PUT /tasks/<id>\`: Marks a task as completed.
  - \`DELETE /tasks/<id>\`: Deletes a task.
  - \`OPTIONS /tasks\`: CORS preflight support.
- **Authentication**: Basic Authentication (username: \`user\`, password: \`pass\`).
- **Persistence**: Tasks are saved in \`tasks.txt\` (format: \`id,description,completed\`) in the directory \`c:\\Users\\silas\\OneDrive\\Desktop\\API_C\\\`.
- **Logging**: Requests are logged in \`api_log.txt\` with timestamps.
- **CORS**: Cross-origin request support with appropriate headers.
- **Security**: Task descriptions are limited to 99 characters.

### Frontend (HTML/JavaScript)
- **Interface**: Form to add tasks and a dynamic task list with \"Complete\" and \"Delete\" buttons.
- **JavaScript**: Uses \`fetch\` to interact with the API, with integrated authentication.
- **Functionalities**:
  - Automatic task listing on load.
  - Real-time addition, completion, and deletion of tasks.

### Configuration
- **Compilation**:  
  \`\`\`bash
  gcc -Wall -Wextra -g3 C_API.c -o output/C_API.exe -lws2_32
  \`\`\`
  (on MinGW).

- **Execution**:
  1. Locate the executable directory.
  2. Run the API:  
     \`\`\`
     C_API.exe
     \`\`\`
  3. Open the frontend:
     - Open \`index.html\` in your browser (\`file:///c:/Users/silas/OneDrive/Desktop/API_C/index.html\`).

## Notes
- The project was developed and tested on Windows using VS Code and MinGW.
- The \`tasks.txt\` file is automatically created when adding the first task.
"
