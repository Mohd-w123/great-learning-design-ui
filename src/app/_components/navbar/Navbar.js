import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <header className="shadow-xl px-[26px] pt-[5px]">
      <nav className="py-3">
        <Image
          src={"/logo.png"}
          className=""
          width={102}
          height={32}
          alt="great learning logo"
        />
      </nav>
    </header>
  );
}

export default Navbar;
