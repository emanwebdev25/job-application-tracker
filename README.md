# Job Application Tracker

A modern frontend application for organizing and tracking job applications from discovery to offer.

## Features

* Add new job applications
* Edit existing applications
* Delete applications
* Track application status
* Search by company or job title
* Filter applications by status
* View detailed application information
* Store data with LocalStorage
* Responsive design for desktop and mobile
* Deployed with Vercel

## Application Stages

* Discovered
* Applied
* Screening
* Interview
* Offer

## Tech Stack

* Next.js
* React
* JavaScript
* Tailwind CSS
* LocalStorage
* Vercel

## Getting Started

Clone the repository:

```bash
git clone https://github.com/emanwebdev25/job-application-tracker.git
cd job-application-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure

```text
src/
└── app/
    ├── components/
    │   └── Pipeline.jsx
    ├── add/
    │   └── page.js
    ├── details/
    │   └── page.js
    ├── edit/
    │   └── page.js
    └── page.js
```

## Data Storage

Application data is stored locally in the browser using `localStorage`. No backend or database is required.

## Deployment

The project is deployed on Vercel and connected to the GitHub repository for automatic deployments.

## What I Practiced

* Building with Next.js App Router
* React state management
* Client-side data persistence
* URL query parameters
* CRUD functionality
* Search and filtering
* Responsive UI design
* Production deployment with Vercel



