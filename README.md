
# May Portfolio

A responsive portfolio website built with **React** and **Vite**. It features animated sections powered by **GSAP** and **Spline**, 3D models, and a contact form integrated with **EmailJS**.

---

## 🚀 Features

- **React + Vite** – Fast development environment with hot module reloading.
- **Tailwind CSS** – Utility-first styling.
- **GSAP Animations** – Smooth scroll-triggered animations.
- **3D Models via Spline** – Interactive graphics in the hero and contact sections.
- **EmailJS Integration** – Send messages directly from the contact form.
- **Responsive Design** – Optimized for both desktop and mobile screens.

---

## 🛠 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a `.env` file

Copy the contents below and fill in your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run the development server

```bash
npm run dev
```


---

## 📦 Build for Production

```bash
npm run build
```

Static files will be generated in the `dist` directory.

### Preview the production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
may-portfolio/
├── public/
│   ├── images/        # Images used throughout the site
│   └── models/        # 3D model assets (GLB files)
├── src/
│   ├── components/    # Reusable components (Button, NavBar, etc.)
│   ├── sections/      # Page sections (Hero, Contact, Showcase, etc.)
│   ├── constants/     # Static data arrays
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

---

## 📜 Scripts

- `npm run dev` – Start the Vite development server.
- `npm run build` – Build for production.
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint.

---

## 📦 Dependencies

Some key dependencies include:

- `react`, `react-dom`
- `@vitejs/plugin-react`
- `@tailwindcss/vite`, `tailwindcss`
- `gsap`, `@gsap/react`
- `@react-three/fiber`, `@react-three/drei`
- `@splinetool/react-spline`
- `@emailjs/browser`

---

## 📄 License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
