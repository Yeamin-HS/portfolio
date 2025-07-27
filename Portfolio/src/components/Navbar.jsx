import { useState } from 'react';

const Navbar = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md">
      <h1 className="text-2xl font-bold">Yeamin Hossain Shihab</h1>
      <div className="flex items-center gap-4 text-sm">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
        <button onClick={toggleTheme} className="border px-2 py-1 rounded text-xs">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
