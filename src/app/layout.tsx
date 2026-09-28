import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ChatWidget } from "@/components/chat-widget";
import { ChatWidgetProvider } from "@/components/chat-widget-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi — AI Engineer",
  description:
    "Portfolio of Ravi — AI engineer building GenAI applications, RAG systems, and data platforms on Databricks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {"(function(){try{var d=localStorage.getItem('theme')==='dark';document.documentElement.classList.toggle('dark',d);}catch(e){}})();"}
        </Script>
        <ChatWidgetProvider>
          {children}
          <ChatWidget />
        </ChatWidgetProvider>
      </body>
    </html>
  );
}
