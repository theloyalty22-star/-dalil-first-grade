import { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Copy,
  Check,
  Printer,
  ExternalLink,
  Lightbulb,
  FileCheck2,
  FileEdit,
  ShieldCheck,
} from 'lucide-react';
import { OmanEmblem } from './OmanEmblem';
import {
  APP_INFO,
  REGISTRATION_DATES,
  LEGAL_REFERENCE,
  OFFICIAL_CONDITIONS,
  KINDERGARTEN_NOTICE,
} from '../constants/announcementData';

interface OfficialPosterProps {
  onOpenEligibility?: () => void;
  onOpenManzara?: () => void;
}

export function OfficialPoster({ onOpenEligibility, onOpenManzara }: OfficialPosterProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copied, setCopied] = useState<boolean>(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 160));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoomLevel(100);

  const handleCopyText = async () => {
    const fullText = `
سلطنة عُمان - وزارة التعليم
مدرسة الكفاءة للتعليم الأساسي
إعلان تسجيل الطلبة المستجدين بالصف الأول للعام الدراسي: ${APP_INFO.academicYear} (المدارس الحكومية)

${LEGAL_REFERENCE.decree}
${LEGAL_REFERENCE.articles.map((a) => `${a.number}: ${a.text}`).join('\n')}

فترة التسجيل: من ${REGISTRATION_DATES.startDayName} الموافق ${REGISTRATION_DATES.startFormatted} حتى ${REGISTRATION_DATES.endDayName} الموافق ${REGISTRATION_DATES.endFormatted}.

شروط التسجيل:
${OFFICIAL_CONDITIONS.map((c) => `${c.number}. ${c.text}`).join('\n')}

ملاحظة مهمة:
${KINDERGARTEN_NOTICE.text}

رابط منصة منظرة: ${APP_INFO.portalUrl}
إعداد: ${APP_INFO.preparer}
    `.trim();

    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Poster Toolbar */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-slate-200 p-3 mb-4 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-700">
        <div className="flex items-center gap-1 font-semibold text-slate-800">
          <span>نسخة الإعلان الرسمي المعتمد</span>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
            عالي الدقة
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 75}
              className="p-1.5 hover:bg-white rounded text-slate-600 disabled:opacity-40 transition-colors"
              title="تصغير"
              aria-label="تصغير"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-2 text-slate-600 min-w-[42px] text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 160}
              className="p-1.5 hover:bg-white rounded text-slate-600 disabled:opacity-40 transition-colors"
              title="تكبير"
              aria-label="تكبير"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel !== 100 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 hover:bg-white rounded text-slate-600 transition-colors"
                title="إعادة ضبط الحجم"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors border border-slate-200"
            title="نسخ نص الإعلان"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">تم النسخ!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>نسخ النص</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors border border-slate-200"
            title="طباعة الإعلان"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>طباعة</span>
          </button>
        </div>
      </div>

      {/* Poster Container with Dynamic Zoom */}
      <div className="w-full overflow-x-auto pb-4 flex justify-center">
        <div
          id="official-announcement-poster"
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          className="transition-transform duration-200 ease-out w-full max-w-[620px] bg-[#3a4e5e] text-white rounded-2xl shadow-2xl p-5 sm:p-7 border border-slate-600/50 select-text font-['Tajawal',sans-serif]"
        >
          {/* Top Banner Row */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-400/20 pb-4 mb-4">
            {/* Left Badge: المدارس الحكومية */}
            <div className="bg-[#bfa068] text-white font-heading font-bold text-center px-4 py-2 rounded-xl shadow-sm text-sm sm:text-base leading-snug">
              <div>المدارس</div>
              <div>الحكومية</div>
            </div>

            {/* Center Announcement Title */}
            <div className="text-center flex-1 px-2">
              <h2 className="text-sm sm:text-lg font-bold font-heading text-white leading-relaxed">
                إعلان تسجيل الطلبة المستجدين بالصف الأول
              </h2>
              <div className="text-xs sm:text-sm font-semibold text-amber-200 font-heading">
                للعام الدراسي: {APP_INFO.academicYear}
              </div>
            </div>

            {/* Right Emblem & Ministry Name */}
            <div className="flex flex-col items-center justify-center shrink-0">
              <div className="w-12 h-12 mb-1">
                <OmanEmblem className="w-full h-full" variant="white" />
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider">
                {APP_INFO.ministry}
              </div>
            </div>
          </div>

          {/* Legal Reference from Royal Decree */}
          <div className="text-xs sm:text-[13px] leading-relaxed text-slate-100 mb-4 bg-black/15 p-3.5 rounded-xl border border-white/10">
            <div className="font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>استنادًا إلى قانون التعليم المدرسي الصادر بالمرسوم السلطاني رقم (2023/31م) في:</span>
            </div>
            <ul className="space-y-1.5 pr-2">
              <li>
                <span className="font-bold text-amber-200">• المادة (24): </span>
                <span>
                  "التعليم الأساسي إلزامي لجميع الأطفال الذين يبلغون سن (6) السادسة، توفره الدولة ويلتزم به ولي أمر الطالب، ويجوز النزول بسن القبول وفقاً للقواعد التي تبينها اللائحة، دون الإخلال بالكثافة المقررة للصفوف".
                </span>
              </li>
              <li>
                <span className="font-bold text-amber-200">• والمادة (26): </span>
                <span>
                  "يجب على ولي أمر الطالب تسجيله في الصف الأول من مرحلة التعليم الأساسي خلال الموعد المحدد لذلك عند بلوغه السن المقررة للقبول، ومتابعة انتظامه في الدراسة حتى إتمام هذه المرحلة".
                </span>
              </li>
            </ul>
          </div>

          {/* Announcement Period Highlight Box with Lightbulb */}
          <div className="bg-[#eceff3] text-slate-800 rounded-xl p-3.5 sm:p-4 mb-4 shadow-sm flex items-start gap-3 border border-slate-300">
            <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-xs sm:text-[13.5px] leading-relaxed text-slate-900 font-medium">
              تُعلن وزارة التعليم عن فتح باب التسجيل للطلبة المستجدين بالصف الأول بالمدارس الحكومية للعام الدراسي{' '}
              <span className="font-bold text-slate-950">{APP_INFO.academicYear}</span>، في الفترة من يوم{' '}
              <span className="font-bold text-blue-900">
                {REGISTRATION_DATES.startDayName} الموافق {REGISTRATION_DATES.startFormatted}
              </span>
              ، ويُغلق يوم{' '}
              <span className="font-bold text-blue-900">
                {REGISTRATION_DATES.endDayName} الموافق {REGISTRATION_DATES.endFormatted}
              </span>
              .
            </div>
          </div>

          {/* Conditions Card (Beige Card with Checklist Icon) */}
          <div className="bg-[#edd8be] text-slate-900 rounded-xl p-4 sm:p-5 mb-4 shadow-md border border-[#d6ba94]">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 border-b border-amber-900/15 pb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-800 text-white flex items-center justify-center shadow-xs">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-amber-950">
                شروط التسجيل:
              </h3>
            </div>

            {/* List of 7 conditions */}
            <ol className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed font-normal text-slate-900">
              {/* Condition 1: Highly emphasized birth range */}
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  1
                </span>
                <div>
                  يكون التسجيل حصرًا على الأطفال من مواليد الفترة من{' '}
                  <span className="font-bold text-red-700 bg-red-100/80 px-1 py-0.5 rounded border border-red-300">
                    2020/9/1م حتى 2022/1/1م
                  </span>
                  ، ولا يُقبل من هم خلاف ذلك.
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  2
                </span>
                <div>أن يكون لدى الطفل العُماني وولي أمره رقم مدني.</div>
              </li>

              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  3
                </span>
                <div>أن يكون لدى الطفل غير العُماني وولي أمره بطاقة إقامة سارية المفعول بسلطنة عُمان.</div>
              </li>

              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  4
                </span>
                <div>
                  يتم تقديم طلبات التسجيل عن طريق مستخدم ولي الأمر عبر منصة "منظرة" من نافذة طلب تسجيل طالب في مدرسة حكومية، وذلك بالدخول عبر الرابط:{' '}
                  <a
                    href={APP_INFO.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-900 underline hover:text-blue-700 inline-flex items-center gap-1 direction-ltr"
                    dir="ltr"
                  >
                    https://eportal.moe.gov.om
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  5
                </span>
                <div>
                  بعد التسجيل في الموقع الإلكتروني، يقوم ولي الأمر بمراجعة المدرسة مصطحبًا معه الطفل، وإحضار المستندات الآتية:
                  <ul className="mt-1.5 space-y-1 pr-3 text-slate-800">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-800 font-bold">•</span>
                      <span>السجل الطبي للطفل للتأكد من أخذه للتطعيمات المطلوبة.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-800 font-bold">•</span>
                      <span>
                        تقرير طبي من مؤسسة صحية معتمدة في حالة أنّ الطفل يعاني من أمراض مزمنة أو أية إعاقة تتطلب رعاية خاصة.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  6
                </span>
                <div>خضوع الطفل للفحوصات الطبية من قبل المؤسسات الصحية المعتمدة قبل القبول النهائي بالمدرسة.</div>
              </li>

              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-900/20 text-amber-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  7
                </span>
                <div className="font-semibold text-slate-900">
                  الالتزام بالشروط المحددة والفترة الزمنية، <span className="text-red-700 font-bold">ولن يُسمح دون ذلك.</span>
                </div>
              </li>
            </ol>
          </div>

          {/* Kindergarten Notice Note Box */}
          <div className="bg-[#eceff3] text-slate-800 rounded-xl p-3.5 mb-4 shadow-sm flex items-start gap-3 border border-slate-300">
            <div className="w-7 h-7 rounded-lg bg-slate-300 text-slate-700 flex items-center justify-center shrink-0">
              <FileEdit className="w-4 h-4 text-slate-600" />
            </div>
            <div className="text-xs sm:text-[13px] leading-relaxed">
              <span className="font-bold text-slate-950 block mb-0.5">*ملاحظة:</span>
              في حالة كان الطفل مُسجلًا بالتمهيدي بالعام الدراسي الحالي، يقوم ولي أمره بتسجيله بالصف الأول بالعام الدراسي القادم، ولا يُترك أمر التسجيل للمدرسة الخاصة.
            </div>
          </div>

          {/* Footer Blessing & Entities */}
          <div className="text-center pt-2 pb-1 border-t border-slate-400/20 text-slate-200">
            <div className="text-xs sm:text-sm font-bold text-amber-300 font-heading mb-2">
              والله ولي التوفيق،،،
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-300 gap-1.5 pt-1">
              <div>{APP_INFO.contactCenter}</div>
              <div className="flex items-center gap-1 font-mono text-[11px] text-amber-200">
                <span>@{APP_INFO.socialAccount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons Below Poster */}
      <div className="w-full max-w-2xl flex flex-wrap items-center justify-center gap-3 mt-3">
        {onOpenEligibility && (
          <button
            onClick={onOpenEligibility}
            className="flex-1 min-w-[200px] py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>👦 التحقق من تاريخ ميلاد طفلي</span>
          </button>
        )}
        {onOpenManzara && (
          <button
            onClick={onOpenManzara}
            className="flex-1 min-w-[200px] py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>🌐 التقديم في منصة منظرة</span>
          </button>
        )}
      </div>
    </div>
  );
}
