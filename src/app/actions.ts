"use server"

import { supabase } from "@/lib/supabase"
import { projectSchema } from "@/lib/schemas"

export async function createProject(formData: unknown) {
  const parsed = projectSchema.safeParse(formData)

  if (!parsed.success) {
    return { success: false as const, error: "Invalid form data" }
  }

  const { error } = await supabase.from("projects").insert({
    title: parsed.data.title,
    description: parsed.data.description,
    status: parsed.data.status.toLowerCase(),
  })

  if (error) {
    return { success: false as const, error: error.message }
  }

  return { success: true as const }
}
