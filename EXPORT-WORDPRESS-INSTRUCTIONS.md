# 🚀 GUIDE DE RECONSTRUCTION WORDPRESS
## Instructions étape par étape

---

## 📋 PRÉREQUIS

### Hébergement WordPress
- ✅ WordPress 6.0+ installé
- ✅ Accès administrateur
- ✅ PHP 8.0+ recommandé
- ✅ SSL actif (HTTPS)

### Plugins recommandés
1. **Page Builder** : Elementor Pro ou Bricks Builder
2. **Forms** : WPForms ou Contact Form 7
3. **SEO** : Yoast SEO ou Rank Math
4. **Performance** : WP Rocket ou LiteSpeed Cache
5. **Fonts** : Custom Fonts (pour Google Fonts)

---

## 🎨 ÉTAPE 1 : CONFIGURATION DE BASE

### 1.1 Installer les polices

**Option A : Via plugin "Custom Fonts"**
1. Installer plugin "Custom Fonts" ou "Easy Google Fonts"
2. Ajouter les deux polices :
   - Plus Jakarta Sans (400, 500, 600, 700)
   - Space Grotesk (500, 600, 700)

**Option B : Via functions.php**
```php
function custom_fonts_enqueue() {
    wp_enqueue_style(
        'custom-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'custom_fonts_enqueue');
```

### 1.2 Configuration du thème

**Créer les variables CSS globales** (dans Customizer > CSS additionnel ou fichier style.css)

```css
:root {
  /* Couleurs principales */
  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  
  --color-purple-50: #faf5ff;
  --color-purple-100: #f3e8ff;
  --color-purple-600: #9333ea;
  --color-purple-700: #7e22ce;
  
  --color-orange-50: #fff7ed;
  --color-orange-100: #ffedd5;
  --color-orange-600: #ea580c;
  --color-orange-700: #c2410c;
  
  --color-slate-50: #f8fafc;
  --color-slate-200: #e2e8f0;
  --color-slate-600: #475569;
  --color-slate-900: #0f172a;
  
  /* Polices */
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-heading: 'Space Grotesk', -apple-system, sans-serif;
  
  /* Espacements */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-base: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  
  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-slate-900);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.3;
}
```

---

## 📄 ÉTAPE 2 : CRÉER LES PAGES

### 2.1 Créer la structure de pages

Dans WordPress Admin > Pages > Ajouter :

1. **Accueil** (slug: `/`)
2. **Mes Projets** (slug: `/projets`)
3. **Formations & Certifications** (slug: `/formations`)
4. **Compétences** (slug: `/competences`)
5. **Mon CV** (slug: `/cv`)
6. **Contact** (slug: `/contact`)

**Paramètres > Lecture** : Définir "Accueil" comme page d'accueil statique

---

## 🎨 ÉTAPE 3 : CONSTRUIRE AVEC ELEMENTOR/BRICKS

### 3.1 PAGE D'ACCUEIL

#### Section 1 : Hero
**Composants** :
- Container : max-width 1280px, padding 48px
- Background : Gradient (Blue 50 → White → Purple 50)
- Layout : 2 colonnes (Desktop), 1 colonne (Mobile)

**Colonne 1 (Texte)** :
- Titre H1 : "HRIS Business Partner | Driving HR Transformation & Governance"
  - Police : Space Grotesk, 700
  - Taille : 28px (Desktop), 22px (Mobile)
  - Couleur : Blue 600
- Nom : "Amandine Ferey"
  - Taille : 22px
- Paragraphe résumé (texte du fichier CONTENU)
- 3 boutons CTA en ligne :
  - Email : Violet 600
  - Calendly : Orange 600
  - LinkedIn : Blue 600

**Colonne 2 (Photo)** :
- Image : 224px × 224px (Desktop), 160px × 160px (Mobile)
- Border : 8px blanc
- Border radius : 20-29px
- Shadow : 0 20px 25px rgba(0,0,0,0.15)

#### Section 2 : Quick Links
**Layout** : Grid 4 colonnes (Desktop), 1 colonne (Mobile)
**Cards** : 4 cards avec icônes (Projets, Formations, Compétences, CV)
- Background : Blanc
- Border : 1px Slate 200
- Border radius : 16px
- Padding : 24px
- Hover : Shadow augmentée
- Icône : Circle Blue 100, 44px
- Titre : 20px, bold
- Description : 14px
- Link : "Découvrir" + Arrow (Blue 600)

