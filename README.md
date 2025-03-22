# Personal Blog site

A modern blog site built using React, TypeScript, and Vite, deployed on Vercel.

--- 

## 📝 Features

- **React-Markdown** – To render and display markdown content.

- **React-Router** – For seamless client-side navigation.

- **Framer-Motion** – For smooth and interactive animations and page transitions.

- **SCSS** – For modular and maintainable styling.

--- 

## 🚀 Getting Started

### 1. Clone the Repository

``` bash
git clone git@github.com:tac3563/personal-blog.git
cd pesonal-blog
```

### 2. Install Dependencies
```shell
npm install
```

### 3. Run the Development Server
```shell
npm run dev
```

Navigate to http://localhost:5173 to see your app running.

---

## 📦 Build and Deploy:

1. Create a Production Build
npm run build

2. Deploy on Vercel 

3. Push your changes to GitHub.

4. Connect your repository to Vercel.

Set the build command to:
```bash
npm run build
```

Set the output directory to:
```nginx
dist
```

---

## 🎨 Styling

SCSS is used to handle the styling. Global styles as well as variables and mixins are stored in the styles folder

Local styles are stored and scoped within the relevant component folder with just the necessary global stylesheets imported.

## 📖 Markdown Support

react-markdown parses and displays markdown content.

Custom rendering options can be configured if needed as has been used for custom blockquote styling in this project.

## 📚 Routing

React-Router manages routing between different pages. The routes are defined in the Animated Routes component.

## 💫 Animations

Framer-Motion is used for smooth page transitions and interactive UI effects.

Animations are configured within the individual components. Page transitions are configured in the PageWrapper component.

## ✅ TypeScript

Ensures type safety and prevents runtime errors.

Interfaces are typically used for prop types and generics for state type safety.

## 🔄 Future Plans

The current version maps values from a JSON file into blog detail pages as content.

Future updates will transition this to Contentful CMS for dynamic content management.

## 📄 License

This project is licensed under the MIT License.