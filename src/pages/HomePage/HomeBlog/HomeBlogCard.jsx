'use client'

import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

const HomeBlogCard = ({info}) => {
    const {id, title, description, img} = info || '';

  return (
    <div className="w-[410px] lg:w-[370px] xl:w-[410px] flex flex-col items-center md:items-start">
        <div className="relative w-full h-[274px] bg-[#EDEDED]">
          <Image 
              src={img || ''} 
              alt="Blog Image" 
              layout="fill" 
              objectFit="cover"
            />
        </div>
        <div className="px-5 pt-[27px] text-center md:text-start">
            <h1 className="font-primary text-black text-2xl line-clamp-1 h-[33px]">{title || ""}</h1>
            <p className="font-secondary leading-[21px] text-[#7E7E7E] line-clamp-5 mt-[15px]">{description}</p>
        </div>
        <Link href={`/archives/${id}`} className="mt-[31px]">
          <Button value="Learn More"/>
        </Link>
    </div>
  )
}

export default HomeBlogCard