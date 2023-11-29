import { $, component$, useSignal } from "@builder.io/qwik";
import Unity from "../../assets/img/header/unity.svg";
import micro from "../../assets/img/micro.svg";
import User from "../../assets/img/user.svg";
import sendButton from "../../assets/img/sendButton.svg";
import screpka from "../../assets/img/screpka.svg";
import lock from "../../assets/img/lock.svg";
import { Stopwatch } from "../stopwatch";
import audio from "../../assets/img/play.svg";

export const Modal = component$(() => {
  const inputValue = useSignal("");
  const fileNameSignal = useSignal("");
  const chatMessages = useSignal<
    { text: string; sender: string; type: string }[]
  >([]);
  const fileInput = document.getElementById("fileInput");
  const isRecording = useSignal(false);

  const sendMessage = $((type: any) => {
    if (inputValue.value === "" && type === "message") {
      return;
    }

    const newMessage = {
      text: type === "message" ? inputValue.value : audio,
      sender: "user",
      type: type === "audio" ? "audio" : "message",
    };

    chatMessages.value = [...chatMessages.value, newMessage];
    inputValue.value = "";
  });

  const startRecording = $(() => {
    isRecording.value = true;
  });

  const stopRecording = $(() => {
    if (inputValue.value === "" && isRecording.value) {
      sendMessage("audio");
    }
    isRecording.value = false;
  });

  const textareaEventListener = $((e: any) => {
    const txtarea = document.getElementById("txtArea");
    if (txtarea instanceof HTMLTextAreaElement) {
      const lines = txtarea.value.split("\n").length;
      txtarea.rows = lines;
      console.log(lines);
    }
    inputValue.value = e.target.value;
  });

  const handleFileChange = $((e: any) => {
    const selectedFile = e.target.files[0];
    fileNameSignal.value = selectedFile.name;
    console.log("Selected file:", selectedFile);
  });

  const handleFileButtonClick = $(() => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput instanceof HTMLInputElement) {
      fileInput.click();
    }
  });

  const deleteFile = $(() => {
    console.log("Deleting file:", fileNameSignal.value);

    if (fileInput instanceof HTMLInputElement) {
      fileInput.value = "";
    }
    fileNameSignal.value = "";
  });

  const renderChatMessage = (message: any, index: any) => (
    <li
      key={index}
      class={`chat ${
        message.sender === "user" ? "outgoing" : "incoming"
      } flex justify-${
        message.sender === "user" ? "end" : "start"
      } items-center mt-[20px] mr-0 text-[#FFFFFF] `}
    >
      {message.type === "message" ? (
        <p class="pr-[16px] rounded-lg">{message.text}</p>
      ) : (
        <img src={message.text} />
      )}
      <span>
        <img
          class="h-[32px] w-[32px]"
          src={message.sender === "user" ? User : Unity}
        />
      </span>
    </li>
  );

  return (
    <div class="absolute bottom-0 z-30 rounded-3xl p-px lg:right-56 bg-gradient-to-b from-[#8B5CF6] to[#171717]">
      <div class="  ">
        <ul class="rounded-[calc(1.5rem-1px)]  m-auto h-[400px] m-t-[-10px]  chatbox overflow-y-auto pt-[15px] pr-[20px] pb-[70px] bg-gradient-to-b from-[#000000] to-[#171717] md:pl-24 md:pr-24 md:w-[700px] lg:w-[400px] lg:pl-0 lg:pr-0">
          <li class="chat incoming flex ml-2 items-center rounded-lg text-[#8B5CF6]">
            <span>
              <img class="h-[32px] w-[32px]" src={Unity} />
            </span>
            <p class="pt-[12px] pr-[16px] rounded-lg max-w-[75%]">
              Добрый день, меня зовут Юнити! Я ваш персональный помощник.{" "}
            </p>
          </li>
          <li class="chat outgoing flex justify-end items-center mt-[20px] mr-0 text-[#FFFFFF]">
            <p class=" pr-[16px] rounded-lg">SDSDSAFSSS</p>
            <span>
              <img class="h-[32px] w-[32px]" src={User} />
            </span>
          </li>
          {chatMessages.value.map(renderChatMessage)}
        </ul>
        <div
          onMouseleave$={stopRecording}
          class="absolute bottom-1 left-[5%] h-auto flex flex-wrap justify-around items-center rounded-2xl w-[90%] min-h-[55px] max-h-[290px] bg-[#404040] md:min-w-[465px] lg:min-w-[90%] m-auto "
        >
          {isRecording.value ? (
            <Stopwatch />
          ) : (
            <img
              src={screpka}
              onClick$={handleFileButtonClick}
              class=" md:w-[70px] md:h-[70px] lg:w-[40px] lg:h-[40px]"
            />
          )}

          {isRecording.value ? (
            <div class="w-[70%] flex justify-center">
              <p>Для отмены отпустите курсор вне поля</p>
            </div>
          ) : (
            <textarea
              id="txtArea"
              placeholder="Сообщение"
              value={inputValue.value}
              onInput$={textareaEventListener}
              class="bg-[#171717] rounded-xl w-[70%] mt-1 mb-1 min-h-[26px] max-h-[200px] overflow-y-auto text-[#DEDEDE] "
            />
          )}

          {inputValue.value === "" ? (
            <>
              <div
                class={`${
                  isRecording.value
                    ? "right-0 absolute md:right-12 bottom-[60px] lg:right-3"
                    : "hidden"
                }`}
              >
                <img src={lock} />
              </div>
              <span
                class={`bg-[#8B5CF6] w-[36px] h-[28px] flex items-center justify-center  md:w-[70px] md:h-[60px] lg:w-[36px] lg:h-[28px] ${
                  isRecording.value ? "bg-[#4c1d95] rounded-full" : "rounded-lg"
                }`}
                onTouchStart$={startRecording}
                onTouchEnd$={stopRecording}
                onTouchCancel$={stopRecording}
                onMousedown$={startRecording}
              >
                <img src={micro} class=" md:w-8 lg:w-4" />
              </span>
            </>
          ) : (
            <span
              onClick$={() => {
                sendMessage("message");
              }}
              class="bg-[#8B5CF6] w-[36px] h-[28px] flex items-center justify-center rounded-lg md:w-[70px] md:h-[70px]  lg:w-[36px] lg:h-[28px]"
            >
              <img src={sendButton} class=" " />
            </span>
          )}
          <div class="flex justify-start">
            {fileNameSignal.value !== "" && (
              <div class="flex items-center text-[#DEDEDE]  overflow-hidden">
                <p class="">{fileNameSignal.value}</p>
                <span
                  class="cursor-pointer ml-2 text-[#DEDEDE]"
                  onClick$={deleteFile}
                >
                  &#10006;
                </span>
              </div>
            )}
          </div>

          <input
            type="file"
            id="fileInput"
            style="display: none;"
            onchange$={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
});
