# Pro Edu Landing Page

Copy-paste ready React + Tailwind components for the Pro Edu course landing page.

## Files

```
src/
  App.jsx                       // assembles all sections
  components/
    Navbar.jsx
    Hero.jsx
    PopularCourses.jsx
    ExploreInstitute.jsx
    CtaBanner.jsx
    SuccessfulStudents.jsx
    StudentsFeedback.jsx
    FAQ.jsx
    TrustedCompanies.jsx
    Footer.jsx
```

Drop the files inside `components/` into your project's `components` folder,
and `App.jsx` wherever your page/route lives (rename to `page.jsx` for Next.js
App Router if needed).

## 1. Install dependencies

```bash
npm install lucide-react
```

Tailwind CSS must already be configured in the project (`tailwindcss`,
`postcss`, `autoprefixer`).

## 2. Add the Poppins font

Add to your root layout / `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

(For Next.js, prefer `next/font/google` with `Poppins` and drop the
`font-['Poppins']` classes in favor of the generated font variable — happy to
wire that up if you're using Next.js for this project.)

## 3. Notes

- All images use placeholder Unsplash URLs — swap these for your own /
  Cloudinary-hosted assets (course thumbnails, hero background, student and
  testimonial avatars).
- Every section is a self-contained default export, so you can reorder,
  remove, or reuse them independently.
- Interactive sections (`Navbar` mobile menu, `StudentsFeedback` carousel,
  `FAQ` accordion) use `"use client"` — safe to leave in for Next.js App
  Router, and a no-op for plain Vite/CRA React.
- Breakpoints follow Tailwind defaults: stacks to a single column below
  `sm` (640px), 2-column grids from `sm`/`md`, full desktop layout from `lg`
  (1024px), matching the 1600px-wide Figma frame at full scale.
