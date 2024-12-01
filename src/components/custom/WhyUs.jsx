
function WhyUs() {
  return (
    <div className="px-4 lg:px-8 pb-16 max-w-screen-xl mx-auto">
        <div className="text-center flex text-3xl items-center justify-between border-b border-b-[#cecece] mb-10 pb-5">
            <span className="text-[#8b8b8b] font-semibold">03</span>
            <h1 className="font-bold text-gray-800">Why Choose Us</h1>
            <span className="text-transparent">03</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(2,_200px)] gap-5">
            <li className="flex gap-2 shadow-md px-4 py-2 rounded-lg pb-6 md:pb-0">
                <p className="text-5xl font-semibold text-[#8b8b8b]">01</p>
                <div>
                    <p className="font-semibold text-xl">Easy online booking</p>
                    <p className="text-[#767676]">Our user-friendly online booking system makes it simple to schedule your ride. You can book in advance or request a ride on-demand with just a few clicks.</p>
                </div>
            </li>
            <li className="flex gap-2 shadow-md px-4 py-2 rounded-lg pb-6 md:pb-0">
            <p className="text-5xl font-semibold text-[#8b8b8b]">02</p>
                <div>
                    <p className="font-semibold text-xl">Professional Chauffeurs</p>
                    <p className="text-[#767676]">Our team consists of highly trained and experienced chauffeurs who prioritize your safety and comfort. Each driver undergoes rigorous background checks and training to ensure the highest standards of service.</p>
                </div>
            </li>
            <li className="flex gap-2 shadow-md px-4 py-2 rounded-lg pb-6 md:pb-0">
            <p className="text-5xl font-semibold text-[#8b8b8b]">03</p>
                <div>
                    <p className="font-semibold text-xl">Luxury Fleet</p>
                    <p className="text-[#767676]">We offer a diverse range of luxury vehicles to suit your needs, from sedans to SUVs and vans for family or friends. Each vehicle is meticulously maintained and equipped with modern amenities for a comfortable ride.</p>
                </div>
            </li>
            <li className="flex gap-2 shadow-md px-4 py-2 rounded-lg pb-6 md:pb-0">
            <p className="text-5xl font-semibold text-[#8b8b8b]">04</p>
                <div>
                    <p className="font-semibold text-xl">Safety First</p>
                    <p className="text-[#767676]">We adhere to strict safety protocols, including regular vehicle inspections and health guidelines, to ensure a safe travel experience for all our clients.</p>
                </div>
            </li>
            <li className="flex gap-2 shadow-md px-4 py-2 rounded-lg pb-6 md:pb-0">
            <p className="text-5xl font-semibold text-[#8b8b8b]">05</p>
                <div>
                    <p className="font-semibold text-xl">Transparent Pricing</p>
                    <p className="text-[#767676]"> We believe in honesty and transparency. Our pricing is straightforward with no hidden fees, allowing you to budget effectively for your travel.</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default WhyUs