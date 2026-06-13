import { BookOpen, Award, GraduationCap, Calendar, ExternalLink, Briefcase, CheckCircle2, ArrowLeft, Lightbulb } from 'lucide-react';
import { Link } from 'react-router';

export function FormationsPage() {
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
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 lg:mb-4">Formations & Certifications Professionnelles</h1>
          <p className="text-base lg:text-lg text-slate-600">Parcours académique et développement professionnel continu</p>
        </div>

        {/* Formations Professionnelles */}
        <section className="mb-10 lg:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 lg:w-7 lg:h-7 text-violet-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Formations Professionnelles</h2>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Colonne 1 - Formations */}
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-4">Formations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Formation Workday HCM, Recruiting, Reporting, Time off (Absence), Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Configuring SAP SuccessFactors Employee Central Core and Position Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Configuring SAP SuccessFactors Platform: Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Positioning SAP SuccessFactors HCM Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Configuring SAP SuccessFactors Succession Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Configuring SAP SuccessFactors Performance and Goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Configuring SAP SuccessFactors Compensation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ITIL 4 Formation for certification</span>
                  </li>
                </ul>
              </div>

              {/* Colonne 2 - Certifications */}
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-4">Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Scrum Master – PSM I</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">TOSA Excel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">TOEIC Listening & Reading (815)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Tableau – Spécialiste Desktop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm text-slate-700">SAP Certified - SAP SuccessFactors Employee Central Core and Position Management</span>
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        In progress
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Académiques */}
        <section className="mb-10 lg:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Formations Académiques</h2>
          </div>

          <div className="space-y-4 lg:space-y-5">
            {/* Master */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 lg:p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">Master en Management des SI et des Data (Apprentissage)</h3>
                  <p className="text-base text-blue-600 font-medium mb-1">École de Management Léonard de Vinci</p>
                  <p className="text-sm text-slate-500 italic mb-2">Courbevoie</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Sept. 2024 — Août 2026</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Transformation numérique, gouvernance des SI, data & IA, gestion de projet agile. Interface métiers / IT et modernisation des systèmes d'information.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    Bac+5
                  </span>
                </div>
              </div>
            </div>

            {/* Bachelor RH */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 lg:p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">Bachelor en Ressources Humaines (Apprentissage)</h3>
                  <p className="text-base text-blue-600 font-medium mb-1">IGENSIA (IGS)</p>
                  <p className="text-sm text-slate-500 italic mb-2">Paris</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Sept. 2023 — Août 2024</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Fondamentaux RH et SIRH, gestion des processus RH et digitalisation.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    Bac+3
                  </span>
                </div>
              </div>
            </div>

            {/* BTS SAM */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 lg:p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-4">
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">BTS Support à l'Action Managériale (Apprentissage)</h3>
                  <p className="text-base text-blue-600 font-medium mb-1">IGENSIA (IGS)</p>
                  <p className="text-sm text-slate-500 italic mb-2">Paris</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>Sept. 2021 — Août 2023</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    Bac+2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-10 lg:mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">Vous souhaitez en savoir plus ?</h3>
            <p className="text-slate-600 mb-5 lg:mb-6 text-sm lg:text-base">N'hésitez pas à me contacter pour échanger sur mon parcours et mes compétences.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base font-medium shadow-sm"
              >
                Me contacter
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                to="/competences"
                className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm lg:text-base font-medium border border-blue-200"
              >
                Découvrir mes compétences
                <Lightbulb className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}