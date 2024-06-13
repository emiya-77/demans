import MovementCard from "./MovementCard"

import leaf from '@/../public/brand/leaf.png';
import globe from '@/../public/brand/globe.png';
import paw from '@/../public/brand/paw.png';
import flower from '@/../public/brand/flower.png';
import MovementAction from "./MovementAction";

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
    <div className="flex flex-col">
        <div className="h-[538px] bg-[#EDEDED]">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center py-4 my-4">
            {
                movementData.map((movement) => (
                    <MovementCard info={movement} key={movement.id}/>
                ))
            }
        </div>
        <div>
            <MovementAction/>
        </div>
    </div>
  )
}

export default Movement