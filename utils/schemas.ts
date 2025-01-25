
import { z, ZodSchema } from "zod";



export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "firstname ต้องมากกว่า 2" }),
  lastName: z.string().min(2, { message: "lastname ต้องมากกว่า 2" }),
  userName: z.string().min(2, { message: "username ต้องมากกว่า 2" }),
});

export const validatedWithZod = <T>(schema:ZodSchema<T>, data:unknown):T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};