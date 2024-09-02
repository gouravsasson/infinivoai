import Image from "next/image";
import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";

import Product from "./component/Product";
import Benefits from "./component/Benefits";
import Analytics from "./component/Analytics";
import { Testimonials } from "./component/Testimonials";
import Process from "./component/Process";
import ProductPlans from "./component/ProductPlans";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col">
        <Navbar />
        <div className=" flex-1 overflow-y-hidden ">
          <Herosection />
        </div>
      </div>
      <Product />
      <Benefits />
      <Testimonials />
      <Analytics />
      <Process/>
      <ProductPlans/>
    </>
  );
}
