# 🚀 Deployment Guide - Healing Souls with Amit

## Quick Start Deployment

Your website is production-ready and can be deployed to the internet in minutes.

---

## Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- Next.js native hosting
- Automatic deployments
- Free tier available
- CDN included
- Custom domain support

### Steps:

1. **Sign up for free:**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "GitHub" or "Email"

2. **Deploy your project:**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Follow prompts:**
   - Link to your project
   - Set project name
   - Select framework: "Next.js"
   - Confirm

4. **Get your URL:**
   - You'll receive a live link
   - Site is live immediately!

5. **Connect your domain (optional):**
   - Add domain in Vercel dashboard
   - Update DNS settings
   - ~24 hours to activate

---

## Option 2: Netlify (Easy Alternative)

### Why Netlify?
- GitHub integration
- Auto-deploys on push
- Free SSL
- Custom domain
- Analytics included

### Steps:

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository

3. **Configure build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Deploy

4. **Get your URL:**
   - Netlify provides a unique URL
   - Site is live!

---

## Option 3: AWS Amplify

### Why AWS Amplify?
- Scalable
- AWS ecosystem integration
- GitHub auto-deploy
- Custom domain

### Steps:

1. **Install AWS CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify:**
   ```bash
   amplify init
   ```
   - Choose defaults
   - Create AWS account if needed

3. **Publish:**
   ```bash
   amplify publish
   ```

4. **Get your URL:**
   - Amplify provides hosting URL
   - Custom domain can be added

---

## Option 4: Self-Hosted (Your Own Server)

### Requirements:
- Linux VPS (DigitalOcean, Linode, AWS EC2, etc.)
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache (reverse proxy)

### Steps:

1. **SSH into server:**
   ```bash
   ssh root@your_server_ip
   ```

2. **Install dependencies:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   npm install -g pm2
   ```

3. **Upload project:**
   ```bash
   scp -r /path/to/project root@your_server_ip:/home/healing-souls
   ```

4. **Install and build:**
   ```bash
   cd /home/healing-souls
   npm install
   npm run build
   ```

5. **Start with PM2:**
   ```bash
   pm2 start "npm run start" --name healing-souls
   pm2 startup
   pm2 save
   ```

6. **Configure Nginx (reverse proxy):**
   ```bash
   sudo apt-get install -y nginx
   ```

   Create `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name your_domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

7. **Enable HTTPS with Let's Encrypt:**
   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d your_domain.com
   ```

---

## Option 5: Docker Deployment

### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next /app/.next
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/public /app/public

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and run:
```bash
docker build -t healing-souls .
docker run -p 3000:80 healing-souls
```

---

## Connecting Your Domain

### 1. Register Domain (if needed)
- Namecheap
- GoDaddy
- Domain.com
- Google Domains

### 2. Update DNS (varies by host)

**For Vercel:**
- Add nameservers provided by Vercel
- Or add A/CNAME records

**For Netlify:**
- Add nameservers provided by Netlify
- Or add CNAME record

**For Self-Hosted:**
- Point A record to your server IP
- Point CNAME if using subdomain

### 3. Wait for propagation
- Usually 24-48 hours
- Check status: `nslookup yourdomain.com`

---

## Environment Variables (if needed)

Create `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/9266735676
```

(Currently this is hardcoded, but can be made dynamic)

---

## Post-Deployment Checklist

- [ ] Website loads on your domain
- [ ] All pages accessible (/about, /services, /reviews, /contact)
- [ ] WhatsApp buttons work (click to open chat)
- [ ] Mobile responsive (test on phone)
- [ ] Dark theme displays correctly
- [ ] No console errors (F12)
- [ ] Load time acceptable (< 3 seconds)

---

## Performance Optimization

### Already Included:
✅ Image optimization (Next.js Image)
✅ Code splitting
✅ CSS minification
✅ JavaScript minification
✅ Static generation (fast)

### Optional Additions:
- Add analytics (Google Analytics)
- Add SEO sitemap
- Add robots.txt
- Monitor with Sentry

---

## Monitoring & Maintenance

### Vercel Dashboard:
- View deployment logs
- Monitor performance
- Check analytics
- Manage domains

### Netlify Dashboard:
- Deployment history
- Build logs
- Performance metrics
- Domain settings

### Self-Hosted:
- Monitor with Prometheus
- Check logs: `pm2 logs`
- Monitor CPU/Memory
- Regular backups

---

## Update Your Site

### When you make changes:

**Vercel/Netlify:**
```bash
git add .
git commit -m "Update message"
git push origin main
# Automatic deployment!
```

**Self-Hosted:**
```bash
cd /home/healing-souls
git pull origin main
npm run build
pm2 restart healing-souls
```

---

## SSL Certificate

### Vercel & Netlify:
✅ Automatic HTTPS (free)

### Self-Hosted:
```bash
sudo certbot certonly --standalone -d yourdomain.com
# Or use Nginx integration (easier)
```

---

## Common Issues & Fixes

### Issue: "Site not found"
**Solution:** Check DNS propagation
```bash
nslookup yourdomain.com
```

### Issue: "WhatsApp links don't work"
**Solution:** Check URL format:
```
https://wa.me/9266735676
```
Must include country code (+91 for India)

### Issue: "Slow load time"
**Solution:** 
- Use Vercel (recommended)
- Enable CDN
- Optimize images
- Check network tab (F12)

### Issue: "Mobile layout broken"
**Solution:**
- Check meta viewport tag
- Test responsiveness (F12 > Toggle Device)
- Clear browser cache

---

## Analytics (Optional)

### Google Analytics:
```jsx
// In app/layout.tsx
<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
/>
<Script id="ga">
  {`window.dataLayer = window.dataLayer || [];
    gtag('config', 'GA_ID');`}
</Script>
```

---

## Backup & Version Control

### GitHub Setup:
```bash
git remote add origin https://github.com/yourusername/healing-souls
git branch -M main
git push -u origin main
```

### Backup regularly:
```bash
# Local backup
tar -czf healing-souls-backup.tar.gz /path/to/project
```

---

## Support

### If deployment fails:
1. Check console errors
2. Review deployment logs
3. Verify environment variables
4. Check Next.js docs: nextjs.org/docs

### Quick help links:
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- Next.js docs: https://nextjs.org/docs

---

## Final Checklist Before Launch

- [ ] Domain purchased and verified
- [ ] Website deployed and accessible
- [ ] All pages working (home, about, services, reviews, contact)
- [ ] WhatsApp number correct in all CTAs
- [ ] Mobile responsiveness tested
- [ ] Performance acceptable
- [ ] SSL certificate active
- [ ] Backup in place
- [ ] Analytics setup (optional)
- [ ] Monitoring configured (optional)

---

## Go Live! 🎉

Your "Healing Souls with Amit" website is ready for the world.

**Choose your deployment method above and launch today!**

---

*For questions, refer to the README.md or PROJECT_SUMMARY.md*
