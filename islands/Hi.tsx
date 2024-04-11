import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import HiButton from "./HiButton.tsx";
import Shower from "../components/Shower.tsx";
import { Signal } from "@preact/signals";

const Hi: FunctionComponent<{SayHi: Signal<string>}> = ({SayHi}) => {
  return (
    <div class="formBody">
      <form class="formBox" method="get" target="/hihihi">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} />
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} />
        <br />
        <HiButton type={"submit"} children={"Hi!"} />
      </form>
      <Shower text={SayHi} />
    </div>
  );
};

export default Hi;
