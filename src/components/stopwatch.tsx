import { component$, useTask$, useSignal, $ } from "@builder.io/qwik";

export const Stopwatch = component$(() => {
  const isRunning = useSignal(false);
  const totalMilliseconds = useSignal(0);
  const intervalId = useSignal<any>();

  useTask$(({ cleanup, track }) => {
    // let intervalId: any;

    const startTimer = $(() => {
      intervalId.value = setInterval(() => {
        totalMilliseconds.value += 10;
      }, 10);
    });

    const stopTimer = $(() => {
      clearInterval(intervalId.value);
    });

    cleanup(() => {
      stopTimer();
    });

    track(() => {
      if (isRunning.value) {
        startTimer();
      } else {
        stopTimer();
      }
    });

    track(() => totalMilliseconds.value);
  });

  const formattedTime = () => {
    const totalSeconds = Math.floor(totalMilliseconds.value / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleStartStop = $(() => {
    isRunning.value = !isRunning.value;
  });
  handleStartStop();

  return (
    <div>
      <div class="text-[#ffffff]">{formattedTime()}</div>
    </div>
  );
});
