/**
 * A middleware is defined in a _middleware.ts file. 
 * It will intercept the request in order for you to perform 
 * custom logic before or after the route handler.
 * 
 * Each middleware gets passed a next function in the context argument that is 
 * used to trigger child handlers. The ctx also has a state property that can be 
 * used to pass arbitrary data to downstream (or upstream) handlers.
 * 
 * Middlewares are scoped and can be layered.
 */
import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.data = "myData";
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}