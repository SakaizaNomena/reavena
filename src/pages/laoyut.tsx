import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";
import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function Layout() {
  const { theme , toggleTheme} = useThemeStore();

 useEffect(() => {
  document.documentElement.className = theme; // dark ou light
}, [theme]);

  return (
    <div className="relative h-screen">
      <Outlet />
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md absolute top-4 right-4 cursor-pointer"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
