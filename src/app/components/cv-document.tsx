import image_9f45bb7da7df4da5eb0289d4bbe0a3cfd842ced2 from 'figma:asset/3fb44fc3e201961d9524474a1abcc5e72bda89f6.png'
import { Mail, MapPin, Calendar, Linkedin, ExternalLink, Download, Target, Gauge, TrendingUp, AlertCircle, Wrench, Users, Shield, Network, FileCheck, BarChart3, Code, GitBranch, BookOpen, Award, Headphones, FileSignature, LayoutGrid, Globe, MessageCircle, Info } from 'lucide-react';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export function CVDocument() {
  const handlePrint = () => {
    window.print();
  };

  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const visionDetails = {
    strategic: {
      title: "Interface stratégique",
      content: "Le SIRH constitue aujourd'hui un levier stratégique de transformation, au-delà de sa fonction opérationnelle. En tant que HRIS Business Partner, mon rôle est d'assurer l'alignement entre les enjeux métier, la stratégie RH et les capacités des systèmes d'information.\n\nJ'interviens à l'interface des équipes RH, IT et métiers pour analyser les besoins organisationnels, anticiper les évolutions et concevoir des solutions adaptées dans des environnements tels que Workday, SAP SuccessFactors ou d'autres écosystèmes SIRH.\n\nCette approche implique une compréhension globale des processus RH, des modèles opérationnels et des impacts systémiques des choix de configuration. Chaque décision doit contribuer à la cohérence du système, à sa pérennité et à sa capacité à accompagner durablement les transformations de l'organisation.\n\nLe SIRH devient ainsi un véritable socle structurant, au service de la performance, de la qualité des données et de la prise de décision."
    },
    reliability: {
      title: "Gouvernance & alignement stratégique",
      content: "La fiabilité d'un SIRH repose sur une gouvernance structurée, garantissant la cohérence globale du système et la qualité des données.\n\nJe mets en œuvre des pratiques visant à assurer la robustesse, la maintenabilité et l'évolutivité des environnements SIRH, notamment dans Workday et SAP SuccessFactors. Cela inclut la structuration des processus, la gestion des accès et des rôles, la maîtrise des évolutions et la mise en place de mécanismes de contrôle et de fiabilisation des données.\n\nUne gouvernance efficace permet de prévenir les incohérences, de limiter la dette fonctionnelle et de garantir que le système reste aligné avec les besoins métier et les orientations stratégiques.\n\nL'objectif est de construire un SIRH fiable, durable et capable de soutenir efficacement les opérations RH et la prise de décision."
    },
    continuous: {
      title: "Amélioration continue & conduite du changement",
      content: "Un SIRH performant est un système en évolution constante, qui doit s'adapter aux transformations organisationnelles et aux besoins des utilisateurs.\n\nJ'adopte une démarche d'amélioration continue fondée sur l'analyse des usages, l'identification des axes d'optimisation et la mise en œuvre d'évolutions structurées. Cela implique une collaboration étroite avec les équipes métier, une écoute active des besoins et une capacité à traduire ces enjeux en solutions concrètes.\n\nJ'intègre également les dimensions de conduite du changement, afin de garantir l'appropriation des outils et la réussite des transformations. L'objectif est d'assurer une adoption durable, d'améliorer l'expérience utilisateur et de renforcer la valeur apportée par le SIRH dans le temps.\n\nCette approche permet de construire des systèmes SIRH robustes, évolutifs et pleinement alignés avec les enjeux de l'organisation."
    }
  };

  return (
    <div className="max-w-full md:max-w-[1200px] mx-auto bg-white shadow-lg">
      {/* Header */}
      <header className="bg-[#F4F8FF] px-4 md:px-8 py-4 md:py-6 border-b-2 border-blue-600">
        <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
          <div className="flex justify-center">
            <h1 className="font-bold text-slate-800 leading-tight text-xl md:text-[40px] px-2 md:px-[10px]" style={{ fontFamily: 'var(--font-family-heading)' }}>HRIS Specialist — HR Process Transformation</h1>
          </div>
          
          <div className="w-24 md:w-32 h-0.5 bg-slate-300 mx-auto"></div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">Amandine Ferey</h2>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-2 md:gap-4 pt-2">
            <a 
              href="mailto:amandine.ferey@icloud.com"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs md:text-sm font-medium shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Me contacter
            </a>
            <a 
              href="https://calendly.com/amandine-ferey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs md:text-sm font-medium shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
            <a 
              href="https://www.linkedin.com/in/amandine-ferey-rocha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs md:text-sm font-medium shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
              Mon LinkedIn
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-xs text-slate-600 pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Canton de Vaud / Genève</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Disponibilité : Août/Septembre 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Manifesto avec photo */}
      <section className="px-4 md:px-8 py-4 md:py-6">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6">
          <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-4 md:gap-6 items-center md:items-center">
            {/* Photo cachée sur mobile, visible sur desktop */}
            <img 
              src={image_9f45bb7da7df4da5eb0289d4bbe0a3cfd842ced2}
              alt="Amandine Ferey"
              className="hidden md:block w-48 h-48 rounded-2xl object-cover border-4 border-white shadow-lg flex-shrink-0"
            />
            <div>
              <p className="text-slate-700 leading-relaxed text-sm text-justify">
                Je conçois les ressources humaines comme un espace de <strong>transformation des organisations</strong> et non comme une <strong>fonction de gestion</strong>.
                <br /><br />
                À l'heure où l'<strong>intelligence artificielle</strong> automatise les tâches, je m'intéresse à <strong>ce qui résiste à l'automatisation</strong> : les <strong>rôles</strong>, les trajectoires, les <strong>arbitrages</strong>, les <strong>cadres de décision</strong>.
                <br /><br />
                Mon travail consiste à interroger les processus existants, à révéler les <strong>points de friction</strong> invisibles, et à structurer des systèmes RH capables d'<strong>accompagner le changement</strong>, plutôt que de simplement optimiser l'existant.
                <br /><br />
                Je privilégie des <strong>trajectoires justes, cohérentes et durables</strong> aux solutions rapides mais mal orientées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Ma Vision */}
      <section className="px-4 md:px-6 py-4 md:py-6 border-b border-slate-100">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-5">Ma vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <Dialog.Root open={openDialog === 'strategic'} onOpenChange={value => setOpenDialog(value ? 'strategic' : null)}>
              <Dialog.Trigger className="absolute top-2.5 right-2.5 text-xs text-purple-600 hover:text-purple-700 font-medium underline">
                Plus de détails
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-3xl w-[90%] md:w-full z-50 max-h-[85vh] overflow-y-auto">
                  <Dialog.Title className="text-lg md:text-xl font-bold text-slate-900 mb-3">{visionDetails.strategic.title}</Dialog.Title>
                  <Dialog.Description className="text-slate-700 leading-relaxed text-justify whitespace-pre-line text-sm">{visionDetails.strategic.content}</Dialog.Description>
                  <Dialog.Close className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm">
                    Fermer
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Interface stratégique</h3>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              Aligner les systèmes SIRH (Workday, SAP SuccessFactors…) avec la stratégie RH et les enjeux business, en traduisant les besoins métier en solutions fiables, structurantes et durables.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <Dialog.Root open={openDialog === 'reliability'} onOpenChange={value => setOpenDialog(value ? 'reliability' : null)}>
              <Dialog.Trigger className="absolute top-2.5 right-2.5 text-xs text-orange-600 hover:text-orange-700 font-medium underline">
                Plus de détails
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-3xl w-[90%] md:w-full z-50 max-h-[85vh] overflow-y-auto">
                  <Dialog.Title className="text-lg md:text-xl font-bold text-slate-900 mb-3">{visionDetails.reliability.title}</Dialog.Title>
                  <Dialog.Description className="text-slate-700 leading-relaxed text-justify whitespace-pre-line text-sm">{visionDetails.reliability.content}</Dialog.Description>
                  <Dialog.Close className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm">
                    Fermer
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <Gauge className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Gouvernance & alignement stratégique</h3>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              Mettre en place une gouvernance SIRH garantissant la cohérence des données, la robustesse des processus et un alignement durable avec les enjeux stratégiques de l'organisation.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <Dialog.Root open={openDialog === 'continuous'} onOpenChange={value => setOpenDialog(value ? 'continuous' : null)}>
              <Dialog.Trigger className="absolute top-2.5 right-2.5 text-xs text-blue-600 hover:text-blue-700 font-medium underline">
                Plus de détails
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-3xl w-[90%] md:w-full z-50 max-h-[85vh] overflow-y-auto">
                  <Dialog.Title className="text-lg md:text-xl font-bold text-slate-900 mb-3">{visionDetails.continuous.title}</Dialog.Title>
                  <Dialog.Description className="text-slate-700 leading-relaxed text-justify whitespace-pre-line text-sm">{visionDetails.continuous.content}</Dialog.Description>
                  <Dialog.Close className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                    Fermer
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Amélioration continue & conduite du changement</h3>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              Faire évoluer le SIRH de manière continue, en optimisant les processus, en accompagnant les utilisateurs et en assurant une adoption durable des solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Expériences de transformation */}
      <section className="px-4 md:px-8 py-4 md:py-8 border-b border-slate-100">
        <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Expériences de transformation</h2>
        <div className="space-y-3 md:space-y-4">
          
          {/* Workday Help */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 mb-3">SNCF Connect & Tech - Workday Help : Déploiement A→Z</h3>
                <div className="grid grid-cols-[3fr_4fr_3fr] gap-8 text-sm">
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Problème(s)</p>
                    <p className="text-slate-700 leading-relaxed">Outil ticketing obsolète + documentation dispersée → support RH peu lisible.</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Action(s) réalisée(s)</p>
                    <p className="text-slate-700 leading-relaxed">J'ai réalisé un pilotage complet en autonomie (cadrage, design process, configuration Workday, tests, supports). J'ai assuré la bascule : mise à jour de la documentation + démos auprès de la Transfo Digitale & Direction RH.</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Impact(s)</p>
                    <p className="text-slate-700 leading-relaxed">Adoption d'un nouveau parcours d'assistance RH, demandes standardisées et expérience utilisateur améliorée.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

          {/* Contrats */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileSignature className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 mb-3">SNCF Connect & Tech - Automatisation contrats & avenants : Workday + DocuSign</h3>
                <div className="grid grid-cols-[3fr_4fr_3fr] gap-8 text-sm">
                  <div>
                    <p className="text-purple-600 font-medium mb-2">Problème(s)</p>
                    <p className="text-slate-700 leading-relaxed">Génération manuelle Word/PDF/email → erreurs, délais, faible traçabilité.</p>
                  </div>
                  <div>
                    <p className="text-purple-600 font-medium mb-2">Action(s) réalisée(s)</p>
                    <p className="text-slate-700 leading-relaxed">J'ai contribué au redesign du process recrutement : génération automatique des contrats/avenants depuis Workday + signature électronique DocuSign.</p>
                  </div>
                  <div>
                    <p className="text-purple-600 font-medium mb-2">Impact(s)</p>
                    <p className="text-slate-700 leading-relaxed">Contractualisation accélérée, réduction des erreurs, sécurité & conformité renforcées, meilleure expérience collaborateur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 mb-3">SNCF Connect & Tech - Gouvernance des accès : Sécurité Workday</h3>
                <div className="grid grid-cols-[3fr_4fr_3fr] gap-8 text-sm">
                  <div>
                    <p className="text-orange-600 font-medium mb-2">Problème(s)</p>
                    <p className="text-slate-700 leading-relaxed">Besoins projets + risques de sur-droits / affectations non légitimes.</p>
                  </div>
                  <div>
                    <p className="text-orange-600 font-medium mb-2">Action(s) réalisée(s)</p>
                    <p className="text-slate-700 leading-relaxed">J'ai créé et rationalisé les rôles, configuré les accès (domains, security groups), mené des campagnes de tests, réalisé des audits d'affectations et supprimé les accès non requis.</p>
                  </div>
                  <div>
                    <p className="text-orange-600 font-medium mb-2">Impact(s)</p>
                    <p className="text-slate-700 leading-relaxed">Sécurisation des parcours Workday, cohérence des droits et réduction du risque.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hub */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <LayoutGrid className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 mb-3">SNCF Connect & Tech - Workday Hub : Centralisation & UX</h3>
                <div className="grid grid-cols-[3fr_4fr_3fr] gap-8 text-sm">
                  <div>
                    <p className="text-purple-600 font-medium mb-2">Problème(s)</p>
                    <p className="text-slate-700 leading-relaxed">Dashboards vieillissants et navigation complexe → accès fragmenté à la donnée et aux ressources RH.</p>
                  </div>
                  <div>
                    <p className="text-purple-600 font-medium mb-2">Action(s) réalisée(s)</p>
                    <p className="text-slate-700 leading-relaxed">J'ai réalisé le cadrage du Hub (populations cibles, recueil besoins, arbitrages), conçu les parcours/navigation, animé des démos itératives, configuré et centralisé les contenus (ressources, quick actions, accès data).</p>
                  </div>
                  <div>
                    <p className="text-purple-600 font-medium mb-2">Impact(s)</p>
                    <p className="text-slate-700 leading-relaxed">Lisibilité et accessibilité renforcées, navigation optimisée, expérience utilisateur améliorée.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
           {/* AFNOR */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 mb-3">AFNOR — Change management international (OSCAR)</h3>
                <div className="grid grid-cols-[3fr_4fr_3fr] gap-8 text-sm">
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Problème(s)</p>
                    <p className="text-slate-700 leading-relaxed">Usages hétérogènes d'OSCAR selon les pays (Chine, Inde…) → erreurs récurrentes, incompréhensions, sur-sollicitation par email.</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Action(s) réalisée(s)</p>
                    <p className="text-slate-700 leading-relaxed">J'ai conçu et animé une formation internationale (EN) sur 2 jours : ~20 supports PPT, cas pratiques, QCM avant/après, clarification des bonnes pratiques.</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Impact(s)</p>
                    <p className="text-slate-700 leading-relaxed">Normalisation des usages, baisse des erreurs, réduction des allers-retours et alignement des pratiques entre équipes internationales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Section 3 - Compétences */}
      <section className="px-8 py-8 border-b border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Compétences</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">SIRH (Workday & SAP)</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Business Process</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Security</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Reporting</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Calculated Fields</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">EIB</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Security Domains</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Security Groups</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Tenant setup</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">HCM</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Recruiting</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Compensation</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Absences</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Templates</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Condition Rules</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="w-5 h-5 text-sky-600" />
              <h3 className="font-semibold text-slate-900">Process</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Recueil de besoins</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Ateliers métiers</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Cadrage</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Arbitrage/Priorisation</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Process mapping</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Formalisation process (workflows)</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Standardisation</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Optimisation</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Documentation fonctionnelle</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-sky-600" />
              <h3 className="font-semibold text-slate-900">Change Management</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Stakeholder management</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Communication interne</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Supports utilisateurs (Guides/FAQ)</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Démos & Acculturation</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Formation (FR/EN)</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Accompagnement</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Recette utilisateurs (UAT / key users)</span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">Hypercare (post go-live)</span>
        
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Excel</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">PowerPoint</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Teams</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">DocuSign</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">VS Code</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Figma</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">ChatGPT</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Jupyter</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Python</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Tableau</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Notion</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">GitHub</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Miro</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">SAP Success Factor</span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Workday</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Expériences */}
      <section className="px-8 py-8 border-b border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Expériences</h2>
        <div className="relative space-y-6">
          {/* Ligne verticale avec dégradé */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-sky-600"></div>
          
          <div className="relative pl-8 pb-6">
            <div className="absolute left-[-7px] top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Chargée de mission SIRH (Workday)</h3>
                  <p className="text-blue-600 font-medium">SNCF Connect & Tech</p>
                </div>
                <span className="text-sm text-slate-500">2023 — Actuel</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Pilotage projets SIRH Workday (Help, Onboarding, Hub)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Gouvernance sécurité Workday (rôles, domains, security groups)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Automatisation & amélioration continue des processus RH (templates, DocuSign, fiabilisation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Gestion du run (tickets, diagnostics, correctifs via configuration, coordination RH/IT)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[-7px] top-0 w-4 h-4 rounded-full border-2 border-white bg-[#0069a8]"></div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Chargée de mission / certification</h3>
                  <p className="font-medium text-[#0069a8]">AFNOR Certification</p>
                </div>
                <span className="text-sm text-slate-500">2021 — 2023</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mt-3">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#0069a8]">•</span>
                  <span>Gestion opérationnelle des certifications & planification audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#0069a8]">•</span>
                  <span>Standardisation des usages outil OSCAR (formation internationale EN)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#0069a8]">•</span>
                  <span>Coordination internationale (Chine, Inde…)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Formation & Certifications */}
      <section className="px-8 py-8 - border-b border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Formation & Certifications</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg border border-purple-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-slate-900">Master MSI / Data</h3>
            </div>
            <p className="text--sm text-slate-600">EMLV — École de Management Léonard de Vinci</p>
            <p className="text-xs text-slate-500 mt-1">2024 — 2026</p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">Bachelor Ressources Humaines</h3>
            </div>
            <p className="text-sm text-slate-600">CIEFA IGS</p>
            <p className="text-xs text-slate-500 mt-1">2023 — 2024</p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-orange-200 shadow-sm col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-slate-900">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded text-xs font-medium border border-orange-200">PSM I</span>
              
              
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded text-xs font-medium border border-orange-200">TOSA Excel</span>
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded text-xs font-medium border border-orange-200">Tableau Destock</span>
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded text-xs font-medium border border-orange-200">TOEIC — Anglais B2</span>
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded text-xs font-medium border border-orange-200">SAP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-slate-50 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="space-y-1 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              
              
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            
            <button 
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Exporter en PDF
            </button>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          
          .shadow-lg,
          .shadow-md,
          .shadow-sm {
            box-shadow: none !important;
          }
          
          button {
            display: none !important;
          }
          
          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }
        }
      `}</style>
    </div>
  );
}