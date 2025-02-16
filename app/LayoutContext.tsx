"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="xl:hidden fixed top-4 left-4 z-50  text-[#BEBE28] p-2 rounded-xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MenuIcon />
      </button>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 bg-white w-full sm:w-full md:w-full lg:w-full xl:w-1/6 h-screen shadow-xl transform transition-transform duration-300 ease-in-out
      ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } xl:relative xl:translate-x-0`}
        >
          <Sidebar onRouteChange={(path) => setSidebarOpen(false)} />
        </div>

        {/* Ana İçerik */}
        <div className="flex flex-col w-full xl:w-5/6 h-screen overflow-hidden">
          <PageTransition>{children}</PageTransition>
        </div>
      </div>
    </>
  );
}
