import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Suspense } from 'react'
import Header from "@/components/Header";

export const metadata = {
  title: "News Aggregator",
  description: "News Aggregator Web App",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

export default RootLayout