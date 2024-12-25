import './App.css'
import { useRef, useState } from 'react';

function App() {
  const theme_cnt = useRef(0);
  const [theme, setTheme] = useState("light");
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const theme_length = themes.length;

  const toggleTheme = () => {
    theme_cnt.current = (theme_cnt.current + 1) % theme_length;
    setTheme(themes[theme_cnt.current]);
    document.documentElement.setAttribute("data-theme", themes[theme_cnt.current]);
  }

  return (
    <div className="p-4 mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold text-primary">Welcome to DaisyUI with {theme} Theme!</h1>
      <button className="btn btn-primary mt-4">Primary Button</button>
      <button className="btn btn-secondary ml-4">Secondary Button</button>
      <button className="btn btn-accent ml-4">Accent Button</button>
      <button
        className="btn btn-info ml-4"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default App
