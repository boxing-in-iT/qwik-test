import { $, component$, useSignal } from "@builder.io/qwik";
import langUA from "../../assets/img/flags/langUa.svg";
import langDK from "../../assets/img/flags/langDK.svg";
import langNL from "../../assets/img/flags/langNL.svg";
import langSE from "../../assets/img/flags/langSE.svg";

export const ChooseLanguage = component$(() => {
  const isLangOpen = useSignal<boolean>(true);
  const selectedLanguage = useSignal<string>("ua");

  const languages = [
    { id: "ua", src: langUA },
    { id: "dk", src: langDK },
    { id: "nl", src: langNL },
    { id: "se", src: langSE },
  ];

  const handleLanguageClick = $((languageId: string) => {
    selectedLanguage.value = languageId;
    console.log(languageId);
    isLangOpen.value = true;
  });

  return (
    <div>
      {isLangOpen.value ? (
        <img
          class="w-[50px] h-[50px]"
          src={
            languages.find((lang) => lang.id === selectedLanguage.value)?.src ||
            langUA
          }
          onClick$={() => (isLangOpen.value = false)}
        />
      ) : (
        <div class="absolute top-5 right-[20%] flex flex-col items-center max-w-[60px] mx-auto border-2 border-[#ffffff] rounded-full pt-1 pr-0 pb-1 pl-0 md:right-[33%] lg:right-[22%] z-50">
          {languages.map((language) => (
            <img
              key={language.id}
              class="w-[50px] h-[50px] mb-2 opacity-100 z-50"
              src={language.src}
              onClick$={() => handleLanguageClick(language.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
});
