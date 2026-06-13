# 📦 LISTE DES ASSETS & RESSOURCES
## Pour reconstruction WordPress

---

## 🖼️ IMAGES

### Photo de profil
**Source actuelle** : Image Figma importée  
**Spécifications recommandées** :
- Format : JPEG ou WebP
- Dimensions : 500x500px minimum (1:1 carré)
- Résolution : 72-150 DPI
- Poids : < 200KB optimisé
- Nom de fichier : `amandine-ferey-profile.jpg`

**À faire** :
1. Exporter la photo depuis Figma ou utiliser l'originale
2. Recadrer en carré (1:1)
3. Optimiser avec TinyPNG ou Squoosh
4. Upload dans WordPress Médiathèque

---

## 🎨 ICÔNES

### Bibliothèque recommandée

**Option 1 : Font Awesome 6 (Free)**
- Plugin WordPress : "Font Awesome"
- CDN : https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
- Gratuit et complet

**Option 2 : Material Icons**
- Plugin : "Material Design Icons"
- CDN Google : https://fonts.googleapis.com/icon?family=Material+Icons

**Option 3 : Custom SVG**
- Upload dans Médiathèque WordPress
- Utiliser plugin "SVG Support"

### Mapping des icônes (Font Awesome)

#### Navigation & Actions
- **Mail** → `fa-envelope`
- **Calendar** → `fa-calendar-days`
- **LinkedIn** → `fa-linkedin` (fab)
- **Phone** → `fa-phone`
- **WhatsApp** → `fa-whatsapp` (fab)
- **MapPin** → `fa-location-dot`
- **ArrowLeft** → `fa-arrow-left`
- **ArrowRight** → `fa-arrow-right`
- **ExternalLink** → `fa-arrow-up-right-from-square`
- **Send** → `fa-paper-plane`

#### Projets & Compétences
- **Briefcase** → `fa-briefcase`
- **GraduationCap** → `fa-graduation-cap`
- **Lightbulb** → `fa-lightbulb`
- **FileText** → `fa-file-alt`
- **Target** → `fa-bullseye`
- **Shield** → `fa-shield-alt`
- **Users** → `fa-users`
- **Database** → `fa-database`
- **Code** → `fa-code`
- **BarChart** → `fa-chart-bar`
- **Settings** → `fa-cog`
- **Globe** → `fa-globe`
- **Award** → `fa-award`
- **CheckCircle** → `fa-check-circle`
- **Headphones** → `fa-headphones`
- **FileSignature** → `fa-file-signature`
- **LayoutGrid** → `fa-th` ou `fa-grip`
- **MessageCircle** → `fa-comment-dots`
- **Zap** → `fa-bolt`
- **Lock** → `fa-lock`
- **FileCheck** → `fa-file-check`

#### Statuts
- **CheckCircle** → `fa-check-circle` (Success)
- **AlertCircle** → `fa-exclamation-circle` (Error)

---

## 🎨 COULEURS (Codes HEX)

### Export rapide pour page builder

```css
/* Bleu */
--blue-50: #eff6ff
--blue-100: #dbeafe
--blue-200: #bfdbfe
--blue-600: #2563eb
--blue-700: #1d4ed8

/* Violet */
--purple-50: #faf5ff
--purple-100: #f3e8ff
--purple-200: #e9d5ff
--purple-600: #9333ea
--purple-700: #7e22ce

/* Orange */
--orange-50: #fff7ed
--orange-100: #ffedd5
--orange-200: #fed7aa
--orange-600: #ea580c
--orange-700: #c2410c

/* Slate */
--slate-50: #f8fafc
--slate-100: #f1f5f9
--slate-200: #e2e8f0
--slate-300: #cbd5e1
--slate-500: #64748b
--slate-600: #475569
--slate-700: #334155
--slate-900: #0f172a

/* Autres */
--white: #ffffff
--black: #000000
--success: #10b981
--error: #ef4444
--warning: #f59e0b
```

---

## 📝 POLICES GOOGLE FONTS

### URLs d'import

**Pour CSS** :
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
```

**Pour HTML** :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### Poids disponibles

**Plus Jakarta Sans** :
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

**Space Grotesk** :
- Medium (500)
- SemiBold (600)
- Bold (700)

---

## 🔗 LIENS EXTERNES

### Réseaux & Contact
- **LinkedIn** : https://www.linkedin.com/in/amandine-ferey-rocha/
- **Calendly** : https://calendly.com/amandine-ferey
- **Email** : mailto:amandine.ferey@icloud.com
- **WhatsApp** : https://wa.me/33660030865

### Vérifier que les liens :
- S'ouvrent dans un nouvel onglet (`target="_blank"`)
- Ont l'attribut `rel="noopener noreferrer"` pour la sécurité
- Sont cliquables sur mobile

---

## 📐 COMPOSANTS CSS RÉUTILISABLES

### Classes utilitaires à créer

```css
/* Buttons */
.btn-primary {
  background-color: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background-color: #9333ea;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
}

.btn-secondary:hover {
  background-color: #7e22ce;
}

.btn-accent {
  background-color: #ea580c;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
}

