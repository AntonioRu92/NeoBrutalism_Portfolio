# Antonio - Portfolio Website# React + TypeScript + Vite

Un sito portfolio moderno e responsive sviluppato con React, TypeScript e Tailwind CSS.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 🚀 CaratteristicheCurrently, two official plugins are available:

- **React 19** con TypeScript per type safety- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- **Routing** con React Router per navigazione SPA- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Internazionalizzazione** (IT/EN) con react-i18next

- **Animazioni** fluide con Framer Motion## React Compiler

- **Design responsive** con Tailwind CSS

- **Icone moderne** con Lucide ReactThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Performance ottimizzate** con Vite

## Expanding the ESLint configuration

## 🛠️ Tecnologie utilizzate

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- React 19

- TypeScript```js

- Viteexport default defineConfig([

- React Router globalIgnores(['dist']),

- Tailwind CSS {

- Framer Motion files: ['**/*.{ts,tsx}'],

- React i18next extends: [

- Lucide React // Other configs...

## 📦 Installazione // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

````bash // Alternatively, use this for stricter rules

# Clona il repository      tseslint.configs.strictTypeChecked,

git clone <repository-url>      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

# Entra nella cartella del progetto

cd antonio-portfolio      // Other configs...

    ],

# Installa le dipendenze    languageOptions: {

npm install      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

# Avvia il server di sviluppo        tsconfigRootDir: import.meta.dirname,

npm run dev      },

```      // other options...

    },

## 🎯 Struttura del progetto  },

])

````

src/

├── components/ # Componenti riutilizzabiliYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

│ ├── Header.tsx # Navigazione principale

│ ├── Footer.tsx # Footer del sito```js

│ └── Hero.tsx # Sezione hero della homepage// eslint.config.js

├── pages/ # Pagine principaliimport reactX from 'eslint-plugin-react-x'

│ ├── Home.tsx # Homepageimport reactDom from 'eslint-plugin-react-dom'

│ ├── Portfolio.tsx # Pagina portfolio

│ └── Contacts.tsx # Pagina contattiexport default defineConfig([

├── i18n/ # Configurazione internazionalizzazione globalIgnores(['dist']),

│ └── index.ts # Setup i18next {

├── hooks/ # Custom hooks files: ['**/*.{ts,tsx}'],

└── assets/ # Risorse statiche extends: [

````// Other configs...

      // Enable lint rules for React

## 🌐 Pagine disponibili      reactX.configs['recommended-typescript'],

      // Enable lint rules for React DOM

- **Homepage** (`/`) - Presentazione e servizi      reactDom.configs.recommended,

- **Portfolio** (`/portfolio`) - Progetti e lavori    ],

- **Contatti** (`/contacts`) - Form di contatto e informazioni    languageOptions: {

- **Blog** (`/blog`) - Coming soon      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

## 🎨 Design Features        tsconfigRootDir: import.meta.dirname,

      },

- **Tema moderno** con gradient e animazioni      // other options...

- **Layout responsive** ottimizzato per tutti i dispositivi    },

- **Cambio lingua** dinamico IT/EN  },

- **Smooth scrolling** e animazioni al scroll])

- **Hover effects** e transizioni fluide```


## 📱 Responsività

Il sito è completamente responsive e ottimizzato per:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deploy

```bash
# Build per produzione
npm run build

# Preview del build
npm run preview
````

## 📄 Licenza

Questo progetto è sviluppato per Antonio come portfolio personale.

## 👨‍💻 Sviluppatore

**Antonio**  
Sviluppatore Web Freelance  
📧 info@antonio.it
# NeoBrutalism_Portfolio
