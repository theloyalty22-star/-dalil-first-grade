import { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { getRegistrationStatus } from '../utils/eligibility';
import { REGISTRATION_DATES } from '../constants/announcementData';
import { RegistrationStatusInfo } from '../types';

export function RegistrationCountdown() {
  const [statusInfo, setStatusInfo] = useState<RegistrationStatusInfo>(() =>
    getRegistrationStatus()
  );

  // Update periodically
  useEffect(() => {
    const update = () => {
      setStatusInfo(getRegistrationStatus());
    };
    update();
    const interval = setInterval(update, 60000); // every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="registration-status-bar"
      className="w-full max-w-3xl mx-auto rounded-2xl p-4 sm:p-5 transition-all shadow-sm border"
      style={{
        backgroundColor:
          statusInfo.status === 'during'
            ? '#ecfdf5'
            : statusInfo.status === 'before'
            ? '#eff6ff'
            : '#fef2f2',
        borderColor:
          statusInfo.status === 'during'
            ? '#a7f3d0'
            : statusInfo.status === 'before'
            ? '#bfdbfe'
            : '#fecaca',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
        {/* Main Status Text */}
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              statusInfo.status === 'during'
                ? 'bg-emerald-600 text-white'
                : statusInfo.status === 'before'
                ? 'bg-blue-600 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {statusInfo.status === 'during' ? (
              <Clock className="w-6 h-6 animate-pulse" />
            ) : statusInfo.status === 'before' ? (
              <Calendar className="w-6 h-6" />
            ) : (
              <AlertCircle className="w-6 h-6" />
            )}
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 mb-0.5">
              حالة التسجيل للعام الدراسي 2027/2028م
            </div>
            <div
              className={`text-lg sm:text-xl font-bold font-heading ${
                statusInfo.status === 'during'
                  ? 'text-emerald-900'
                  : statusInfo.status === 'before'
                  ? 'text-blue-900'
                  : 'text-red-900'
              }`}
            >
              {statusInfo.message}
            </div>
          </div>
        </div>

        {/* Highlight Badge */}
        <div className="flex items-center gap-2">
          {statusInfo.status === 'before' && (
            <div className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-blue-200">
              يبدأ التسجيل بعد {statusInfo.daysUntilStart} يومًا تقريبًا
            </div>
          )}
          {statusInfo.status === 'during' && (
            <div className="bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              التسجيل مفتوح حاليًا عبر منصة منظرة
            </div>
          )}
          {statusInfo.status === 'after' && (
            <div className="bg-red-100 text-red-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-red-200">
              تم إغلاق فترة التسجيل المحددة
            </div>
          )}
        </div>
      </div>

      {/* Dates Sub-bar */}
      <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span>تاريخ البدء:</span>
          <span className="font-semibold text-slate-800">
            {REGISTRATION_DATES.startDayName} {REGISTRATION_DATES.startFormatted}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-slate-400" />
          <span>تاريخ الانتهاء:</span>
          <span className="font-semibold text-slate-800">
            {REGISTRATION_DATES.endDayName} {REGISTRATION_DATES.endFormatted}
          </span>
        </div>
      </div>
    </div>
  );
}
