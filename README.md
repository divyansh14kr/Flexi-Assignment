# Smart Resume Generator

A web application that allows users to create professional resumes quickly and easily using the MERN stack (MongoDB, Express, React, Node.js) and Generative AI.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Sign up and log in to securely manage your resumes.
- **Resume Templates**: Choose from multiple templates to create a visually appealing resume.
- **Generative AI Integration**: Use AI to generate content for your resume based on user inputs.
- **Downloadable Resumes**: Export your resume in PDF format for easy sharing.
- **Real-Time Preview**: See live updates as you edit your resume.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Technologies

- **Frontend**: 
  - React
  - Redux (for state management)
  - Axios (for API calls)
  - CSS/SCSS (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (for object modeling)

- **AI Integration**: OpenAI API (or any other generative AI service)

## Installation

### Prerequisites

- Node.js
- MongoDB
- An OpenAI API key (or relevant AI service key)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smart-resume-generator.git
   cd smart-resume-generator


2.Install backend dependencies:
  
    bash
    Copy code
    cd server
    npm install
    
3.Set up your MongoDB database and create a .env file in the server directory with the following variables:

    MONGO_URI=your_mongo_db_connection_string  
    OPENAI_API_KEY=your_openai_api_key
    JWT_SECRET=your_jwt_secret
    
4.  Start the backend server:

    bash
    Copy code
    npm start

5. Install frontend dependencies:

    bash
    Copy code
    cd ../client
    npm install

6. Start the frontend server:

    bash
    Copy code
    npm start

# Usage
Navigate to http://localhost:3000 in your web browser.
Sign up or log in to your account.
Start creating your resume using the provided templates and generative AI features.
Download your completed resume in PDF format.


This project is licensed under the MIT License - see the LICENSE file for details.
