import { Question, SelectedQuestion } from "../@types/Question";
import { CalculateSpiritualGift, SpiritualGift } from "../@types/SpiritualGift";


export const sumScoreByQustionList = (questions: Array<SelectedQuestion>, giftQuestions: Array<Question>): number => {
    let sum = 0;
    questions.forEach((question) => {
        giftQuestions.forEach((giftQuestion) => {
            if (question.index === giftQuestion.index) {
                sum += question.score
            }
        })
    })

    return sum;
}


export const mapSelectedQuestionList = (questions: Array<SelectedQuestion>, giftQuestions: Array<Question>): Array<SelectedQuestion> => {
    let selectedQustionList: Array<SelectedQuestion> = [];
    questions.forEach((question) => {
        giftQuestions.forEach((giftQuestion) => {
            if (question.index === giftQuestion.index) {
                selectedQustionList.push(question)
            }
        })
    })

    return selectedQustionList;
}


export const calculateGifts = (questions: Array<SelectedQuestion>, spiritualGifts: Array<SpiritualGift>): Array<CalculateSpiritualGift>  => {
    return spiritualGifts.map((sg) => {
        return {
            question_list: mapSelectedQuestionList(questions, sg.question_list),
            sum_question_score: sumScoreByQustionList(questions, sg.question_list),
            spiritual_gift_name: sg.spiritual_gift_name
        }
    })
}

export const createMockScores = (questions: Array<Question>): Array<SelectedQuestion> => {
    return questions.map((question) => {
        let selectedQusestion = {...question, score: 3 }
        return selectedQusestion
    })
}