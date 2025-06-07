# 💰 Lipa Na MPESA STK Push API (Node.js + Express)

This is a Node.js Express API that integrates with Safaricom's Lipa Na MPESA STK Push service. It allows you to initiate STK push requests to customer phones so they can complete payments by entering their MPESA PIN.

---

## 📦 Features

- Generate OAuth access token from Safaricom
- Send STK push requests to customer phones
- Receive and log asynchronous payment callbacks
- Switch between **Sandbox** and **Production** environments
- Callback handler separated into controller

---

## 🚀 Technologies

- Node.js
- Express
- Axios
- Ngrok (for local testing with public URLs)
- dotenv

---

## 🛠 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/joe9126/lipa_na_mpesa_api.git
cd mpesa-stk-api
```
