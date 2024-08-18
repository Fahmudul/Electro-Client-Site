### **Frontend README**

---

# Product Search and Filter Frontend

This is the frontend of the single-page e-commerce website that enables users to search, filter, sort, and paginate products. The site also includes Google and Email/Password authentication, responsive design, and a clean UI. The frontend is built with React.js.

## Features

- **Search**: Search products by name.
- **Pagination**: Browse products through pagination with Next and Previous buttons.
- **Filters**: Filter products by brand name, category, and price range.
- **Sorting**: Sort products by price (Low to High, High to Low) and date added (Newest First).
- **Authentication**: Google and Email/Password authentication using Firebase.
- **Responsive Design**: Mobile-first design with fixed-size product cards.
- **Navigation**: Includes a Navbar with the website logo and relevant routes, and a Footer with necessary links.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- NPM (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/product-frontend.git
```

2. Navigate into the project directory:

```bash
cd product-frontend
```

3. Install the dependencies:

```bash
npm install
```

### Running the Project

1. Start the development server:

```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Environment Variables

Create a `.env` file in the root directory and add your Firebase credentials:

```bash

VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID==your_firebase_app_id
VITE_API_URL=

```

### Technologies Used

- React.js
- Axios (for API requests)
- Firebase (for authentication)
- Tailwind CSS (for styling)
- React Router (for navigation)

### Deployment

You can deploy the frontend using services like Vercel, Netlify, or GitHub Pages.

---
