import { Globe, Headphones, FileSignature, Shield, LayoutGrid, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      icon: LayoutGrid,
      color: 'blue',
      title: 'Workday Journeys — Onboarding centralisé',
      company: 'SNCF Connect & Tech',
      year: 'En cours (2026)',
      problem: 'Expérience fragmentée : pré-boarding dans Workday + onboarding dans Teelt (outil externe) → multiplication des outils, suivi complexe pour RH/managers.',
      actions: 'Je pilote le transfert de l\'expérience Teelt vers Workday, accompagnée par l\'équipe métier formation (périmètre onboarding) et le cabinet Étincelle RH. Je conduis les ateliers métier, configure les parcours d\'onboarding et les parcours nouveaux managers (formation, tâches, articles). J\'évalue l\'acquisition du module Workday Journeys pour enrichir les possibilités. Mise en production prévue avant juin 2026.',
      impact: 'Expérience collaborateur centralisée, meilleur suivi du onboarding par les managers et RH, parcours manager automatisé.',
      skills: ['Workday Journeys', 'Workday Onboarding', 'Configuration des Business Process (Workflow)', 'Onboarding Design', 'Stakeholder Workshops', 'Change Management']
    },
    {
      id: 2,
      icon: LayoutGrid,
      color: 'purple',
      title: 'Workday Hub — Centralisation & UX',
      company: 'SNCF Connect & Tech',
      year: 'En cours (2026)',
      problem: 'Dashboards vieillissants et navigation complexe → accès fragmenté à la donnée et aux ressources RH.',
      actions: 'J\'ai réalisé le cadrage du Hub (populations cibles, recueil besoins, arbitrages), conçu les parcours/navigation, animé des démos itératives, configuré et centralisé les contenus (ressources, quick actions, accès data).',
      impact: 'Lisibilité et accessibilité renforcées, navigation optimisée, expérience utilisateur améliorée.',
      skills: ['UX Design', 'Workday Hub', 'Rapport', 'Calculated Field', 'Configuration Rule', 'Stakeholder Management', 'User Research']
    },
    {
      id: 3,
      icon: Shield,
      color: 'blue',
      title: 'Réorganisation — Org Studio & automatisation',
      company: 'SNCF Connect & Tech',
      year: 'En cours (2025-2026)',
      problem: 'Mouvements d\'organisations entre 3 entités : modifications et créations d\'org, nouveaux types de managers, changements de société → risque d\'écart entre org théorique et org Workday.',
      actions: 'Mon équipe et moi interfaçons la nouvelle organisation dans Workday via Org Studio. Je me suis chargée de créer les nouveaux templates d\'avenants pour les transferts et d\'automatiser les process de réorganisation sous forme d\'avenants. J\'anime des ateliers RH pour valider les affectations et rôles.',
      impact: 'Organisation théorique = organisation réelle dans Workday, affectation cohérente des rôles et managers, automatisation des avenants de réorganisation.',
      skills: ['Org Studio', 'Organizational Design', 'Workday Templates', 'Business Process (Workflow)', 'Stakeholder Alignment']
    },
    {
      id: 4,
      icon: Headphones,
      color: 'orange',
      title: 'Workday Help — Déploiement A→Z',
      company: 'SNCF Connect & Tech',
      year: '2025',
      problem: 'Outil ticketing obsolète + documentation dispersée → support RH peu lisible.',
      actions: 'J\'ai réalisé un pilotage complet en autonomie (cadrage, design process, configuration Workday, tests, supports). J\'ai assuré la bascule : mise à jour de la documentation + démos auprès de la Transfo Digitale & Direction RH.',
      impact: "Adoption d'un nouveau parcours d'assistance RH, demandes standardisées et expérience utilisateur améliorée.",
      skills: ['Business Process', 'Configuration Workday', 'Conditional Rules', 'Change Management', 'Documentation']
    },
    {
      id: 5,
      icon: FileSignature,
      color: 'blue',
      title: 'Automatisation contrats & avenants',
      company: 'SNCF Connect & Tech',
      year: '2024-2025',
      problem: 'Génération manuelle Word/PDF/email → erreurs, délais, faible traçabilité.',
      actions: 'J\'ai contribué au redesign du process recrutement : génération automatique des contrats/avenants depuis Workday + signature électronique DocuSign.',
      impact: 'Contractualisation accélérée, réduction des erreurs, sécurité & conformité renforcées, meilleure expérience collaborateur.',
      skills: ['Workday Templates', 'Business Process (Workflow)', 'DocuSign Integration', 'Process Automation', 'Compliance']
    },
    {
      id: 6,
      icon: Shield,
      color: 'purple',
      title: 'Gouvernance des accès / Sécurité Workday',
      company: 'SNCF Connect & Tech',
      year: '2023-2024',
      problem: 'Besoins projets + risques de sur-droits / affectations non légitimes.',
      actions: 'J\'ai créé et rationalisé les rôles, configuré les accès (domains, security groups), mené des campagnes de tests, réalisé des audits d\'affectations et supprimé les accès non requis.',
      impact: 'Sécurisation des parcours Workday, cohérence des droits et réduction du risque.',
      skills: ['Security Domains', 'Security Groups', 'Role Management', 'Audit & Compliance']
    },
    {
      id: 7,
      icon: Globe,
      color: 'blue',
      title: 'Change management international (OSCAR)',
      company: 'AFNOR Certification',
      year: '2022',
      problem: "Usages hétérogènes d'OSCAR selon les pays (Chine, Inde…) → erreurs récurrentes, incompréhensions, sur-sollicitation par email.",
      actions: "J'ai conçu et animé une formation internationale (EN) sur 2 jours : ~20 supports PPT, cas pratiques, QCM avant/après, clarification des bonnes pratiques.",
      impact: "Normalisation des usages, baisse des erreurs, réduction des allers-retours et alignement des pratiques entre équipes internationales.",
      skills: ['International Training', 'Change Management', 'Documentation', 'Cross-cultural Communication']
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-50 text-blue-700' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-50 text-orange-700' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-50 text-purple-700' }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-2 md:mb-3 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="font-bold text-slate-900 mb-2 text-[31px]" style={{ fontFamily: 'var(--font-family-heading)' }}>Portfolio de transformations</h1>
          <p className="text-sm md:text-base text-slate-600">
            Projets SIRH pilotés de A à Z : cadrage, configuration, déploiement et adoption
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4 md:space-y-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg border ${colors.border} overflow-hidden hover:shadow-xl transition-shadow`}
              >
                <div className="p-4 md:p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-5 mb-4 md:mb-5">
                    <div className={`flex-shrink-0 w-12 md:w-14 h-12 md:h-14 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                      <Icon className={`w-6 md:w-7 h-6 md:h-7 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                        <div>
                          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-1.5">{project.title}</h2>
                          <p className={`font-medium ${colors.text} text-sm`}>{project.company}</p>
                        </div>
                        <span className={`px-3 py-1.5 ${colors.badge} rounded-full text-xs font-medium border ${colors.border} self-start`}>
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h3 className={`text-xs font-semibold ${colors.text} uppercase tracking-wide mb-1.5`}>
                        Problème
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm">{project.problem}</p>
                    </div>

                    <div>
                      <h3 className={`text-xs font-semibold ${colors.text} uppercase tracking-wide mb-1.5`}>
                        Actions réalisées
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm">{project.actions}</p>
                    </div>

                    <div>
                      <h3 className={`text-xs font-semibold ${colors.text} uppercase tracking-wide mb-1.5`}>
                        Impact
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm">{project.impact}</p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="text-xs font-semibold text-slate-900 mb-2">Compétences mobilisées</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className={`px-2.5 py-1 ${colors.badge} rounded-full text-xs font-medium border ${colors.border}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}