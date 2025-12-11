import * as z from "zod";

export const CategoryFormSchema = z.object({
  ame: z
    .string()
    .min(1, { message: "Category name is required." }) // replaces required_error
    .min(2, { message: "Category name must be at least 2 characters long." })
    .max(50, { message: "Category name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z0-9\s'&-]+$/, {
      message:
        "Only letters, numbers, and spaces are allowed in the category name.",
    }),
});
