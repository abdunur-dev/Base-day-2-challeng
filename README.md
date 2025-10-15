# ⚡ Base OnchainKit App

A modern **Next.js frontend** powered by **OnchainKit** and deployed on **Vercel** — enabling seamless interaction with the **Base blockchain**.  
This project demonstrates how to build a Web3-ready frontend with analytics, global styles, and provider integration.

---

## 🚀 Features

- 🧱 **Built on Base** – Leverages Coinbase’s L2 blockchain  
- 💡 **OnchainKit Integration** – Simplifies onchain interactions  
- ⚛️ **Next.js 14 + React 18** – App Router support  
- 🎨 **Geist Fonts** – Clean and elegant typography  
- 📊 **Vercel Analytics** – For performance insights  
- 🪄 **Provider Pattern** – Manages context and blockchain connections  
- 🌐 **Deployed on Vercel**

---

## 📂 Project Structure

/app ├── layout.tsx 
# Root layout file ├── page.tsx
# Main page component ├── providers.tsx    
# Context providers (Web3, theme, etc.) ├── globals.css    
# Global styles /public ├── favicon.ico ...

---

## 🧰 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **UI Fonts:** Geist Sans & Geist Mono
- **Blockchain SDK:** [@coinbase/onchainkit](https://www.npmjs.com/package/@coinbase/onchainkit)
- **Deployment:** [Vercel](https://vercel.com)
- **Analytics:** @vercel/analytics

---

## ⚙️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME

2. Install Dependencies

npm install


3. Run Development Server

npm run dev


4. Open http://localhost:3000 🚀



---

🔗 Deployment

Easiest way to deploy:

Push your project to GitHub

Go to Vercel

Import the repo and hit Deploy



---

🧠 Environment Variables (Optional)

If you integrate blockchain APIs, add these to .env.local:

NEXT_PUBLIC_BASE_API_KEY=your_api_key_here
NEXT_PUBLIC_WALLET_CONNECT_ID=your_walletconnect_id_here


---

💙 Credits

Built using Next.js

Powered by Base

Onchain interactions by OnchainKit

Deployed with Vercel



---

📜 License

MIT License © 2025 Abdurhaman Nur

---
