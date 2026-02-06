# HOW TO ADD YOUR CUSTOM LOGO

## Option 1: Add Logo to Public Folder (EASIEST)

1. **Copy your logo file** (e.g., `my-logo.png`) to this folder:
   ```
   client/public/
   ```

2. **Open** `client/src/components/landing/Navbar.tsx`

3. **Find** this section (around line 60):
   ```tsx
   <Link href="/" className={...}>
     Founder<span className="text-accent">HQ</span>
   </Link>
   ```

4. **Replace it with**:
   ```tsx
   <Link href="/" className="flex items-center gap-2">
     <img src="/my-logo.png" alt="FounderHQ" className="h-8 w-auto" />
   </Link>
   ```
   (Replace `my-logo.png` with your actual logo filename)

5. **Save and test** - The logo will appear in the navbar!

## Option 2: Add Logo to Footer Too

**Open** `client/src/components/landing/Footer.tsx`

**Find** this section (around line 10):
```tsx
<Link href="/" className="text-2xl font-heading font-bold text-primary tracking-tighter mb-4 block">
  Founder<span className="text-accent">HQ</span>
</Link>
```

**Replace with**:
```tsx
<Link href="/" className="mb-4 block">
  <img src="/my-logo.png" alt="FounderHQ" className="h-10 w-auto" />
</Link>
```

## What Files Have Been Updated:

✅ **Created** `client/src/data/pageData.ts` - Central data management for:
  - Team members with real images
  - Case studies with real images
  - Careers positions and benefits
  - Services list

✅ **Updated** `client/src/pages/AboutUs.tsx` - Now uses real team member images

✅ **Updated** `client/src/pages/CaseStudies.tsx` - Now uses real project images

✅ **Updated** `client/src/pages/Careers.tsx` - Uses data from central file

✅ **Created** `client/src/pages/Services.tsx` - New page that lists all services!

✅ **Updated** `client/src/App.tsx` - Added `/services` route

✅ **Updated** `client/src/components/landing/Navbar.tsx` - Added "Services" link

## Images Used (from Unsplash):

All images in the data file are from **Unsplash** (free stock photos). You can replace them with:
- Your own company images
- Other stock image URLs
- Any image accessible via URL

## Next Steps:

1. Add your logo to `client/public/`
2. Update Navbar.tsx and Footer.tsx with your logo path
3. (Optional) Replace Unsplash images with your own company photos
4. Test the `/services` page by clicking "Services" in the navbar
5. All pages are now data-driven, not hard-coded!

---

**Your pages are now production-ready and not hard-coded!** 🎉
