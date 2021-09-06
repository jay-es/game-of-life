import { Component, createSignal, For } from "solid-js";
import { store } from "./store";

const radioGroup: { label: string; value: number }[] = [
  { label: "fast", value: 100 },
  { label: "medium", value: 200 },
  { label: "slow", value: 400 },
];

export const Timer: Component = () => {
  const [timerId, setTimerId] = createSignal(0);
  const [speed, setSpeed] = createSignal(radioGroup[1].value);

  const stop = () => {
    clearInterval(timerId());
    setTimerId(0);
  };

  const start = () => {
    setTimerId(setInterval(store.next, speed()));
  };

  const handleClick = () => {
    timerId() ? stop() : start();
  };

  const handleChange = (newVal: number) => {
    setSpeed(newVal);
    if (timerId()) {
      stop();
      start();
    }
  };

  return (
    <>
      <button onClick={handleClick}>{timerId() ? "stop" : "auto"}</button>
      <For each={radioGroup}>
        {({ label, value }) => (
          <label>
            <input
              type="radio"
              checked={speed() === value}
              onChange={() => handleChange(value)}
            />
            {label}
          </label>
        )}
      </For>
    </>
  );
};
