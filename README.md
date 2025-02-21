# 🚀 LinkedIn Clone – A Professional Networking Platform 

A professional linkedin social media platform built with MERN Stack. This app allows users to connect, share posts, engage, and grow their professional network with real-time interactions, authentication, and media uploads.

## 🌍 Live Demo  
🔗 Deployment Link : https://linkedin-clone-8f2g.onrender.com

## 📸 Screenshots  
Home-Page: ![Home-Page](https://github.com/user-attachments/assets/316f4f65-01bf-43ff-ad9f-f2a81e824f95)

Network-Page: ![Network-Page](https://github.com/user-attachments/assets/b0fbcaaf-c224-4ed4-bf76-9c545c01ee4e)

Notification-page: ![Notification-Page](https://github.com/user-attachments/assets/3074a3ec-f432-4779-9096-216e23bf5315)

## ✨ Features  

✅ **User Authentication** – Secure login & signup with **JWT**  
✅ **Professional Profile Management** – Add work experience, skills, and bio  
✅ **Connections System** – Send, accept, and reject connection requests  
✅ **Post Creation & Sharing** – Share text and media updates  
✅ **Image Uploads** – Upload profile pictures and post images (Cloudinary)  
✅ **Like & Comment System** – Engage with posts  
✅ **News Feed Algorithm** – Get personalized content updates  
✅ **Welcome Emails** – Sent via **Mailtrap**  
✅ **Built with TailwindCSS & DaisyUI** for a clean, responsive UI  


## 🛠 Tech Stack  

| **Technology** | **Usage** |
|---------------|----------|
| **MongoDB**   | Database |
| **Express.js** | Backend API |
| **React.js**  | Frontend UI |
| **Node.js**   | Server-side logic |
| **JWT**       | Authentication |
| **Cloudinary** | Image Storage |
| **TailwindCSS + DaisyUI** | Styling |

---

## 🛠 Setup & Installation  

### 📌 1. Setup the `.env` File  

Create a `.env` file in the root folder and add:  

    PORT=5000  
    MONGO_URI=your-mango-uri 
    JWT_SECRET=your-secret-key 
    NODE_ENV=development  
    MAILTRAP_TOKEN=your-mailtrap-token 
    EMAIL_FROM= mailtrap-website 
    EMAIL_FROM_NAME=maitrap-email-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key 
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret  
    CLOUDINARY_CLOUD_NAME=your-cloudinary_cloud-nam>
    CLIENT_URL=http://localhost:5173  

## 📌 Installation  
Follow these steps to run the project locally:  

1. Clone the repository  
   ```sh
   git clone https://github.com/Bhimadolu-Balu/Linkedin-clone.git
   cd Linkedin-clone
   npm install

2. Install dependencies for frontend
   ```sh
   cd frontend  
   npm install  

4. Start the development servers
   ```sh
   cd Linkedin-clone
   npm run dev 
   cd frontend  
   npm run dev
   
