import { useState } from 'react';
import { Share2, Check, ExternalLink, Heart, School, Shield } from 'lucide-react';
import { OmanEmblem } from './OmanEmblem';
import { APP_INFO } from '../constants/announcementData';

export function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'دليل تسجيل طلبة الصف الأول 2027/2028م',
      text: 'دليل تسجيل طلبة الصف الأول للعام الدراسي 2027/2028م - مدرسة الكفاءة للتعليم الأساسي - إعداد أ. إيمان الهاشمي',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <footer className="w-full bg-[#1b2b3a] text-slate-200 mt-16 pt-12 pb-8 px-4 border-t-4 border-amber-500">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Emblem & Ministry */}
        <div className="w-16 h-16 bg-white/10 rounded-2xl p-2 mb-4 border border-amber-400/30 flex items-center justify-center shadow-inner">
          <OmanEmblem className="w-full h-full" variant="gold" />
        </div>

        {/* Required School & Ministry info */}
        <div className="space-y-1 mb-4">
          <div className="text-base sm:text-lg font-bold text-amber-300 font-heading">
            {APP_INFO.ministry} – {APP_INFO.country}
          </div>
          <div className="text-sm sm:text-base font-semibold text-slate-100 flex items-center justify-center gap-1.5">
            <School className="w-4 h-4 text-amber-400" />
            <span>{APP_INFO.school}</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-400">
            العام الدراسي {APP_INFO.academicYear}
          </div>
        </div>

        {/* Required Preparer Credit */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-sm font-bold mb-5">
          <span>إعداد: {APP_INFO.preparer}</span>
        </div>

        {/* The Exact Required Disclaimer Statement */}
        <div className="max-w-xl bg-white/5 rounded-2xl p-4 border border-white/10 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            {APP_INFO.school} | هذا التطبيق دليل مبسط لمساعدة أولياء الأمور، ويُرجى الرجوع إلى الإعلان الرسمي لوزارة التعليم عند التسجيل.
          </p>
        </div>

        {/* Share Button for Parents */}
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer mb-6"
        >
          {copiedLink ? (
            <>
              <Check className="w-4 h-4 text-slate-950" />
              <span>تم نسخ رابط الدليل بنجاح!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span>مشاركة هذا الدليل مع أولياء الأمور</span>
            </>
          )}
        </button>

        {/* Bottom Small Credits */}
        <div className="pt-6 border-t border-slate-700/60 w-full text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            جميع الحقوق والضوابط محفوظة لـ {APP_INFO.ministry} – سلطنة عُمان
          </div>
          <div className="flex items-center gap-2">
            <span>المنصة الرسمية:</span>
            <a
              href={APP_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:underline inline-flex items-center gap-1 font-mono direction-ltr"
              dir="ltr"
            >
              eportal.moe.gov.om
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
