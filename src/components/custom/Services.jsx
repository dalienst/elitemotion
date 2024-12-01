import { Button } from "../ui/button"

function Services() {
  return (
    <div className="px-4 lg:px-8 py-8 lg:py-16 bg-[#edece8]">
        <div className="text-center flex text-3xl items-center justify-between border-b border-b-[#cecece] max-w-screen-lg mx-auto mb-10 pb-5">
            <span className="text-[#8b8b8b] font-semibold">01</span>
            <h1 className="font-bold text-gray-800">Our Services</h1>
            <span className="text-transparent font-semibold">01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:max-w-screen-lg mx-auto">
            <div className="rounded-md p-2 border border-[#cecece] flex gap-3">
                <img src="https://i0.wp.com/silimo.co/wp-content/uploads/2024/03/chauffeur-service.jpg" alt="" className="size-[130px] rounded-md object-cover" />
                <div>
                    <div>
                    <p className="font-semibold">Airport transfers</p>
                    <p className="text-[15px] text-[#545454]">With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.</p>
                    </div>
                </div>
            </div>
            <div className="rounded-md p-2 border border-[#cecece] flex gap-3">
                <img src="https://poloandtweed.com/wp-content/uploads/2023/09/Untitled-design.png" alt="" className="size-[130px] rounded-md object-cover" />
                <div>
                    <div>
                    <p className="font-semibold">Intercity trips</p>
                    <p className="text-[15px] text-[#545454]">Your stress-free solution for traveling between cities with chauffeurs all over the world.</p>
                    </div>
                </div>
            </div>
            <div className="rounded-md p-2 border border-[#cecece]  flex gap-3">
                <img src="https://istanbulchauffeur.com/images/private_chauffeur_service_header.jpg" alt="" className="size-[130px] rounded-md object-cover" />
                <div>
                    <div>
                    <p className="font-semibold">Events</p>
                    <p className="text-[15px] text-[#545454]">Your stress-free solution for traveling between cities with chauffeurs all over the world.</p>
                    </div>
                </div>
            </div>
            <div className="rounded-md p-2 border border-[#cecece]  flex gap-3">
                <img src="https://www.fcmtravel.com/sites/default/files/styles/medium/public/FCM875985435_Car-Industry-Whitepaper_1188-x-668.png?itok=rME4xLec" alt="" className="size-[130px] rounded-md object-cover" />
                <div>
                    <div>
                    <p className="font-semibold">Business Meetings</p>
                    <p className="text-[15px] text-[#545454]">Focus on your meeting with your partners. Forget about the road and the car, and get your business done.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="max-w-screen-lg mx-auto text-center mt-8">
        <p className="text-2xl mb-4">Whether you&apos;re traveling for business, leisure, or a special occasion, <br className="hidden md:block" /> our chauffeur-driven vehicles ensure you arrive <br className="hidden md:block" /> in style, comfort and on time.</p>
        <Button>Book now</Button>
        </div>
    </div>
  )
}

export default Services