import 'dotenv/config'
import {z} from 'zod'

// Define a schema for your environment variables
const envSchema = z.object({
  PORT: z
    .string({
      required_error: 'PORT is required.',
    })
    .min(1, {
      message: 'PORT must be at least 1 character long.',
    })
    .max(255),
  DB_USER: z
    .string({
      required_error: 'DB_USER is required.',
    })
    .min(1, {
      message: 'DB_USER must be at least 1 character long.',
    })
    .max(255),
  DB_PASSWORD: z
    .string({
      required_error: 'DB_PASSWORD is required.',
    })
    .min(1, {
      message: 'DB_PASSWORD must be at least 1 character long.',
    })
    .max(255),
  DB_HOST: z
    .string({
      required_error: 'DB_HOST is required.',
    })
    .min(1, {
      message: 'DB_HOST must be at least 1 character long.',
    })
    .max(255),
  DB_PORT: z
    .string({
      required_error: 'DB_PORT is required.',
    })
    .min(1, {
      message: 'DB_PORT must be at least 1 character long.',
    })
    .max(255),
  DB_NAME: z
    .string({
      required_error: 'DB_NAME is required.',
    })
    .min(1, {
      message: 'DB_NAME must be at least 1 character long.',
    })
    .max(255),
})

const env = envSchema.safeParse(process.env)

if (!env.success) {
  throw new Error(env.error.message)
}

export default env.data