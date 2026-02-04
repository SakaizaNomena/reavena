import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container relative mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-9xl font-bold">Reavena</h1>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            Une bibliothèque React moderne pour créer, tester et documenter des
            composants UI réutilisables avec un playground interactif, Zustand,
            Tailwind et Vite.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link
            to="/components"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Liste de composants
          </Link>
          <a
            href="https://github.com/SakaizaNomena/reavena.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;