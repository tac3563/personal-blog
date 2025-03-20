Personal Blog site

A modern blog site built using React, TypeScript, and Vite, deployed on Vercel.

📝 Features

React-Markdown – To render and display markdown content.

React-Router – For seamless client-side navigation.

Framer-Motion – For smooth and interactive animations and page transitions.

SCSS – For modular and maintainable styling.

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/your-repo-name.git
cd your-repo-name

2. Install Dependencies

npm install
# or
yarn install

3. Run the Development Server

npm run dev
# or
yarn dev

Navigate to http://localhost:5173 to see your app running.

📚 Folder Structure

├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── data
│   ├── pages
│   ├── styles
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.cjs
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
└── package.json

📦 Build and Deploy

1. Create a Production Build

npm run build
# or
yarn build

2. Deploy on Vercel

Push your changes to GitHub.

Connect your repository to Vercel.

Set the build command to:

npm run build

Set the output directory to:

dist

🎨 Styling

SCSS is used to handle the styling.

Files are organized under the styles folder.

📖 Markdown Support

react-markdown parses and displays markdown content.

Custom rendering options can be configured if needed.

📚 Routing

React-Router manages routing between different pages. The routes are defined in the Animated Routes component.

💫 Animations

Framer-Motion is used for smooth page transitions and interactive UI effects.

Animations are configured within the individual components. Page transitions are configured in the PageWrapper component.

✅ TypeScript

Ensures type safety and prevents runtime errors.

Interfaces are typically used for prop types and generics for state type safety.

🔄 Future Plans

The current version maps values from a JSON file into blog detail pages as content.

Future updates will transition this to Contentful CMS for dynamic content management.

📄 License

This project is licensed under the MIT License.