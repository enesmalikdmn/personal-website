import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import PageTransition from "@/components/PageTransition"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enes Malik Duman",
  description: "Enes Malik Duman - Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-5/6 h-screen overflow-hidden">
            <PageTransition>{children}</PageTransition> {/* Animasyon buraya eklendi */}
          </div>
        </div>
      </body>
    </html>
  );
}
