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
