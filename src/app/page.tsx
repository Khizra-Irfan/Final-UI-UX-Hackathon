// import React from 'react';
// import Image from 'next/image';  // Import Image from next/image
// import { CreditCard } from "lucide-react";

// const Page = () => {
//   return (
//     <div>
//     <div className="mx-auto max-w-[1440px] bg-[#FFFFFF] flex flex-col md:flex-row h-auto md:h-[704px]">
//       {/* Text section */}
//       <div className="w-full md:w-[700px] h-auto md:h-full bg-[#2A254B] md:mt-[47px] px-6 py-6 md:ml-[50px] flex flex-col justify-between">
//         <div className="w-full md:w-[513px]">
//           {/* Heading for smaller screens */}
//           <h2 className="font-clash-display text-center font-extralight text-[24px] text-white mt-8 max-w-[280px] block md:hidden">
//             The furniture brand<br />
//             for the future, with<br />
//             timeless designs
//           </h2>

//           {/* Heading for medium and larger screens */}
//           <h2 className="font-clash-display hidden md:block md:text-left font-extralight text-[32px] text-white mt-8 md:pl-12">
//             The furniture brand for the future, with timeless designs
//           </h2>

//           {/* Button for all screens */}
//           <div className='pl-5 pt-1 md:justify-start sm:justify-items-end'>
//             <button className='h-[56px] sm:w-full sm:mx-0 sm:mb-10 pl-8 mt-11 pr-8 my-[16px] bg-[#F9F9F926] text-white font-satoshi font-normal text-[16px] sm:static absolute bottom-4 md:w-auto'>
//               View collection
//             </button>
//           </div>

//         </div>
        
        

//         {/* Paragraph for all screens */}
//         <div className="sm:pl-8 ml-6 pt-10 md:pt-16">
//           <p className="text-white font-satoshi font-extralight text-[18px] sm:pl-0 sm:ml-0 md:pl-0 text-left sm:text-left sm:max-w-[300px] sm:leading-[1.8] md:max-w-none">
//             A new era in eco-friendly furniture with <br />
//             Avelon, the French luxury retail brand <br />
//             with nice fonts, tasteful colors, and a <br />
//             beautiful way to display things digitally <br />
//             using modern web technologies.
//           </p>
//         </div>
//       </div>

//       {/* Image section */}
//       <div className="hidden lg:flex flex-shrink-0 pt-12">
//         <Image
//           src="/Right-image.png"
//           alt="Right Image"
//           width={470}
//           height={584}
//           className="object-cover"
//         />
//       </div>
//     </div>

//     <div className='mx-auto max-w-[1440px] bg-[#FFFFFF] h-[355px] mt-32'>
//       <div className='w-[366px] h-[34px] top-[60px] flex flex-items justify-center'></div>
//       <h3 className='font-clash-display text-[24px] font-normal flex flex-items text-[#2A254B] justify-center'>What makes our brand different</h3>
//       </div>

//       <div>
//         <div className='w-[270px] h-[124px] top-[145px] left-[86px] pb-10'>
//         <Image
//           src="/Delivery-car.png"
//           alt="Delivery Car"
//           width={24}
//           height={24}
//           className="object-cover"
//         />
//         <h4 className='w-[199px] h-[28px] mt-3 font-clash-display font-normal text-[20px] text-[#2A254B]'>Next day as standard</h4>
//         <p className='font-satoshi font-normal mt-3 text-[16px] text-[#2A254B]'>Order before 3pm and get your order
//         the next day as standard</p>
//         </div>
//       </div>
//     </div> 
//   );
// };

// export default Page;




import Hero from "@/components/hero-banner";
import Features from "@/components/features-section";
import News from "@/components/newsletter-section";
import Hero2 from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Hero2 />
      <News />
    </>
  );
}
