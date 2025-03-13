---
title: Final Project EMBARCATech
published: 2025-01-10
updated: 2025-01-11
description: 'Raspberry Pi HTTP server to monitor networks'
image: ''
tags: [Projects]
category: Projects
draft: false

---

## GitHub Repository 
::github{repo="Kenjibercysec/ProjetoFinal_embtech"}

--- 

# Network and Firewall Monitoring with Raspberry Pi Pico W

This project demonstrates how to set up an HTTP server on the Raspberry Pi Pico W to monitor networks and firewalls via Wi-Fi. The application allows users to view and manage network status through a web browser.

## Introduction

The Raspberry Pi Pico W supports Wi-Fi connectivity, enabling the implementation of advanced features such as HTTP servers using the C language and the official Raspberry Pi SDK. With this capability, it is possible to create applications that interact directly with devices, such as smartphones, via Wi-Fi networks.

## Project Utility

This project can be used in various scenarios, such as:
- Home Network Monitoring: Allows users to monitor the status of their home network and firewall, ensuring all devices are connected and protected.
- Corporate Environments: Companies can use this project to monitor internal networks and ensure there are no unauthorized accesses.
- Education: Great for students and electronics enthusiasts who want to learn about networks, Wi-Fi, and HTTP servers using the Raspberry Pi Pico W.

## Applications

- Device Monitoring: Check which devices are connected to the network and their status.
- Firewall Management: Control and view the status of the network firewall.
- IP Blocking: Implement an IP blocklist to prevent unwanted access.

## Prerequisites

1. Configured Environment:
   - Install the Raspberry Pi Pico SDK.
   - Download and configure lwIP (protocol used for network support on the Pico W):
     1. Start a C/C++ project in the Raspberry Pi Pico extension.
     2. Change the board type to Pico W.
     3. Go to 'Pico wireless options' and click on background lwIP.
   - Ensure the pico_cyw43_arch_lwip_threadsafe_background libraries are correctly configured.
2. Wi-Fi Credentials: Replace the Wi-Fi name and password in the code.

## Project Structure

- HTTP Server: Configures an HTTP server on the Raspberry Pi Pico W to respond to HTTP requests.
- Network Monitoring: Checks the Wi-Fi connection status and displays the IP address.
- IP Blocking: Implements a blocklist of IPs to prevent unwanted access.

## How to Use

1. Initial Setup:
   - Clone this repository.
   - Set up the development environment according to the prerequisites.
2. Compilation and Upload:
   - Compile the code using CMake.
   - Upload the binary to the Raspberry Pi Pico W.
3. Execution:
   - Connect the Raspberry Pi Pico W to your Wi-Fi network.
   - Access the Pico W's IP address in your browser to view the network and firewall status.

## Code Example

Here is a snippet of the code that sets up the HTTP server and processes requests:

```c
// Callback function to process HTTP requests
static err_t http_callback(void *arg, struct tcp_pcb *tpcb, struct pbuf *p, err_t err) {
    if (p == NULL) {
        // Client closed the connection
        tcp_close(tpcb);
        return ERR_OK;
    }

    // Process the HTTP request
    char *request = (char *)p->payload;

    // Send the HTTP response
    tcp_write(tpcb, HTTP_RESPONSE, strlen(HTTP_RESPONSE), TCP_WRITE_FLAG_COPY);
    // Free the received buffer
    pbuf_free(p);

    return ERR_OK;
}