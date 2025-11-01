import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex text-foreground items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={30} height={30} loading="lazy" />
      <span className="font-semibold">HealthConnect</span>
    </div>
  );
};

export default Logo;
