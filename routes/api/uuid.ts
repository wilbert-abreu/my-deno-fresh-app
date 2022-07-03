
export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const uuid = crypto.randomUUID();
  return new Response(JSON.stringify(uuid), {
    headers: { "Content-Type": "application/json" },
  });
};


 
