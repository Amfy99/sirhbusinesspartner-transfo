import { Mail, Calendar, Linkedin, MapPin, Phone, MessageCircle, Send, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-1c2806f3/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Échec de l\'envoi du message');
      }

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-2 md:mb-3 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>Prenons contact</h1>
          <p className="text-sm md:text-base text-slate-600">
            Discutons de vos projets de transformation RH et SIRH
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left - Contact Info */}
          <div className="space-y-4 md:space-y-5">
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-slate-200">
              <h2 className="text-base md:text-lg font-bold text-slate-900 mb-4 md:mb-5">Informations de contact</h2>
              
              <div className="space-y-2 md:space-y-3">
                <a 
                  href="mailto:amandine.ferey@icloud.com"
                  className="flex items-start gap-2.5 md:gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-9 md:w-10 h-9 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200">
                    <Mail className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs md:text-sm">Email</p>
                    <p className="text-xs text-slate-600">amandine.ferey@icloud.com</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/33660030865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 md:gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                >
                  <div className="w-9 md:w-10 h-9 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200">
                    <MessageCircle className="w-4 md:w-5 h-4 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs md:text-sm">WhatsApp</p>
                    <p className="text-xs text-slate-600">+33 6 60 03 08 65</p>
                  </div>
                </a>

                <div className="flex items-start gap-2.5 md:gap-3 p-3 rounded-lg">
                  <div className="w-9 md:w-10 h-9 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 md:w-5 h-4 md:h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs md:text-sm">Localisation</p>
                    <p className="text-xs text-slate-600">Canton de Vaud / Genève</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 md:gap-3 p-3 rounded-lg">
                  <div className="w-9 md:w-10 h-9 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 md:w-5 h-4 md:h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs md:text-sm">Disponibilité</p>
                    <p className="text-xs text-slate-600">Août/Septembre 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-slate-200">
              <h2 className="text-base md:text-lg font-bold text-slate-900 mb-4 md:mb-5">Actions rapides</h2>
              
              <div className="space-y-2 md:space-y-2.5">
                <a 
                  href="https://calendly.com/amandine-ferey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-900 text-sm">Réserver un créneau</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-blue-600 rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/amandine-ferey-rocha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-900 text-sm">Voir mon profil LinkedIn</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-blue-600 rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-slate-200">
            <h2 className="text-base md:text-lg font-bold text-slate-900 mb-4 md:mb-5">Envoyez-moi un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-xs text-green-700">Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <p className="text-xs text-red-700">Erreur : {errorMessage}</p>
                </div>
              )}

              <p className="text-xs text-slate-500 text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}