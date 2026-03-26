import '../app/global.css';

export const metadata = {
  title: 'Frontend Developer — Portfolio',
  description: 'Портфолио frontend-разработчика. React, Next.js, TypeScript. Современные веб-приложения и интерфейсы.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
} 