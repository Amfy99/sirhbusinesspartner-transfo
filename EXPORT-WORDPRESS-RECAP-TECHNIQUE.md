# ⚙️ RÉCAPITULATIF TECHNIQUE
## Migration CV Amandine Ferey : React → WordPress

---

## 📊 ARCHITECTURE DU SITE

### Pages (6 au total)
```
/                      → Accueil (Landing Page)
/projets               → Portfolio de 7 transformations
/formations            → Formations & Certifications
/competences           → Compétences organisées
/cv                    → CV complet
/contact               → Formulaire + Infos contact
```

### Navigation
- **Desktop** : Sidebar fixe à gauche (collapsible)
  - Fermée : 80px
  - Ouverte : 256px
- **Mobile** : Header fixe en haut + Menu hamburger

---

## 🎨 DESIGN SYSTEM (Quick Reference)

### Palette 3 couleurs + neutres

#### Bleu (Couleur dominante)
```css
--blue-50:  #eff6ff   /* Backgrounds légers */
--blue-100: #dbeafe   /* Icônes backgrounds */
--blue-600: #2563eb   /* Boutons primaires */
--blue-700: #1d4ed8   /* Hover */
```

#### Violet (Accent secondaire)
```css
--purple-50:  #faf5ff
--purple-100: #f3e8ff
--purple-600: #9333ea
--purple-700: #7e22ce
```

#### Orange (Accent tertiaire)
```css
--orange-50:  #fff7ed
--orange-100: #ffedd5
--orange-600: #ea580c
--orange-700: #c2410c
```

#### Neutres (Slate)
```css
--slate-50:  #f8fafc   /* Background général */
--slate-200: #e2e8f0   /* Bordures */
--slate-600: #475569   /* Texte normal */
--slate-900: #0f172a   /* Titres */
--white:     #ffffff
```

### Polices
```css
/* Titres */
font-family: 'Space Grotesk', sans-serif;
font-weight: 600-700;

/* Texte */
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 400-500;
```

### Tailles (Desktop / Mobile)
```
H1:    36-48px / 28-32px
H2:    30-36px / 24-28px
H3:    24-28px / 20-24px
Body:  16px    / 14-16px
Small: 14px    / 12-14px
```

### Espacements standards
```
Section margin: 48-64px (Desktop) / 32-40px (Mobile)
Card padding:   24-32px (Desktop) / 16-20px (Mobile)
Button padding: 10-20px
Border radius:  8-16px
```

---

## 🧩 COMPOSANTS PRINCIPAUX

### Boutons (3 variantes)
```css
/* Primaire (Bleu) */
background: #2563eb
hover: #1d4ed8

/* Secondaire (Violet) */
background: #9333ea
hover: #7e22ce

/* Accent (Orange) */
background: #ea580c
hover: #c2410c
```

### Cards
```css
background: #ffffff
border: 1px solid #e2e8f0
border-radius: 16px (Desktop) / 12px (Mobile)
padding: 24px (Desktop) / 20px (Mobile)
shadow: 0 1px 3px rgba(0,0,0,0.1)
hover-shadow: 0 10px 15px rgba(0,0,0,0.1)
```

### Badges/Chips
```css
padding: 6px 12px
border-radius: 6px (rect) / 999px (pill)
font-size: 12px
font-weight: 500

/* Variantes */
Blue:   bg #eff6ff, text #1e40af
Purple: bg #f3e8ff, text #6b21a8
Orange: bg #ffedd5, text #9a3412
```

### Icônes colorées (Circle)
```css
width/height: 44-56px
border-radius: 12px (rect) / 50% (circle)

/* Backgrounds */
Blue:   #dbeafe (icône #2563eb)
Purple: #f3e8ff (icône #9333ea)
Orange: #ffedd5 (icône #ea580c)
```

---

## 📄 STRUCTURE PAR PAGE

### 🏠 PAGE ACCUEIL

