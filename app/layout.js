import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: "Hori Nguyen's Portfolio",
  description: "Made by Hori Nguyen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="/fonts.css" />
      </Head>
      <body className="font-Conthrax-SB">{children}</body>
    </html>
  );
}
