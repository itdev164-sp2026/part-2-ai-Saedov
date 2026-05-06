"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { projectSchema } from "@/lib/schemas";

export async function createProject(formData: unknown) {
  const parsed = projectSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false as const, error: "Invalid form data" };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("projects").insert({
    title: parsed.data.title,
    description: parsed.data.description,
    status: parsed.data.status.toLowerCase(),
  });

  if (error) {
    return { success: false as const, error: error.message };
  }

  revalidatePath("/projects");
  return { success: true as const };
}