**Section 1 : Hero**
- Layout : 2 colonnes (Desktop) / 1 colonne (Mobile)
- Background : Gradient (Blue 50 → White → Purple 50)
- Colonne 1 : Titre + Résumé + 3 boutons CTA
- Colonne 2 : Photo profil (224px Desktop / 160px Mobile)

**Section 2 : Quick Links**
- Grid : 4 cards (4 colonnes Desktop / 1 colonne Mobile)
- Cards : Icône + Titre + Description + Lien

**Section 3 : Valeurs Clés**
- Layout : 3 colonnes égales
- 3 cards : Icône ronde + Titre + Description

**Section 4 : CTA Final**
- Background : Gradient Blue-Purple
- Titre + Description + Bouton

---

### 💼 PAGE PROJETS

**Header**
- Lien retour accueil
- Titre H1 + Sous-titre

**7 Cards de projets**
Chaque card contient :
- Icône colorée (56px circle)
- Titre projet + Entreprise + Badge année
- 3 blocs : Problème / Actions / Impact
- Liste de compétences (chips colorées)

**Couleurs par projet :**
1. Workday Journeys → Bleu
2. Workday Hub → Violet
3. Réorganisation → Bleu
4. Workday Help → Orange
5. Automatisation → Bleu
6. Gouvernance → Violet
7. Change Management → Bleu

---

### 🎓 PAGE FORMATIONS

**Section 1 : Formations Pro**
- Card 2 colonnes
- Colonne 1 : 8 formations (icône CheckCircle violet)
- Colonne 2 : 5 certifications (icône Award orange)

**Section 2 : Formations Académiques**
- 3 cards verticales (Master, Bachelor, BTS)
- Layout : Info + Badge niveau (Bac+5/3/2)

**Section 3 : CTA**
- 2 boutons : Contact + Compétences

---

### 💡 PAGE COMPÉTENCES

**6 catégories avec icônes colorées :**

1. **Expertise SIRH** (Bleu) → 5 cards
2. **Gestion de Projet** (Violet) → 2 cards
3. **Gouvernance & Conformité** (Orange) → 4 cards
4. **Change Management** (Bleu) → 2 cards
5. **Compétences Techniques** (Violet) → 2 cards
6. **CTA Final**

Chaque card :
- Titre compétence (18px bold)
- Description (14px)
- Badges optionnels (ex: modules SAP, outils)

---

### 📧 PAGE CONTACT

**Layout : 2 colonnes (Desktop) / 1 colonne (Mobile)**

**Colonne 1 : Informations**
- Card Contact : Email, WhatsApp, Localisation, Disponibilité
- Card Actions : Calendly, LinkedIn

**Colonne 2 : Formulaire**
- Champs : Nom, Email, Entreprise, Sujet, Message
- Bouton submit bleu
- Messages success/error

---

## 🔗 DONNÉES ESSENTIELLES

### Informations personnelles
```
Nom : Amandine Ferey
Titre : HRIS Business Partner | Driving HR Transformation & Governance
Email : amandine.ferey@icloud.com
WhatsApp : +33 6 60 03 08 65
LinkedIn : https://www.linkedin.com/in/amandine-ferey-rocha/
Calendly : https://calendly.com/amandine-ferey
Localisation : Canton de Vaud / Genève
Disponibilité : Août/Septembre 2026
```

### Liens externes
```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/amandine-ferey-rocha/" 
   target="_blank" 
   rel="noopener noreferrer">LinkedIn</a>

<!-- Calendly -->
<a href="https://calendly.com/amandine-ferey" 
   target="_blank" 
   rel="noopener noreferrer">Réserver un créneau</a>

<!-- Email -->
<a href="mailto:amandine.ferey@icloud.com">Email</a>

<!-- WhatsApp -->
<a href="https://wa.me/33660030865" 
   target="_blank" 
   rel="noopener noreferrer">WhatsApp</a>
```

---

## 🎯 MAPPING ICÔNES (Font Awesome 6)

### Navigation
```
Home         → fa-home
Projets      → fa-briefcase
Formations   → fa-graduation-cap
Compétences  → fa-lightbulb
CV           → fa-file-alt
Contact      → fa-envelope
```

