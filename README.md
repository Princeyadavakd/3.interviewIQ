InterviewIQ.AI

InterviewIQ.AI is an AI-powered mock interview platform built to make interview preparation feel closer to a real interview.

Instead of just solving random questions, you can create a personalized interview, answer questions one by one, and get AI-based feedback on your performance.

What you can do

Sign in securely with Google

Choose between Technical and HR interviews

Upload your resume to make the interview more relevant to your profile

Get AI-generated interview questions based on your role, skills, experience, and resume

Answer questions using text or voice

Get feedback on every answer

See scores for correctness, communication, and confidence

View your overall interview performance

Check previous interview results

Download your interview report as a PDF

Purchase additional interview credits using Razorpay

How it works

The basic flow is simple:

Create interview → Answer questions → Get AI feedback → View your report

When you start an interview, the application uses the information you provide (and your resume, if uploaded) to generate questions for your selected interview type.

After every answer, the AI evaluates your response and gives you useful feedback instead of just telling you whether the answer was right or wrong.

At the end, you get an overall performance report that helps you understand where you are doing well and what you need to improve.

Tech Stack

Frontend

React

Vite

Tailwind CSS

Redux Toolkit

React Router

Axios

Firebase Authentication

Recharts

jsPDF

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

Multer

PDF.js

APIs & Services

OpenRouter / OpenAI

Firebase

Razorpay

Project Structure

3.interviewIQ/
│
├── client/              # React frontend
│   ├── public/
│   └── src/
│
├── server/              # Node.js + Express backend
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── services/
│
└── README.md

Getting Started

1. Clone the repository

git clone https://github.com/Princeyadavakd/3.interviewIQ.git
cd 3.interviewIQ

2. Install frontend dependencies

cd client
npm install

3. Install backend dependencies

Open another terminal:

cd server
npm install

4. Add environment variables

Create a .env file in the server directory and add the required credentials for your MongoDB database, JWT, AI API, and Razorpay configuration.

For the frontend, add the required Vite environment variables in client/.env.

Keep API keys and secrets inside .env files. Never commit them to GitHub.

5. Start the application

Start the backend:

cd server
npm run dev

Then start the frontend:

cd client
npm run dev

The application will be available through the local Vite development server.

Interview Evaluation

InterviewIQ evaluates answers using three important areas:

Metric

What it measures

Correctness

Accuracy and relevance of the answer

Communication

How clearly the answer is explained

Confidence

Overall confidence and presentation

The results are combined into an interview report so you can identify the areas that need more practice.

Credits & Payments

InterviewIQ follows a credit-based model for AI interviews.

Users can use their available credits to start interviews and purchase additional credits when required.

Payments are handled through Razorpay, with payment verification performed on the backend before credits are added.

Security

Some important security practices used in the project include:

JWT-based authentication

HTTP cookie-based session handling

Environment variables for sensitive credentials

Backend-side payment verification

Temporary processing of uploaded resume files

Future Improvements

There are several things I would like to improve further:

More interview types and difficulty levels

Better personalized interview preparation

More detailed performance analytics

Skill-wise progress tracking

Improved voice interview experience

Additional AI coaching features

Better mobile optimization

Live Project

The project is deployed and can be accessed here:

Frontend: https://three-interviewiq-2mb9.onrender.com

Backend: https://three-interviewiq-backend.onrender.com

Author

Prince Yadav

B.Tech CSE | Full-Stack Developer

GitHub: https://github.com/Princeyadavakd

If you find the project interesting, feel free to ⭐ the repository.
