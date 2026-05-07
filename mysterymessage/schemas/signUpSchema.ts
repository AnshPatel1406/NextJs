import {z} from 'zod'

export const usernameValidation = z.
    string()
    .min(2,"Username Must Be Atlease 2 Characters")
    .max(20,"Username Must not Exceed 20 Characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username Must Not Contain Special Character")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invaild Email Address'}),
    password: z.string().min(6,{message:"Password Must be Atleast 6 Characters"})

})