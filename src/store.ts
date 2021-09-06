import { createStore } from "solid-js/store";

type State = {
  cells: boolean[][];
  generation: number;
};

const WIDTH = 40;
const HEIGHT = 30;

export const initialCells: State["cells"] = [...Array(HEIGHT)].map(() =>
  [...Array(WIDTH)].fill(false)
);

const [state, setState] = createStore<State>({
  cells: initialCells,
  generation: 0,
});

export const store = {
  state,
  setCell: (ri: number, ci: number, value: boolean) => {
    setState("cells", ri, ci, value);
  },
  next: () => {
    setState("cells", makeNext());
    setState("generation", (v) => v + 1);
  },
};

const makeNext = () =>
  state.cells.map((row, ri, cells) =>
    row.map((col, ci) => {
      let count = 0;

      // 上の段
      const upperRow = cells[ri - 1];
      if (upperRow) {
        if (upperRow[ci - 1]) count++;
        if (upperRow[ci]) count++;
        if (upperRow[ci + 1]) count++;
      }
      // 左右
      if (row[ci - 1]) count++;
      if (row[ci + 1]) count++;
      // 下の段
      const lowerRow = cells[ri + 1];
      if (lowerRow) {
        if (lowerRow[ci - 1]) count++;
        if (lowerRow[ci]) count++;
        if (lowerRow[ci + 1]) count++;
      }

      // if (!col && count === 3) return true;
      // if (col && (count === 2 || count === 3)) return true;
      // return false;

      return count === 3 || (col && count === 2);
    })
  );
