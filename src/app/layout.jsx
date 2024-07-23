import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Api_data from "@/context/api-context";

const font = Nunito({ subsets: ["latin"], weight: ['400','500','600','700']});

export const metadata = {
  title: "News Castle",
  description: "Ready to break the news",
  icons: '/nc-logo.jpg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={font.className}>
      <Api_data>
          <Header/>
          <div className="dark:text-choice4 text-choice1">
          {children}
          </div>
      </Api_data>
        </body>
    </html>
  );
}
