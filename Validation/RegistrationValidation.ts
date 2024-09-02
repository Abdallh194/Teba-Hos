import { z } from "zod";

const RegisterSchema = z
  .object({
    FirstName: z.string().min(3, { message: "First Name is Required" }),
    LastName: z.string().min(3, { message: "Last Name is Required" }),
    Phone: z.string().min(6, { message: "Mobile Phone is Required" }),
    Address: z.string().min(6, { message: "Address is Required" }),
    NiD: z.string().min(10, { message: "National ID is Required" }),
    Gender: z.string().min(3, { message: "Gender is Required" }),
    Email: z.string().min(5, { message: "Email Is Required" }).email(),
    Password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.Password === data.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

type RegisterType = z.infer<typeof RegisterSchema>;
export { RegisterSchema, type RegisterType };
