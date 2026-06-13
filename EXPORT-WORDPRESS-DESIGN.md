# 🎨 GUIDE DE STYLE & DESIGN
## Pour reconstruction WordPress

---

## 🎨 PALETTE DE COULEURS

### Couleurs Principales (Corporate Tech)

#### Bleu (Couleur dominante)
- **Primary Blue** : `#3b82f6` (rgb: 59, 130, 246)
- **Blue 50** : `#eff6ff` (Backgrounds légers)
- **Blue 100** : `#dbeafe` (Icônes backgrounds)
- **Blue 200** : `#bfdbfe` (Bordures)
- **Blue 600** : `#2563eb` (Boutons primaires)
- **Blue 700** : `#1d4ed8` (Hover état)

#### Violet (Accent secondaire)
- **Purple 50** : `#faf5ff` (Backgrounds légers)
- **Purple 100** : `#f3e8ff` (Icônes backgrounds)
- **Purple 200** : `#e9d5ff` (Bordures)
- **Purple 600** : `#9333ea` (Boutons CTA)
- **Purple 700** : `#7e22ce` (Hover état)

#### Orange (Accent tertiaire)
- **Orange 50** : `#fff7ed` (Backgrounds légers)
- **Orange 100** : `#ffedd5` (Icônes backgrounds)
- **Orange 200** : `#fed7aa` (Bordures)
- **Orange 600** : `#ea580c` (Boutons accent)
- **Orange 700** : `#c2410c` (Hover état)

### Couleurs Neutres

#### Slate (Textes et éléments neutres)
- **Slate 50** : `#f8fafc` (Background général)
- **Slate 100** : `#f1f5f9` (Cards backgrounds)
- **Slate 200** : `#e2e8f0` (Bordures)
- **Slate 300** : `#cbd5e1` (Bordures inputs)
- **Slate 500** : `#64748b` (Texte secondaire)
- **Slate 600** : `#475569` (Texte normal)
- **Slate 700** : `#334155` (Texte normal foncé)
- **Slate 900** : `#0f172a` (Titres, texte principal)

#### Blanc et Noir
- **Blanc** : `#ffffff`
- **Noir** : `#000000`

### Couleurs Spéciales

#### Gradients
- **Gradient Background** : `linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)`
  - De : Blue 50 (`#eff6ff`)
  - Via : Blanc (`#ffffff`)
  - Vers : Purple 50 (`#faf5ff`)

- **Gradient CTA** : `linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)`
  - De : Blue 50
  - Vers : Purple 50

