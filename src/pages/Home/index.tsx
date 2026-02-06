import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Reavena";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setAnimatedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300); // Change the speed of the animation here

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container relative mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-9xl font-bold">{animatedText}</h1>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            Donnez vie à vos applications web avec Reavena, la bibliothèque de composants pensée pour Tailwind et Vite. Des composants élégants, flexibles et conformes aux tendances de design actuelles, prêts à sublimer votre interface utilisateur.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link
            to="/component/avatar"
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