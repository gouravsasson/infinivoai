import React from "react";
import Image from "next/image";
import img1 from "@/assets/fordata/1.png";
import img2 from "@/assets/fordata/2.png";
import img3 from "@/assets/fordata/3.png";
import img4 from "@/assets/fordata/4.png";
import img5 from "@/assets/fordata/5.png";

function Analytics() {
  return (
    <>
      <div className="px-20 flex justify-around ">
        <div className=" basis-[35%] ">
          <h1 className=" text-5xl font-semibold font-roboto">Dashboard and <span className="font-bold bg-gray-50">Analytics</span> </h1>
          <p className=" mt-8 text-gray-600 font-roboto">
            Gain command over your chatbot with robust dashboards offering
            features like email configuration, analytics, ticket generation,
            product showcase, and more. Our simple CRM provides comprehensive data 
            on leads, appointments, user queries, and feedback. Valuable insights 
            include chat session duration, most-asked questions, user demographics, 
            and much more. Edit intents and responses with HeenaGPT or modify the 
            knowledge database with HeenaRAG.
          </p>
        </div>
        <div className="basis-[50%] ">
          <div className="relative">
          
            <Image
              className="w-full  animate-bounceY"
              src={img1}
              alt="Background Shape"
            />
          
          
            <Image
              className="absolute -left-20 top-0 w-full  animate-bounceY animation-delay-200"
              src={img2}
              alt="Background Shape"
            />
          
          
            <Image
              className="absolute -left-20 top-0 w-full  animate-bounceY animation-delay-400"
              src={img3}
              alt="Background Shape"
            />
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
