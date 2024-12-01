
function Fleet() {
  return (
    <div className="lg:px-8 py-8 lg:py-16">
        <div className="mx-4 text-center flex text-3xl items-center justify-between border-b border-b-[#cecece] max-w-screen-xl lg:mx-auto mb-10 pb-5">
            <span className="text-[#8b8b8b] font-semibold">02</span>
            <h1 className="font-bold text-gray-800">Our Fleet</h1>
            <span className="text-[#8b8b8b] font-semibold md:hidden invisible">02</span>
            <span className="text-[#8b8b8b] text-sm hidden md:block">We offer an extensive fleet of vehicles. <br /> Just pick whichever you like!</span>
        </div>
        <div className="max-w-screen-xl mx-auto ">
            <ul className="px-4 lg:px-0 flex gap-3 lg:gap-10 mb-10">
                <li className="bg-black text-white rounded-md px-4 py-1">ALL</li>
                <li>SEDAN</li>
                <li>FAMILY</li>
                <li>SUV</li>
                <li>LUXURY</li>
            </ul>
            <ul className="pl-4 lg:pl-0 pb-3 grid lg:grid-cols-3 overflow-x-auto grid-flow-col auto-cols-max gap-3 lg:gap-6">
                <li className="bg-[#edece8] px-5 py-3 rounded-xl space-y-2">
                    <div className="flex flex-col">
                        <span className="text-sm">Merceded C180</span>
                        <span className="text-xs bg-white rounded-full px-2 py-1 w-fit">Ksh 3000 / day</span>
                    </div>
                    <img src="/Benz.png" alt="" className="h-[150px] mx-auto"/>
                    <button className="underline underline-offset-1 text-sm block ml-auto">Book Now</button>
                </li>
                <li className="bg-[#edece8] px-5 py-3 rounded-xl space-y-2">
                    <div className="flex flex-col">
                        <span className="text-sm">Merceded C180</span>
                        <span className="text-xs bg-white rounded-full px-2 py-1 w-fit">Ksh 3000 / day</span>
                    </div>
                    <img src="/Benz.png" alt="" className="h-[150px] mx-auto"/>
                    <button className="underline underline-offset-1 text-sm block ml-auto">Book Now</button>
                </li>
                <li className="bg-[#edece8] px-5 py-3 rounded-xl space-y-2">
                    <div className="flex flex-col">
                        <span className="text-sm">Merceded C180</span>
                        <span className="text-xs bg-white rounded-full px-2 py-1 w-fit">Ksh 3000 / day</span>
                    </div>
                    <img src="/Benz.png" alt="" className="h-[150px] mx-auto"/>
                    <button className="underline underline-offset-1 text-sm block ml-auto">Book Now</button>
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Fleet