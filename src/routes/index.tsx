import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";
import { Main } from "~/components/main/main";

export default component$(() => {
  return (
    <div class="bg-[#404040] w-[100vw] h-[100vh] md:bg-[#171717]">
      <Header />
      <Main />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
