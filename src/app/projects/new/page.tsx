import { ProjectForm } from "@/components/project-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">New Project</h1>
        <p className="text-muted-foreground">
          Fill in the details below to create a new project.
        </p>
      </section>

      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>
            Enter a title, description, and status for your new project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectForm />
        </CardContent>
      </Card>
    </div>
  )
}
