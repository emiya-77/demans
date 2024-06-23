import Button from "@/components/button/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="">
      <div className="h-[480px] 2xl:h-[700px] -z-10 absolute left-0 right-0 top-28 bottom-0 bg-[#B0B0B0]"></div>
      <div className="w-full flex justify-center items-center h-[480px] 2xl:h-[700px] 2xl:-mt-40">
        <div className={`w-[760px] relative z-10 flex flex-col justify-center items-center`}>
            <h1 className="font-primary text-[100px] md:text-[120px] text-white leading-[100px] mb-2">404</h1>
            <h2 className="font-primary text-primary text-[50px] md:text-[64px] ">Page Not Found</h2>
            <p className="font-secondary text-white text-[12px] md:text-[16px] text-center mb-12">Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit
            amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis.</p>
            <Link href='/'>
              <Button value="Back to Home"/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;