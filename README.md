# Gym App

A full-stack gym management web application built with Next.js 15. Supports class scheduling, booking, role-based access, and email authentication — designed for gyms to manage members, coaches, and classes from a single platform.

---

## Features

- **Authentication** — Google OAuth and magic-link email sign-in via NextAuth.js and Resend
- **Role-based access** — Three roles: `MEMBER`, `COACH`, and `ADMIN`, each with scoped views and permissions
- **Class booking** — Members can browse and book gym classes with real-time slot availability
- **Coach portal** — Coaches can view and manage classes assigned to them
- **Admin panel** — Full CRUD control over classes, including creating, editing, and deleting
- **Contact form** — Lead generation form with validation via React Hook Form and Zod
- **Animations** — Smooth page transitions and scroll reveals powered by Framer Motion
- **Analytics** — Google Analytics 4 integration for page views and custom events
- **PWA ready** — Progressive Web App support via next-pwa
- **SEO** — Dynamic sitemap and robots.txt routes

---

## Tech Stack

| Layer           | Technology                              |
| --------------- | --------------------------------------- |
| Framework       | Next.js 15 (App Router, JavaScript)     |
| Styling         | Tailwind CSS                            |
| Database        | PostgreSQL via Prisma ORM               |
| Auth            | NextAuth.js (Google + Email/Magic Link) |
| Email           | Resend                                  |
| Forms           | React Hook Form + Zod                   |
| Animations      | Framer Motion                           |
| Notifications   | React Hot Toast                         |
| Testing         | Jest + Cypress                          |
| Linting         | ESLint + Prettier + Husky + lint-staged |
| Package Manager | pnpm                                    |

---

## Project Structure

```
gym-app/
├── prisma/
│   ├── schema.prisma        # Database schema (User, GymClass, Booking)
│   └── seed.js              # Database seeding script
├── src/
│   ├── app/
│   │   ├── page.js          # Homepage (Hero, About, Classes, Membership, Contact)
│   │   ├── book/            # Class booking page
│   │   ├── coach/           # Coach dashboard
│   │   ├── account/         # Member account page
│   │   ├── api/
│   │   │   ├── auth/        # NextAuth route handler
│   │   │   ├── bookings/    # Booking API
│   │   │   ├── classes/     # Public classes API
│   │   │   ├── contact/     # Contact form API
│   │   │   └── admin/       # Admin class management API
│   │   ├── sitemap.xml/     # Dynamic sitemap
│   │   └── robots.txt/      # Dynamic robots.txt
│   ├── components/
│   │   ├── sections/        # Page sections (Hero, About, Classes, etc.)
│   │   └── ...              # Shared UI components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Auth, Prisma client, analytics helpers
├── cypress/                 # End-to-end tests
├── tests/                   # Unit tests
└── public/                  # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vukkt/gym-app.git
   cd gym-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root:

   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/gymapp

   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_here

   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Resend (email)
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM=noreply@yourdomain.com

   # Google Analytics
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Set up the database**

   ```bash
   pnpm prisma migrate dev
   pnpm prisma db seed
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `pnpm dev`      | Start development server            |
| `pnpm build`    | Build for production                |
| `pnpm start`    | Start production server             |
| `pnpm test`     | Run unit tests with Jest            |
| `pnpm e2e`      | Open Cypress for end-to-end testing |
| `pnpm e2e:ci`   | Run Cypress headlessly in CI        |
| `pnpm lint`     | Lint with ESLint                    |
| `pnpm lint:fix` | Auto-fix lint errors                |
| `pnpm format`   | Format all files with Prettier      |

---

## Data Model

```
User         — id, email, name, role (MEMBER | COACH | ADMIN)
GymClass     — id, title, startAt, duration, slots
Booking      — id, userId, classId, status
Account      — NextAuth OAuth account linkage
Session      — NextAuth session management
```

---

## Roles & Permissions

| Feature               | Member | Coach | Admin |
| --------------------- | :----: | :---: | :---: |
| Browse classes        |   ✓    |   ✓   |   ✓   |
| Book a class          |   ✓    |       |       |
| View own bookings     |   ✓    |   ✓   |   ✓   |
| Manage own classes    |        |   ✓   |   ✓   |
| Create/delete classes |        |       |   ✓   |

---

## Deployment

This app is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add all environment variables from `.env.local` in the Vercel dashboard
4. Deploy

For other platforms (Railway, Render, DigitalOcean), ensure your environment supports Node.js 18+ and has a reachable PostgreSQL instance.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).
