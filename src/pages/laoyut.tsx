import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";
import { useEffect } from "react";

export function Layout() {
  const { theme } = useThemeStore();

 useEffect(() => {
  document.documentElement.className = theme; // dark ou light
}, [theme]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Outlet />
    </div>
  );
}
