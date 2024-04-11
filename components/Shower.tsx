import { Signal } from "@preact/signals";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const Shower: FunctionalComponent<{ text: Signal<string> }> = ({ text }) => {
  return (
    <div class="vintage__container">
      <h1 class="vintage vintage__top">{text.value}</h1>
      <h1 class="vintage vintage__bot">{text.value}</h1>
    </div>
  );
};

export default Shower;