#### Section 3 : Valeurs Clés
**Layout** : 3 colonnes égales
**Card unique** : Background blanc, padding 32px
- Titre H2 : "Travaillons ensemble"
- 3 colonnes avec icônes rondes (Target, Briefcase, FileText)
- Icône : 56px circle, Background coloré
- Titre : 18px bold
- Description : 14px

#### Section 4 : CTA Final
**Background** : Gradient Blue 50 → Purple 50
**Border** : 1px Blue 100
**Padding** : 32px
- Titre H3 : "Besoin d'une expertise SIRH ?"
- Description
- Bouton : "Me contacter" Blue 600

---

### 3.2 PAGE PROJETS

#### Header
- Lien retour : "← Retour à l'accueil" (Blue 600, 14px)
- Titre H1 : "Portfolio de transformations"
- Sous-titre : Description

#### Liste des projets (7 cards)
**Pour chaque projet** :

**Structure de card** :
- Background : Blanc
- Border : 1px (couleur projet : Blue/Purple/Orange 200)
- Border radius : 16px
- Padding : 24px
- Margin bottom : 24px

**Contenu** :
- Icône colorée : 56px circle (Blue/Purple/Orange 100)
- Titre H2 : Nom du projet
- Entreprise : Couleur du projet (600)
- Badge année : Pill (couleur 50, border couleur 200)
- 3 sections :
  - **Problème** : Label uppercase 12px + Texte 14px
  - **Actions** : Label + Texte
  - **Impact** : Label + Texte
- **Compétences** : Chips colorées (fond 50, texte 700, 12px)

**Répéter pour les 7 projets** (voir fichier CONTENU)

---

### 3.3 PAGE FORMATIONS & CERTIFICATIONS

#### Section 1 : Formations Professionnelles
**Card unique** : 2 colonnes

**Colonne 1 : Formations** (liste à puces avec icône CheckCircle violet)
- 8 items (voir fichier CONTENU)

**Colonne 2 : Certifications** (liste à puces avec icône Award orange)
- 5 items dont 1 avec badge "In progress"

#### Section 2 : Formations Académiques
**3 cards verticales** :
- Master : Bac+5
- Bachelor : Bac+3
- BTS : Bac+2

**Structure de chaque card** :
- Layout : 2 colonnes (info + badge niveau)
- Titre formation : 20px bold
- École : Blue 600, 16px
- Lieu : Italic, Slate 500, 14px
- Dates : Icône Calendar + texte
- Description : 14px
- Badge niveau : Blue 100, pill, 12px

#### Section 3 : CTA
- Gradient background
- 2 boutons : "Me contacter" + "Découvrir mes compétences"

---

### 3.4 PAGE COMPÉTENCES

**6 sections avec icônes colorées** :

#### 1. Expertise SIRH (Bleu)
Grid 2 colonnes, 5 cards :
- SAP SuccessFactors (avec 4 badges)
- Workday (avec 4 badges)
- Règles & Champs Calculés
- Reporting & Analytics
- ITIL 4

#### 2. Gestion de Projet (Violet)
2 cards :
- Méthode Agile Scrum
- Pilotage de Projet SIRH

#### 3. Gouvernance & Conformité (Orange)
4 cards :
- Gouvernance des Données
- Sécurité & Fiabilité
- Configuration Sécurité (avec 3 badges)
- Design de Processus

#### 4. Change Management (Bleu)
2 cards :
- Conduite du Changement
- Formation & Documentation

#### 5. Compétences Techniques (Violet)
2 cards avec badges :
- Outils (Excel, Tableau, JIRA, Confluence)
- Langues (Français, Anglais)

#### CTA Final
Boutons : "Me contacter" + "Voir mes projets"

---

### 3.5 PAGE CONTACT

**Layout** : 2 colonnes (Desktop), 1 colonne (Mobile)

#### Colonne 1 : Informations
**Card 1 : Contact** :
- Email (icône Mail bleue)
- WhatsApp (icône verte)
- Localisation (icône violette)
- Disponibilité (icône ambre)

**Card 2 : Actions rapides** :
- Lien Calendly (background Blue 50)
- Lien LinkedIn (background Blue 50)

#### Colonne 2 : Formulaire
**Champs** :
1. Nom complet * (requis)
2. Email * (requis)
3. Entreprise (optionnel)
4. Sujet * (requis)
5. Message * (requis, textarea)

**Bouton** : "Envoyer le message" Blue 600

**Messages** :
- Success : Green background, icône CheckCircle
- Error : Red background, icône AlertCircle

---

## 🔧 ÉTAPE 4 : CONFIGURATION AVANCÉE

### 4.1 Menu de navigation

**Créer le menu** : Apparence > Menus
- Accueil
- Projets
- Formations & Certifications
- Compétences
- Mon CV
- Contact

