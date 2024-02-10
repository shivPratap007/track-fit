const { z } = require('zod');

const userVerify = z.object({
    name: z.string(),
    password: z.string(),
    email:z.string(),
});

const login=z.object({
    email:z.string(),
})

module.exports={
    userVerify,
    login,
}