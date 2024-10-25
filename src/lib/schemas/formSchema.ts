import { z } from "zod";

export const SignUpSchema = z
	.object({
		confirmPassword: z.string().min(1, "Password confirmation is required!"),
		email: z.string().email("Please enter a valid email!"),
		password: z
			.string()
			.min(8, "8 characters minimum")
			.regex(/[^\w\s]/, "at least one special characters!"),
		first_name: z
			.string()
			.min(3, "FirstName must be at least 3 characters!")
			.max(20, "FirstName must not be more than 20 characters long"),
		last_name: z
			.string()
			.min(3, "LastName must be at least 3 characters!")
			.max(20, "LastName must not be more than 20 characters long"),
	})
	.strict()
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password doesn't not match",
		path: ["confirmPassword"],
	});
