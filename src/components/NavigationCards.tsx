import { Megaphone, UserCheck, ClipboardList, Globe, ArrowLeft, Sparkles } from 'lucide-react';
import { ActiveSection } from '../types';

interface NavigationCardsProps {
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
}

export function NavigationCards({ activeSection, onSelectSection }: NavigationCardsProps) {
  const cards = [
    {
      id: 'announcement' as ActiveSection,
      title: 'الإعلان الرسمي',
      badge: 'المرسوم والشروط',
      icon: Megaphone,
      emoji: '📢',
      description: 'عرض نص وتصميم الإعلان الوزاري المعتمد بدقة عالية مع إمكانية التكبير والطباعة',
      color: 'from-blue-900 to-slate-800',
      borderColor: 'hover:border-blue-500',
      badgeColor: 'bg-blue-100 text-blue-900',
    },
    {
      id: 'eligibility' as ActiveSection,
      title: 'هل طفلي مستحق للتسجيل؟',
      badge: 'فحص تاريخ الميلاد الذكي',
      icon: UserCheck,
      emoji: '👦',
      description: 'حساب أهلية الطفل الفورية ومقارنة تاريخ ميلاده بالفترة المقررة (1 سبتمبر 2020 – 1 يناير 2022)',
      color: 'from-amber-600 to-amber-700',
      borderColor: 'hover:border-amber-500',
      badgeColor: 'bg-amber-100 text-amber-900',
      featured: true,
    },
    {
      id: 'requirements' as ActiveSection,
      title: 'المطلوب وشروط التسجيل',
      badge: 'قائمة جهّز مستنداتك',
      icon: ClipboardList,
      emoji: '📋',
      description: 'شروط القبول الـ 7 كاملة، وقائمة تفاعلية بالمستندات المطلوبة عند مراجعة المدرسة',
      color: 'from-emerald-700 to-slate-800',
      borderColor: 'hover:border-emerald-500',
      badgeColor: 'bg-emerald-100 text-emerald-900',
    },
    {
      id: 'manzara' as ActiveSection,
      title: 'التسجيل عبر منصة منظرة',
      badge: 'رابط التقديم المباشر',
      icon: Globe,
      emoji: '🌐',
      description: 'الدخول المباشر إلى منصة منظرة بوزارة التعليم لتقديم طلب التسجيل إلكترونيًا',
      color: 'from-indigo-800 to-blue-950',
      borderColor: 'hover:border-indigo-500',
      badgeColor: 'bg-indigo-100 text-indigo-900',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-800">
          اختر القسم المطلوب
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          دليل مبسط وتفاعلي لمساعدة أولياء الأمور بمدرسة الكفاءة للتعليم الأساسي
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {cards.map((card) => {
          const Icon = card.icon;
          const isSelected = activeSection === card.id;

          return (
            <button
              key={card.id}
              id={`nav-card-${card.id}`}
              onClick={() => onSelectSection(card.id)}
              className={`group relative text-right p-6 sm:p-7 rounded-3xl transition-all duration-200 border-2 shadow-sm flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-white border-amber-500 ring-4 ring-amber-500/20 shadow-md scale-[1.01]'
                  : `bg-white border-slate-200 ${card.borderColor} hover:shadow-md hover:scale-[1.01]`
              }`}
            >
              {card.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>الأكثر استخداماً</span>
                </div>
              )}

              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-xs transition-transform group-hover:scale-110 ${
                      isSelected
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-100 group-hover:bg-amber-50'
                    }`}
                  >
                    <span>{card.emoji}</span>
                  </div>

                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-extrabold font-heading text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              {/* Bottom Action Hint */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-amber-800 transition-colors">
                <span>{isSelected ? 'أنت تتصفح هذا القسم حالياً' : 'اضغط للعرض والتفاعل'}</span>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
