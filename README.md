# Tapas Growth Inc. Website

A premium landing page for Tapas Growth Inc., a consumer app growth consulting company. Built with Next.js 14+, Tailwind CSS, and shadcn/ui components.

## 🍽️ Features

- **Tapas Restaurant Theme**: Unique design that presents growth services as a menu
- **Modern Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS v4
- **shadcn/ui Components**: Beautiful, accessible components
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Built for Vercel Edge Network
- **Dark Mode Support**: Evening restaurant ambiance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tapasgrowth-website.git
cd tapasgrowth-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
/app
  layout.tsx        # Root layout with metadata
  page.tsx          # Home page
  globals.css       # Global styles and theme
/components
  /ui               # shadcn/ui components
  /sections         # Page sections (Hero, Services, etc.)
/public             # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Terracotta/Rust (Spanish tiles)
- **Secondary**: Warm Gold
- **Accent**: Deep Red (Spanish wine)
- **Background**: Cream/Parchment
- **Dark Mode**: Charcoal with warm accents

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding Components

This project uses shadcn/ui. To add new components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

## 🚢 Deployment

The site is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

The `vercel.json` configuration is already included.

## 📝 License

© 2024 Tapas Growth Inc. All rights reserved.

## 🤝 Contact

For inquiries about growth consulting services:
- Email: hello@tapasgrowth.com
- Website: [tapasgrowth.com](https://tapasgrowth.com)