### Actions
```
Email        → fa-envelope
Calendar     → fa-calendar-days
Phone        → fa-phone
WhatsApp     → fa-whatsapp (fab)
LinkedIn     → fa-linkedin (fab)
Location     → fa-location-dot
External     → fa-arrow-up-right-from-square
Arrow Left   → fa-arrow-left
Arrow Right  → fa-arrow-right
Send         → fa-paper-plane
```

### Projets & Compétences
```
Layout/Grid  → fa-th / fa-grip
Shield       → fa-shield-alt
Headphones   → fa-headphones
Document     → fa-file-signature
Globe        → fa-globe
Target       → fa-bullseye
Users        → fa-users
Database     → fa-database
Code         → fa-code
Chart        → fa-chart-bar
Settings     → fa-cog
Award        → fa-award
Check        → fa-check-circle
Lock         → fa-lock
Lightbulb    → fa-lightbulb
Briefcase    → fa-briefcase
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile */
@media (max-width: 767px) {
  /* 1 colonne, padding réduit, font-size -20% */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 2 colonnes, espacements intermédiaires */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 2-4 colonnes, pleine largeur */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* Max-width 1280px container */
}
```

---

## ⚡ OPTIMISATIONS REQUISES

### Performance
```
✅ Images WebP (fallback JPEG)
✅ Lazy loading activé
✅ Minification CSS/JS
✅ Cache navigateur
✅ CDN si possible
✅ Compression Gzip/Brotli
```

### SEO
```html
<!-- Meta tags exemple -->
<title>Amandine Ferey | HRIS Specialist - Workday & SAP SuccessFactors</title>
<meta name="description" content="HRIS Business Partner spécialisée en transformation SIRH. Expertise Workday, SAP SuccessFactors, gouvernance et conduite du changement.">
<meta name="keywords" content="HRIS, Workday, SAP SuccessFactors, SIRH, Transformation RH, Gouvernance">
<link rel="canonical" href="https://www.votre-domaine.com">
```

### Accessibilité
```
✅ Contraste WCAG AA (4.5:1 minimum)
✅ Navigation clavier complète
✅ Alt text sur images
✅ Labels sur formulaires
✅ ARIA labels si nécessaire
✅ Focus visible sur éléments interactifs
```

---

## 🔌 PLUGINS WORDPRESS RECOMMANDÉS

### Essentiels (obligatoires)
```
1. Elementor Pro ou Bricks Builder → Construction visuelle
2. WPForms ou Contact Form 7      → Formulaire contact
3. Yoast SEO ou Rank Math          → Optimisation SEO
4. WP Rocket ou LiteSpeed Cache    → Performance
5. Wordfence                       → Sécurité
```

### Recommandés (optionnels)
```
6. Custom Fonts           → Google Fonts
7. SVG Support            → Upload SVG
8. WP Mail SMTP           → Email fiable
9. UpdraftPlus            → Backups auto
10. Redirection           → Gestion 301
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### Transitions standards
```css
transition: all 0.3s ease;

/* Hover cards */
transform: translateY(-2px);
box-shadow: 0 10px 15px rgba(0,0,0,0.1);

