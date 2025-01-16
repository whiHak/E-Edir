import { z } from "zod";

export const edirFormSchema = z.object({
    title: z.string().min(3, "Title must be at least three characters"),
    location: z.string().min(3, "Location must be at least 3 characters").max(400,"Loation must be less than 400 characters"),
    description: z.string().min(3, "Discription must be at least three characters").max(400, "Description must be less than 400 characters"),
    imageUrl: z.string(),
    price: z.string()
        .trim()
        .refine((val) => /^\d+$/.test(val), "Price must contain only numbers")
        .refine((val) => val.length <= 4, "Price cannot be more than 4 digits")
        .refine((val) => Number(val) >= 10, "Price must be at least 10 Birr")
        .refine((val) => Number(val) <= 1000, "Price must be less than 1000 Birr"),
    paymentDeadline: z.string(),
    accountNumber:z.string()
})