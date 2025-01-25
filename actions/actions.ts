"use server";

import { profileSchema, validatedWithZod } from "@/utils/schemas";

const renderError = (error: unknown): { message: string } => {
  return { message: error instanceof Error ? error.message : "An Error!!!" };
};

export const createProfileAction = async (prev: string, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateField = validatedWithZod(profileSchema, rawData);
    return { message: "Create Profile Success!!!" };
  } catch (error) {
    return renderError(error);
  }
};
