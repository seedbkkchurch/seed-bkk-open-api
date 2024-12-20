import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { question } from './qustion'
import { questions } from "./data/questions";
import { spiritualGifts } from "./data/spiritual_gifts";
import { calculateGifts, createMockScores  } from "./domain/spiritualGiftCalculator";

const selectedQuestions = createMockScores(questions)

const app = new Elysia()
  .use(cors({
    origin: '*'
  }))
  .use(question)
  .get("/", () => calculateGifts(selectedQuestions, spiritualGifts))
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
