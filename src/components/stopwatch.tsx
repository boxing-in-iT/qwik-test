import { component$, useTask$, useSignal, qrl, $ } from "@builder.io/qwik";

export const Stopwatch = component$((result: any) => {
  const isRunning = useSignal(false);
  const totalMilliseconds = useSignal(0);

  useTask$(({ cleanup, track }) => {
    let intervalId: any;

    const startTimer = $(() => {
      intervalId = setInterval(() => {
        totalMilliseconds.value += 10;
      }, 10);
    });

    const stopTimer = $(() => {
      clearInterval(intervalId);
    });

    const resetTimer = $(() => {
      stopTimer();
      totalMilliseconds.value = 0;
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

  // const formattedTime = () => {
  //   const minutes = Math.floor(totalMilliseconds.value / (60 * 1000));
  //   const remainingSeconds = Math.floor(
  //     (totalMilliseconds.value % (60 * 1000)) / 1000
  //   );
  //   const remainingMilliseconds = Math.floor(
  //     (totalMilliseconds.value % 1000) / 10
  //   ); // Изменено для отображения одной цифры из миллисекунд
  //   return `${minutes}:${String(remainingSeconds).padStart(2, "0")}:${String(
  //     remainingMilliseconds
  //   ).padStart(2, "0")}`;
  // };

  const handleStartStop = $(() => {
    isRunning.value = !isRunning.value;
  });

  const handleReset = $(() => {
    isRunning.value = false;
    totalMilliseconds.value = 0;
  });

  handleStartStop();

  return (
    <div>
      <div class="text-[#ffffff]">{formattedTime()}</div>
    </div>
  );
});
