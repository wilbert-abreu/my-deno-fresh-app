/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    
    return resp
  },
};

export default function Home() {
  console.log(Deno.env.get("Test"));
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/profile.jpeg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
        class={tw`p-4 mx-auto max-w-xs`}
      />
      <p class={tw`my-6`}>
        About me
      </p>
      <Counter start={10} />
    </div>
  );
}
