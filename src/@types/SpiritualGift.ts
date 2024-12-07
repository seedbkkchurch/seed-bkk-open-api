import { Question } from "./Question"

export interface SpiritualGift {
    question_list: Array<Question>
    sum_question_score: number
    spiritual_gift_name: string
}