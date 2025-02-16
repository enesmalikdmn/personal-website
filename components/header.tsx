"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = (props: { onRouteChange: (path: string) => void }) => {
  const router = useRouter();
  const pathname = usePathname(); // Şu anki sayfanın yolunu al

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact Me", path: "/contact" },
  ];

  const handleRouteClick = (path: string) => {
    router.push(path);
    props.onRouteChange(path);
  };

  return (
    <header className="flex flex-col w-full text-primary justify-center text-lg items-center gap-8 cursor-pointer">
      {menuItems.map((item) => (
        <span
          key={item.path}
          className={`cursor-pointer hover:text-[#BEBE28] ${
            pathname === item.path ? "text-[#BEBE28]" : ""
          }`}
          onClick={() =>handleRouteClick(item.path)}
        >
          {item.name}
        </span>
      ))}
    </header>
  );
};

export default Header;