#### Couleurs de statut
- **Success Green** : `#10b981` (Messages de succès)
- **Error Red** : `#ef4444` (Messages d'erreur)
- **Warning Amber** : `#f59e0b` (Avertissements)

---

## 📝 TYPOGRAPHIE

### Polices

#### Police principale (Texte)
- **Font Family** : `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Fallback** : System fonts (Apple, Windows, Linux)
- **Importer** : Google Fonts
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```

#### Police secondaire (Titres)
- **Font Family** : `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Fallback** : System fonts
- **Importer** : Google Fonts
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  ```

### Tailles de texte

#### Desktop
- **H1** : `36-48px` (2.25rem - 3rem) - Font: Space Grotesk, Weight: 700
- **H2** : `30-36px` (1.875rem - 2.25rem) - Font: Space Grotesk, Weight: 700
- **H3** : `24-28px` (1.5rem - 1.75rem) - Font: Space Grotesk, Weight: 600
- **H4** : `20-22px` (1.25rem - 1.375rem) - Font: Space Grotesk, Weight: 600
- **Body Large** : `18-20px` (1.125rem - 1.25rem) - Font: Plus Jakarta Sans, Weight: 400
- **Body Normal** : `16px` (1rem) - Font: Plus Jakarta Sans, Weight: 400
- **Body Small** : `14px` (0.875rem) - Font: Plus Jakarta Sans, Weight: 400
- **Caption** : `12px` (0.75rem) - Font: Plus Jakarta Sans, Weight: 400

#### Mobile
- **H1** : `28-32px` (1.75rem - 2rem)
- **H2** : `24-28px` (1.5rem - 1.75rem)
- **H3** : `20-24px` (1.25rem - 1.5rem)
- **H4** : `18-20px` (1.125rem - 1.25rem)
- **Body** : `14-16px` (0.875rem - 1rem)
- **Small** : `12-14px` (0.75rem - 0.875rem)

### Poids de police
- **Normal** : 400
- **Medium** : 500
- **Semibold** : 600
- **Bold** : 700

### Line Height
- **Titres** : `1.2 - 1.3` (120-130%)
- **Texte normal** : `1.5 - 1.6` (150-160%)
- **Texte compact** : `1.4` (140%)

---

## 📐 ESPACEMENTS & LAYOUT

### Système d'espacement (basé sur 4px)
- **xs** : `4px` (0.25rem)
- **sm** : `8px` (0.5rem)
- **md** : `12px` (0.75rem)
- **base** : `16px` (1rem)
- **lg** : `20px` (1.25rem)
- **xl** : `24px` (1.5rem)
- **2xl** : `32px` (2rem)
- **3xl** : `40px` (2.5rem)
- **4xl** : `48px` (3rem)
- **5xl** : `64px` (4rem)
- **6xl** : `80px` (5rem)

### Largeurs maximales
- **Container principal** : `1280px` (max-w-6xl)
- **Container moyen** : `1024px` (max-w-5xl)
- **Container petit** : `896px` (max-w-4xl)
- **Largeur de lecture** : `672px` (max-w-2xl)

### Marges de section
- **Desktop** : `48-64px` (3rem - 4rem) entre sections
- **Mobile** : `32-40px` (2rem - 2.5rem) entre sections

### Padding de cards
- **Desktop** : `24-32px` (1.5rem - 2rem)
- **Mobile** : `16-20px` (1rem - 1.25rem)

---

## 🔲 COMPOSANTS

### Boutons

#### Bouton Primaire (Bleu)
- **Background** : `#2563eb` (Blue 600)
- **Text** : `#ffffff` (Blanc)
- **Padding** : `10px 20px` (Desktop), `8px 16px` (Mobile)
- **Border Radius** : `8px`
- **Font Weight** : 500 (Medium)
- **Shadow** : `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Hover** : Background → `#1d4ed8` (Blue 700)
- **Transition** : `all 0.2s ease`

#### Bouton Secondaire (Violet)
- **Background** : `#9333ea` (Purple 600)
- **Text** : `#ffffff`
- **Autres propriétés** : Identiques au bouton primaire
- **Hover** : Background → `#7e22ce` (Purple 700)

#### Bouton Accent (Orange)
- **Background** : `#ea580c` (Orange 600)
- **Text** : `#ffffff`
- **Hover** : Background → `#c2410c` (Orange 700)

#### Bouton Outline
- **Background** : `#ffffff` (Transparent ou blanc)
- **Border** : `2px solid #2563eb` (Blue 600)
- **Text** : `#2563eb`
- **Hover** : Background → `#eff6ff` (Blue 50)

### Cards

#### Card Standard
- **Background** : `#ffffff`
- **Border** : `1px solid #e2e8f0` (Slate 200)
- **Border Radius** : `16px` (Desktop), `12px` (Mobile)
- **Padding** : `24px` (Desktop), `20px` (Mobile)
- **Shadow** : `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Hover Shadow** : `0 10px 15px rgba(0, 0, 0, 0.1)`
- **Transition** : `all 0.3s ease`

#### Card avec icône colorée
- **Icône Background** : Circle de couleur (Blue/Purple/Orange 100)
- **Icône Size** : `40-56px` (Desktop), `36-40px` (Mobile)
- **Icône Border Radius** : `12px` ou `50%` (rond)

### Badges/Chips

#### Badge Standard
- **Background** : `#eff6ff` (Blue 50)
- **Text** : `#1e40af` (Blue 700)
- **Padding** : `6px 12px`
- **Border Radius** : `6px` (rectangulaire) ou `999px` (pill)
- **Font Size** : `12px`
- **Font Weight** : 500

#### Variantes de couleur
- **Bleu** : Bg `#eff6ff`, Text `#1e40af`
- **Violet** : Bg `#f3e8ff`, Text `#6b21a8`
- **Orange** : Bg `#ffedd5`, Text `#9a3412`

### Formulaires

#### Input Field
- **Background** : `#ffffff`
- **Border** : `1px solid #cbd5e1` (Slate 300)
- **Border Radius** : `8px`
- **Padding** : `10px 12px`
- **Font Size** : `14px`
- **Focus Border** : `2px solid #3b82f6` (Blue 600)
- **Focus Shadow** : `0 0 0 3px rgba(59, 130, 246, 0.1)`

#### Textarea
- Identique à Input Field
- **Min Height** : `120px`

#### Label
- **Font Size** : `12px`
- **Font Weight** : 500
- **Color** : `#475569` (Slate 600)
- **Margin Bottom** : `6px`

---

## 🎭 ICÔNES

### Bibliothèque
**Lucide React** (ou équivalent WordPress : Font Awesome / Material Icons)

### Tailles standards
- **Small** : `16px` (w-4 h-4)
- **Medium** : `20px` (w-5 h-5)
- **Large** : `24px` (w-6 h-6)
- **XLarge** : `28-32px` (w-7 h-7 / w-8 h-8)

### Icônes utilisées
- **Mail** : Envelope
- **Calendar** : Calendar
- **LinkedIn** : LinkedIn logo
- **Phone** : Phone
- **MapPin** : Location marker
- **Briefcase** : Briefcase/Portfolio
- **GraduationCap** : Graduation hat
- **Lightbulb** : Light bulb
- **FileText** : Document
- **Target** : Target/Bullseye
- **Shield** : Shield (sécurité)
- **Users** : Users/Team
- **Database** : Database
- **Code** : Code brackets
- **BarChart** : Bar chart
- **Settings** : Gear/Cog
- **Globe** : Globe
- **Award** : Award/Medal
- **CheckCircle** : Check in circle
- **ArrowLeft** : Arrow left
- **ArrowRight** : Arrow right
- **ExternalLink** : External link

### Couleurs d'icônes par contexte
- **Bleu** : SIRH, technique, navigation principale
- **Violet** : Gestion de projet, méthodes
- **Orange** : Gouvernance, sécurité, certifications

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
- **Mobile** : `< 768px`
- **Tablet** : `768px - 1024px`
- **Desktop** : `> 1024px`
- **Large Desktop** : `> 1280px`

### Adaptations Mobile

#### Navigation
- **Desktop** : Sidebar fixe à gauche (80px fermée, 256px ouverte)
- **Mobile** : Header fixe en haut + Menu hamburger

#### Grid
- **Desktop** : 2-4 colonnes selon les sections
- **Mobile** : 1 colonne

#### Espacements
- Réduction de ~20-30% sur mobile
- Padding de cards : 24px → 16px
- Margins entre sections : 48px → 32px

#### Typographie
- Titres réduits de ~20-25%
- Texte normal : 16px → 14px

---

## 🎬 ANIMATIONS & TRANSITIONS

### Transitions standards
- **Duration** : `200-300ms`
- **Easing** : `ease` ou `ease-in-out`
- **Propriétés** : `all`, `background-color`, `transform`, `opacity`

### Effets Hover
- **Cards** : Shadow légère → Shadow prononcée
- **Boutons** : Background change + légère élévation
- **Links** : Color change
- **Icônes** : Transform translate (déplacement de flèches)

### Animations
- **Fade In** : Opacity 0 → 1 (300ms)
- **Slide In** : Transform translateY(20px) → translateY(0)
- **Scale** : Transform scale(1) → scale(1.02) au hover

---

## 📄 STRUCTURE DES PAGES

### Page d'accueil
1. **Hero Section** : Photo + Titre + Résumé + 3 CTA
2. **Quick Links** : 4 cards de navigation rapide
3. **Valeurs Clés** : 3 colonnes avec icônes
4. **CTA Final** : Appel à l'action pour contact

### Pages intérieures
1. **Breadcrumb** : Lien retour à l'accueil
2. **Header de page** : Titre H1 + Sous-titre
3. **Contenu** : Sections organisées avec titres H2
4. **CTA** : Section finale avec appel à l'action

---

## 🖼️ IMAGES & MÉDIAS

### Photo de profil
- **Format** : Carré (1:1)
- **Taille recommandée** : 400x400px minimum
- **Border** : 8px blanc (Desktop), 4px blanc (Mobile)
- **Border Radius** : 20-29px (arrondi moderne)
- **Shadow** : `0 20px 25px rgba(0, 0, 0, 0.15)`

### Images décoratives
- **Format** : WebP préféré (fallback JPEG/PNG)
- **Optimisation** : Compression 80-85%
- **Lazy loading** : Oui

---

## 🎯 ACCESSIBILITÉ

### Contraste
- **Ratio minimum** : 4.5:1 (texte normal)
- **Ratio minimum** : 3:1 (texte large)
- **Vérifié** : Tous les couples texte/background

### Focus States
- **Visible** : Bordure bleue 2px + shadow
- **Keyboard navigation** : Tous les éléments interactifs

### Alt Text
- Toutes les images décoratives : `alt=""`
- Images informatives : Description pertinente

---

## 📦 RESSOURCES À TÉLÉCHARGER

### Polices
1. Plus Jakarta Sans : https://fonts.google.com/specimen/Plus+Jakarta+Sans
2. Space Grotesk : https://fonts.google.com/specimen/Space+Grotesk

### Icônes WordPress
- **Plugin recommandé** : Font Awesome 6 ou Lucide Icons
- **Alternative** : Material Design Icons

### Page Builders compatibles
- **Elementor Pro** : Oui ✅
- **Bricks Builder** : Oui ✅
- **Oxygen Builder** : Oui ✅
- **Divi** : Oui (avec ajustements) ⚠️

---

**FIN DU GUIDE DE STYLE**
