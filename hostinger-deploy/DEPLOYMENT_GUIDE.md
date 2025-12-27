# FounderHQ - Hostinger Deployment Guide

## Overview
This package contains the production-ready build of the FounderHQ landing page website.

## Deployment Options

### Option 1: Node.js Web Apps (Business/Cloud Plans) - RECOMMENDED

If you have a Hostinger Business or Cloud hosting plan, you can deploy the full application with backend support.

#### Steps:
1. **Upload to GitHub**
   - Create a new GitHub repository
   - Upload the contents of this folder to the repository
   - Push to the main branch

2. **Deploy on Hostinger**
   - Login to hPanel → Navigate to Websites → Add Website
   - Choose "Node.js Apps"
   - Select "Import Git Repository"
   - Authorize GitHub and select your repository
   - Configure settings:
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Node Version: 20.x
   - Click "Deploy"

3. **Set Environment Variables**
   In Hostinger dashboard under Website Settings → Environment Variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=production
   ```

### Option 2: Shared Hosting (Static Frontend Only)

For shared hosting plans, deploy only the static frontend.

#### Steps:
1. **Upload Files**
   - Login to hPanel → File Manager
   - Navigate to `public_html/`
   - Upload ALL files from this folder EXCEPT:
     - `server.js`
     - `package.json`
     - `DEPLOYMENT_GUIDE.md`
     - `.htaccess` (upload this separately after)

2. **Create .htaccess**
   Create a file named `.htaccess` in `public_html/` with this content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

3. **Note**: With shared hosting, the backend API (lead capture form) will NOT work. You'll need to either:
   - Host the backend elsewhere (Railway, Render, etc.)
   - Use a form service like Formspree or EmailJS
   - Upgrade to Business/Cloud plan for full Node.js support

### Option 3: VPS Hosting

For VPS plans with full control.

#### Steps:
1. SSH into your VPS
2. Clone/upload this folder to `/var/www/founderhq`
3. Install dependencies:
   ```bash
   cd /var/www/founderhq
   npm install
   ```
4. Set up PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "founderhq"
   pm2 startup
   pm2 save
   ```
5. Configure Nginx reverse proxy to point to port 5000

## File Structure

```
hostinger-deploy/
├── index.html          # Main HTML file
├── assets/             # CSS, JS, and images
│   ├── index-*.css     # Compiled styles
│   ├── index-*.js      # Compiled React app
│   └── *.png           # Image assets
├── favicon.png         # Site favicon
├── opengraph.jpg       # Social sharing image
├── server.js           # Express server (for Node.js hosting)
├── package.json        # Dependencies (for Node.js hosting)
└── DEPLOYMENT_GUIDE.md # This file
```

## Database Setup

If using the full Node.js deployment, you'll need a PostgreSQL database. Options:
- Hostinger Cloud Database
- Neon (free tier available)
- Supabase
- Railway

Set the `DATABASE_URL` environment variable with your connection string.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| DATABASE_URL | PostgreSQL connection string | Yes (for full deploy) |
| NODE_ENV | Set to "production" | Yes |
| PORT | Server port (default: 5000) | No |

## Support

For questions about this deployment, contact your development team.
