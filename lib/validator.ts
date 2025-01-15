import { z } from "zod";

export const edirFormSchema = z.object({
    title: z.string().min(3, "Title must be at least three characters"),
    location: z.string().min(3, "Location must be at least 3 characters").max(400,"Loation must be less than 400 characters"),
    description: z.string().min(3, "Discription must be at least three characters").max(400, "Description must be less than 400 characters"),
    imageUrl: z.string(),
    price: z.string()
        .regex(/^\d+$/, "Price must contain only numbers")
        .refine((val) => parseInt(val) >= 10, "Price must be at least 10 Birr")
        .refine((val) => parseInt(val) <= 1000, "Price must be less than 1000 Birr"),
    paymentDeadline: z.string(),
    accountNumber:z.string()
})