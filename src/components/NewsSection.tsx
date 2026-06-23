import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/sportsData';
import { Mail, Sparkles, AlertCircle, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { NewsArticle } from '../types';
import { Language, translations } from '../utils/translations';

interface NewsSectionProps {
  onTriggerNotification: (message: string) => void;
  language: Language;
  news?: NewsArticle[];
}

export default function NewsSection({ onTriggerNotification, language, news = NEWS_ARTICLES }: NewsSectionProps) {
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus({ 
        success: false, 
        message: language === 'es' ? 'Por favor ingrese un correo válido.' : 'Please enter a valid email address.' 
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/newsletter/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, message: data.message });
        setEmail('');
        onTriggerNotification(
          language === 'es'
            ? '¡Suscripción al boletín completada! Agregado a la lista de despacho.'
            : 'Newsletter subscribed! Injected into mailing dispatch list.'
        );
      } else {
        setStatus({ success: false, message: data.error || 'Failed to subscribe.' });
      }
    } catch (err) {
      setStatus({ 
        success: false, 
        message: language === 'es' ? 'Conexión perdida. Inténtelo de nuevo.' : 'Network connection lost. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Simple category translator
  const translateCategory = (cat: string) => {
    if (language !== 'es') return cat;
    const map: Record<string, string> = {
      'Transfer': 'Fichajes',
      'Match Preview': 'Previa',
      'Tactical Insight': 'Táctica',
      'Injury Report': 'Lesiones',
      'Championship': 'Campeonato',
      'Analysis': 'Análisis'
    };
    return map[cat] || cat;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="news-section-hub">
      
      {/* Col 1 & 2: Main News Feed */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            📰 {t.latestNewsTitle}
          </h3>
          <span className="text-xs font-mono text-gray-400">{t.newsRefreshed}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {news.map((article) => (
            <div
              key={article.id}
              className="glass rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group animate-fade-in"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {article.sponsored ? (
                    <span className="absolute top-3 left-3 bg-rose-500 text-white font-mono text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                      {t.sponsoredBadge}
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-sm text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {translateCategory(article.category)}
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest block">
                    {(t[article.sport] || article.sport)} • BY {article.author}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug group-hover:text-rose-500 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-900/60 mt-2 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                <span>{article.date}</span>
                <span className="text-rose-500 font-bold group-hover:underline flex items-center gap-0.5">
                  {t.readAnalysis} <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Col 3: Side Panel (Newsletter, Ads, Analytics overview) */}
      <div className="space-y-6">
        
        {/* Newsletter subscription module */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 p-6 text-white border border-gray-800/50 shadow-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/25 mb-4">
            <Mail className="h-5 w-5" />
          </div>
          <h4 className="font-display text-base font-bold text-white">
            {t.newsletterTitle}
          </h4>
          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
            {t.newsletterDesc}
          </p>

          <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="w-full rounded-xl bg-gray-900/50 border border-gray-800 p-3 text-xs text-gray-200 placeholder:text-gray-500 outline-none focus:border-rose-500 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 disabled:bg-rose-400 p-2.5 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
            >
              {submitting ? t.subscribingText : t.subscribeButton}
            </button>
          </form>

          {/* Subscribe status msg */}
          {status && (
            <div className={`mt-3 flex items-start gap-2 p-2.5 rounded-lg text-xs font-medium border ${
              status.success
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
            }`}>
              {status.success ? <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" /> : <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />}
              <span>{status.message}</span>
            </div>
          )}
        </div>

        {/* Sponsored advertisement module (Google Ads ready) */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-gray-50/50 dark:bg-gray-900/10 relative overflow-hidden flex flex-col items-center justify-center text-center py-6 min-h-[220px]">
          <span className="absolute top-2 left-2 text-[8px] font-mono font-bold tracking-widest text-gray-400 uppercase">
            {t.sponsoredAdLabel}
          </span>
          
          <div className="h-10 w-44 rounded border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-[10px] text-gray-400 uppercase font-mono tracking-widest">
            Leaderboard 300 x 250
          </div>
          
          <h5 className="text-xs font-extrabold text-gray-700 dark:text-gray-300 mt-4 leading-tight">
            {t.sponsoredAdTitle}
          </h5>
          <p className="text-[10px] text-gray-400 max-w-[200px] mt-1">
            {t.sponsoredAdDesc}
          </p>
          <a
            href="#zenith"
            onClick={(e) => {
              e.preventDefault();
              onTriggerNotification(language === 'es' ? 'Simulación de clic en publicidad. Redirigiendo...' : 'Ad link click simulation. Redirecting browser...');
            }}
            className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-rose-500 hover:underline uppercase"
          >
            {t.exploreGear} <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Secure platform badge */}
        <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 flex items-start gap-2.5">
          <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200">{t.verifiedFeedTitle}</p>
            <p className="text-[10px] text-gray-500 leading-normal">
              {t.verifiedFeedDesc}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
