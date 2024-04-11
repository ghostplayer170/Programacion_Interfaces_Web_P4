import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Hi from "../islands/Hi.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("nombre") || "";
    const apellido = url.searchParams.get("apellido") || "";
    return ctx.render({ name, apellido });
  },
};

const Hihihi = (props: PageProps) => {
  const SayHi = useSignal<string>(props.data.name + " " + props.data.apellido);
  return (
    <>
      <Hi SayHi={SayHi} />
    </>
  );
};

export default Hihihi;
