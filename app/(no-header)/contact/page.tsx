import type { Metadata } from "next"
import { 
  Mail, 
  Instagram, 
  MessageCircle,
  Send,
  Users,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact – First Pick",
  description: "Contactez First Pick, média spécialisé dans le basket féminin LFB & LF2.",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      platform: "Email",
      handle: "firstpick46@gmail.com",
      link: "mailto:firstpick46@gmail.com",
      description: "Pour les questions générales, collaborations et retours",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-500/5 to-orange-500/5"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      platform: "Instagram",
      handle: "@firstpickw",
      link: "https://instagram.com/firstpickw",
      description: "Suivez nos actualités, stories et analyses en direct",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-600/5 to-pink-600/5"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      platform: "Feedback",
      handle: "Votre avis compte",
      link: "mailto:firstpick46@gmail.com?subject=Feedback%20First%20Pick",
      description: "Suggestions d'amélioration ou idées de fonctionnalités",
      color: "from-blue-600 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-600/5 to-cyan-500/5"
    }
  ]

  const faqs = [
    {
      question: "Temps de réponse ?",
      answer: "Nous répondons généralement sous 72h ouvrées maximum."
    },
    {
      question: "Collaborations médias ?",
      answer: "Ouvrez à toute proposition de partenariat ou échange média."
    },
    {
      question: "Suggérer une amélioration ?",
      answer: "Vos idées sont les bienvenues pour faire évoluer First Pick."
    },
    {
      question: "Problème technique ?",
      answer: "Signalez-nous tout bug ou problème d'affichage par email."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-amber-500/5" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
              <Link
  href="/"
  aria-label="Retour à l'accueil First Pick"
  className="inline-block relative z-10 transition-transform duration-200 hover:scale-105"
> 
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-yellow-600 to-amber-500 mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div></Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-500 mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Une question, une remarque ou une collaboration ? Nous sommes à votre écoute.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-20">
        {/* Contact Methods */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.platform === "Instagram" ? "_blank" : "_self"}
                rel={method.platform === "Instagram" ? "noopener noreferrer" : ""}
                className="group"
              >
                <div className={`${method.bgColor} rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 hover:shadow-xl h-full`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {method.platform}
                    </h3>
                    
                    <div className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${method.color} mb-4`}>
                      {method.handle}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                      {method.description}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-yellow-600 transition-colors">
                      Contacter
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Notre mission
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">
                <strong className="text-slate-900 dark:text-white">First Pick</strong> est un projet indépendant dédié à l'analyse du basket féminin français.
                Notre objectif est de valoriser la performance et d'offrir une lecture moderne 
                et transparente des championnats LFB & LF2.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-600/5 to-amber-500/5 rounded-xl">
                <Sparkles className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <p className="leading-relaxed">
                  Chaque retour, suggestion ou collaboration nous aide à améliorer notre plateforme 
                  et à mieux servir la communauté du basket féminin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Questions fréquentes
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600/10 to-amber-500/10 mt-1">
                      <Send className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-600 to-amber-500 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white/20 mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à échanger avec nous ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Que ce soit pour une question technique, une suggestion d'amélioration 
              ou une proposition de collaboration, n'hésitez pas à nous contacter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:firstpick46@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-yellow-600 font-semibold py-3 px-8 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://instagram.com/firstpickw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg hover:bg-black/30 transition-colors border border-white/20 group"
              >
                <Instagram className="w-5 h-5" />
                Suivre sur Instagram
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}