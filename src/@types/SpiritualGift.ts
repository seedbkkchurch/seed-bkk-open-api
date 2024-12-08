import { Question, SelectedQuestion } from "./Question"

export interface SpiritualGift {
    question_list: Array<Question>
    sum_question_score: number
    spiritual_gift_name: string
}

export interface CalculateSpiritualGift {
    question_list: Array<SelectedQuestion>
    sum_question_score: number
    spiritual_gift_name: string
}