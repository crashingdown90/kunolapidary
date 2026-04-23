import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { width: 200, height: 60 },
  md: { width: 280, height: 85 },
  lg: { width: 360, height: 110 },
};

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const { width, height } = sizeMap[size];

  return (
    <div className={`relative flex items-center ${className}`} style={{ width, height }}>
      <Image
        src="/images/blog/kuno-logo1.png"
        alt="Kuno Lapidary Logo"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
};

export default Logo;

