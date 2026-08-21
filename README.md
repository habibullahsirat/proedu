# ProEdu

[![Repository](https://img.shields.io/badge/repo-habibullahsirat/proedu-blue?logo=github)](https://github.com/habibullahsirat/proedu)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)]()
[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)]()

A Next.js-based public website and admin panel for Pro Edu(prototype): a React + Next (App Router) client site for visitors and an admin dashboard for site/content management that stores content in MongoDB and handles media via Cloudinary.
ProEdu aims to provide an approachable starting point for building interactive learning experiences, course management.

Table of contents
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
  - [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Contact](#contact)

## Features
- Course management (authoring interface)
- Responsive UI with accessibility considerations
- RESTful API and modular backend services


## Tech stack
- Frontend: React, TailwindCSS
- Backend: Next.js
- Database: MongoDB
- Build & bundling: Turbopack(Default for Development) / Webpack(Default for Production)

## Screenshots
Include screenshots or demo GIFs to showcase the UI and experience.

## Getting started

### Prerequisites
- Node.js (>= 16)
- npm (>= 8) or yarn
- MongoDB
- Git

### Installation
1. Clone the repository
   git clone https://github.com/habibullahsirat/proedu.git
   - cd proedu

3. Install dependencies
   - npm install

5. Create a development environment file
   cp .env.example .env
   # then fill in the required values

6. Start the development server
   npm run dev


### Environment variables
```text
MONGODB_URI=mongodb connection string
NEXT_PUBLIC_API_URL=http://localhost:3000
PUBLIC_URL="*"
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=API_KEY
CLOUDINARY_API_SECRET=API_SECRET
```

### Available scripts
Below are common scripts to include in package.json. Update commands to match your setup.

- npm run dev — Start the development server (hot reload)
- npm run build — Build production assets
- npm run start — Start the production server
- npm run test — Run unit and integration tests
- npm run lint — Run ESLint
- npm run format — Run Prettier

Example package.json scripts snippet:
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
}

## Project structure
For admin project:
## Project Structure

```text
app/
├── admin/
│   ├── course/
│   ├── explore/
│   ├── faq/
│   ├── feedback/
│   ├── hero/
│   ├── partner/
│   ├── site/
│   └── student/
│
└── api/
    ├── course/
    │   └── [id]/
    ├── explore/
    │   └── [id]/
    ├── faq/
    │   └── [id]/
    ├── feedback/
    │   └── [id]/
    ├── hero/
    │   └── [id]/
    ├── partner/
    │   └── [id]/
    ├── site-setting/
    │   └── [id]/
    └── student/
        └── [id]/

components/
├── course/
├── explore/
├── faq/
├── feedback/
├── hero/
├── partner/
├── site/
├── student/
└── ui/

lib/
├── DataFetch/
└── models/

public/
```

## Project Structure
For frontend project:
```text
├───app
├───components
│   └───shared
└───public
```

## Contact
Maintainer: habibullahsirat  
GitHub: https://github.com/habibullahsirat

