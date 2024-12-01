import { Button } from "../ui/button"

function Offer() {
  return (
    <div className="px-4">
        <h1 className="font-bold text-3xl lg:text-4xl text-center mb-2">Only December Ksh 2500 / day</h1>
        <p className="text-center mb-10 text-[#8b8b8b]">Take advantage of our hot offers, saving a significant amount while riding in style.</p>
        <div className="rounded-lg bg-[#edece8] px-4 md:px-10 pt-12 md:pt-0 pb-5 lg:mx-10 flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-5 justify-between">
            <div>
            <h1 className="text-3xl lg:text-4xl mb-8">You travel with Us, <br /> you travel in Style</h1>
            <Button className='w-full'>Book now</Button>
            </div>
        <div className="">
            <img src="/vellfire.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Offer