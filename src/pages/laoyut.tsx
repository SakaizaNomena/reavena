import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";
import { useEffect } from "react";

export function Layout() {
  const { theme , toggleTheme} = useThemeStore();

 useEffect(() => {
  document.documentElement.className = theme; // dark ou light
}, [theme]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen relative">
      <Outlet />
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md absolute top-4 right-4"
      >
        {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
