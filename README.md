# Healing Souls with Amit

A premium, trust-driven consulting website for emotional listening and life guidance. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Ultra-Premium Design**: Dark luxury theme with elegant typography and smooth animations
- **Privacy-First**: All communications via WhatsApp only
- **No Backend Required**: Pure frontend - no database, no forms, no data collection
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Metadata and structured for search visibility
- **Accessibility**: Clean, semantic HTML with proper ARIA labels
- **Production Ready**: Professional code structure and best practices

## 📁 Project Structure

```
healing-souls/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── about/page.tsx          # About Amit page
│   ├── services/page.tsx       # Services page
│   ├── reviews/page.tsx        # Anonymous reviews page
│   └── contact/page.tsx        # Contact/access page
├── components/
│   ├── Navigation.tsx          # Navigation bar component
│   ├── Footer.tsx              # Footer component
│   └── LegalDisclaimer.tsx     # Legal disclaimer component
├── public/                     # Static assets (if needed)
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind customization
├── next.config.js              # Next.js config
├── postcss.config.js           # PostCSS config
└── .eslintrc.json              # ESLint rules
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0B0B0C` (Near-Black)
- **Secondary Background**: `#121214` (Very Dark Grey)
- **Primary Text**: `#F5F5F5` (Off-White)
- **Muted Text**: `#A1A1AA` (Grey)
- **Accent**: `#C6A664` (Muted Gold)
- **Borders**: `rgba(255,255,255,0.08)` (Subtle Glass Effect)

### Border Radius
- **Standard**: `14px` (rounded-xl)
- **Extra**: `20px` (rounded-2xl)

### Typography
- **Font**: System UI (native stack)
- **Weights**: Light (300), Medium (500), Semibold (600)
- **Line Heights**: Generous spacing for readability

### Components
- **Rounded Corners**: `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- **Spacing**: `max-w-7xl` containers with padding
- **Transitions**: All 0.3s ease for smooth interactions
- **Hover States**: Subtle scale and color changes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd "c:\Users\AMIT SHARMA\OneDrive\Pictures\Desktop\NEW PROJECT"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Key Pages

### Home (`/`)
- Hero section with compelling headline
- Trust indicators
- Services preview
- CTA buttons linking to WhatsApp

### About (`/about`)
- Amit's story and approach
- Core values and philosophy
- What this service is NOT (clarity on scope)
- CTA for private sessions

### Services (`/services`)
- Four main service categories:
  - Breakup & Heartache Listening
  - Divorce Emotional Support
  - Trauma & Emotional Overload
  - Life Direction & Clarity
- Each service includes what clients feel, how it helps, and what they gain
- Private pricing discussion model

### Reviews (`/reviews`)
- Anonymous testimonials (8 reviews)
- Complete privacy maintained
- Impact stories organized by theme
- Privacy and ethics statement

### Contact (`/contact`)
- WhatsApp-only connection
- FAQ section
- Privacy guarantees
- No forms, no data collection

## 🔒 Privacy & Security

- **No Backend**: No data stored anywhere
- **No Forms**: No information collection
- **WhatsApp Only**: Direct messaging at +91 9266735676
- **Encrypted**: WhatsApp's end-to-end encryption
- **Anonymous**: Clients remain completely anonymous
- **No Records**: Conversations not documented or archived

## 📱 WhatsApp Integration

The entire platform directs users to WhatsApp using:
```
https://wa.me/9266735676
```

This link opens WhatsApp directly (desktop app or mobile).

## ⚙️ Build & Deploy

### Build for Production
```bash
npm run build
npm run start
```

### Deploy Options
- **Vercel** (Recommended): Next.js native hosting
  ```bash
  npm install -g vercel
  vercel
  ```
- **Netlify**: Support for Next.js apps
- **AWS Amplify**: Serverless deployment
- **Self-hosted**: Any Node.js compatible server

## 📋 Features Checklist

- ✅ Ultra-premium dark theme
- ✅ WhatsApp integration throughout
- ✅ No prices displayed
- ✅ Legal disclaimer on all pages
- ✅ Anonymous reviews with 5 testimonials
- ✅ Responsive mobile design
- ✅ Smooth animations and transitions
- ✅ SEO optimized metadata
- ✅ No backend/database required
- ✅ Production-ready code

## 🔧 Customization

### Change WhatsApp Number
Edit the `WHATSAPP_URL` variable in:
- `components/Navigation.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/reviews/page.tsx`
- `app/contact/page.tsx`

### Update Colors
Modify in `tailwind.config.js`:
```javascript
colors: {
  'accent-gold': '#d4af37',  // Your color here
}
```

### Add More Reviews
Edit the `REVIEWS` array in `app/reviews/page.tsx`.

## 📞 Support

For issues or customization needs, the code is clean and well-documented for easy modifications.

## 📄 Legal Note

This platform offers **emotional listening and life guidance only**. It does not provide medical, psychological, psychiatric, or legal advice. See the legal disclaimer displayed on all pages.

---

Built with ❤️ for emotional wellness and private guidance.
