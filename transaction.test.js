const request = require('supertest')
const app = require('./server')

let token
describe('Transaction unit testing', ()=>{
    test('Login', async()=>{
        const res =await request(app).post('/api').send({
            email:"test3@mail.com",
            password:"123456"
        })
        expect(res.statusCode).toBe(200)
        token = res.body.data.token
    })
    test('Add Transaction', async()=>{
        const res =await request(app).post('/api/transaction/add')
        .set('Authorization', `Bearer ${token}`)
        .send({
            description:"Test Transaction user new ",
            amount:50000
        })
        expect(res.status).toBe(201)
    })
    test('List Transaction', async()=>{
        const res =await request(app).get('/api/transaction/list')
        .set('Authorization', `Bearer ${token}`)
        .send({
            description:"Test Transaction user new ",
            amount:50000
        })
        expect(res.status).toBe(200)
    })
    test('Update Transaction', async()=>{
        const res =await request(app).put('/api/transaction/update')
        .set('Authorization', `Bearer ${token}`)
        .send({
                user_id:1,
                id:2,
                description:"Test Update Transtraction",
                amount:5000
        })
        expect(res.statusCode).toBe(200)
    })
    /*test('Delete Transaction', async()=>{
        const res =await request(app).del('/api/transaction/delete/:id')
        .set('Authorization', `Bearer ${token}`)
        .send({
                user_id:1,
                id:9,
        })
        expect(res.statusCode).toBe(200)
    })*/
})
