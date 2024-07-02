import MovementCard from "./MovementCard"

import leaf from '@/../public/brand/leaf.png';
import globe from '@/../public/brand/globe.png';
import paw from '@/../public/brand/paw.png';
import flower from '@/../public/brand/flower.png';
import MovementAction from "./MovementAction";
import Image from "next/image";

const Movement = () => {
    const movementData = [
        {
            id: 1,
            title: "Wilderness & Biodiversity",
            content: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra.",
            image: leaf,
        },
        {
            id: 2,
            title: "Fighting For Green Planet",
            content: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra.",
            image: globe,
        },
        {
            id: 3,
            title: "Preserving the Forest",
            content: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra.",
            image: paw,
        },
        {
            id: 4,
            title: "Protecting the Climate",
            content: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra.",
            image: flower,
        },
    ]
    
  return (
    <div className="flex flex-col bg-[url('https://i.ibb.co/0JfSXnx/map.png')] bg-fixed">
        <div className="relative h-[300px] md:h-[538px]">
            <Image 
                src="https://i.ibb.co/6mKC066/home-24.jpg" 
                alt="Movement Image" 
                layout="fill" 
                objectFit="cover"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] mt-[54px]">
            {
                movementData.map((movement) => (
                    <MovementCard info={movement} key={movement.id}/>
                ))
            }
        </div>
        <div className="2xl:mt-[143px]">
            <MovementAction img="https://i.ibb.co/j3dbbVH/home-27.jpg"/>
        </div>
    </div>
  )
}

export default Movement