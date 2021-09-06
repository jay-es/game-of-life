import { Component, For } from "solid-js";
import { Cell } from "./Cell";
import { store } from "./store";

const App: Component = () => {
  return (
    <div>
      <h1>Game of Life!</h1>

      <div class="control">
        generation: {store.state.generation}
        <button onClick={store.next}>next</button>
      </div>

      <For each={store.state.cells}>
        {(row, ri) => (
          <div class="row">
            <For each={row}>
              {(col, ci) => <Cell ri={ri()} ci={ci()} value={col} />}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default App;
