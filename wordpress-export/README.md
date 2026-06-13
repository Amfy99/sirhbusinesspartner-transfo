# 🚀 WordPress Conversion Package
## Amandine Ferey - HRIS Consulting Website

---

## 📋 Overview

This package contains a complete WordPress-ready conversion of your Figma/React design, optimized for:
- **Elementor Pro** integration
- **Bricks Builder** compatibility
- **Custom WordPress theme** development

---

## 📂 Package Structure

```
/wordpress-export/
├── README.md                          (this file)
├── /templates/                        (HTML page templates)
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── about.html (derived from CV page)
│   ├── projects.html
│   ├── contact.html
│   └── store.html (new - for digital products)
├── /css/                              (Stylesheets)
│   ├── variables.css                  (Color system & design tokens)
│   ├── typography.css                 (Font styles)
│   ├── components.css                 (Reusable components)
│   ├── layout.css                     (Grid & spacing)
│   └── responsive.css                 (Media queries)
├── /components/                       (Reusable HTML components)
│   ├── card-project.html
│   ├── card-skill.html
│   ├── button-cta.html
│   ├── badge.html
│   └── icon-circle.html
├── /wordpress/                        (WordPress integration files)
│   ├── functions.php                  (Theme functions)
│   ├── style.css                      (Main theme stylesheet)
│   └── elementor-snippets.txt         (Copy-paste snippets)
└── /assets/                           (Design specs & resources)
    ├── design-system.md
    ├── color-palette.md
    └── component-library.md
```

---

## 🎨 Design System Reference

### Color Palette (3-color system)

**Primary (Blue)**
```css
--blue-50:  #eff6ff
--blue-100: #dbeafe
--blue-600: #2563eb
--blue-700: #1d4ed8
```

**Secondary (Purple)**
```css
--purple-50:  #faf5ff
--purple-100: #f3e8ff
--purple-600: #9333ea
--purple-700: #7e22ce
```

**Accent (Orange)**
```css
--orange-50:  #fff7ed
--orange-100: #ffedd5
--orange-600: #ea580c
--orange-700: #c2410c
```

**Neutrals (Slate)**
```css
--slate-50:  #f8fafc
--slate-100: #f1f5f9
--slate-200: #e2e8f0
--slate-600: #475569
--slate-900: #0f172a
```

### Typography

**Headings:** Space Grotesk (500, 600, 700)
**Body:** Plus Jakarta Sans (400, 500, 600, 700)

```css
H1: 36-48px (Desktop) / 28-32px (Mobile)
H2: 30-36px (Desktop) / 24-28px (Mobile)
H3: 24-28px (Desktop) / 20-24px (Mobile)
Body: 16px (Desktop) / 14-16px (Mobile)
```

---

## 📄 Page Structure

### 1. **Home** (Landing Page)
- Hero section with photo + CTA buttons
- Quick Links (4 cards grid)
- Vision section (3 pillars with modals)
- Final CTA

### 2. **About** (Based on CV page)
- Professional summary
- Timeline of experiences
- Education & certifications
- Skills overview

### 3. **Projects** (Transformations Portfolio)
- 7 project cards with:
  - Problem statement
  - Actions taken
  - Impact
  - Skills used (badges)

### 4. **Contact**
- Contact form (Name, Email, Company, Subject, Message)
- Contact information cards
- Quick action links (Calendly, LinkedIn)

### 5. **Store** (NEW - Digital Products)
- Grid of digital HRIS tools/frameworks
- Product cards with pricing
- WooCommerce integration ready

---

## 🔧 WordPress Integration Methods

### Option A: Elementor Pro

1. Install Elementor Pro
2. Create new pages
3. Copy HTML from `/templates/` folder
4. Paste into Elementor HTML widget
5. Apply CSS from `/css/` folder via Customizer
6. Use `/wordpress/elementor-snippets.txt` for shortcuts

**Pros:** Visual editing, no code needed
**Time:** 4-6 hours

---

### Option B: Bricks Builder

1. Install Bricks Builder
2. Import design tokens from `/css/variables.css`
3. Build pages using component library
4. Copy structure from HTML templates

**Pros:** Cleaner code, better performance
**Time:** 5-7 hours

---

### Option C: Custom Theme

1. Create child theme from starter (Underscores, GeneratePress)
2. Copy `/wordpress/functions.php` code
3. Integrate templates from `/templates/` as page templates
4. Enqueue stylesheets from `/css/` folder

**Pros:** Full control, best performance
**Time:** 8-12 hours (requires dev skills)

---

## ✅ Pre-Integration Checklist

### WordPress Setup
- [ ] WordPress 6.0+ installed
- [ ] PHP 8.0+ activated
- [ ] SSL certificate active (HTTPS)
- [ ] Child theme created (if custom theme)

### Plugins Required
- [ ] **Page Builder:** Elementor Pro / Bricks Builder
- [ ] **Forms:** WPForms / Contact Form 7
- [ ] **SEO:** Yoast SEO / Rank Math
- [ ] **Performance:** WP Rocket / LiteSpeed Cache
- [ ] **Store:** WooCommerce (for digital products)

### Optional Plugins
- [ ] Custom Fonts (Google Fonts integration)
- [ ] SVG Support (for custom icons)
- [ ] WP Mail SMTP (reliable email delivery)

### Assets Preparation
- [ ] Profile photo (500x500px, optimized)
- [ ] Favicon (32x32px, 180x180px, 512x512px)
- [ ] Logo files (if different from name)

---

