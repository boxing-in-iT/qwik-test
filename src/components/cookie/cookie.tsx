import { PropFunction, component$ } from "@builder.io/qwik";

interface CookieProps {
  onClick$?: PropFunction<() => void>;
}

// right-0 left-0 bottom-0

export const Cookie = component$((props: CookieProps) => {
  return (
    <div class="absolute bottom-40 flex items-center justify-center z-40">
      <div class="w-[400px] h-[120px] bg-black rounded-3xl flex flex-col justify-between text-white p-3 mt-4">
        <h2>THIS WEBSITE USES COOKIES.</h2>
        <div class="flex justify-between">
          <button>LEARN MORE</button>
          <button class="rounded-xl bg-[#323232] p-1" onClick$={props.onClick$}>
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
});
