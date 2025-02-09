import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[]; // Döngü yapılacak metinler
  typingSpeed?: number; // Yazma hızı
  deletingSpeed?: number; // Silme hızı
  pauseTime?: number; // Tam yazıldığında bekleme süresi
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [textIndex, setTextIndex] = useState(0); // Mevcut metnin index'i
  const [currentText, setCurrentText] = useState(""); // Ekranda gösterilen metin
  const [isDeleting, setIsDeleting] = useState(false); // Silme durumu

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        // Yazma efekti
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Tamamlandığında bekle
        }
      } else {
        // Silme efekti
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // Sonraki metne geç
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    texts,
    textIndex,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="typewriter-text flex gap-3">
      <span className="text-primary">I&apos;m</span>
      <span className="text-[#BEBE28]">{currentText}</span>
      <span className="!text-[#BEBE28] cursor">|</span>
    </span>
  );
};

export default Typewriter;
