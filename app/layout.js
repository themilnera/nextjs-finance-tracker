import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navigation";
import FinanceContextProvider from "@/libs/store/finance-context";
import AuthContextProvider from "@/libs/store/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finance Tracker",
  description: "Created in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>
          <FinanceContextProvider>
            <ToastContainer/>
              <Nav />
              {children}
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
