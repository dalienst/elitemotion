import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Hero() {
  return (
    <div className="h-svh w-full overflow-hidden relative">
      <div className="absolute w-full h-full bg-black/40"></div>
      <img
        src="https://accreditedlimo.com/wp-content/uploads/2023/07/services-scaled-1.jpeg"
        alt="hero"
        className="h-full w-full object-cover"
      />
        <nav className="absolute py-5 px-4 md:rounded-lg bg-black/20 backdrop-blur-sm top-0 md:top-2 flex items-center justify-between md:mx-8 text-white left-0 right-0">
            <h1 className="text-xl font-semibold">Elite Motion</h1>
            <ul className="hidden md:flex gap-4 text-lg">
                <li>About</li>
                <li>Services</li>
                <li>News</li>
                <li>Jobs</li>
            </ul>
            <Menu className="md:hidden"/>
        </nav>
      <div className="absolute top-1/2 -translate-y-1/2 left-2 lg:left-8 text-white">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-3">A driving experience <br /> Beyond ownership</h2>
      <p>Why drive a few cars while you can ride in a whole fleet?</p>
      <Button className='mt-5 invisible md:visible'>Explore more</Button>
      </div>
      <div className="hidden lg:block absolute p-3 bottom-8 left-8 right-8 rounded-lg">
      <ul className="flex gap-2">
        <li className="bg-[#edece8] rounded-md px-4 py-1">Distance</li>
        <li className="px-4 py-1 bg-black rounded-md text-white">Hourly</li>
        <li className="px-4 py-1 bg-black rounded-md text-white">Flat rate</li>
      </ul>
      <form className=" bg-white mt-4 h-[75px] p-2 rounded-lg flex gap-2 items-center">
        <Input placeholder="Pick up address"/>
        <Input placeholder="Drop off address"/>
        <Input placeholder="One way"/>
        <Input type='date' placeholder="24/12/24"/>
      <Button className='h-full'>Book now</Button>
      </form>
      </div>
      <div className="block lg:hidden absolute p-3 bottom-8 bg-white left-2 lg:right-8 rounded-lg">
      <ul className="flex gap-2">
        <li className="bg-[#edece8] rounded-md px-4 py-1">Distance</li>
        <li className="border-l-2 border-r-2 px-4 py-1">Hourly</li>
        <li className="px-4 py-1">Flat rate</li>
      </ul>
      <form className=" space-y-3 mt-4">
        <Input placeholder="Pick up address"/>
        <Input placeholder="Drop off address"/>
        <Input placeholder="One way"/>
        <Input type='date' placeholder="24/12/24"/>
      <Button className='h-full'>Book now</Button>
      </form>
      </div>
    </div>
  );
}

export default Hero;
