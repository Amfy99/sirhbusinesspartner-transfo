import { 
  Database, 
  Users, 
  Shield, 
  MessageSquare, 
  Code, 
  ArrowLeft,
  Settings,
  BarChart3,
  Globe,
  Award,
  Zap,
  Target,
  Lock,
  FileCheck,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router';

export function CompetencesPage() {
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
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 lg:mb-4">Mes Compétences</h1>
          <p className="text-base lg:text-lg text-slate-600">Expertise technique et fonctionnelle en transformation SIRH</p>
        </div>

        {/* Expertise SIRH */}
        <section className="mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Database className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Expertise SIRH</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* SAP SuccessFactors */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">SAP SuccessFactors</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Configuration complète des modules core : Employee Central, Compensation, Performance & Goals, Succession Management et Reporting
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Employee Central</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Compensation</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Performance</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Succession</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Workday */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Workday</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Maîtrise fonctionnelle des modules HCM, Recruiting, Reporting, Time Off et Integration pour une gestion RH complète
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">HCM</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Recruiting</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Reporting</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Règles conditionnées & Champs calculés */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Règles Conditionnées & Champs Calculés</h3>
                  <p className="text-sm text-slate-600">
                    Conception et paramétrage de logiques métier complexes, formules de calcul et règles d'automatisation dans les SIRH
                  </p>
                </div>
              </div>
            </div>

            {/* Reporting & Analytics */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Reporting & Analytics RH</h3>
                  <p className="text-sm text-slate-600">
                    Création de tableaux de bord et rapports décisionnels avec Tableau Desktop et outils SIRH natifs
                  </p>
                </div>
              </div>
            </div>

            {/* ITIL */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">ITIL 4 Framework</h3>
                  <p className="text-sm text-slate-600">
                    Gestion des services IT appliquée au SIRH : incidents, changements et amélioration continue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gestion de Projet */}
        <section className="mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Users className="w-6 h-6 lg:w-7 lg:h-7 text-violet-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Gestion de Projet</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* Scrum Master */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Méthode Agile Scrum</h3>
                  <p className="text-sm text-slate-600">
                    Certification PSM I : animation de sprint, facilitation d'équipe et pilotage de transformation agile
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Pilotage de Projet SIRH</h3>
                  <p className="text-sm text-slate-600">
                    Cadrage, planification, suivi budgétaire et coordination multi-parties prenantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gouvernance & Conformité */}
        <section className="mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-orange-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Gouvernance & Conformité</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* Data Governance */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Gouvernance des Données RH</h3>
                  <p className="text-sm text-slate-600">
                    Définition de politiques data, contrôle qualité et conformité RGPD dans les SIRH
                  </p>
                </div>
              </div>
            </div>

            {/* Sécurité & Fiabilité des Données */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Sécurité & Fiabilité des Données</h3>
                  <p className="text-sm text-slate-600">
                    Protection des informations sensibles, intégrité des données et garantie de fiabilité des processus RH
                  </p>
                </div>
              </div>
            </div>

            {/* Configuration Sécurité SIRH */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Configuration Sécurité SIRH</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Paramétrage des rôles utilisateurs, domaines de sécurité et gestion fine des permissions d'accès
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded">Rôles & Permissions</span>
                    <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded">Domaines de sécurité</span>
                    <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded">Gestion des accès</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Design */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Design de Processus RH</h3>
                  <p className="text-sm text-slate-600">
                    Modélisation, optimisation et digitalisation des workflows RH end-to-end
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Change Management */}
        <section className="mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <MessageSquare className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Change Management</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* User Adoption */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Conduite du Changement</h3>
                  <p className="text-sm text-slate-600">
                    Stratégie d'adoption utilisateur, accompagnement terrain et gestion des résistances
                  </p>
                </div>
              </div>
            </div>

            {/* Training */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Formation & Documentation</h3>
                  <p className="text-sm text-slate-600">
                    Conception de supports pédagogiques, animation de sessions et création de guides utilisateurs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compétences Techniques */}
        <section className="mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Code className="w-6 h-6 lg:w-7 lg:h-7 text-violet-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Compétences Techniques</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* Tools */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Outils & Environnements</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Maîtrise des outils de productivité, analyse et gestion de projet
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded">Excel (TOSA)</span>
                    <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded">Tableau Desktop</span>
                    <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded">JIRA</span>
                    <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded">Confluence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Langues</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Communication professionnelle en contexte international
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded">Français (Natif)</span>
                    <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded">Anglais (TOEIC 815)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">Besoin d'une expertise SIRH ?</h3>
            <p className="text-slate-600 mb-5 lg:mb-6 text-sm lg:text-base">
              Discutons de vos projets de transformation et de la valeur que je peux apporter à votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base font-medium shadow-sm"
              >
                Me contacter
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                to="/projets"
                className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm lg:text-base font-medium border border-blue-200"
              >
                Voir mes projets
                <Database className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}