import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors({
    origin: '*'
  }))
  .get("/", () => "Hello Elysia")
  .post("/", (req: any) => {
    const { body, error } = req
    if (body?.name === 'tar') {
      return error(400, 'bad request')
    }

    return {
      name: body?.name
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
