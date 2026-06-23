import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles, AlertCircle, RotateCw, Award } from 'lucide-react';
import { Language } from '../utils/translations';

interface PremiumModalProps {
  onClose: () => void;
  onSubscribeSuccess: (planName: string, billingCycle: string) => void;
  onTriggerNotification: (message: string) => void;
  language: Language;
}

export default function PremiumModal({
  onClose,
  onSubscribeSuccess,
  onTriggerNotification,
  language,
}: PremiumModalProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [step, setStep] = useState<'tier-select' | 'checkout' | 'success'>('tier-select');
  
  // Checkout form
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Processing state
  const [processing, setProcessing] = useState(false);
  const [subId, setSubId] = useState('');
  const [error, setError] = useState('');

  // Local translations dictionary
  const mt = {
    en: {
      membershipTitle: 'Punto Vivo PRO Membership',
      secureSsl: 'SECURE SSL PAYMENT',
      monthly: 'Monthly',
      annual: 'Annual',
      save: 'Save 33%',
      packageTitle: 'Pro Analyst Package',
      perMonth: '/ month',
      proceed: 'Proceed to Checkout',
      billingDetails: 'Enter Billing Details',
      cardholder: 'Cardholder Name',
      cardNumber: 'Card Number',
      expiry: 'Expiry Date',
      cvv: 'CVV Code',
      back: 'Back',
      authorize: 'Authorize & Unlock PRO',
      authorizing: 'Authorizing Payment...',
      cryptoProtection: 'Fully protected by standard 256-bit AES cryptographic protocols.',
      sslGateways: '🔒 SSL 256-Bit Encrypted Gateways Only',
      perksTitle: 'Unlock Premium Access',
      successTitle: 'Credentials Cleared Successfully!',
      successDesc: 'Welcome aboard. You have unlocked unlimited Punto Vivo analytical models.',
      successLevel: 'Authorized Level',
      successCred: 'Credential ID',
      successCycle: 'Cycle',
      successStatus: 'Payment Status',
      approved: 'APPROVED',
      launch: 'Launch Dashboard',
      chargedMonthly: 'Charged monthly. Cancel anytime.',
      chargedAnnually: 'Charged annually ($79.99). Save 33%!',
      detailsError: 'Please fill out all payment details correctly.',
      paymentFailed: 'Payment authorization failed.',
      networkError: 'Network communication lost. Please try again.',
      analyticsAuthorized: 'Punto Vivo PRO analytics credentials successfully authorized!',
      perks: [
        'Uncapped server-side AI pre-match prediction summaries',
        'Real-time automated notification alerts for favored clubs',
        'Full squad analytics, medical desk summaries, and team maps',
        'Ad-free reading across all tables and news streams',
        'Exclusive editorial sports content from veteran analysts',
      ]
    },
    es: {
      membershipTitle: 'Membresía Punto Vivo PRO',
      secureSsl: 'PAGO SSL 100% SEGURO',
      monthly: 'Mensual',
      annual: 'Anual',
      save: 'Ahorra 33%',
      packageTitle: 'Paquete de Analista Pro',
      perMonth: '/ mes',
      proceed: 'Proceder al Pago',
      billingDetails: 'Ingrese los Datos de Facturación',
      cardholder: 'Nombre del Titular',
      cardNumber: 'Número de Tarjeta',
      expiry: 'Fecha de Vencimiento',
      cvv: 'Código CVV',
      back: 'Volver',
      authorize: 'Autorizar y Desbloquear PRO',
      authorizing: 'Autorizando Pago...',
      cryptoProtection: 'Protegido bajo protocolos criptográficos estándares AES de 256 bits.',
      sslGateways: '🔒 Solo Pasarelas de Pago Cifradas SSL de 256 bits',
      perksTitle: 'Desbloquea el Acceso Premium',
      successTitle: '¡Credenciales Autorizadas Exitosamente!',
      successDesc: 'Bienvenido a bordo. Has desbloqueado los modelos analíticos ilimitados de Punto Vivo.',
      successLevel: 'Nivel Autorizado',
      successCred: 'ID de Credencial',
      successCycle: 'Ciclo',
      successStatus: 'Estado de Pago',
      approved: 'APROBADO',
      launch: 'Iniciar Tablero',
      chargedMonthly: 'Cobrado mensualmente. Cancela cuando quieras.',
      chargedAnnually: 'Cobrado anualmente ($79.99). ¡Ahorra un 33%!',
      detailsError: 'Por favor, ingrese todos los detalles de pago correctamente.',
      paymentFailed: 'La autorización de pago falló.',
      networkError: 'Conexión con el servidor perdida. Inténtelo de nuevo.',
      analyticsAuthorized: '¡Credenciales analíticas de Punto Vivo PRO autorizadas con éxito!',
      perks: [
        'Resúmenes ilimitados de predicciones de IA de Gemini en el servidor',
        'Alertas de notificaciones automáticas en tiempo real para clubes favoritos',
        'Análisis completo de plantillas, informes médicos y mapas de equipos',
        'Lectura sin anuncios en todas las tablas y canales de noticias',
        'Contenido deportivo editorial exclusivo de analistas experimentados',
      ]
    }
  }[language];

  const plans = {
    monthly: { price: '$9.99', desc: mt.chargedMonthly },
    annual: { price: '$6.66', desc: mt.chargedAnnually },
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || cardNumber.length < 12 || expiry.length < 4 || cvv.length < 3) {
      setError(mt.detailsError);
      return;
    }

    setProcessing(true);
    setError('');

    try {
      const res = await fetch('/api/premium/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName: 'Pro Analyst',
          billingCycle: billingCycle === 'monthly' ? 'Monthly' : 'Annual',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubId(data.subscriptionId);
        setStep('success');
        onSubscribeSuccess('Pro Analyst', billingCycle === 'monthly' ? 'Monthly' : 'Annual');
        onTriggerNotification(mt.analyticsAuthorized);
      } else {
        setError(data.error || mt.paymentFailed);
      }
    } catch (err) {
      setError(mt.networkError);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between max-h-[90vh] animate-scale-up">
        
        {/* Header Block */}
        <div className="p-5 border-b border-gray-100 dark:border-gray-900 flex items-center justify-between shrink-0 bg-gray-50/50 dark:bg-gray-900/10">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-sm">
              <Award className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white">{mt.membershipTitle}</h3>
              <p className="text-[10px] text-gray-400 font-mono">{mt.secureSsl}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-950 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Dynamic step rendering */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* STEP 1: Tier Selection */}
          {step === 'tier-select' && (
            <div className="space-y-6">
              
              {/* Billing Toggle */}
              <div className="flex justify-center">
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-1 rounded-xl border">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    {mt.monthly}
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all flex items-center gap-1.5 ${
                      billingCycle === 'annual'
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    {mt.annual}
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.2 rounded font-mono font-extrabold uppercase animate-pulse">
                      {mt.save}
                    </span>
                  </button>
                </div>
              </div>

              {/* Price Callout */}
              <div className="text-center bg-rose-500/5 dark:bg-rose-500/10 rounded-2xl p-5 border border-rose-500/15 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                  <Sparkles className="h-4.5 w-4.5 text-rose-500 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest block">{mt.packageTitle}</span>
                <div className="flex items-baseline justify-center mt-1.5 gap-1">
                  <span className="text-3xl font-display font-extrabold text-gray-900 dark:text-white">{plans[billingCycle].price}</span>
                  <span className="text-xs text-gray-400 font-medium">{mt.perMonth}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{plans[billingCycle].desc}</p>
              </div>

              {/* Perks Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">{mt.perksTitle}</h4>
                <div className="space-y-2.5">
                  {mt.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-gray-700 dark:text-gray-300">
                      <div className="h-5 w-5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="leading-relaxed">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setStep('checkout')}
                className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold p-3 text-sm shadow-lg shadow-rose-500/10 hover:shadow-rose-500/25 transition-all cursor-pointer text-center"
              >
                {mt.proceed}
              </button>

            </div>
          )}

          {/* STEP 2: Payment checkout desk */}
          {step === 'checkout' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-5">
              <span className="text-xs font-mono font-bold uppercase text-gray-400 block mb-1">{mt.billingDetails}</span>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-bold">{mt.cardholder}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. JASON STATHAM"
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-xs text-gray-800 dark:text-gray-200 outline-none focus:border-rose-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-bold">{mt.cardNumber}</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setCardNumber(val.slice(0, 16));
                    }}
                    placeholder="4000 1234 5678 9010"
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-xs text-gray-800 dark:text-gray-200 outline-none focus:border-rose-500 transition-colors font-mono"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-bold">{mt.expiry}</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setExpiry(val.slice(0, 4));
                      }}
                      placeholder="MM/YY"
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-xs text-gray-800 dark:text-gray-200 outline-none focus:border-rose-500 transition-colors font-mono"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-bold">{mt.cvv}</label>
                    <input
                      type="password"
                      value={cvv}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setCvv(val.slice(0, 3));
                      }}
                      placeholder="•••"
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-xs text-gray-800 dark:text-gray-200 outline-none focus:border-rose-500 transition-colors font-mono"
                      required
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-500 flex items-start gap-2 font-medium">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit panel */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('tier-select')}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-xs font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer"
                >
                  {mt.back}
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className="flex-1 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 p-3 text-xs font-bold text-white transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {processing ? <RotateCw className="h-4 w-4 animate-spin" /> : null}
                  {processing ? mt.authorizing : mt.authorize}
                </button>
              </div>

              <p className="text-[9px] text-gray-400 font-mono text-center">
                {mt.cryptoProtection}
              </p>
            </form>
          )}

          {/* STEP 3: Payment success screen */}
          {step === 'success' && (
            <div className="p-4 text-center space-y-5">
              <div className="h-14 w-14 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/25">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-base text-gray-900 dark:text-white">{mt.successTitle}</h4>
                <p className="text-xs text-gray-400 mt-1">{mt.successDesc}</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-900/40 text-xs font-mono max-w-xs mx-auto text-left space-y-1">
                <p><span className="text-gray-400 font-sans">{mt.successLevel}:</span> Pro Analyst</p>
                <p><span className="text-gray-400 font-sans">{mt.successCred}:</span> {subId}</p>
                <p><span className="text-gray-400 font-sans">{mt.successCycle}:</span> {billingCycle === 'monthly' ? mt.monthly : mt.annual}</p>
                <p><span className="text-gray-400 font-sans">{mt.successStatus}:</span> <span className="text-emerald-500 font-bold">{mt.approved}</span></p>
              </div>

              <button
                onClick={onClose}
                className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold p-3 text-xs cursor-pointer"
              >
                {mt.launch}
              </button>
            </div>
          )}

        </div>

        {/* Footer lock badge */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-900 text-center bg-gray-50/20 dark:bg-gray-950/20 shrink-0">
          <p className="text-[9px] text-gray-400 font-mono flex items-center justify-center gap-1">
            {mt.sslGateways}
          </p>
        </div>

      </div>
    </div>
  );
}
