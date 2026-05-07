import {z} from 'zod'

export const messsageSchema = z.object({
    content : z.string().min(10,{message:'Content Must be Atleast 10 Characters'})
    .max(300,{message:'Content Must not be More Than 300 Characters'})
    
})



