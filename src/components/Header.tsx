import { CalendarRange, Sparkles, Building2 } from 'lucide-react';
import { OmanEmblem } from './OmanEmblem';
import { APP_INFO, REGISTRATION_DATES } from '../constants/announcementData';
import { RegistrationCountdown } from './RegistrationCountdown';

export function Header() {
  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#1b2b3a] via-[#213547] to-[#283e52] text-white pt-8 pb-12 px-4 sm:px-6 shadow-md">
      {/* Decorative Traditional Geometric Background Accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[16px] border-amber-400" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full border-[8px] border-amber-300" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top Official Entity Bar */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-amber-400/40 p-2 flex items-center justify-center shadow-md">
              <OmanEmblem className="w-full h-full drop-shadow-sm" variant="gold" />
            </div>
            <div className="text-right">
              <div className="text-sm sm:text-base font-bold text-amber-300 tracking-wide">
                {APP_INFO.ministry} – {APP_INFO.country}
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200 font-medium">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{APP_INFO.school}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big Official Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>المدارس الحكومية – الدليل الإرشادي التفاعلي</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight sm:leading-snug mb-2">
            تسجيل طلبة الصف الأول
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-amber-300 font-heading">
            للعام الدراسي {APP_INFO.academicYear}
          </p>
        </div>

        {/* Prominent Registration Period Card */}
        <div
          id="registration-period-card"
          className="bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-amber-400/80 mb-6 text-center transform transition-all hover:scale-[1.01]"
        >
          <div className="flex items-center justify-center gap-2 text-amber-800 font-bold text-sm sm:text-base mb-1">
            <CalendarRange className="w-5 h-5 text-amber-700" />
            <span>الموعد الرسمي للتسجيل</span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-slate-900">
            فترة التسجيل: من {REGISTRATION_DATES.startFormatted} إلى {REGISTRATION_DATES.endFormatted}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            وفق إعلان وزارة التعليم بسلطنة عُمان عبر منصة منظرة التعليمية
          </p>
        </div>

        {/* Countdown & Status Bar */}
        <RegistrationCountdown />
      </div>
    </header>
  );
}
