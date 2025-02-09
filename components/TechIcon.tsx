"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface TechIconProps {
  name: string;
  src: string;
}

export default function TechIcon({ name, src }: TechIconProps) {

  return (
    <div className="w-50 h-50 flex justify-center items-center"
    >
      <Image
        src={src}
        alt={name}
        width={40}
        height={40}
      />
    </div>
  );
}
