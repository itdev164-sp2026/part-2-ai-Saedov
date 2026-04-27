# Prompting Log — ITDEV-164

## Activity 1: The AI-Native Launchpad

### Prompt 1

**What I asked:**

> Look at the existing src/app/page.tsx and src/app/layout.tsx in this project.
> Replace the current homepage content with a "Developer Profile" page for me.
> It should include:

- My name: Sebastian Aedo
- A short bio: Current IT Web and Software Developer student at Milwaukee Area Technical College.
- A "Skills" section that displays at least 6 skills in a responsive
  Tailwind CSS grid (use cards with icons from lucide-react): Leadership, Time Management, Relationship Building, Detail Oriented, Problem Solving, Teamwork, Adaptability, Interpersonal Communication.

Keep the existing Header component and layout structure intact.
If you need to create new components, go ahead and create them in
the src/components/ folder.

**What happened:**

> Yes, it did understand me immediately. It modified page.tsx adding a developer profile section with my name, bio and skills. It also updated the title and description metadata to match.

### Prompt 2

**What I asked:**

> (Paste your second prompt — this could be a follow-up correction or
> a completely new request)

**What happened:**

> (Describe the result. Did you have to "steer" the Agent?
> What did you learn about writing effective prompts?)

### Reflection

> I've been using copilot for some personals project for a couple months already and it goes really smooth as long as the prompt is correct. I have been also encourage to use AI to work on my internship project and in another class I have right now so I am pretty familiar with the experience

## Activity 2: Building the Dashboard Shell

### Prompt 1

**What I asked:**

Using the shadcn sidebar components that are now in my src/components/ui/ folder,
create a professional, collapsible dashboard layout. It should include:

1. A sidebar (src/components/app-sidebar.tsx) with navigation links for:
   - Overview (use the Home icon from lucide-react)
   - Projects (use the FolderOpen icon)
   - Settings (use the Settings icon)

2. A top navigation area with breadcrumbs showing the current page.

3. A main content area that wraps the existing page content.

4. Update src/app/layout.tsx to use the new SidebarProvider and sidebar layout.

Important: Preserve the Developer Profile content from Activity 1 in
src/app/page.tsx — it should appear in the main content area of the new layout.
Keep the dark mode toggle working.

**What happened:**

On my case, the agent was working on one file at the time and asking me I I authorized it to modify each file (It gave me the option to just authorized everything for this session but I felt like for this activity it would be better to review each one). The agent did everything I asked for how it was supposed to. It did made a mistake that created an error when running the server but I asked it to fix it.

### Prompt 2

**What I asked:**

Fix this error: Runtime Error

`Tooltip` must be used within `TooltipProvider`

src/components/ui/tooltip.tsx (24:10) @ Tooltip

22 | ...props
23 | }: React.ComponentProps<typeof TooltipPrimitive.Root>) {

> 24 | return <TooltipPrimitive.Root data-slot="tooltip" {...props} />

     |          ^

25 | }
26 |
27 | function TooltipTrigger({
Call Stack
19

Show 13 ignore-listed frame(s)
Tooltip
src/components/ui/tooltip.tsx (24:10)
SidebarMenuButton
src/components/ui/sidebar.tsx (528:5)
<unknown>
src/components/app-sidebar.tsx (57:19)
Array.map
<anonymous>
AppSidebar
src/components/app-sidebar.tsx (55:25)
RootLayout
src\app\layout.tsx (39:13)

**What happened:**

The agent fixed the error at the first try and everything worked perfectly after it did.

### Reflection

The agent didn't make any mistake when following instructions, it completely preserved the work made on Activity 1. The only mistake was an error that that it described like "it forgot to use it", but it recognized it right away and fixed it with no problems.
Giving the agent context is essential when trying to automatized process and it helps the agent to not make mistakes, or at least to create something as close as possible to what you want.

## Activity 3: Server-Side Data with Supabase

### Prompt 1

**What I asked:**
Using the Supabase client at src/lib/supabase.ts, create a new Server Component
at src/app/projects/page.tsx that:

1. Fetches all records from the "projects" table in Supabase
2. Displays them in a professional layout using shadcn/ui Card components
   (run `npx shadcn@latest add card` if needed)
3. Each card should show the project title, description, and a status badge
4. The status badge should be color-coded:
   - "active" = green
   - "completed" = blue
   - "archived" = gray

Use @workspace context to match the styling of our existing Dashboard.
This must be a React Server Component (async function, no "use client").
Do NOT use useEffect or useState for data fetching.

**What happened:**
The agent created everything as it was supposed to, it used async/await and everything is working really good.

### Prompt 2

I didn't have to do a second prompt, the agent automatically fixed the bread crumbs on the first prompt and, since it didn't make any mistakes, I didn't have to ask for anything else.

### Reflection

It is definitely faster and easier to fetch data ratter than work with useEffect. Is faster and more efficient. I have been working with it on personal projects and it always surprise me how easy is to set everything up and how good it works.

## Activity 4: AI-Driven Forms & Validation

### Prompt 1

**What I asked:**

Create a Zod validation schema in a new file src/lib/schemas.ts for a "Project"
with the following fields:

- title: string, minimum 3 characters, with a custom error message
  "Title must be at least 3 characters"
- description: string, minimum 10 characters, with a custom error message
  "Description must be at least 10 characters"
- status: enum with values "Planning", "Active", "Completed"

Export the schema and also export the inferred TypeScript type using z.infer.

**What happened:**

The agent created the schema correctly, it looks exactly like the example on the activity instructions.

### Prompt 2

**What I asked:**

Using the Zod schema from src/lib/schemas.ts, do the following:

1. Create a professional form component at src/components/project-form.tsx
   using shadcn/ui Form, Input, Textarea, and a Select or radio group for status.
   The form should:
   - Use react-hook-form with the Zod resolver for validation
   - Show inline error messages under each field when validation fails
   - Have a "Create Project" submit button
   - Show a toast notification on successful submission

2. Create a Server Action at src/app/actions.ts that:
   - Has "use server" at the top of the file
   - Accepts the form data
   - Validates it again with the Zod schema (server-side validation)
   - Inserts the validated data into the Supabase "projects" table
   - Returns a success or error response

3. Create a new page at src/app/projects/new/page.tsx that renders
   the project form within the dashboard layout.

Use @workspace to match the existing project styling.

**What happened:**

The agent did everything right, it took longer than other times but it connected the form submission to the server action correctly and it also included sever-side Zod validation. Everything works perfect.
The only thing I have to add was the RLS policy to create a new row. The RLS policy we had before it only allowed users to read but not to insert new rows. Nothing to do with the agent (at least that is what I think).

### Reflection

I believe it is definitely more efficient, easy and safer to create an schema. It makes way more sense than having a lot of if statements with more room for errors. Since it verifies that the user's data matches the rules defined on the Zod Schema, everything that doesn't math it would not get into the database.
