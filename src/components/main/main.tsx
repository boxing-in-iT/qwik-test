import { $, component$, useSignal } from "@builder.io/qwik";
import Elipse from "../../assets/img/header/elipse.png";
import { Cookie } from "../cookie/cookie";
import { UnityMenu } from "../unityMenu/unityMenu";
import arrowTablet from "../../assets/img/arrowTablet.svg";

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const ContentSection = component$((props: ContentSectionProps) => {
  return (
    <div class="w-[65vw]">
      <div>
        <p class="font-bold text-[60px] text-[#FFFFFF] text-center uppercase">
          {props.title}
        </p>
      </div>
      <div class="mt-8">
        <p class="text-[#FFFFFF] text-center text-[18px] font-medium">
          {props.description}
        </p>
      </div>
      <div class="mt-16 flex w-full text-white justify-start">
        <div class="w-[150px] h-[150px] bg-[#FF304D] rounded-full flex flex-col gap-2 items-center justify-center p-3 text-center uppercase font-bold">
          <img src={arrowTablet} />
          {props.buttonText}
        </div>
      </div>
    </div>
  );
});

export const Main = component$(() => {
  const isCookieShow = useSignal<boolean>(true);

  const handleAcceptCookie = $(() => {
    console.log("START");
    isCookieShow.value = !isCookieShow.value;
    console.log(isCookieShow.value);
  });

  return (
    <div class="relative m-auto w-[100vw] h-[85vh] flex justify-center items-center md:items-start">
      {/* MOBILE */}
      <div class="flex flex-col items-center md:hidden z-10">
        <div class="absolute left-1">
          <div class="h-[300px] w-[300px] bg-gradient-to-l from-[#FF4081] to-[#FF0055] rounded-full blur-3xl z-0"></div>
        </div>
        <div class="absolute right-1">
          <div class="h-[300px] w-[300px] bg-gradient-to-r from-[#00B8D4] to-[#001CAA] rounded-full blur-3xl z-0"></div>
        </div>
        <div class="absolute top-44 left-1">
          <div class="h-[300px] w-[300px] bg-gradient-to-l from-[#FF6666] to-[#CC3333] rounded-full blur-3xl z-0"></div>
        </div>
        <div class="absolute top-44 right-1">
          <div class="h-[300px] w-[300px] bg-gradient-to-r from-[#66CCFF] to-[#0077B5] rounded-full blur-3xl z-0"></div>
        </div>

        <img width="321" height="333" src={Elipse} class="z-10" />
        <h2 class="text-center text-2xl font-medium text-[#C0C0C0] mt-2 z-20">
          Unique AI
        </h2>
        <h1 class="z-20 mt-8 text-center text-6xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          Hi _) <br /> i am unity
        </h1>
        <p class="mt-8 text-center text-[#C0C0C0] w-[70%]">
          AI Unity is UWP Digital's own development for everyday life and
          business
        </p>
        <UnityMenu />
        {isCookieShow.value ? <Cookie onClick$={handleAcceptCookie} /> : null}
      </div>
      {/* TABLET */}
      <div class="hidden w-[100vw] md:flex md:flex-col md:items-center md:justify-around md:mt-32 lg:hidden">
        <div class="absolute top-20 right-[-25] flex w-full justify-end">
          <div class=" h-[200px] w-[100px] bg-[#FF304D] rounded-l-full blur-3xl"></div>
        </div>
        <ContentSection
          title="Din pålitliga partner för digital marknadsföring"
          description="We are a digital agency focused on Brand, Websites, Digital Marketing & Mobile Promotion."
          buttonText="Discuss the project"
        />
        <UnityMenu />
      </div>
      {/* Desktop */}
      <div class="hidden w-[100vw] lg:flex lg:flex-col items-start justify-start lg:items-center lg:justify-around lg:mt-32">
        <div class="absolute top-32 right-[-25] flex w-full justify-end">
          <div class=" h-[300px] w-[200px] bg-[#FF304D] rounded-l-full blur-3xl"></div>
        </div>
        <ContentSection
          title="Your reliable digital marketing partner"
          description="We are a full-service digital marketing agency focused on your success. We do not sell ideas. We sell a solution for your business needs."
          buttonText="Discuss the project"
        />
        <UnityMenu />
      </div>
    </div>
  );
});
