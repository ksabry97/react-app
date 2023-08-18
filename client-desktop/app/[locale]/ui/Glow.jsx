'use client';

import Image from "next/image";
import { Shadow } from "@/public";

const Glow = ({ className }) => {
  const classes = `absolute flex-shrink-0  ${className} -z-10`;
  return <div className={classes}>
      <Image src={Shadow} alt="shadow" width={840} height={680} className="w-[100%] h-[100%]"  />
  </div> 
};

export default Glow;
