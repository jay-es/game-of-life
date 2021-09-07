import { Component } from "solid-js";
import { Cell } from "./Cell";
import { store, initialCells } from "./store";
import { Timer } from "./Timer";

const App: Component = () => {
  return (
    <div>
      <h1>Game of Life!</h1>

      <div class="control">
        generation: {store.state.generation}
        <button onClick={store.reset}>reset</button>
        <button onClick={store.random}>random</button>
        <button onClick={store.next}>next</button>
        <Timer />
      </div>

      {initialCells.map((row, ri) => (
        <div class="row">
          {row.map((_, ci) => (
            <Cell ri={ri} ci={ci} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
