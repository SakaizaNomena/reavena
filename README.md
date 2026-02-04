# Reavena

> Une bibliothèque React moderne pour créer, tester et documenter des composants UI réutilisables avec un playground interactif, Zustand, Tailwind et Vite.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-18+-61dafb.svg)

---

## 📖 Description

**Reavena** est une UI library + playground conçue pour les développeurs React qui veulent :

- ✅ Créer et tester facilement des composants réutilisables
- 🐻 Gérer l'état des composants avec **Zustand**
- 🎨 Styliser rapidement avec **Tailwind CSS**
- ⚡ Avoir un workflow rapide avec **Vite**
- 📦 Publier chaque composant séparément sur **npm** ou **yarn**
- 🚀 Disposer d'un template de projet React prêt à l'emploi

Reavena est idéale pour les projets professionnels, les portfolios et la création de design systems personnels.

---

## ✨ Features

- 📦 **Composants UI modulaires** : Input, Checkbox, Button, Modal, Toast…
- 🎮 **Playground interactif** pour chaque composant
- 🧩 **Templates React** prêts à l'emploi
- ⚡ **Performance** grâce à Vite
- 🐻 **State management** avec Zustand
- 🎨 **Styles modernes** avec Tailwind CSS
- 📦 **Publication npm/yarn** possible pour chaque composant

---

## 🚀 Installation

### Installer la bibliothèque depuis npm

\`\`\`bash
npm install @tonnom/reavena
# ou
yarn add @tonnom/reavena
\`\`\`

### Importer un composant

\`\`\`jsx
import { Input, Button } from "@tonnom/reavena";

function App() {
  return (
    <div className="p-4">
      <Input placeholder="Entrez votre texte..." />
      <Button onClick={() => alert('Click!')}>Envoyer</Button>
    </div>
  );
}
\`\`\`

---

## 🎮 Playground

Le playground permet de tester chaque composant avec des props dynamiques :

\`\`\`jsx
import { InputPlayground } from "@tonnom/reavena/playground";

function Demo() {
  return <InputPlayground />;
}
\`\`\`

**Fonctionnalités du Playground :**

- Changez la taille, la couleur, l'état \`disabled\`, et voyez le rendu en temps réel
- Testez les combinaisons de composants
- Prévisualisez le code généré

---

## 📦 Template React prêt à l'emploi

Reavena fournit un **template de projet React** avec :

- ⚛️ React + Tailwind + Zustand
- 🛣️ Routing avec React Router DOM
- 📁 Structure modulaire pour vos projets futurs

### Démarrer un nouveau projet avec le template

\`\`\`bash
npx degit tonnom/reavena-template my-app
cd my-app
npm install
npm run dev
\`\`\`

---

## 🤝 Contribuer

Si vous voulez contribuer à Reavena :

\`\`\`bash
git clone https://github.com/tonnom/reavena.git
cd reavena
npm install
npm run dev
\`\`\`

**Étapes pour contribuer :**

1. Ajoutez de nouveaux composants dans \`packages/\`
2. Testez-les dans le \`playground\`
3. Build et publish avec Vite pour npm
4. Soumettez une Pull Request

---

## 🗺️ Roadmap

- [x] Composants de base : Input, Button, Checkbox
- [x] Playground interactif
- [x] Templates React prêts à l'emploi
- [ ] Composants avancés : Modal, Toast, Tabs
- [ ] Documentation auto-générée pour chaque composant
- [ ] Versioning npm pour chaque composant séparé

---

## 📄 License

MIT © 2026 **Sakaiza**

---

## 🔗 Liens utiles

- [Documentation](#) *(à venir)*
- [GitHub](https://github.com/tonnom/reavena)
- [npm Package](https://www.npmjs.com/package/@tonnom/reavena)

---

**Fait avec ❤️ par la communauté Reavena**
