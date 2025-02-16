import "./globals.css";
import { Inter } from "next/font/google";
import LayoutContext from "./LayoutContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enes Malik Duman",
  description: "Enes Malik Duman - Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContext>{children} </LayoutContext>
      </body>
    </html>
  );
}
