import { component$ } from "@builder.io/qwik";
import Logo from "../../assets/img/header/logo.svg";
import Dark from "../../assets/img/header/Dark.svg";
import Phone from "../../assets/img/header/Phone.svg";
import Pen from "../../assets/img/header/pen.svg";
import Hamburger from "../../assets/img/header/hamburger.svg";
import arrowDown from "../../assets/img/header/arrowDown.svg";
import USA from "../../assets/img/header/USA.svg";

export const Header = component$(() => {
  return (
    <div class="m-auto w-[100vw] ">
      <div class="flex justify-between items-center h-full md:justify-between m-auto lg:justify-between md:w-[90%]">
        <div class="flex justify-start  items-center p-0">
          <img
            src={Logo}
            alt="logo"
            class="m-[8px] w-[98px] h-[50px] md:w-[150px] md:h-[60px]"
          />

          <img
            src={Dark}
            alt="dark-theme"
            class="w-[45px] h-[45px] ml-4 md:ml-10 "
          />
        </div>

        <ul class="hidden lg:flex text-[#F8F8F8] gap-7 uppercase font-medium cursor-pointer">
          <li>Cases</li>
          <li class="flex gap-2">
            Services <img src={arrowDown} />
          </li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div class="flex justify-between items-center  p-1">
          <div class="w-[50px] h-[50px] border-2 border-[#FF304D] rounded-full flex items-center justify-center m-[8px] md:border-none md:w-[100px]">
            <img src={Phone} alt="phone" class="md:hidden" />
            <p class="hidden md:block font-normal text-lg text-[#FF304D] lg:hidden">
              LET'S TALK
            </p>
          </div>

          <div class="w-[50px] h-[50px] rounded-full bg-[#FF304D] flex items-center justify-center m-[8px] lg:w-[175px] lg:h-[50px] lg:rounded-3xl gap-6 mr-12">
            <p class="hidden lg:block font-normal text-lg text-[#FFFFFF] lg:">
              LET'S TALK
            </p>
            <img src={Pen} alt="pen" />
          </div>

          <img
            src={Hamburger}
            alt="hamburger"
            class="w-[40px] h-[40px] m-[8px] lg:hidden"
          />
          <div class="hidden lg:flex text-[#FFFFFF] gap-4">
            <img src={USA} />
            <p>US</p>
          </div>
        </div>
      </div>
    </div>
  );
});

// export const Header = component$(() => {
//   return (
//     <div class="m-auto w-[80vw]">
//       <div class="flex justify-around items-center h-full">
//         <img src={Logo} alt="logo" />

//         <img src={Dark} alt="dark-theme" />

//         <div class="flex justify-between items-center w-[40%] p-1">
//           <div class="w-[50px] h-[50px] border-2 border-red-800 rounded-full flex items-center justify-center">
//             <img src={Phone} alt="phone" />
//           </div>

//           <div class="w-[50px] h-[50px] rounded-full bg-red-800 flex items-center justify-center">
//             <img src={Pen} alt="pen" />
//           </div>

//           <img src={Hamburger} alt="hamburger" class="w-[40px] h-[40px]" />
//         </div>
//       </div>
//     </div>
//   );
// });
