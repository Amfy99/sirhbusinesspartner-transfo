# 📐 CHARTE GRAPHIQUE COMPLÈTE
## Amandine Ferey - HRIS Business Partner

**Version 1.0** | Mars 2026

---

# 📋 SOMMAIRE

1. [Identité Visuelle](#identité-visuelle)
2. [Palette de Couleurs](#palette-de-couleurs)
3. [Typographie](#typographie)
4. [Formes & Géométrie](#formes--géométrie)
5. [Ombres & Profondeur](#ombres--profondeur)
6. [Espacements & Grille](#espacements--grille)
7. [Icônes](#icônes)
8. [Boutons](#boutons)
9. [Cartes](#cartes)
10. [Badges](#badges)
11. [Formulaires](#formulaires)
12. [Navigation](#navigation)
13. [Animations](#animations)
14. [Responsive](#responsive)
15. [Applications](#applications)

---

# 🎨 1. IDENTITÉ VISUELLE

## Positionnement

**Secteur :** Consulting HRIS / Transformation RH  
**Cible :** Directeurs RH, DSI, Managers IT  
**Ton :** Professionnel, moderne, tech, fiable  
**Personnalité :** Expertise, clarté, innovation

## ADN de la marque

```
🔵 Bleu    → Confiance, professionnalisme, expertise tech
🟣 Violet  → Innovation, transformation, vision stratégique
🟠 Orange  → Énergie, action, dynamisme
```

## Valeurs visuelles

- ✅ **Clarté** : Information structurée et lisible
- ✅ **Modernité** : Design contemporain corporate tech
- ✅ **Professionnalisme** : Sérieux sans être austère
- ✅ **Accessibilité** : Interface intuitive et accueillante

---

# 🎨 2. PALETTE DE COULEURS

## 2.1 Couleurs Primaires (3 couleurs principales)

### 🔵 BLEU (Couleur dominante - 60% du design)

```css
--blue-50:  #eff6ff    /* Backgrounds très clairs */
--blue-100: #dbeafe    /* Backgrounds icônes */
--blue-200: #bfdbfe    /* Bordures hover */
--blue-300: #93c5fd    /* Éléments secondaires */
--blue-400: #60a5fa    /* États intermédiaires */
--blue-500: #3b82f6    /* Standard */
--blue-600: #2563eb    ⭐ PRINCIPAL (boutons, liens)
--blue-700: #1d4ed8    /* Hover, titres */
--blue-800: #1e40af    /* Texte sur fond clair */
--blue-900: #1e3a8a    /* Très foncé */
```

**Hexadécimal principal :** `#2563eb`  
**RGB :** `37, 99, 235`  
**CMYK :** `84, 58, 0, 8` (pour impression)

**Utilisation :**
- Bouton LinkedIn
- Navigation active
- Liens hypertextes
- Icônes SIRH/Tech
- Projets techniques

---

### 🟣 VIOLET (Accent secondaire - 25% du design)

```css
--purple-50:  #faf5ff    /* Backgrounds très clairs */
--purple-100: #f3e8ff    /* Backgrounds icônes */
--purple-200: #e9d5ff    /* Bordures hover */
--purple-300: #d8b4fe    /* Éléments secondaires */
--purple-400: #c084fc    /* États intermédiaires */
--purple-500: #a855f7    /* Standard */
--purple-600: #9333ea    ⭐ PRINCIPAL (CTAs)
--purple-700: #7e22ce    /* Hover */
--purple-800: #6b21a8    /* Texte sur fond clair */
--purple-900: #581c87    /* Très foncé */
```

**Hexadécimal principal :** `#9333ea`  
**RGB :** `147, 51, 234`  
**CMYK :** `37, 78, 0, 8`

**Utilisation :**
- Bouton "Me contacter"
- Menu "Boutique" (highlight)
- Icônes Gouvernance
- Projets stratégiques

---

### 🟠 ORANGE (Accent tertiaire - 15% du design)

```css
--orange-50:  #fff7ed    /* Backgrounds très clairs */
--orange-100: #ffedd5    /* Backgrounds icônes */
--orange-200: #fed7aa    /* Bordures hover */
--orange-300: #fdba74    /* Éléments secondaires */
--orange-400: #fb923c    /* États intermédiaires */
--orange-500: #f97316    /* Standard */
--orange-600: #ea580c    ⭐ PRINCIPAL (urgence)
--orange-700: #c2410c    /* Hover */
--orange-800: #9a3412    /* Texte sur fond clair */
--orange-900: #7c2d12    /* Très foncé */
```

**Hexadécimal principal :** `#ea580c`  
**RGB :** `234, 88, 12`  
**CMYK :** `0, 62, 95, 8`

**Utilisation :**
- Bouton "Prendre RDV" (urgence)
- Icônes certifications
- Badges importants
- Alertes/notifications

---

## 2.2 Couleurs Neutres

### ⚫ SLATE (Textes et éléments structurels)

```css
--slate-50:  #f8fafc    /* Background général */
--slate-100: #f1f5f9    /* Background alternatif */
--slate-200: #e2e8f0    /* Bordures, séparateurs */
--slate-300: #cbd5e1    /* Bordures actives */
--slate-400: #94a3b8    /* Placeholder texte */
--slate-500: #64748b    /* Texte secondaire */
--slate-600: #475569    ⭐ TEXTE PRINCIPAL
--slate-700: #334155    /* Texte important */
--slate-800: #1e293b    /* Texte emphase */
--slate-900: #0f172a    ⭐ TITRES PRINCIPAUX
```

### ⚪ BASE

```css
--white: #ffffff       /* Backgrounds cartes */
--black: #000000       /* Jamais utilisé pur */
```

---

## 2.3 Couleurs Sémantiques

```css
--success: #10b981     /* Vert - Validation */
--error:   #ef4444     /* Rouge - Erreur */
--warning: #f59e0b     /* Ambre - Attention */
--info:    #3b82f6     /* Bleu - Information */
```

---

## 2.4 Gradients

### Gradient Hero (Background principal)

```css
background: linear-gradient(135deg, 
  #eff6ff 0%,      /* Bleu très clair */
  #ffffff 50%,     /* Blanc */
  #faf5ff 100%     /* Violet très clair */
);
```

**Angle :** 135° (diagonal haut-gauche vers bas-droite)  
**Usage :** Hero section, landing page

---

### Gradient CTA (Zones d'action)

```css
background: linear-gradient(135deg, 
  #eff6ff 0%,      /* Bleu très clair */
  #faf5ff 100%     /* Violet très clair */
);
```

**Usage :** Sections "Travaillons ensemble", CTA finales

---

### Gradient Card (Cartes subtiles)

```css
background: linear-gradient(to bottom, 
  #ffffff,         /* Blanc */
  #f8fafc          /* Slate très clair */
);
```

**Usage :** Hover sur cartes premium

---

## 2.5 Règles d'Accessibilité (WCAG AA)

### Contrastes Minimums

| Fond | Texte | Ratio | Statut |
|------|-------|-------|--------|
| Blanc | Slate-900 | 16.8:1 | ✅ AAA |
| Blanc | Slate-600 | 7.5:1 | ✅ AA |
| Bleu-600 | Blanc | 8.6:1 | ✅ AAA |
| Violet-600 | Blanc | 7.2:1 | ✅ AA |
| Orange-600 | Blanc | 5.8:1 | ✅ AA |

**Règle :** Jamais de texte clair sur fond clair, ni foncé sur foncé

---

# ✍️ 3. TYPOGRAPHIE

## 3.1 Polices

### Police Principale : **Plus Jakarta Sans**

```
Famille : Plus Jakarta Sans
Type    : Sans-serif moderne
Usage   : Corps de texte, paragraphes, UI
Poids   : 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
Source  : Google Fonts
```

**Caractéristiques :**
- Géométrique et humaniste
- Excellent en petites tailles
- Lisibilité optimale sur écran
- Moderne et professionnelle

**Import :**
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

### Police Secondaire : **Space Grotesk**

```
Famille : Space Grotesk
Type    : Sans-serif géométrique
Usage   : Titres, headlines, navigation
Poids   : 500 (Medium), 600 (SemiBold), 700 (Bold)
Source  : Google Fonts
```

**Caractéristiques :**
- Géométrique pure
- Personnalité tech/moderne
- Impact visuel fort
- Excellent pour headlines

**Import :**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## 3.2 Hiérarchie Typographique

### Desktop (>1024px)

```css
H1 (Hero Title)
  Font: Space Grotesk
  Size: 48px (3rem)
  Weight: 700 (Bold)
  Line-height: 1.2 (58px)
  Color: #1d4ed8 (Bleu-700)
  Letter-spacing: -0.02em

H2 (Section Title)
  Font: Space Grotesk
  Size: 36px (2.25rem)
  Weight: 700 (Bold)
  Line-height: 1.25 (45px)
  Color: #0f172a (Slate-900)
  Letter-spacing: -0.01em

H3 (Card Title)
  Font: Space Grotesk
  Size: 24px (1.5rem)
  Weight: 600 (SemiBold)
  Line-height: 1.3 (31px)
  Color: #0f172a (Slate-900)
  Letter-spacing: 0

H4 (Subsection)
  Font: Space Grotesk
  Size: 20px (1.25rem)
  Weight: 600 (SemiBold)
  Line-height: 1.4 (28px)
  Color: #334155 (Slate-700)
  Letter-spacing: 0

Body Large
  Font: Plus Jakarta Sans
  Size: 18px (1.125rem)
  Weight: 400 (Regular)
  Line-height: 1.6 (29px)
  Color: #475569 (Slate-600)

Body Regular ⭐ STANDARD
  Font: Plus Jakarta Sans
  Size: 16px (1rem)
  Weight: 400 (Regular)
  Line-height: 1.625 (26px)
  Color: #475569 (Slate-600)

Body Small
  Font: Plus Jakarta Sans
  Size: 14px (0.875rem)
  Weight: 400 (Regular)
  Line-height: 1.5 (21px)
  Color: #64748b (Slate-500)

Caption
  Font: Plus Jakarta Sans
  Size: 12px (0.75rem)
  Weight: 500 (Medium)
  Line-height: 1.4 (17px)
  Color: #64748b (Slate-500)
  Text-transform: uppercase
  Letter-spacing: 0.05em
```

---

### Mobile (<768px)

```css
H1 : 32px → 28px
H2 : 36px → 24px
H3 : 24px → 20px
H4 : 20px → 18px
Body : 16px → 14px
Small : 14px → 12px
```

**Règle :** Réduction de ~20-30% sur mobile

---

## 3.3 Styles Spéciaux

### Texte en Gras (Bold Keywords)

```css
Font-weight: 600 (SemiBold) ou 700 (Bold)
Color: Hérite du parent
Usage: Mots-clés importants dans paragraphes
```

**Exemple :** "...spécialisée en **gouvernance et transformation SIRH**..."

---

### Liens Hypertextes

```css
Color: #2563eb (Bleu-600)
Text-decoration: underline
Font-weight: 500 (Medium)

Hover:
  Color: #1d4ed8 (Bleu-700)
  Text-decoration: underline
```

---

### Texte Justifié

```css
Text-align: justify
Hyphens: auto
Usage: Paragraphes longs (manifesto, vision)
```

---

### Citation / Tagline

```css
Font: Plus Jakarta Sans
Size: 14px
Weight: 500 (Medium)
Color: #2563eb (Bleu-600)
Text-transform: uppercase
Letter-spacing: 0.05em
```

**Exemple :** "HRIS SPECIALIST"

---

# 📐 4. FORMES & GÉOMÉTRIE

## 4.1 Border Radius (Arrondis)

```css
--radius-none: 0           /* Éléments carrés */
--radius-sm:   4px         /* Très subtil */
--radius:      8px         ⭐ STANDARD (boutons, inputs)
--radius-md:   12px        /* Badges */
--radius-lg:   16px        ⭐ CARTES STANDARD
--radius-xl:   20px        /* Cartes premium */
--radius-2xl:  24px        /* Hero cards */
--radius-full: 9999px      /* Pills, cercles parfaits */
```

### Règles d'Application

| Élément | Rayon | Exemple |
|---------|-------|---------|
| Boutons | 8px | Tous les CTA |
| Cartes standard | 16px | Project cards |
| Cartes premium | 20-24px | Hero cards |
| Inputs/Forms | 8px | Formulaires |
| Badges | 12px | Skill badges |
| Icônes cercles | 12px | Icon backgrounds |
| Photo profil | 20-29px | Hero image |
| Pills | 9999px | Tags, status |

---

## 4.2 Bordures

```css
/* Épaisseur */
--border-thin:   1px       ⭐ STANDARD
--border-medium: 2px       /* Emphasis */
--border-thick:  4px       /* Photo profil */
--border-extra:  8px       /* Photo profil desktop */

/* Couleurs */
--border-default:  #e2e8f0  (Slate-200)
--border-active:   #cbd5e1  (Slate-300)
--border-blue:     #bfdbfe  (Blue-200)
--border-purple:   #e9d5ff  (Purple-200)
--border-orange:   #fed7aa  (Orange-200)
```

### Types de Bordures

#### Bordure Simple (Standard)
```css
border: 1px solid #e2e8f0;
```
**Usage :** Cartes, inputs, séparateurs

#### Bordure Colorée (Projets)
```css
border-left: 4px solid #2563eb;
/* ou */
border: 2px solid #bfdbfe;
```
**Usage :** Accent sur cartes projet

#### Bordure Photo
```css
border: 4px solid #ffffff;
/* Desktop: */
border: 8px solid #ffffff;
```
**Usage :** Photo de profil hero

---

## 4.3 Formes Géométriques

### Cercles Parfaits (Icônes)

```css
width: 44px;
height: 44px;
border-radius: 12px;  /* Légèrement arrondi */
/* OU */
border-radius: 9999px; /* Cercle parfait */
```

**Tailles standard :**
- Small: 36px × 36px
- Medium: 44px × 44px ⭐ STANDARD
- Large: 56px × 56px

---

### Rectangles Cartes

```css
Ratio: Libre (height: auto)
Padding: 24px (desktop), 16px (mobile)
Border-radius: 16px
```

**Proportions courantes :**
- Card standard : Width auto, height auto
- Card hero : Max-width 400px

---

### Pills (Badges allongés)

```css
height: 32px;
padding: 0 12px;
border-radius: 9999px;
```

---

# 🌑 5. OMBRES & PROFONDEUR

## 5.1 Échelle d'Ombres (5 niveaux)

```css
/* Niveau 1 : Hover subtil */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Niveau 2 : Cartes au repos ⭐ */
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

/* Niveau 3 : Boutons, cartes actives */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Niveau 4 : Hover cartes ⭐ */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Niveau 5 : Photo profil, modales */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.15);

/* Niveau 6 : Modales overlay */
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

## 5.2 Application des Ombres

| Élément | État Repos | État Hover |
|---------|------------|------------|
| **Cartes** | shadow-sm | shadow-lg |
| **Boutons** | shadow-md | shadow-md + translateY(-1px) |
| **Photo profil** | shadow-2xl | - |
| **Modales** | shadow-2xl | - |
| **Dropdowns** | shadow-lg | - |
| **Header sticky** | shadow-sm | - |

## 5.3 Règles d'Usage

✅ **À FAIRE :**
- Utiliser les ombres pour hiérarchiser
- Ombres plus fortes = plus importantes
- Transition douce entre états (300ms)

❌ **À NE PAS FAIRE :**
- Ombres de couleur
- Ombres trop marquées (max shadow-2xl)
- Ombres sur tous les éléments

---

# 📏 6. ESPACEMENTS & GRILLE

## 6.1 Système d'Espacement (Base 4px)

```css
--space-0:  0
--space-1:  4px      /* 0.25rem */
--space-2:  8px      /* 0.5rem */  ⭐ Gap minimal
--space-3:  12px     /* 0.75rem */
--space-4:  16px     /* 1rem */    ⭐ Espacement standard
--space-5:  20px     /* 1.25rem */
--space-6:  24px     /* 1.5rem */  ⭐ Card padding desktop
--space-8:  32px     /* 2rem */    ⭐ Section spacing
--space-10: 40px     /* 2.5rem */
--space-12: 48px     /* 3rem */
--space-16: 64px     /* 4rem */    ⭐ Section spacing large
--space-20: 80px     /* 5rem */
```

## 6.2 Espacements Sémantiques

### Padding Cartes

```css
Mobile:  16px (space-4)
Tablet:  20px (space-5)
Desktop: 24px (space-6)
```

### Marges Sections

```css
Mobile:  32px (space-8)
Tablet:  48px (space-12)
Desktop: 64px (space-16)
```

### Gap dans Grids

```css
Cards grid:     20px (space-5)
Buttons group:  8-12px (space-2 / space-3)
Badges group:   8px (space-2)
```

---

## 6.3 Système de Grille

### Container Principal

```css
max-width: 1280px;
padding-left: 16px;  /* Mobile */
padding-right: 16px;
margin: 0 auto;

/* Desktop */
padding-left: 24px;
padding-right: 24px;
```

### Colonnes Responsive

```css
/* Mobile (<768px) */
grid-template-columns: 1fr;

/* Tablet (768-1023px) */
grid-template-columns: repeat(2, 1fr);

/* Desktop (>1024px) */
grid-template-columns: repeat(3, 1fr);  /* Vision cards */
grid-template-columns: repeat(4, 1fr);  /* Quick links */
```

### Gap entre Colonnes

```css
Mobile:  16px (space-4)
Tablet:  20px (space-5)
Desktop: 24px (space-6)
```

---

## 6.4 Règles d'Espacement

### Hiérarchie

```
Entre éléments proches :     8-12px
Entre groupes d'éléments :   16-24px
Entre sections :             32-64px
```

### Padding Vertical

```
Boutons :        10-12px
Inputs :         10-12px
Cartes :         16-24px
Sections :       32-64px
```

### Padding Horizontal

```
Boutons :        16-24px
Inputs :         12-16px
Cartes :         16-24px
Container :      16-24px
```

---

# 🎯 7. ICÔNES

## 7.1 Bibliothèque

**Source :** Font Awesome 6 Free  
**CDN :**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 7.2 Style d'Icônes

```css
Style: Solid (fas)
Taille: 16-24px (selon contexte)
Couleur: Hérite du parent ou couleur sémantique
```

## 7.3 Icônes Principales

### Navigation
```html
Accueil:    <i class="fa-solid fa-house"></i>
À propos:   <i class="fa-solid fa-user"></i>
Projets:    <i class="fa-solid fa-briefcase"></i>
Contact:    <i class="fa-solid fa-envelope"></i>
Boutique:   <i class="fa-solid fa-shopping-cart"></i>
```

### Actions
```html
Email:      <i class="fa-solid fa-envelope"></i>
Calendrier: <i class="fa-solid fa-calendar-days"></i>
LinkedIn:   <i class="fa-brands fa-linkedin"></i>
Téléphone:  <i class="fa-solid fa-phone"></i>
WhatsApp:   <i class="fa-brands fa-whatsapp"></i>
Télécharger:<i class="fa-solid fa-download"></i>
Lien:       <i class="fa-solid fa-arrow-right"></i>
```

### Sections
```html
Vision:     <i class="fa-solid fa-bullseye"></i>
Gouvernance:<i class="fa-solid fa-shield-alt"></i>
Amélioration:<i class="fa-solid fa-chart-line"></i>
Compétences:<i class="fa-solid fa-lightbulb"></i>
Formation:  <i class="fa-solid fa-graduation-cap"></i>
```

## 7.4 Tailles d'Icônes

```css
Extra Small:  14px   /* Inline avec texte */
Small:        16px   ⭐ STANDARD (boutons)
Medium:       20px   /* Icon circles */
Large:        24px   /* Hero icons */
Extra Large:  32px   /* Feature icons */
```

## 7.5 Cercles d'Icônes

### Structure
```css
.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Variantes de Couleur

```css
/* Bleu */
.icon-circle-blue {
  background: #dbeafe;  /* Blue-100 */
  color: #2563eb;       /* Blue-600 */
}

/* Violet */
.icon-circle-purple {
  background: #f3e8ff;  /* Purple-100 */
  color: #9333ea;       /* Purple-600 */
}

/* Orange */
.icon-circle-orange {
  background: #ffedd5;  /* Orange-100 */
  color: #ea580c;       /* Orange-600 */
}
```

### Variantes de Taille

```css
Small:  36px × 36px, icon 16px
Medium: 44px × 44px, icon 20px  ⭐ STANDARD
Large:  56px × 56px, icon 24px
```

---

# 🔘 8. BOUTONS

## 8.1 Anatomie d'un Bouton

```css
Padding: 10px 20px (vertical, horizontal)
Border-radius: 8px
Font: Plus Jakarta Sans, 14px, Medium (500)
Gap entre icône et texte: 8px
Transition: 200ms ease-in-out
Box-shadow: 0 4px 6px rgba(0,0,0,0.1)
```

## 8.2 Types de Boutons

### Bouton Primary (Bleu)

```css
background: #2563eb;
color: #ffffff;
border: none;

hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}
```

**Usage :** LinkedIn, navigation principale

---

### Bouton Secondary (Violet)

```css
background: #9333ea;
color: #ffffff;
border: none;

hover {
  background: #7e22ce;
  transform: translateY(-1px);
}
```

**Usage :** "Me contacter", actions importantes

---

### Bouton Accent (Orange)

```css
background: #ea580c;
color: #ffffff;
border: none;

hover {
  background: #c2410c;
  transform: translateY(-1px);
}
```

**Usage :** "Prendre RDV", actions urgentes

---

### Bouton Outline

```css
background: transparent;
color: #2563eb;
border: 2px solid #2563eb;
box-shadow: none;

hover {
  background: #eff6ff;
  border-color: #1d4ed8;
  color: #1d4ed8;
}
```

**Usage :** Actions secondaires

---

### Bouton Ghost

```css
background: transparent;
color: #475569;
border: none;
box-shadow: none;

hover {
  background: #f1f5f9;
  color: #0f172a;
}
```

**Usage :** "Plus de détails", actions tertiaires

---

## 8.3 Tailles de Boutons

### Small
```css
padding: 8px 16px;
font-size: 12px;
```

### Medium ⭐ STANDARD
```css
padding: 10px 20px;
font-size: 14px;
```

### Large
```css
padding: 12px 24px;
font-size: 16px;
```

---

## 8.4 États

```css
/* Normal */
opacity: 1;

/* Hover */
transform: translateY(-1px);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);

/* Active/Click */
transform: translateY(0);

/* Disabled */
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;
```

---

# 🃏 9. CARTES

## 9.1 Anatomie d'une Carte

```css
background: #ffffff;
border: 1px solid #e2e8f0;
border-radius: 16px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0,0,0,0.1);
transition: all 300ms ease-in-out;

hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
```

## 9.2 Types de Cartes

### Carte Standard

```html
<div class="card">
  <h3 class="card-title">Titre</h3>
  <p class="card-description">Description...</p>
</div>
```

---

### Carte avec Icône

```html
<div class="card">
  <div class="icon-circle icon-circle-blue">
    <i class="fa-solid fa-briefcase"></i>
  </div>
  <h3 class="card-title">Titre</h3>
  <p class="card-description">Description...</p>
</div>
```

---

### Carte Projet (avec bordure colorée)

```html
<div class="card card-project">
  <!-- Badge année en haut à droite -->
  <span class="badge badge-blue">2026</span>
  
  <!-- Contenu -->
  <div class="icon-circle icon-circle-blue">
    <i class="fa-solid fa-cogs"></i>
  </div>
  <h3 class="card-title">Nom du projet</h3>
  
  <!-- Sections -->
  <div class="card-section">
    <h4>Problématique</h4>
    <p>...</p>
  </div>
  
  <div class="card-section">
    <h4>Actions</h4>
    <p>...</p>
  </div>
  
  <!-- Skills badges -->
  <div class="badge-group">
    <span class="badge badge-blue">Workday</span>
    <span class="badge badge-purple">Governance</span>
  </div>
</div>
```

---

### Carte Cliquable

```html
<a href="/link" class="card-link">
  <div class="card">
    <!-- Contenu -->
    <span class="link-arrow">
      En savoir plus
      <i class="fa-solid fa-arrow-right"></i>
    </span>
  </div>
</a>
```

---

## 9.3 Variantes de Bordures

```css
/* Bordure bleue */
.card-blue {
  border-color: #bfdbfe;
  border-left-width: 4px;
}

/* Bordure violette */
.card-purple {
  border-color: #e9d5ff;
  border-left-width: 4px;
}

/* Bordure orange */
.card-orange {
  border-color: #fed7aa;
  border-left-width: 4px;
}
```

---

# 🏷️ 10. BADGES

## 10.1 Anatomie d'un Badge

```css
display: inline-flex;
padding: 6px 12px;
border-radius: 12px;
font-size: 12px;
font-weight: 500;
line-height: 1;
white-space: nowrap;
```

## 10.2 Variantes de Couleur

### Badge Bleu
```css
background: #eff6ff;
color: #1d4ed8;
border: 1px solid #bfdbfe;
```

### Badge Violet
```css
background: #faf5ff;
color: #7e22ce;
border: 1px solid #e9d5ff;
```

### Badge Orange
```css
background: #fff7ed;
color: #c2410c;
border: 1px solid #fed7aa;
```

### Badge Success
```css
background: #d1fae5;
color: #065f46;
```

### Badge Error
```css
background: #fee2e2;
color: #991b1b;
```

## 10.3 Utilisation

**Projets :** Année (2026, 2025)  
**Compétences :** Modules Workday, SAP, certifications  
**Status :** En cours, Terminé, Planifié  

## 10.4 Badge Pill (arrondi complet)

```css
border-radius: 9999px;
```

---

# 📝 11. FORMULAIRES

## 11.1 Inputs

```css
width: 100%;
padding: 10px 12px;
font-size: 14px;
color: #0f172a;
background: #ffffff;
border: 1px solid #cbd5e1;
border-radius: 8px;
transition: all 200ms;

focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  outline: none;
}

placeholder {
  color: #94a3b8;
}
```

## 11.2 Textarea

```css
/* Identique à input */
min-height: 120px;
resize: vertical;
```

## 11.3 Labels

```css
display: block;
font-size: 14px;
font-weight: 500;
color: #334155;
margin-bottom: 8px;
```

### Label Required

```css
label::after {
  content: " *";
  color: #ef4444;
}
```

## 11.4 Messages d'Erreur

```css
font-size: 12px;
color: #ef4444;
margin-top: 4px;
```

## 11.5 Messages de Succès

```css
font-size: 12px;
color: #10b981;
margin-top: 4px;
```

---

# 🧭 12. NAVIGATION

## 12.1 Header

```css
background: #ffffff;
border-bottom: 1px solid #e2e8f0;
position: sticky;
top: 0;
z-index: 30;
box-shadow: 0 1px 3px rgba(0,0,0,0.1);
```

## 12.2 Menu Items

```css
/* Normal */
padding: 8px 16px;
font-size: 14px;
font-weight: 500;
color: #475569;
border-radius: 8px;

/* Hover */
color: #2563eb;
background: #eff6ff;

/* Active */
color: #2563eb;
background: #eff6ff;
```

## 12.3 Menu Mobile

```css
/* Hamburger Icon */
width: 24px;
height: 2px;
background: #0f172a;
gap: 4px;

/* Mobile Menu Drawer */
position: fixed;
right: -280px;  /* Hidden */
width: 280px;
height: 100vh;
background: #ffffff;
box-shadow: 0 25px 50px rgba(0,0,0,0.25);
transition: right 300ms;

/* Open State */
right: 0;
```

---

# ✨ 13. ANIMATIONS

## 13.1 Durées

```css
--transition-fast:   150ms;  /* Micro-interactions */
--transition-base:   200ms;  ⭐ STANDARD
--transition-medium: 300ms;  /* Cartes, modales */
--transition-slow:   500ms;  /* Page transitions */
```

## 13.2 Easing Functions

```css
--ease-in:     cubic-bezier(0.4, 0, 1, 1);
--ease-out:    cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  ⭐ STANDARD
```

## 13.3 Animations Courantes

### Hover Carte
```css
transition: all 300ms ease-in-out;
transform: translateY(-2px);
box-shadow: 0 10px 15px rgba(0,0,0,0.1);
```

### Hover Bouton
```css
transition: all 200ms ease-in-out;
transform: translateY(-1px);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
```

### Link Arrow
```css
transition: gap 200ms ease-in-out;
gap: 12px; /* Normal: 8px */
```

### Modal Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 300ms ease-in-out;
```

---

# 📱 14. RESPONSIVE

## 14.1 Breakpoints

```css
/* Mobile First */
--mobile:  320px - 767px   (1 colonne)
--tablet:  768px - 1023px  (2 colonnes)
--desktop: 1024px+         (3-4 colonnes)
```

## 14.2 Adaptations Mobile

### Typographie
```
H1: 48px → 32px
H2: 36px → 24px
Body: 16px → 14px
```

### Espacements
```
Section padding: 64px → 32px
Card padding: 24px → 16px
Gap: 24px → 16px
```

### Boutons
```
Full-width sur mobile
Flex-row sur desktop
```

### Navigation
```
Mobile: Hamburger menu (drawer)
Desktop: Horizontal menu
```

### Grids
```
Mobile: 1 column
Tablet: 2 columns
Desktop: 3-4 columns
```

---

# 🎨 15. APPLICATIONS

## 15.1 Hero Section

```
Background: Gradient hero
Photo: 160px (mobile) → 224px (desktop)
Border: 4px → 8px blanc
Border-radius: 20px → 29px
Shadow: shadow-2xl
Buttons: Stack mobile, row desktop
```

## 15.2 Quick Links (4 cards)

```
Grid: 1 col (mobile) → 4 cols (desktop)
Card padding: 20px → 24px
Icon circle: Blue/Purple/Orange alternance
Border-radius: 16px
Hover: translateY(-2px), shadow-lg
```

## 15.3 Vision Cards (3 pillars)

```
Grid: 1 col (mobile) → 3 cols (desktop)
Icon circle: Large (56px), round (9999px)
Text-align: center
Padding: 32px
Border-radius: 16px
```

## 15.4 Project Cards

```
Border-left: 4px solid [couleur]
Badge année: Position absolute top-right
Icon circle: 44px, blue/purple/orange
Sections: Border-top séparateur
Badge group: Flex wrap, gap 8px
```

## 15.5 Contact Form

```
Labels: Font-weight 500
Inputs: Border slate-300, focus blue-600
Required: Astérisque rouge
Button: Full-width mobile, auto desktop
```

---

# ✅ RÈGLES D'OR

## ❌ À NE JAMAIS FAIRE

1. ❌ Mélanger plus de 3 couleurs principales sur une page
2. ❌ Utiliser du texte gris clair sur fond gris clair
3. ❌ Ombres colorées ou trop marquées
4. ❌ Border-radius > 24px (sauf cercles parfaits)
5. ❌ Polices en dehors de Space Grotesk et Plus Jakarta Sans
6. ❌ Animations > 500ms
7. ❌ Ignorer les états hover/focus
8. ❌ Oublier la version mobile

## ✅ À TOUJOURS FAIRE

1. ✅ Respecter les contrastes WCAG AA (4.5:1 minimum)
2. ✅ Tester sur mobile, tablet et desktop
3. ✅ Utiliser les CSS variables pour les couleurs
4. ✅ Ajouter des transitions sur les états interactifs
5. ✅ Maintenir la hiérarchie typographique H1 > H2 > H3
6. ✅ Espacements multiples de 4px
7. ✅ Icônes cohérentes (Font Awesome Solid)
8. ✅ Loading states et feedback utilisateur

---

# 📋 CHECKLIST DE CONFORMITÉ

Avant de publier un composant, vérifier :

- [ ] Couleurs issues de la palette définie
- [ ] Polices : Space Grotesk (titres) ou Plus Jakarta Sans (texte)
- [ ] Border-radius entre 8px et 24px
- [ ] Ombres : shadow-sm à shadow-2xl
- [ ] Espacements multiples de 4px
- [ ] Responsive mobile/tablet/desktop
- [ ] États hover/focus/active
- [ ] Transitions 200-300ms
- [ ] Contraste texte/fond ≥ 4.5:1
- [ ] Icônes Font Awesome 6
- [ ] Boutons avec gap 8px icône/texte
- [ ] Cards avec padding 16-24px

---

# 📞 CONTACT

**Designer :** Amandine Ferey  
**Charte v1.0** | Mars 2026  
📧 amandine.ferey@icloud.com  

---

**FIN DE LA CHARTE GRAPHIQUE COMPLÈTE** 🎨✨
