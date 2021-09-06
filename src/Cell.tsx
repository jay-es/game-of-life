import { Component } from "solid-js";
import { store } from "./store";

type Props = {
  value: boolean;
  ri: number;
  ci: number;
};

export const Cell: Component<Props> = (props) => {
  const handleChange = (newVal: boolean) => {
    store.setCell(props.ri, props.ci, newVal);
  };

  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={(e) => handleChange(e.currentTarget.checked)}
    />
  );
};
