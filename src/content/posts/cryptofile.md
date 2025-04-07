---
title: Cryptofile, Secure file explorer 
published: 2025-04-07
description: 'A set of tools for file encryption, including a secure file explorer and an automatic encryptor.'
image: ''
tags: [Projects, Python, Cybersec]
category: 'Projects'
draft: true 
lang: ''
---

## GitHub Repository 
::github{repo="Kenjibercysec/Cryptofile"}

--- 

# Secure File Explorer

A set of tools for file encryption, including a secure file explorer and an automatic encryptor.

## Available Tools

### 1. SecureExplorer.exe
A file explorer with advanced encryption and password protection, compatible with Windows and Linux.

#### Features:
- Modern and intuitive graphical interface
- Strong encryption using Fernet (AES-128-CBC)
- Password protection with PBKDF2HMAC
- Compatible with Windows and Linux
- Integrated file navigation
- Individual file encryption and decryption

### 2. AutoEncryptor.exe
An automatic encryptor that protects files in the Documents and Downloads folders with a predefined password.

#### Features:
- Automatic file encryption
- Predefined password in the code
- Simple and straightforward interface
- Batch encryption
- Visual progress feedback

## Requirements

- Windows 10/11 or Linux
- Python 3.8 or higher (development only)
- Libraries listed in `requirements.txt` (development only)

## Installation

### For End Users:
1. Download the executables from the `dist` folder
2. Run the desired program

### For Developers:
1. Clone this repository
2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### SecureExplorer.exe
1. Run the `SecureExplorer.exe` file
2. Use the interface to navigate through files
3. To encrypt a file:
   - Select the file
   - Enter a strong password
   - Confirm the operation
4. To decrypt:
   - Select the encrypted file
   - Enter the correct password
   - The file will be restored

### AutoEncryptor.exe
1. Before using, edit the `auto_encrypt.py` file and change the predefined password:
```python
PREDEFINED_PASSWORD = "your_password_here"  # Change to desired password
```
2. Recompile the executable:
```bash
pyinstaller --onefile --windowed --name "AutoEncryptor" auto_encrypt.py
```
3. Run `AutoEncryptor.exe`
4. The program will automatically:
   - Encrypt all files in the Documents and Downloads folders
   - Use the predefined password
   - Show operation progress

## Security

- Uses Fernet encryption (AES-128-CBC)
- Implements PBKDF2HMAC for key derivation
- Passwords are processed securely
- Original files are removed after encryption
- Encrypted files are removed after decryption

## Important Warnings

1. **AutoEncryptor.exe**:
   - Automatically encrypts all files in Documents and Downloads folders
   - Keep the predefined password in a safe place
   - Backup important files before use
   - The process cannot be undone without the correct password

2. **SecureExplorer.exe**:
   - Use strong passwords
   - Keep your passwords in a safe place
   - Backup important files before encryption
   - Do not lose the password, as there is no way to recover files without it

## Legal Notice

This software is provided "as is", without warranties. The developer is not responsible for any data loss or problems arising from the use of this software. Use at your own risk. 