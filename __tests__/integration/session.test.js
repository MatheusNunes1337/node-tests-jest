const { User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = await User.create({
            name: "Matheus",
            email: "matheusnunes1337@gmail.com",
            password_hash: "123267"
        })

        expect(user.email).toBe('matheusnunes1337@gmail.com')

        console.log(user)
    })
})
