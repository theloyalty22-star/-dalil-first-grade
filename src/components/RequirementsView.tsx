import { useState } from 'react';
import {
  FileCheck,
  CheckCircle,
  AlertTriangle,
  Info,
  Files,
  Stethoscope,
  IdCard,
  CalendarCheck,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import {
  OFFICIAL_CONDITIONS,
  REQUIRED_DOCUMENTS,
  APP_INFO,
} from '../constants/announcementData';

interface RequirementsViewProps {
  onGoToManzara?: () => void;
  onGoToEligibility?: () => void;
}

export function RequirementsView({ onGoToManzara, onGoToEligibility }: RequirementsViewProps) {
  // Checklist state for parents to track their documents preparation
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    birth_cert: false,
    parent_id: false,
    medical_record: false,
    student_photos: false,
    medical_report: false,
  });

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalMandatory = REQUIRED_DOCUMENTS.filter((d) => d.isMandatory).length;
  const completedMandatory = REQUIRED_DOCUMENTS.filter(
    (d) => d.isMandatory && checkedDocs[d.id]
  ).length;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-2">
              <FileCheck className="w-3.5 h-3.5" />
              <span>الضوابط والاشتراطات الرسمية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              المطلوب وشروط التسجيل
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              جميع الشروط المعتمدة من وزارة التعليم للقبول بالصف الأول للعام الدراسي {APP_INFO.academicYear} بمدرسة الكفاءة للتعليم الأساسي.
            </p>
          </div>

          <div className="shrink-0 flex gap-2">
            {onGoToEligibility && (
              <button
                onClick={onGoToEligibility}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
              >
                فحص سن الطفل
              </button>
            )}
            {onGoToManzara && (
              <button
                onClick={onGoToManzara}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-colors cursor-pointer"
              >
                منصة منظرة
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Section: جهّز مستنداتك (Interactive Checklist) */}
      <div
        id="prepare-documents-section"
        className="bg-amber-50/60 rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-xs"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm shrink-0">
              <Files className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                جهّز مستنداتك
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                قائمة تفاعلية لتجهيز المستندات المطلوبة عند مراجعة المدرسة بعد التسجيل الإلكتروني:
              </p>
            </div>
          </div>

          {/* Progress badge */}
          <div className="bg-white px-4 py-2 rounded-2xl border border-amber-300 text-xs sm:text-sm font-bold text-amber-900 shadow-2xs">
            مستندات جاهزة: {completedMandatory} من {totalMandatory} أساسية
          </div>
        </div>

        {/* Documents Cards Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {REQUIRED_DOCUMENTS.map((doc) => {
            const isChecked = checkedDocs[doc.id];
            return (
              <div
                key={doc.id}
                onClick={() => toggleDoc(doc.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                  isChecked
                    ? 'bg-emerald-50/90 border-emerald-500 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-amber-400 shadow-2xs'
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 text-white'
                      : 'border-2 border-slate-300 bg-slate-50'
                  }`}
                >
                  {isChecked && <CheckCircle className="w-4 h-4" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-sm sm:text-base font-bold font-heading ${
                        isChecked ? 'text-emerald-950 line-through decoration-emerald-500' : 'text-slate-900'
                      }`}
                    >
                      {doc.title}
                    </span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                        doc.isMandatory
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {doc.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Required Notice */}
        <div className="mt-5 p-3.5 bg-white/80 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">تنبيه لولي الأمر:</span> ينبغي على ولي الأمر الاعتماد على الإعلان الرسمي وإرشادات إدارة مدرسة الكفاءة للتعليم الأساسي فيما يتعلق بالمستندات النهائية المطلوبة ومواعيد استلام الملفات.
          </p>
        </div>
      </div>

      {/* Official 7 Conditions Details Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-r-4 border-blue-900 pr-3">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            شروط التسجيل الرسمية المفصلة
          </h3>
          <span className="text-xs bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full font-bold">
            7 شروط معتمدة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIAL_CONDITIONS.map((cond) => (
            <div
              key={cond.number}
              className={`rounded-2xl p-5 border transition-all ${
                cond.number === 1
                  ? 'bg-amber-50/50 border-amber-300 md:col-span-2 shadow-xs'
                  : 'bg-white border-slate-200 hover:shadow-xs'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs ${
                    cond.number === 1
                      ? 'bg-red-600 text-white'
                      : 'bg-blue-900 text-white'
                  }`}
                >
                  {cond.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-bold text-base text-slate-900 font-heading">
                      {cond.title}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {cond.highlight}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cond.text}
                  </p>

                  {/* Contextual Action for Specific Conditions */}
                  {cond.number === 1 && onGoToEligibility && (
                    <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center justify-between">
                      <span className="text-xs text-red-700 font-semibold">
                        مواليد 2020/9/1م حتى 2022/1/1م حصراً
                      </span>
                      <button
                        onClick={onGoToEligibility}
                        className="text-xs text-blue-900 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>تحقق من تاريخ طفلك الآن</span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      </button>
                    </div>
                  )}

                  {cond.number === 4 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">رابط البوابة التعليمية:</span>
                      <a
                        href={APP_INFO.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-800 font-bold hover:underline flex items-center gap-1 direction-ltr"
                        dir="ltr"
                      >
                        <span>eportal.moe.gov.om</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {cond.number === 5 && (
                    <div className="mt-2.5 p-2.5 bg-blue-50/70 rounded-xl text-xs text-blue-950 border border-blue-100 space-y-1">
                      <div className="font-bold">المستندات عند مراجعة المدرسة:</div>
                      <div>• السجل الطبي للتأكد من أخذ التطعيمات.</div>
                      <div>• تقرير طبي معتمد للأمراض المزمنة أو الرعاية الخاصة.</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
