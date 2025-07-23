# Gym App 🏋️‍♂️

A fast, mobile-first gym website built with Next.js 14 and Tailwind CSS. This modern 5-page site is designed to help gyms and fitness centers book classes, collect leads, and track analytics effectively.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 App Router and Tailwind CSS
- **Mobile-First Design**: Optimized for all devices with responsive layouts
- **Class Booking System**: Calendly-ready booking integration
- **Lead Generation**: Contact forms with validation for member acquisition
- **Analytics Ready**: Google Analytics 4 integration for page and event tracking
- **Performance Optimized**: Next.js image optimizations and best practices
- **Form Validation**: React Hook Form with Zod schema validation

## 📱 Pages Overview

| Page    | Purpose                                                     |
| ------- | ----------------------------------------------------------- |
| `/`     | Hero section, About, Classes, Membership plans, and Contact |
| `/book` | Class booking interface (Calendly integration ready)        |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, JavaScript)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Images**: Next.js Image component for optimization
- **Analytics**: Google Analytics 4
- **Package Manager**: pnpm

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

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

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Add your Google Analytics ID to `.env.local`:

   ```env
   NEXT_PUBLIC_GA_ID=your_ga_tracking_id_here
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Analytics Setup

This app comes with Google Analytics 4 integration. To enable tracking:

1. Create a GA4 property in Google Analytics
2. Copy your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to your `.env.local` file as `NEXT_PUBLIC_GA_ID`

The app tracks both page views and custom events for better insights into user behavior.

## 🎨 Customization

### Styling

The app uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Components in the `/components` directory
- Global styles in `/styles/globals.css`

### Content

Update gym-specific content in:

- Hero section text and images
- Class schedules and descriptions
- Membership plans and pricing
- Contact information

### Booking Integration

The `/book` page is ready for Calendly integration. Simply:

1. Create your Calendly account
2. Replace the placeholder with your Calendly embed code
3. Customize the booking flow as needed

## 📂 Project Structure

```
gym-app/
├── app/                 # Next.js 14 App Router
│   ├── page.js         # Homepage
│   ├── book/           # Booking page
│   └── layout.js       # Root layout
├── components/         # Reusable components
├── public/            # Static assets
├── styles/            # Global styles
├── .env.local.example # Environment variables template
└── tailwind.config.js # Tailwind configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

This Next.js app can be deployed to any platform supporting Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help setting up the project, please:

- Open an issue on GitHub
- Check the Next.js documentation for framework-specific questions
- Refer to Tailwind CSS docs for styling help

## 🎯 Roadmap

- [ ] Payment integration for membership plans
- [ ] Member dashboard and profiles
- [ ] Class scheduling system
- [ ] Trainer profiles and booking
- [ ] Mobile app development
- [ ] Advanced analytics dashboard

---

**Built with ❤️ for the fitness community**