.btn-accent:hover {
  background-color: #c2410c;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #2563eb;
  color: #2563eb;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
}

.btn-outline:hover {
  background-color: #eff6ff;
}

/* Cards */
.card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-blue {
  border-color: #bfdbfe;
}

.card-purple {
  border-color: #e9d5ff;
}

.card-orange {
  border-color: #fed7aa;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.badge-blue {
  background-color: #eff6ff;
  color: #1e40af;
}

.badge-purple {
  background-color: #f3e8ff;
  color: #6b21a8;
}

.badge-orange {
  background-color: #ffedd5;
  color: #9a3412;
}

/* Icon containers */
.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle-blue {
  background-color: #dbeafe;
  color: #2563eb;
}

.icon-circle-purple {
  background-color: #f3e8ff;
  color: #9333ea;
}

.icon-circle-orange {
  background-color: #ffedd5;
  color: #ea580c;
}

/* Gradients */
.gradient-bg {
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%);
}

.gradient-cta {
  background: linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%);
  border: 1px solid #bfdbfe;
  border-radius: 16px;
}

/* Containers */
.container-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .container-main {
    padding: 0 16px;
  }
}
```

---

## 🎯 SNIPPETS WORDPRESS

### Code pour functions.php

```php
<?php
// Désactiver Gutenberg si non utilisé
add_filter('use_block_editor_for_post', '__return_false');

// Support des SVG
function allow_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'allow_svg_upload');

// Changer taille max upload (si besoin)
@ini_set('upload_max_size', '64M');
@ini_set('post_max_size', '64M');

// Remove WordPress version
function remove_version() {
    return '';
}
add_filter('the_generator', 'remove_version');

// Désactiver emojis (performance)
function disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action('init', 'disable_emojis');
?>
```

---

## 📱 FAVICON & PWA (Optionnel)

### Favicon
**Dimensions recommandées** :
- `favicon.ico` : 32x32px
- `icon-192.png` : 192x192px
- `icon-512.png` : 512x512px
- `apple-touch-icon.png` : 180x180px

**À créer** :
1. Logo/initiale "AF" sur fond bleu
2. Export en différentes tailles
3. Upload via Apparence > Personnaliser > Identité du site

### Manifest.json (si PWA souhaité)
```json
{
  "name": "Amandine Ferey - HRIS Specialist",
  "short_name": "AF CV",
  "description": "CV Premium d'Amandine Ferey - HRIS Specialist & Workday Expert",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🔌 PLUGINS RECOMMANDÉS

### Essentiels
1. **Elementor Pro** ou **Bricks Builder** - Page builder
2. **WPForms** ou **Contact Form 7** - Formulaires
3. **Yoast SEO** ou **Rank Math** - SEO
4. **WP Rocket** ou **LiteSpeed Cache** - Performance
5. **Wordfence** - Sécurité

### Optionnels utiles
6. **Custom Fonts** - Google Fonts
7. **SVG Support** - Upload SVG
8. **WP Mail SMTP** - Email fiable
9. **UpdraftPlus** - Backups
10. **Redirection** - Gestion 301

### À éviter
- Trop de plugins (< 15 recommandé)
- Plugins abandonnés (non mis à jour depuis 1 an)
- Plugins avec mauvaises notes

---

## 📊 CHECKLIST ASSETS

### Images
- [ ] Photo profil exportée et optimisée
- [ ] Favicon créé (multiple tailles)
- [ ] Logo si nécessaire

### Fonts
- [ ] Plus Jakarta Sans chargée
- [ ] Space Grotesk chargée
- [ ] Variables CSS créées

### Icons
- [ ] Bibliothèque Font Awesome installée
- [ ] Mapping complet vérifié
- [ ] Tailles standardisées (16/20/24px)

### Colors
- [ ] Palette complète en variables CSS
- [ ] Classes utilitaires créées
- [ ] Gradients définis

### Links
- [ ] LinkedIn vérifié
- [ ] Calendly vérifié
- [ ] Email configuré
- [ ] WhatsApp testé

### Code
- [ ] Snippets functions.php ajoutés
- [ ] Classes CSS réutilisables créées
- [ ] Responsive breakpoints définis

---

## 🆘 RESSOURCES EXTERNES

### Outils recommandés
- **Optimisation images** : TinyPNG (https://tinypng.com)
- **Test responsive** : Responsively (https://responsively.app)
- **Test performance** : PageSpeed Insights (https://pagespeed.web.dev)
- **Test accessibilité** : WAVE (https://wave.webaim.org)
- **Palette couleurs** : Coolors (https://coolors.co)

### Documentation
- **Elementor** : https://elementor.com/help/
- **Bricks** : https://academy.bricksbuilder.io/
- **WordPress Codex** : https://codex.wordpress.org/

---

## 💾 BACKUP AVANT MODIFICATION

**Important** : Avant toute modification majeure :
1. Backup complet via UpdraftPlus ou hébergeur
2. Export base de données
3. Sauvegarde fichiers via FTP

---

**TOUS LES ASSETS SONT PRÊTS ! 🎨**
