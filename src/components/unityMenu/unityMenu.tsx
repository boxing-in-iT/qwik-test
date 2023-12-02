import { $, component$, useSignal } from "@builder.io/qwik";
import Unity from "../../assets/img/header/unity.svg";
import arrowUp from "../../assets/img/arrowUp.svg";
import arrowDown from "../../assets/img/arrowDown.svg";
import volumeOn from "../../assets/img/volumeOn.svg";

import volumeOff from "../../assets/img/volumeOff.svg";

import { Modal } from "../modal/modal";
import { ChooseLanguage } from "../chooseLanguage/chooseLanguage";

export const UnityMenu = component$(() => {
  const isUnityClicked = useSignal<boolean>(false);
  const isModalVisible = useSignal<boolean>(false);
  const isVolumeOn = useSignal<boolean>(true);

  const handleArrowUpClick = $(() => {
    isModalVisible.value = !isModalVisible.value;
  });

  const handleVolumeCLick = $(() => {
    isVolumeOn.value = !isVolumeOn.value;
  });

  const handleUnityClick = $(() => {
    isUnityClicked.value = !isUnityClicked.value;
  });
  return (
    <>
      {isUnityClicked.value ? (
        <>
          <div
            class={`absolute  z-50 lg:right-60 ${
              isModalVisible.value ? "bottom-[330px]" : "bottom-0"
            }`}
          >
            <svg width="370" height="150" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="10"
                y="10"
                width="350"
                // height="100"
                height="80"
                rx="30"
                ry="30"
                fill="#000000"
                stroke="#8B5CF6"
              />
              <circle cx="185" cy="50" r="50" fill="#000000" />

              <foreignObject x="10" y="10" width="350" height="150">
                <div class="flex justify-around items-center">
                  <div
                    onClick$={handleVolumeCLick}
                    class="w-[86px] flex justify-around border-2 border-[#ffffff] rounded-full p-2"
                  >
                    {isVolumeOn.value ? (
                      <>
                        <img src={volumeOn} />
                        <div class="text-[#FFFFFF]">ON</div>
                      </>
                    ) : (
                      <>
                        <img src={volumeOff} />
                        <div class="text-[#FFFFFF]">OFF</div>
                      </>
                    )}
                  </div>
                  <div class="w-100 h-100 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={Unity} class=" pl-8" />
                  </div>

                  <div class="flex items-center">
                    <ChooseLanguage />
                    <div class="w-[50px] h-[50px] border-2 border-[#ffffff] rounded-full flex items-center justify-center m-[8px]">
                      {isModalVisible.value ? (
                        <img src={arrowDown} onClick$={handleArrowUpClick} />
                      ) : (
                        <img src={arrowUp} onClick$={handleArrowUpClick} />
                      )}
                    </div>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
          {isModalVisible.value && <Modal />}
        </>
      ) : (
        <div class="absolute bottom-2 lg:right-72">
          <img
            src={Unity}
            class="md:w-[150px] md:h-[150px] lg:w-[100px] lg:h-[100px]"
            onClick$={handleUnityClick}
          />
        </div>
      )}
    </>
  );
});
