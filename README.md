## Anas Abdul El – Portfolio

This is a modern, animated developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **TailwindCSS 4**, showcasing the work and skills of **Anas Abdul El (Web Developer)**.  
The site is fully responsive, uses smooth motion effects, and is designed to highlight projects, skills, and ways to get in touch.

### Features

- **Hero section**: Animated landing hero that introduces Anas, highlights the role (Web Developer), and provides quick calls to action (view work, contact).
- **Sticky navbar**: Glassmorphism-style fixed navbar with smooth scrolling to each section (`About`, `Tech Stack`, `Work`, `Contact`) and a quick link to the GitHub profile.
- **Skills section**: Cards describing key focus areas like frontend development, UI/UX design, performance, and modern tools, each with subtle motion and gradients.
- **Tech stack section**: Categorized list of technologies used across frontend, backend, authentication/security, and deployment/tools.
- **Projects section**: Grid of featured projects with screenshots, tech tags, and direct links to **Code** (GitHub) and **Demo** (live Vercel deployments).
- **Contact section**: Call-to-action to collaborate, with a mail button and social profile links.
- **Footer**: Simple footer crediting Anas and the year.

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI & Styling**:
  - React 19
  - TailwindCSS 4
  - shadcn/ui components (e.g. `Button`)
  - Custom `globals.css` theme using OKLCH colors and dark mode tokens
- **Animation**:
  - `motion` (Framer-style animation API)
  - Animated gradients, floating blobs, and scroll-based reveal effects
- **Icons**: `lucide-react`
- **Utilities**:
  - `class-variance-authority` and `tailwind-merge` via `cn` helper
  - `clsx` for conditional class names

### App Structure

- `src/app/layout.tsx`  
  Root layout, sets up the HTML shell, imports `globals.css`, and defines basic metadata.

- `src/app/page.tsx`  
  Main page that composes the sections in order:
  - `Navbar`
  - `HeroSection`
  - `SkillsSection`
  - `TechStackSection`
  - `ProjectsSection`
  - `ContactSection`
  - `Footer`

- `src/components/Navbar.tsx`  
  Fixed, animated navigation bar with:
  - Brand/logo (`Anas.dev`)
  - Anchor links to `#skills`, `#tech`, `#work`, and `#contact`
  - GitHub shortcut button.

- `src/components/hero-section.tsx`  
  Full-screen hero with animated background blobs, intro text, role, short tagline, CTA buttons (`Get in touch`, `View work`), and social links (GitHub and Email).

- `src/components/skills-sections.tsx`  
  “What I Do” cards describing Anas’s key strengths with subtle motion and gradient backgrounds.

- `src/components/tech-stack-section.tsx`  
  “Tech Stack” grid broken into:
  - Frontend (Next.js, React, TypeScript, TailwindCSS, shadcn/ui, animation libraries)
  - Backend (Next.js server actions, API routes, Prisma, PostgreSQL/Neon)
  - Authentication & Security (Auth.js, bcrypt, Zod)
  - Deployment & Tools (Vercel, Git, GitHub)

- `src/components/projects-section.tsx`  
  “Featured Work” grid showcasing multiple projects (Portfolio, E‑Commerce Platform, Gym SaaS, Landing Page, Notes App) with:
  - Screenshot image
  - Short description
  - Tech tags
  - Links to GitHub repo and live demo.

- `src/components/contactUs.tsx`  
  Contact section with:
  - Heading (“Let’s Work Together”)
  - Short invitation text
  - Primary email call-to-action button
  - Social links (GitHub, Twitter, LinkedIn).

- `src/components/footer.tsx`  
  Simple footer with attribution text and year.

- `src/components/ui/button.tsx` & `src/lib/utils.ts`  
  Reusable button component built with `class-variance-authority`, `radix-ui` `Slot`, and a `cn` utility for merging class names.

### Getting Started

#### Prerequisites

- Node.js **18+** (recommended latest LTS)
- pnpm, npm, or yarn installed globally

#### Installation

1. Clone the repository:
   ```bash
   git clone <this-repo-url>
   cd anas-pro
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

#### Development

Start the local development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Then open `http://localhost:3000` in your browser.

#### Production Build

```bash
npm run build
npm start
```

### Customization

- **Content**:  
  Edit the copy, sections, and links in the components under `src/components`:
  - Hero text and CTAs in `hero-section.tsx`
  - Skill descriptions in `skills-sections.tsx`
  - Tech categories and tools in `tech-stack-section.tsx`
  - Projects, tags, GitHub links, and demo URLs in `projects-section.tsx`
  - Contact email and social URLs in `contactUs.tsx`

- **Styling & Theme**:  
  Adjust colors, radii, and global styles in `src/app/globals.css`.  
  Tailwind-related utilities and themes are declared via `@import "tailwindcss";` and the custom `@theme inline` definition.

### Deployment

The app is designed to be deployed easily on **Vercel**:

1. Push your repository to GitHub.
2. Connect the repo to Vercel.
3. Use the default Next.js 16 settings (build command: `next build`, output: `.next`).

After deployment, you can use the live URL as your portfolio link.

### License

This project is intended as a personal portfolio for **Anas Abdul El**.  
Feel free to reference the structure or ideas, but please avoid copying it verbatim without attribution.