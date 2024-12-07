import { Elysia } from 'elysia'


export const question = new Elysia({ prefix: 'question'})
    .get('/', () => {

        return [{
            "name": 'som question'
        }]
    })