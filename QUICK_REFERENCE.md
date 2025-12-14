# 📋 Quick Reference - Healing Souls with Amit

## 🔗 Important Links

### WhatsApp Contact
- **Main Number**: +91 9266735676
- **WhatsApp Link**: https://wa.me/9266735676
- **Used in**: Navigation, all pages, CTAs

### Pages
- **Home**: `/` - Landing page with hero
- **About**: `/about` - Amit's story and values
- **Services**: `/services` - 4 detailed service offerings
- **Reviews**: `/reviews` - 8 anonymous testimonials
- **Contact**: `/contact` - WhatsApp + FAQ

---

## 🎨 Design Colors

| Use | Color | Hex | Name |
|-----|-------|-----|------|
| Primary Background | Near Black | #0B0B0C | Base |
| Secondary Background | Very Dark Grey | #121214 | Card/Surface |
| Borders | Subtle White | rgba(255,255,255,0.08) | Glass Effect |
| Hover State | Dark Grey | #1a1a1e | Interactive |
| Primary Text | Off White | #F5F5F5 | Main Text |
| Muted Text | Grey | #A1A1AA | Secondary Text |
| Accent | Muted Gold | #C6A664 | Luxury Touch |

## 🎯 Border Radius

| Use | Value |
|-----|-------|
| Standard Rounded | `rounded-xl` = 14px |
| Extra Rounded | `rounded-2xl` = 20px |

---

## 📁 Key Files to Edit

### Content Changes
- **Services**: `app/services/page.tsx` (lines 20-100+)
- **Reviews**: `app/reviews/page.tsx` (lines 18-80)
- **Home Text**: `app/page.tsx` (lines 1-150)
- **About Text**: `app/about/page.tsx` (lines 1-150)

### Configuration
- **Colors**: `tailwind.config.js` (colors section)
- **Fonts**: `tailwind.config.js` (fontFamily section)
- **Metadata**: `app/layout.tsx` (metadata object)

### Components
- **Navigation**: `components/Navigation.tsx`
- **Footer**: `components/Footer.tsx`
- **Disclaimer**: `components/LegalDisclaimer.tsx`

---

## 📱 Components Overview

### Navigation Component
```tsx
// Always visible at top
// Contains: Logo + Links + WhatsApp CTA
// File: components/Navigation.tsx
```

### Footer Component
```tsx
// Always at bottom
// Contains: Links + WhatsApp CTA + Copyright
// File: components/Footer.tsx
```

### Legal Disclaimer
```tsx
// Appears before footer
// Legal statement about services
// File: components/LegalDisclaimer.tsx
```

---

## 🎯 Page Structure

### Home Page Structure
1. Navigation (sticky)
2. Hero Section (hero image + headline + CTAs)
3. Why I'm Here (text + image)
4. Services Preview (4 cards)
5. CTA Section
6. Legal Disclaimer
7. Footer

### Services Page Structure
1. Navigation
2. Hero Section
3. 4 Service Cards (alternating layout):
   - Card 1: Text + Image (left)
   - Card 2: Image + Text (right)
   - Card 3: Text + Image (left)
   - Card 4: Image + Text (right)
4. Pricing Section
5. What to Expect (3 steps)
6. Guarantee (4 promises)
7. Final CTA
8. Legal Disclaimer
9. Footer

### Other Pages
- Similar structure with hero + content + CTA + legal + footer

---

## 🔄 WhatsApp Integration Points

| Page | Component | Button Text |
|------|-----------|------------|
| Navigation | Navigation.tsx | "Speak Confidentially" |
| Home | page.tsx | "Request a Private Session" + "Speak Confidentially" |
| About | page.tsx | "Request a Private Session" |
| Services | page.tsx | "Request a Confidential Session" (on each card) |
| Reviews | page.tsx | "Start Your Private Conversation" |
| Contact | page.tsx | "Message Me on WhatsApp" + "Send Me a Message Now" |
| Footer | Footer.tsx | "Request a Session on WhatsApp" |

---

## 🎨 Tailwind Classes Used

### Text Sizing
- `text-sm` - Small text (12px)
- `text-lg` - Large text (18px)
- `text-xl` - XL text (20px)
- `text-2xl` - 2XL text (24px)
- `text-4xl` - 4XL text (36px)
- `text-5xl` - 5XL text (48px)
- `text-6xl` - 6XL text (60px)

### Spacing
- `px-4`, `px-6`, `px-8`, `px-10`, `px-12` - Horizontal padding
- `py-8`, `py-12`, `py-16`, `py-20` - Vertical padding
- `gap-4`, `gap-6`, `gap-8`, `gap-12` - Grid gaps
- `mb-4`, `mb-6`, `mb-8`, `mb-10` - Bottom margins

