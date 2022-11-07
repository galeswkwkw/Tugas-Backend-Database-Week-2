<<<<<<< HEAD
const request = require ('supertest')
const app = require ('./server')

afterAll((done)=>{
    done()
})
let token
describe('User', ()=>{
    it('List User', async()=>{
        const res = await request(app).get('/api/users/')
        expect(res.status).toBe(200)
    })
    it('Login', async()=>{
        const res =await request(app).post('/api').send({
            email:"test3@mail.com",
            password:"123456"
        })
        expect(res.statusCode).toBe(200)
        token = res.body.data.token
    })
    it('Create User', async()=>{
        const res =await request(app).post('/api/users/add').send({
            name:"test6",
            email:"test6@mail.com",
            password:"123456"
        })
        expect(res.statusCode).toBe(200)
    })
    it('Update User', async()=>{
        const res =await request(app).put('/api/users/update')
        .set('Authorization', `Bearer ${token}`)
        .send({
                user_id:1,
                email:"zakuy@mail.com",
        })
        expect(res.statusCode).toBe(200)
    })
})
=======
const request = require("supertest");

const app = require("./server");

afterAll((done) => {
  done();
});

describe("User", () => {
  Test("List User", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
  });
});
>>>>>>> 0bcf42ab825d25901377cc293d46dd5bb1f6b957