**Position** : Header principal ou Sidebar

### 4.2 Formulaire de contact

**Option A : WPForms**
1. Créer formulaire avec les 5 champs
2. Configuration email : amandine.ferey@icloud.com
3. Insérer shortcode dans page Contact

**Option B : Contact Form 7**
1. Créer formulaire
2. Personnaliser avec CSS (voir guide design)
3. Configuration emails

### 4.3 Responsive

**Tester sur** :
- Mobile : 375px, 414px
- Tablet : 768px, 1024px
- Desktop : 1280px, 1440px

**Ajustements** :
- Réduire espacements sur mobile
- Passer en colonnes simples
- Adapter tailles de police

---

## 🎯 ÉTAPE 5 : OPTIMISATION

### 5.1 SEO

**Plugin Yoast/Rank Math** :
- Titre de page
- Meta description
- Mots-clés focus
- Alt text images

**Exemple meta** :
```
Titre : Amandine Ferey | HRIS Specialist - Workday & SAP SuccessFactors Expert
Description : HRIS Business Partner spécialisée en transformation SIRH. Expertise Workday, SAP SuccessFactors, gouvernance et conduite du changement.
```

### 5.2 Performance

**Images** :
- Format WebP
- Compression 80%
- Lazy loading actif
- Dimensions appropriées

**Cache** :
- Plugin WP Rocket ou LiteSpeed
- Minification CSS/JS
- CDN si nécessaire

### 5.3 Accessibilité

- Contraste vérifié (WCAG AA)
- Navigation clavier
- Alt text sur images
- Labels sur formulaires

---

## 📱 ÉTAPE 6 : MOBILE

### Menu mobile
- Hamburger icon en haut à droite
- Menu overlay ou slide-in
- Fermeture automatique après clic

### Adaptations spécifiques
- Photo profil : 160px au lieu de 224px
- Padding cards : 16px au lieu de 24px
- Grid : 1 colonne au lieu de 2-4
- Font size réduite de 20%

---

## ✅ CHECKLIST FINALE

### Design
- [ ] Polices installées et appliquées
- [ ] Couleurs cohérentes (palette 3 couleurs)
- [ ] Espacements harmonisés
- [ ] Border radius appliqués
- [ ] Shadows sur cards

### Contenu
- [ ] Tous les textes du fichier CONTENU intégrés
- [ ] Photo de profil uploadée et stylisée
- [ ] 7 projets créés avec bonnes couleurs
- [ ] Toutes les compétences listées
- [ ] Formations et certifications complètes

### Fonctionnel
- [ ] Navigation fonctionne
- [ ] Formulaire de contact opérationnel
- [ ] Liens externes (LinkedIn, Calendly) corrects
- [ ] Email et WhatsApp cliquables
- [ ] Responsive sur tous devices

### SEO & Performance
- [ ] Meta titles et descriptions
- [ ] Images optimisées
- [ ] Cache activé
- [ ] SSL actif
- [ ] Sitemap généré

### Tests
- [ ] Navigation complète
- [ ] Formulaire de test envoyé
- [ ] Vérification mobile
- [ ] Test vitesse (PageSpeed Insights)
- [ ] Vérification contraste (WAVE)

---

## 🆘 TROUBLESHOOTING

### Problème : Polices ne s'affichent pas
**Solution** : 
- Vérifier l'import Google Fonts
- Vider le cache
- Vérifier priorité CSS

### Problème : Couleurs incorrectes
**Solution** :
- Utiliser les variables CSS définies
- Vérifier codes hex exacts

### Problème : Formulaire ne s'envoie pas
**Solution** :
- Vérifier SMTP configuré
- Tester avec plugin WP Mail SMTP
- Vérifier email de destination

### Problème : Layout cassé sur mobile
**Solution** :
- Vérifier breakpoints Elementor/Bricks
- Forcer colonnes à 100% width sur mobile
- Ajuster padding/margin

---

## 📞 CONTACT POUR QUESTIONS

Si vous avez des questions pendant la reconstruction :
- Email : amandine.ferey@icloud.com
- WhatsApp : +33 6 60 03 08 65

---

## ⏱️ ESTIMATION TEMPS

**Temps total estimé : 6-8 heures**

- Configuration base (polices, couleurs) : 1h
- Page d'accueil : 1.5h
- Page Projets : 2h
- Page Formations : 1h
- Page Compétences : 1.5h
- Page Contact : 1h
- Optimisation & tests : 1h

**Avec expérience Elementor/Bricks : 4-5h**

---

**BON COURAGE ! 🚀**