/* Hover boutons */
transform: translateY(-1px);
background-color: [couleur-hover];
```

### Durées
```
Fast:   200ms (boutons, links)
Normal: 300ms (cards, hover)
Slow:   500ms (modals, slides)
```

---

## 📐 GRIDS & LAYOUTS

### Page Accueil
```
Hero:         2 cols (Desktop) / 1 col (Mobile)
Quick Links:  4 cols (Desktop) / 1 col (Mobile)
Valeurs:      3 cols égales
```

### Page Projets
```
Cards:        1 col full-width
Content:      1 col texte + icône latérale
```

### Page Formations
```
Formations Pro:   2 cols (Desktop) / 1 col (Mobile)
Académiques:      1 col verticale (3 cards empilées)
```

### Page Compétences
```
Grid catégories:  2 cols (Desktop) / 1 col (Mobile)
Cards skills:     Flex wrap
```

### Page Contact
```
Layout:           2 cols (Desktop) / 1 col (Mobile)
Col 1:            Infos + Actions (40%)
Col 2:            Formulaire (60%)
```

---

## 🎨 GRADIENTS UTILISÉS

### Hero Background
```css
background: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%);
/* Blue 50 → White → Purple 50 */
```

### CTA Sections
```css
background: linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%);
border: 1px solid #bfdbfe;
/* Blue 50 → Purple 50 avec bordure bleue */
```

---

## ✅ VALIDATION FINALE

### Checklist technique

**Design** :
- [ ] Palette 3 couleurs respectée (bleu, violet, orange)
- [ ] Polices correctes (Space Grotesk + Plus Jakarta Sans)
- [ ] Espacements harmonisés (~10-12% réduction)
- [ ] Border radius appliqués (8-16px)
- [ ] Shadows sur cards au hover

**Fonctionnel** :
- [ ] Navigation 6 pages opérationnelle
- [ ] Formulaire contact fonctionnel (email reçu)
- [ ] Liens externes s'ouvrent en nouvel onglet
- [ ] Email et WhatsApp cliquables
- [ ] Photo profil affichée et stylisée

**Responsive** :
- [ ] Mobile 375px OK
- [ ] Tablet 768px OK
- [ ] Desktop 1280px OK
- [ ] Grids passent en 1 colonne sur mobile
- [ ] Font-size réduite mobile (-20%)

**Performance** :
- [ ] PageSpeed >85/100 (Desktop)
- [ ] PageSpeed >70/100 (Mobile)
- [ ] Images optimisées (WebP)
- [ ] Cache activé
- [ ] Minification CSS/JS

**SEO** :
- [ ] Meta title sur chaque page
- [ ] Meta description sur chaque page
- [ ] Alt text sur images
- [ ] Sitemap généré
- [ ] Robots.txt configuré

---

## 🆘 CONTACT TECHNIQUE

Pour questions techniques pendant la migration :

**Développeur React original** : Via Figma Make  
**Propriétaire du CV** : Amandine Ferey  
📧 amandine.ferey@icloud.com  
📱 +33 6 60 03 08 65

---

## 📊 MÉTRIQUES CIBLES

### Performance
```
PageSpeed Desktop:  >85/100
PageSpeed Mobile:   >70/100
First Contentful:   <1.5s
Time to Interactive: <3.5s
Total Page Size:    <2MB
```

### SEO
```
Meta descriptions:  150-160 caractères
Alt text:          Toutes images
H1:                1 par page
Structure:         H1 > H2 > H3 logique
Internal links:    Min 3 par page
```

### Accessibilité
```
Contraste text:    4.5:1 minimum
Contraste large:   3:1 minimum
Keyboard nav:      Tous éléments
Focus visible:     Bordure + shadow
ARIA labels:       Si nécessaire
```

---

## 🎯 PRIORITÉS MIGRATION

### Must-have (indispensable)
1. ✅ 6 pages créées et fonctionnelles
2. ✅ Navigation fluide entre pages
3. ✅ Design cohérent (couleurs, polices)
4. ✅ Formulaire contact opérationnel
5. ✅ Responsive mobile complet

### Should-have (important)
6. ✅ Animations hover subtiles
7. ✅ SEO optimisé (meta, sitemap)
8. ✅ Performance >80/100
9. ✅ Icônes cohérentes
10. ✅ Liens externes fonctionnels

### Nice-to-have (bonus)
11. ⭐ PWA (manifest.json)
12. ⭐ Favicon personnalisé
13. ⭐ Analytics Google installé
14. ⭐ Cookie banner RGPD
15. ⭐ Multi-langue (FR/EN)

---

**✅ EXPORT TECHNIQUE COMPLET**

Toutes les informations techniques nécessaires à la reconstruction WordPress sont documentées. Référez-vous aux autres fichiers d'export pour le contenu détaillé et les instructions étape par étape.

**Bon courage ! 🚀**
