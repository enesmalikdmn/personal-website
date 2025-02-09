"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20, scale: 0.98 }} // Hafif aşağıda, küçük başlıyor
          animate={{ opacity: 1, y: 0, scale: 1 }} // Sayfaya tam oturuyor
          exit={{ opacity: 0, y: -20, scale: 0.98 }} // Hafif yukarı kayarak ve küçülerek kayboluyor
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
