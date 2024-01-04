import { z } from "zod"

const loginRequestSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: "Email is required"
        }).email(),
        password: z.string({
            required_error: "Password is required"
        }).min(6).max(100)
    })
})

const AuthRequest = {
    login: loginRequestSchema
}

export default AuthRequest