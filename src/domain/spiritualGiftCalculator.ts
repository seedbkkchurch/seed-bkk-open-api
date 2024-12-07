import { Question } from "../@types/Question";
import { SpiritualGift } from "../@types/SpiritualGift";


export const sumScoreByQustionList = (qustions: Array<Question>, giftQuestions: Array<Question>): number => {
    let sum = 0;
    qustions.forEach((question) => {
        giftQuestions.forEach((giftQuestion) => {
            if (question.index === giftQuestion.index) {
                sum += question.score
            }
        })
    })

    return sum;
}


export const calculateGifts = (qustions: Array<Question>, spiritualGifts: Array<SpiritualGift>): Array<SpiritualGift>  => {
    return spiritualGifts.map((sg) => {
        return {
            question_list: sg.question_list,
            sum_question_score: sumScoreByQustionList(qustions, sg.question_list),
            spiritual_gift_name: sg.spiritual_gift_name
        }
    })
}