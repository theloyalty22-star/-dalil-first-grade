import {
  ExternalLink,
  Globe,
  CheckCircle2,
  LogIn,
  FileSpreadsheet,
  Building,
  ShieldCheck,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { APP_INFO } from '../constants/announcementData';

export function ManzaraPortalView() {
  const steps = [
    {
      step: 1,
      title: 'الدخول إلى البوابة التعليمية',
      desc: 'الدخول عبر الرابط الرسمي واختيار تسجيل الدخول باستخدام مستخدم ولي الأمر (التصديق الإلكتروني PKI أو اسم المستخدم وكلمة المرور).',
      icon: LogIn,
    },
    {
      step: 2,
      title: 'الانتقال إلى منصة منظرة',
      desc: 'من القائمة الرئيسية لخدمات البوابة التعليمية، اختر منصة "منظرة" الخاصة بالتعليم المدرسي.',
      icon: Globe,
    },
    {
      step: 3,
      title: 'نافذة طلب تسجيل طالب في مدرسة حكومية',
      desc: 'الدخول إلى نافذة "طلب تسجيل طالب في مدرسة حكومية" والمخصصة للطلبة المستجدين بالصف الأول.',
      icon: FileSpreadsheet,
    },
    {
      step: 4,
      title: 'تحديد مدرسة الكفاءة وإرسال الطلب',
      desc: 'اختيار مدرسة الكفاءة للتعليم الأساسي وفق التوزيع الجغرافي وسكن ولي الأمر، وتأكيد إرسال الطلب الإلكتروني.',
      icon: Building,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Hero Card for Manzara */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-blue-800/40 text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mx-auto flex items-center justify-center mb-4 shadow-inner">
            <Globe className="w-9 h-9 text-amber-300" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>البوابة التعليمية – وزارة التعليم سلطنة عُمان</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white mb-2">
            منصة «منظرة» التعليمية
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            المنصة الإلكترونية الرسمية المعتمدة لتقديم ومتابعة طلبات تسجيل الطلبة المستجدين بالصف الأول بالمدارس الحكومية.
          </p>

          {/* THE BIG PROMINENT BUTTON */}
          <div className="space-y-4">
            <a
              id="goto-manzara-main-button"
              href={APP_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold font-heading text-lg sm:text-xl rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>الانتقال إلى منصة منظرة للتسجيل</span>
              <ExternalLink className="w-5 h-5 text-slate-900" />
            </a>

            {/* The exact required descriptive text */}
            <p className="text-xs sm:text-sm text-amber-100/90 font-medium leading-relaxed max-w-lg mx-auto bg-white/10 p-3.5 rounded-xl border border-white/15">
              يتم تقديم طلب التسجيل إلكترونيًا عن طريق مستخدم ولي الأمر عبر منصة منظرة، من نافذة طلب تسجيل طالب في مدرسة حكومية.
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-step Registration Guide */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
              خطوات التقديم الإلكتروني خطوة بخطوة
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              دليل مبسط يوضح آلية تقديم الطلب بسهولة عبر البوابة
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {st.step}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 font-heading mb-1 flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-amber-600" />
                    <span>{st.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Support and Authentication Tip */}
        <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-blue-900">ملاحظة هامة حول تسجيل الدخول:</div>
            <p className="text-xs text-blue-800/90 leading-relaxed">
              تأكد من تفعيل شريحة الهاتف المدعمة بالتصديق الإلكتروني (PKI) أو البطاقة الشخصية للدخول السريع والمباشر لحساب ولي الأمر في البوابة التعليمية. في حال وجود صعوبة فنية يمكن التواصل مع الدعم الفني للبوابة التعليمية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