### Borders & Rounding
- `border` - 1px border
- `border-2` - 2px border
- `rounded-xl` - 11px rounded corners
- `rounded-2xl` - 16px rounded corners
- `rounded-3xl` - 24px rounded corners
- `rounded-full` - 50% (circles)

### Colors (Custom)
- `bg-dark` - #0f0f0f
- `bg-dark-card` - #1a1a1a
- `border-dark-border` - #2d2d2d
- `text-accent-gold` - #d4af37
- `text-text-light` - #f5f5f5
- `text-text-muted` - #a0a0a0

---

## 📝 Content Examples

### Trust Indicators (Home)
```typescript
{
  icon: '🔒',
  label: '100% Confidential'
}
```

### Service Card
```typescript
{
  title: 'Breakup & Heartache Listening',
  whatYouFeel: ['Pain', 'Confusion'],
  howItHelps: ['Safe space', 'Being heard'],
  whatYouGain: ['Clarity', 'Hope'],
}
```

### Review
```typescript
{
  initials: 'S.M.',
  location: 'Mumbai',
  title: 'Breakup Support',
  quote: 'After my relationship ended...',
  impact: 'Emotional Relief',
}
```

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 🌐 Deploy Commands (Vercel)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📊 Page Load Sizes (Production Build)

```
Home: 3.06 kB
About: 1.5 kB
Services: 1.5 kB
Reviews: 1.5 kB
Contact: 1.5 kB
First Load JS: ~109 kB
```

---

## 🔒 Privacy Checklist

- ✅ No forms storing data
- ✅ No backend database
- ✅ No analytics (unless added)
- ✅ No external tracking
- ✅ WhatsApp only (encrypted)
- ✅ GDPR compliant (no EU data)
- ✅ Legal disclaimer on all pages
- ✅ Anonymous reviews only
- ✅ No email collection
- ✅ No cookies (except session)

---

## 🎯 SEO Elements

### Meta Tags
- Title: "Healing Souls with Amit | Emotional Listening & Life Guidance"
- Description: "Private, confidential emotional listening and life guidance..."
- Keywords: "emotional support, life guidance, breakup support, etc."

### Social Sharing (Open Graph)
- og:type: website
- og:title: Page title
- og:description: Description
- og:url: Page URL

### Twitter Card
- card: summary_large_image
- title: Page title
- description: Description

---

## 📞 Contact Information

### Primary Contact
- **WhatsApp**: https://wa.me/9266735676
- **Format**: Messaging only
- **Availability**: 24/7 (client responds when available)

### No Other Contacts Displayed
- No email
- No phone number
- No address
- No form
- WhatsApp only

---

## 🎓 Learning Resources

### Official Docs
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev
- TypeScript: https://typescriptlang.org

### Deployment
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- AWS Amplify: https://docs.amplify.aws

---

## 💡 Tips & Tricks

### Customizing Services
Edit `app/services/page.tsx` SERVICES array to add/remove/modify services.

### Adding Reviews
Edit `app/reviews/page.tsx` REVIEWS array to add new testimonials.

### Changing Colors
All custom colors are in `tailwind.config.js` under `theme.extend.colors`.

### Updating Logo
Add logo SVG to `app/layout.tsx` Navigation component.

### Adding Images
Place in `public/` folder and reference as `/image-name.jpg`.

---

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 in use
```bash
# On Windows PowerShell
netstat -ano | findstr :3000
# Kill process using that port
```

### Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Rebuild project

### WhatsApp links not working
- Verify phone number: +91 9266735676
- Check URL format: https://wa.me/NUMBER
- Test in mobile browser

---

## 📈 Performance Metrics

### Target Metrics
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

### Current Status
✅ Static pages (fastest)
✅ Optimized images
✅ Minified CSS/JS
✅ Code splitting enabled

---

## 🎁 What's Included

✅ 5 fully designed pages
✅ Reusable components
✅ Complete dark theme
✅ Mobile responsive
✅ Production ready
✅ SEO optimized
✅ All documentation
✅ Deployment guide

---

## 🚀 Next Steps

1. **Deploy** - Choose Vercel or Netlify (5 min)
2. **Connect Domain** - Point DNS to hosting (24h)
3. **Monitor** - Check analytics
4. **Maintain** - Update as needed
5. **Celebrate** - You're live! 🎉

---

## 📞 Need Help?

Refer to:
- `README.md` - Full documentation
- `PROJECT_SUMMARY.md` - Project overview
- `DEPLOYMENT.md` - Deployment guide
- Code comments in `.tsx` files

---

**Status**: 🟢 Production Ready
**Version**: 1.0.0
**Last Updated**: December 14, 2025

---

Built with ❤️ for emotional wellness