## 📊 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  /* 1 column layout */
  /* Reduced padding: 16px */
  /* Font-size: -20% */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 2 column layout */
  /* Medium padding: 20px */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 3-4 column layout */
  /* Full padding: 24-32px */
  /* Max-width: 1280px container */
}
```

---

## 🎯 SEO Optimization

### Meta Tags (Example)

```html
<title>Amandine Ferey | HRIS Specialist - Workday & SAP SuccessFactors Expert</title>
<meta name="description" content="HRIS Business Partner specialized in HR transformation. Expertise in Workday, SAP SuccessFactors, governance and change management.">
<meta name="keywords" content="HRIS, Workday, SAP SuccessFactors, HR Transformation, SIRH, Governance">
<link rel="canonical" href="https://yourdomain.com">
```

### Recommended Structure
- Sitemap.xml auto-generated
- Schema.org markup for Person/Professional
- Alt text on all images
- H1-H6 hierarchy respected

---

## 🚀 Performance Targets

```
PageSpeed Desktop:  >90/100
PageSpeed Mobile:   >80/100
First Contentful:   <1.5s
Time to Interactive: <3.0s
Total Page Size:    <1.5MB
```

### Optimization Steps
1. ✅ WebP image format (fallback JPEG/PNG)
2. ✅ Lazy loading images
3. ✅ Minified CSS/JS
4. ✅ Browser caching enabled
5. ✅ CDN for static assets (optional)

---

## 📦 Store Page (WooCommerce Setup)

### Digital Products Examples
1. **HRIS Governance Framework** - €99
2. **Workday Configuration Checklist** - €49
3. **SAP SuccessFactors Setup Guide** - €79
4. **Change Management Toolkit** - €149
5. **SIRH Audit Template** - €39

### WooCommerce Configuration
```php
// Enable digital downloads
add_filter('woocommerce_is_downloadable', '__return_true');

// Disable shipping for digital products
add_filter('woocommerce_cart_needs_shipping', '__return_false');
```

---

## 🎨 Component Library Quick Reference

### Buttons

**Primary (Blue)**
```html
<a href="#" class="btn btn-primary">
  <svg><!-- Icon --></svg>
  Button Text
</a>
```

**Secondary (Purple)**
```html
<a href="#" class="btn btn-secondary">Button Text</a>
```

**Accent (Orange)**
```html
<a href="#" class="btn btn-accent">Button Text</a>
```

### Cards

**Project Card**
```html
<div class="card card-project border-blue">
  <div class="icon-circle icon-blue">
    <!-- Icon -->
  </div>
  <h3>Project Title</h3>
  <span class="badge badge-blue">2026</span>
  <!-- Content -->
</div>
```

**Skill Card**
```html
<div class="card card-skill">
  <h4>Skill Name</h4>
  <p>Description</p>
  <div class="badges">
    <span class="badge badge-purple">Module 1</span>
    <span class="badge badge-purple">Module 2</span>
  </div>
</div>
```

### Badges

```html
<span class="badge badge-blue">Blue Badge</span>
<span class="badge badge-purple">Purple Badge</span>
<span class="badge badge-orange">Orange Badge</span>
```

---

## 📞 Support & Questions

**Website Owner:** Amandine Ferey  
📧 amandine.ferey@icloud.com  
📱 +33 6 60 03 08 65  
🔗 [LinkedIn](https://www.linkedin.com/in/amandine-ferey-rocha/)

---

## 🗂️ Migration Workflow

### Step 1: Review Package (30 min)
- [ ] Read this README completely
- [ ] Review design system in `/assets/`
- [ ] Choose integration method (Elementor/Bricks/Custom)

### Step 2: WordPress Setup (1-2 hours)
- [ ] Install WordPress + required plugins
- [ ] Configure theme basics
- [ ] Import Google Fonts
- [ ] Setup color variables

### Step 3: Build Pages (4-8 hours)
- [ ] Create Home page from template
- [ ] Create About page
- [ ] Create Projects page (7 project cards)
- [ ] Create Contact page + form
- [ ] Create Store page (WooCommerce)

### Step 4: Content Integration (2-3 hours)
- [ ] Copy all text content
- [ ] Upload and optimize images
- [ ] Configure forms
- [ ] Link navigation menu

### Step 5: Testing & Optimization (1-2 hours)
- [ ] Test responsive on all devices
- [ ] Validate form submissions
- [ ] Check PageSpeed score
- [ ] Verify SEO meta tags
- [ ] Test store checkout flow

### Step 6: Launch (30 min)
- [ ] Final backup
- [ ] Point domain to WordPress
- [ ] Monitor analytics
- [ ] Test contact form delivery

**Total Estimated Time:**
- Elementor: 8-12 hours
- Bricks: 10-14 hours
- Custom Theme: 12-18 hours

---

## ✨ What's Included

✅ **6 Complete HTML Templates** (Header, Footer, 5 Pages)  
✅ **5 CSS Stylesheets** (Variables, Typography, Components, Layout, Responsive)  
✅ **5 Reusable Components** (Cards, Buttons, Badges, Icons)  
✅ **WordPress Integration Files** (functions.php, snippets)  
✅ **Complete Design System Documentation**  
✅ **SEO & Performance Guidelines**  
✅ **WooCommerce Store Setup Guide**

---

## 🎉 Ready to Build!

This package contains everything you need to rebuild your consulting website on WordPress with pixel-perfect accuracy.

**Next Steps:**
1. Choose your integration method
2. Set up WordPress environment
3. Follow the migration workflow
4. Launch your professional HRIS consulting site!

**Good luck! 🚀**
