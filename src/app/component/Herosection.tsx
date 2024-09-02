import React from "react";
import Image from "next/image";
import img2 from "@/assets/hero-bg-shape-1.svg";


function Herosection() {
  return (
    <section className="relative bg-[#2648b6] h-[calc(100vh-6rem)] overflow-hidden">
      
      <Image
        className="absolute bottom-0 left-0 w-full  object-cover z-10"
        src={img2}
        alt="Background Shape"
      />
      
      <div className="relative h-full flex items-center justify-between gap-10 px-20 z-20">
        <div className="basis-[50%] text-white">
          <h1 className="text-5xl font-bold mb-4 font-roboto">
            AI Chatbot Agents
          </h1>
          <p className="text-2xl mb-8 font-roboto">
            Boost Efficiency, Engage Customers, and Scale Your Business Seamlessly.
            Repetitive customer queries eating up your time? Caught between
            handling queries or running operations? Losing leads due to inquiries
            in peak or off-hours?
          </p>
          
        </div>

        <div className="basis-[40%] ">
        
        <div className=" w-full flex justify-center">
        <video 
          className="h-[500px]"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/movie-webm.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
