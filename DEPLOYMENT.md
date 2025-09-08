# Vercel Deployment Guide

## 🚀 How to Deploy Your Kanstar Bluechef Website

### Method 1: Direct Import (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"

2. **Import Repository**
   - Select "Import Git Repository"
   - Connect your GitHub account if needed
   - Select this repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site is live! 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# In your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: kanstar-bluechef
# - In which directory is your code located? ./
# - Want to override settings? N

# Your site is deployed!
```

### Post-Deployment Steps

1. **Update Domain in Files**
   - Replace `https://your-domain.vercel.app` with your actual domain in:
     - `public/robots.txt`
     - `public/sitemap.xml`
     - `src/utils/seo.ts`

2. **Set Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. **Environment Variables (If Needed)**
   - Go to Project Settings → Environment Variables
   - Add any required variables
   - Redeploy if needed

### Build Configuration

The project includes `vercel.json` with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev", 
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Performance Optimizations

✅ **Automatic**:
- Edge caching for static assets
- Global CDN distribution  
- Image optimization
- Gzip compression
- HTTP/2 support

✅ **Configured**:
- SPA routing with catch-all
- SEO-friendly URLs
- Proper MIME types
- Security headers

### Troubleshooting

**Build Fails?**
- Check if all dependencies are in package.json
- Verify Node.js version compatibility
- Check TypeScript errors in terminal

**Images Not Loading?**
- Ensure all images are in `public/` directory
- Check file paths are correct
- Verify file names match exactly (case-sensitive)

**Routing Issues?**
- Vercel.json handles SPA routing automatically
- All routes redirect to index.html
- React Router takes over client-side

### Monitoring

**Analytics**:
- Vercel Analytics automatically tracks:
  - Page views
  - Performance metrics  
  - User interactions
  - Core Web Vitals

**Logs**:
- Functions → View Function Logs
- Real-time error monitoring
- Build logs available

### Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status**: [vercel-status.com](https://vercel-status.com)

---

**Your website is production-ready!** 🎉

Deploy with confidence - all optimizations and configurations are already in place.