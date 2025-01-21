import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { use } from "react";

export const metadata = {
  title: "Web cars",
  description: "Aplicação simples",
  charset: 'UTF-8',
  author: 'Hiago, Júlia, Nathan, Vitor, Carlos, Maria',
  keywords: 'Carros',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
