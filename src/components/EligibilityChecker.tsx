import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Clock,
  ArrowLeft,
} from 'lucide-react';
import { checkChildEligibility, formatArabicAge, ARABIC_MONTHS } from '../utils/eligibility';
import { EligibilityResult } from '../types';
import { ELIGIBLE_BIRTH_WINDOW, APP_INFO } from '../constants/announcementData';

interface EligibilityCheckerProps {
  onGoToRequirements?: () => void;
  onGoToManzara?: () => void;
}

export function EligibilityChecker({
  onGoToRequirements,
  onGoToManzara,
}: EligibilityCheckerProps) {
  // Default values
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMonth, setSelectedMonth] = useState<number>(9);
  const [selectedYear, setSelectedYear] = useState<number>(2021);
  const [result, setResult] = useState<EligibilityResult | null>(null);

  // Years options around the eligibility target
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

  // Number of days in selected month/year
  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
  const daysList = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // If day exceeds current month days, normalize
  const currentDay = Math.min(selectedDay, daysInMonth);

  const handleCheck = () => {
    const res = checkChildEligibility(selectedYear, selectedMonth, currentDay);
    setResult(res);
  };

  // Quick preset buttons for convenience
  const handleQuickPreset = (d: number, m: number, y: number) => {
    setSelectedDay(d);
    setSelectedMonth(m);
    setSelectedYear(y);
    const res = checkChildEligibility(y, m, d);
    setResult(res);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-5 sm:p-6 text-center">
        <div className="w-12 h-12 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
          <Sparkles className="w-6 h-6 text-amber-200" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-heading mb-1">
          أداة التحقق من أهلية الطفل للتسجيل
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 max-w-md mx-auto">
          أدخل تاريخ ميلاد طفلك كما هو مسجل في شهادة الميلاد للتحقق الفوري من استحقاقه وفق الفترة المعتمدة.
        </p>

        {/* Official Target Window Pill */}
        <div className="mt-4 inline-flex items-center gap-2 bg-black/20 text-white text-xs sm:text-sm px-4 py-1.5 rounded-full border border-white/20">
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>الفترة الرسمية المعتمدة:</span>
          <span className="font-bold text-amber-200">
            من {ELIGIBLE_BIRTH_WINDOW.startFormatted} حتى {ELIGIBLE_BIRTH_WINDOW.endFormatted}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Date Selection Form */}
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-3 text-right">
            اختر تاريخ ميلاد الطفل:
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Day */}
            <div>
              <label htmlFor="birth-day" className="block text-xs font-semibold text-slate-500 mb-1">
                اليوم
              </label>
              <select
                id="birth-day"
                value={currentDay}
                onChange={(e) => setSelectedDay(Number(e.target.value))}
                className="w-full h-12 px-3 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-base focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-hidden"
              >
                {daysList.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
            <div>
              <label htmlFor="birth-month" className="block text-xs font-semibold text-slate-500 mb-1">
                الشهر
              </label>
              <select
                id="birth-month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="w-full h-12 px-3 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-hidden"
              >
                {ARABIC_MONTHS.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label htmlFor="birth-year" className="block text-xs font-semibold text-slate-500 mb-1">
                السنة
              </label>
              <select
                id="birth-year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="w-full h-12 px-3 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-base focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-hidden"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}م
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Selected Date Summary Display */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>تاريخ الميلاد المُحدد:</span>
            <span className="font-bold text-slate-900 font-mono">
              {currentDay} / {selectedMonth} / {selectedYear}م
            </span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            (اليوم / الشهر / السنة)
          </span>
        </div>

        {/* Main Check Button */}
        <button
          id="check-eligibility-button"
          onClick={handleCheck}
          className="w-full h-14 bg-gradient-to-r from-blue-900 to-slate-900 hover:from-blue-800 hover:to-slate-800 active:scale-[0.99] text-white rounded-2xl font-extrabold text-base sm:text-lg shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>تحقق من أهلية الطفل</span>
        </button>

        {/* Result Area */}
        {result && (
          <div
            id="eligibility-result-card"
            className={`rounded-2xl p-5 sm:p-6 transition-all border-2 animate-in fade-in duration-300 ${
              result.isEligible
                ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                : 'bg-amber-50 border-amber-500 text-amber-950'
            }`}
          >
            {/* Top Status Icon & Title */}
            <div className="flex items-start gap-3.5 mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                  result.isEligible
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-600 text-white'
                }`}
              >
                {result.isEligible ? (
                  <CheckCircle2 className="w-7 h-7" />
                ) : (
                  <XCircle className="w-7 h-7" />
                )}
              </div>

              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${
                    result.isEligible ? 'text-emerald-700' : 'text-amber-800'
                  }`}
                >
                  {result.isEligible ? 'نتيجة الفحص: مستحق للتسجيل' : 'نتيجة الفحص: غير مستحق'}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading leading-snug">
                  {result.isEligible
                    ? 'مستحق للتسجيل بالصف الأول'
                    : 'لا يقع ضمن الفترة المحددة'}
                </h3>
              </div>
            </div>

            {/* Exact Required Message */}
            <div
              className={`p-4 rounded-xl text-sm sm:text-base leading-relaxed font-semibold mb-4 border ${
                result.isEligible
                  ? 'bg-white/80 text-emerald-900 border-emerald-200'
                  : 'bg-white/80 text-amber-900 border-amber-200'
              }`}
            >
              {result.message}
            </div>

            {/* Age Breakdown Card (Exact Years, Months, Days) */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>عمر الطفل الدقيق حتى اليوم:</span>
              </div>

              <div className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                {formatArabicAge(result.age)}
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-center">
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-slate-800">{result.age.years}</div>
                  <div className="text-xs text-slate-500">سنوات</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-slate-800">{result.age.months}</div>
                  <div className="text-xs text-slate-500">أشهر</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-slate-800">{result.age.days}</div>
                  <div className="text-xs text-slate-500">أيام</div>
                </div>
              </div>
            </div>

            {/* Contextual guidance depending on eligibility */}
            {result.isEligible ? (
              <div className="space-y-3">
                <div className="text-xs text-emerald-800 font-medium">
                  الخطوة التالية: تأكد من تجهيز المستندات المطلوبة ثم الدخول لمنصة منظرة لتقديم الطلب خلال فترة التسجيل الرسمية.
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  {onGoToRequirements && (
                    <button
                      onClick={onGoToRequirements}
                      className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>عرض المستندات المطلوبة</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}
                  {onGoToManzara && (
                    <button
                      onClick={onGoToManzara}
                      className="flex-1 py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>الانتقال لمنصة منظرة</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-amber-900 leading-relaxed bg-amber-100/60 p-3 rounded-xl border border-amber-200">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>توضيح لولي الأمر:</span>
                </div>
                {result.reason === 'too_young' ? (
                  <p>
                    تاريخ ميلاد الطفل بعد 1 يناير 2022م، وهو ما يعني أنه لم يبلغ السن المقررة للقبول في هذا العام، وسيكون تسجيله متاحًا في الأعوام الدراسية القادمة بمشيئة الله.
                  </p>
                ) : (
                  <p>
                    تاريخ ميلاد الطفل قبل 1 سبتمبر 2020م. يُرجى مراجعة إدارة مدرسة الكفاءة للتعليم الأساسي للاستفسار عن الإجراءات النظامية المناسبة لعمره.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Quick Test Date Buttons (Helpful presets) */}
        <div className="pt-2 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>تواريخ تجريبية سريعة للاختبار:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleQuickPreset(1, 9, 2020)}
              className="text-xs px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
            >
              1 سبتمبر 2020 (أول يوم مقبول ✓)
            </button>
            <button
              onClick={() => handleQuickPreset(15, 6, 2021)}
              className="text-xs px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
            >
              15 يونيو 2021 (مقبول ✓)
            </button>
            <button
              onClick={() => handleQuickPreset(1, 1, 2022)}
              className="text-xs px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
            >
              1 يناير 2022 (آخر يوم مقبول ✓)
            </button>
            <button
              onClick={() => handleQuickPreset(2, 1, 2022)}
              className="text-xs px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition-colors"
            >
              2 يناير 2022 (غير مقبول ✕)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
