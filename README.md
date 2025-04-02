# Portfolio Pivatto

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- Next.js 15.1.0 with TypeScript support
- Tailwind CSS for styling
- Framer Motion for animations
- i18next for internationalization
- Headless UI components
- Hero Icons
- React Icons
- Dark mode support
- Responsive design

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-pivatto.git
cd portfolio-pivatto
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🔧 Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📝 Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import your project on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Manual Deployment

1. Build your application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 🎨 Customization

### Colors

The project uses a custom color scheme defined in `tailwind.config.ts`:

- Neon Blue: `#00f2ff`
- Neon Pink: `#ff00ff`
- Dark theme colors:
  - Default: `#000000`
  - Dark 100: `#0a0a0a`
  - Dark 200: `#121212`

### Internationalization

The project uses i18next for internationalization. Translation files can be found in the `public/locales` directory.

## 📁 Project Structure

```
portfolio-pivatto/
├── public/          # Static files
├── src/
│   ├── components/  # React components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global styles
│   └── utils/       # Utility functions
├── next.config.ts   # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json     # Project dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Thiago Pivatto

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)
