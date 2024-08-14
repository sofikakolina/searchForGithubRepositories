'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { Provider } from 'react-redux';
import { store } from "@/store/store";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
