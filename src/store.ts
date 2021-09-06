import { createStore } from "solid-js/store";

type State = {
  cells: boolean[][];
};

const WIDTH = 25;
const HEIGHT = 15;

const [state, setState] = createStore<State>({
  cells: [...Array(HEIGHT)].map(() => [...Array(WIDTH)].fill(false)),
});

export const store = {
  state,
  setCell: (ri: number, ci: number, value: boolean) => {
    setState("cells", ri, ci, value);
  },
};
