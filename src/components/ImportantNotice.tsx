import { AlertCircle, AlertTriangle, School } from 'lucide-react';
import { KINDERGARTEN_NOTICE } from '../constants/announcementData';

export function ImportantNotice() {
  return (
    <div
      id="kindergarten-important-notice"
      className="w-full max-w-4xl mx-auto bg-amber-50 rounded-2xl p-5 sm:p-6 border-2 border-amber-300 shadow-sm transition-all"
    >
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
          <AlertCircle className="w-7 h-7" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-200 text-amber-950 px-2.5 py-0.5 rounded-md">
              تنبيه رسمي من وزارة التعليم
            </span>
            <span className="text-sm font-bold text-amber-900 font-heading">
              {KINDERGARTEN_NOTICE.title}
            </span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
            {KINDERGARTEN_NOTICE.text}
          </p>

          <p className="text-xs text-slate-600 mt-2">
            ملاحظة: هذا الإجراء إلزامي لضمان حجز مقعد للطالب في مدرسة الكفاءة للتعليم الأساسي وفق الروافد المعتمدة.
          </p>
        </div>
      </div>
    </div>
  );
}
