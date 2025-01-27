# Next.js + TailwindCss + TypeScript Starter and Boilerplate

<div align="center">
  <h2>🔋 ts-nextjs-tailwindcss-starter</h2>
  <p>Next.js 15+, Tailwind Css, TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://www.onedev.my.id/">OneDev</a></p>
</div>

### Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 19
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form handling with React Hook Form
- ⭐ State Management : Zustand
- ❤️ API Services with [Tenstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- 🔴 Validation library with Zod
- ⏲️ Date config with [Dayjs](https://day.js.org/en/)
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Settings
- 🤖 SEO metadata, Open Graph tags
- 🗺️ Sitemap.xml and robots.txt
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js 20+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/MTeguhIrawan1996/singulartw.git my-project-name
cd my-project-name
npm install
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Project structure

```shell
📦src
.
├── .husky
├── .vscode
|   └── setting.json
|
├── node_modules
├── public
|   ├── fonts
|   └── icons
|
├── src
|   ├── app
|   |   ├── (auth) // Grouping routing
|   |   |   ├── dashboard
|   |   |   |   └── page.tsx
|   |   |   ├── account
|   |   |   |   └── page.tsx
|   |   |   ├── login
|   |   |   |   └── page.tsx
|   |   |   ├── register
|   |   |   |   └── page.tsx
|   |   |   |
|   |   |   ├── error.tsx
|   |   |   └── layout.tsx
|   |   |
|   |   ├── contact
|   |   |   └── page.tsx
|   |   |
|   |   ├── not-found.tsx
|   |   ├── global-error.tsx
|   |   └── layout.tsx // General Provider
|   |
|   ├── pages
|   |   ├── account
|   |   |   ├── dashboard
|   |   |   |   └── index.tsx
|   |   |   ├── transaction
|   |   |   |   └── index.tsx
|   |   |   └── address
|   |   |       └── index.tsx
|   |   |
|   |   ├── product
|   |   |   └── index.tsx
|   |   └── contact
|   |       └── index.tsx
|   |
|   ├── components
|   |   ├── elements
|   |   |   ├── accordion
|   |   |   |   ├── Accordion.tsx
|   |   |   |   └── index.ts
|   |   |   ├── badge
|   |   |   |   ├── Badge.tsx
|   |   |   |   └── index.ts
|   |   |   ├── button
|   |   |   |   ├── Button.tsx
|   |   |   |   └── index.ts
|   |   |   └── index.ts
|   |   |
|   |   ├── icons // optional
|   |   |   ├── AccountIcon.tsx
|   |   |   └── index.ts
|   |   |
|   |   ├── layouts
|   |   |   ├── common // optional
|   |   |   |   ├── RootLayout.tsx
|   |   |   |   └── index.ts
|   |   |   ├── dashboard
|   |   |   |    ├── LayoutDashboard.tsx
|   |   |   |    └── index.ts
|   |   |   └── index.ts
|   |   |
|   |   └── shared
|   |      └── ribbon-banner
|   |      |    ├── RibbonBanner.tsx
|   |      |    └── index.ts
|   |      └── index.ts
|   |
|   ├── features
|   |   ├── product
|   |   |   ├── section
|   |   |   |    ├── ProductTitle.tsx
|   |   |   |    ├── ProductContent.tsx
|   |   |   |    └── index.ts
|   |   |   ├── components
|   |   |   |    ├── InputCustom.tsx
|   |   |   |    ├── ButtonCustom.tsx
|   |   |   |    └── index.ts
|   |   |   ├── actions.ts
|   |   |   ├── validations.ts
|   |   |   ├── type.ts
|   |   |   ├── constant.ts
|   |   |   └── feature.tsx // wrapping all section
|   |   |
|   |   └── product-category
|   |       ├── section
|   |       |    ├── ProductCategoryTitle.tsx
|   |       |    ├── ProductCategoryContent.tsx
|   |       |    └── index.ts
|   |       ├── components
|   |       |    ├── InputCustom.tsx
|   |       |    ├── ButtonCustom.tsx
|   |       |    └── index.ts
|   |       ├── actions.ts
|   |       ├── validations.ts
|   |       ├── type.ts
|   |       ├── constant.ts
|   |       └── feature.tsx
|   |
|   ├── services
|   |   ├── product
|   |   |   ├── queries
|   |   |   |   ├── getProducts.ts
|   |   |   |   ├── getProductDetail.ts
|   |   |   |   └── index.ts
|   |   |   ├── mutations
|   |   |   |   ├── deleteProduct.ts
|   |   |   |   ├── createProducts.ts
|   |   |   |   └── index.ts
|   |   |   ├── index.ts
|   |   |   ├── keys.ts
|   |   |   └── instances.ts
|   |   |
|   |   ├── product-category
|   |   |   ├── queries
|   |   |   |   ├── getProductCategories.ts
|   |   |   |   ├── getProductCatetoryDetail.ts
|   |   |   |   └── index.ts
|   |   |   ├── mutations
|   |   |   |   ├── deleteProductCategory.ts
|   |   |   |   ├── createProductCategory.ts
|   |   |   |   └── index.ts
|   |   |   ├── index.ts
|   |   |   ├── keys.ts
|   |   |   └── instances.ts
|   |   |
|   |   └── axiosConfig.ts
|   |
|   ├── providers
|   |   ├── ReactQueryProvider.tsx
|   |   ├── NextAuthProvider.tsx
|   |   └── index.ts
|   |
|   ├── hooks
|   |   ├── useDebounce.ts
|   |   ├── useIsMobile.ts
|   |   └── index.ts
|   |
|   ├── utils
|   |   ├── constant.ts
|   |   ├── validation.ts
|   |   ├── helper.ts
|   |   ├── cn.ts
|   |   ├── type.ts
|   |   └── index.ts
|   |
|   ├── store
|   |   ├── auth.ts
|   |   └── index.ts
|   |
|   ├── style
|   |   └── global.css
|   |
|   ├── middleware.ts
|   └── env.ts // optional
|
├── .env
├── .env.dev
├── .env.preprod
├── .env.prod
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── .eslintrc.cjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

### Generete base code with plop

This project utilizes Plop to automate the creation of starter code for various components, pages, or features. Plop provides a set of interactive CLI prompts to help you quickly scaffold files according to predefined templates and configurations. This ensures consistency and saves time during development.

To generate starter code, simply run the following command:

```shell
npm run generate
```
