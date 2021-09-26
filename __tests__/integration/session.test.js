const request = require('supertest')


const app = require('../../src/app')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: "Matheus",
            email: "matheusnunes1337@gmail.com",
            password_hash: "123267"
        })

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123267'
        })
        
        expect(response.status).toBe(200)
        
    })

    it('should not authenticate with invalid credentials', async () => {
        const user = await User.create({
            name: "Matheus",
            email: "matheusnunes1337@gmail.com",
            password_hash: "123267"
        })

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '423267'
        })
        
        expect(response.status).toBe(401)
        
    })
})
