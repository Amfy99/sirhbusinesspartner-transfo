import image_9f45bb7da7df4da5eb0289d4bbe0a3cfd842ced2 from 'figma:asset/9f45bb7da7df4da5eb0289d4bbe0a3cfd842ced2.png'
import { Mail, Calendar, Linkedin, ArrowRight, Target, Briefcase, FileText, GraduationCap, Lightbulb, Gauge, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export function LandingPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Titre centré en haut */}
        <div className="font-bold text-[#0027a1] text-lg md:text-[28px] mb-4 md:mb-6 text-center leading-tight" style={{ fontFamily: 'var(--font-family-heading)' }}>HRIS Business Partner | Driving HR Transformation & Governance</div>
        
        {/* Disposition : verticale sur mobile, horizontale sur desktop */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-center md:items-start">
          {/* Photo en haut sur mobile */}
          <div className="order-1 md:order-2">
            <img 
              src={image_9f45bb7da7df4da5eb0289d4bbe0a3cfd842ced2}
              alt="Amandine Ferey"
              className="w-40 h-40 md:w-56 md:h-56 object-cover shadow-2xl border-4 md:border-8 border-white rounded-[20px] md:rounded-[29px] mx-auto md:mx-0"
            />
          </div>

          {/* Contenu en dessous sur mobile */}
          <div className="space-y-4 md:space-y-5 order-2 md:order-1">
            {/* Nom */}
            <h1 className="text-slate-900 leading-tight text-xl md:text-[22px] text-center md:text-justify">
              Amandine Ferey
            </h1>
            
            {/* Résumé */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-[16px] text-justify">
              HRIS Business Partner spécialisée en <strong>gouvernance et transformation SIRH</strong>, je conçois et structure des environnements alignés avec les <strong>enjeux métier</strong>, en faisant du SIRH une <strong>fondation stratégique</strong> de performance, de fiabilité et de décision.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
              <a 
                href="mailto:amandine.ferey@icloud.com"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg text-xs md:text-[14px]"
              >
                <Mail className="w-4 h-4" />
                Me contacter
              </a>
              <a 
                href="https://calendly.com/amandine-ferey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-lg text-xs md:text-[14px]"
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </a>
              <a 
                href="https://www.linkedin.com/in/amandine-ferey-rocha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg text-xs md:text-[14px]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <Link 
            to="/projets"
            className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-blue-200"
          >
            <div className="w-10 md:w-11 h-10 md:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-lg md:text-[20px]">Mes Projets</h3>
            <p className="text-slate-600 text-sm mb-3">
              Portfolio détaillé des transformations RH menées
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              Découvrir
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            to="/formations"
            className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-blue-200"
          >
            <div className="w-10 md:w-11 h-10 md:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
              <GraduationCap className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-lg md:text-[20px]">Formations</h3>
            <p className="text-slate-600 text-sm mb-3">
              Parcours académique et certifications professionnelles
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              Explorer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            to="/competences"
            className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-blue-200"
          >
            <div className="w-10 md:w-11 h-10 md:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
              <Lightbulb className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-lg md:text-[20px]">Compétences</h3>
            <p className="text-slate-600 text-sm mb-3">
              Expertise technique et fonctionnelle en SIRH
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              Découvrir
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            to="/cv"
            className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-blue-200"
          >
            <div className="w-10 md:w-11 h-10 md:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-lg md:text-[20px]">Mon CV</h3>
            <p className="text-slate-600 text-sm mb-3">
              Parcours, compétences et expériences de transformation
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
              Voir le CV
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Key Points */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100">
          <h2 className="font-bold text-slate-900 mb-5 md:mb-6 text-center text-xl md:text-[24px]">Travaillons ensemble</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div className="text-center">
              <div className="w-12 md:w-14 h-12 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 md:w-7 h-6 md:h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-base md:text-[18px]">Expertise SIRH</h3>
              <p className="text-sm text-slate-600">
                Maîtrise des différents SIRH existants, notamment Workday et SAP SuccessFactors
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 md:w-14 h-12 md:h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 md:w-7 h-6 md:h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-base md:text-[18px]">Transformation A→Z</h3>
              <p className="text-sm text-slate-600">
                Pilotage complet de projets : cadrage, design, configuration, tests et adoption
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 md:w-14 h-12 md:h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 md:w-7 h-6 md:h-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-base md:text-[18px]">Vision stratégique</h3>
              <p className="text-sm text-slate-600">
                Un SIRH est un système d'entreprise : interface entre métier et SI pour des solutions alignées et durables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ma Vision */}
      

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Besoin d'une expertise SIRH ?</h3>
          <p className="text-slate-600 mb-5 md:mb-6 text-sm md:text-base max-w-2xl mx-auto">
            Discutons de vos projets de transformation et de la valeur que je peux apporter à votre organisation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base font-medium shadow-sm"
          >
            Me contacter
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Dialogs for Vision Details */}
      <Dialog.Root open={openDialog === 'strategic'} onOpenChange={(open) => setOpenDialog(open ? 'strategic' : null)}>
        <Dialog.Trigger className="hidden" />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl w-full">
            <Dialog.Title className="font-bold text-slate-900 mb-4 text-xl md:text-2xl">{visionDetails.strategic.title}</Dialog.Title>
            <Dialog.Description className="text-slate-600 text-sm md:text-base leading-relaxed">
              {visionDetails.strategic.content}
            </Dialog.Description>
            <Dialog.Close className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={openDialog === 'reliability'} onOpenChange={(open) => setOpenDialog(open ? 'reliability' : null)}>
        <Dialog.Trigger className="hidden" />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl w-full">
            <Dialog.Title className="font-bold text-slate-900 mb-4 text-xl md:text-2xl">{visionDetails.reliability.title}</Dialog.Title>
            <Dialog.Description className="text-slate-600 text-sm md:text-base leading-relaxed">
              {visionDetails.reliability.content}
            </Dialog.Description>
            <Dialog.Close className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={openDialog === 'continuous'} onOpenChange={(open) => setOpenDialog(open ? 'continuous' : null)}>
        <Dialog.Trigger className="hidden" />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl w-full">
            <Dialog.Title className="font-bold text-slate-900 mb-4 text-xl md:text-2xl">{visionDetails.continuous.title}</Dialog.Title>
            <Dialog.Description className="text-slate-600 text-sm md:text-base leading-relaxed">
              {visionDetails.continuous.content}
            </Dialog.Description>
            <Dialog.Close className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}