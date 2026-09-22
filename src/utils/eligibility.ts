/**
 * Utilities for Date calculations, Age calculation, and Child Eligibility
 */

import { ChildAge, EligibilityResult, RegistrationStatusInfo } from '../types';
import { REGISTRATION_DATES } from '../constants/announcementData';

/**
 * Calculates exact age in years, months, days between a birth date and reference date
 */
export function calculateExactAge(birthDate: Date, referenceDate: Date = new Date()): ChildAge {
  let years = referenceDate.getFullYear() - birthDate.getFullYear();
  let months = referenceDate.getMonth() - birthDate.getMonth();
  let days = referenceDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    // Get previous month length
    const prevMonthLastDay = new Date(
      referenceDate.getFullYear(),
      referenceDate.getMonth(),
      0
    ).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffTime = Math.abs(referenceDate.getTime() - birthDate.getTime());
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    totalDays,
  };
}

/**
 * Check child eligibility strictly by comparing the birth date to the official range:
 * Range: From 2020-09-01 (1 September 2020) to 2022-01-01 (1 January 2022) inclusive!
 */
export function checkChildEligibility(year: number, month: number, day: number): EligibilityResult {
  // JavaScript Date month is 0-indexed (0 = Jan, 8 = Sep)
  const birthDate = new Date(year, month - 1, day, 12, 0, 0);

  // Normalize date comparison: YYYY-MM-DD string or timestamp comparison
  const y = birthDate.getFullYear();
  const m = birthDate.getMonth() + 1; // 1-12
  const d = birthDate.getDate();

  // Create numeric date representations: YYYYMMDD
  const birthNumeric = y * 10000 + m * 100 + d;
  const startNumeric = 2020 * 10000 + 9 * 100 + 1;  // 20200901 (1/9/2020)
  const endNumeric = 2022 * 10000 + 1 * 100 + 1;    // 20220101 (1/1/2022)

  const isEligible = birthNumeric >= startNumeric && birthNumeric <= endNumeric;
  const age = calculateExactAge(birthDate);

  let reason: 'eligible' | 'too_young' | 'too_old' = 'eligible';
  if (!isEligible) {
    if (birthNumeric > endNumeric) {
      reason = 'too_young'; // Born after 1 Jan 2022 (e.g. 2022/02 or 2023)
    } else {
      reason = 'too_old'; // Born before 1 Sep 2020 (e.g. 2020/08 or 2019)
    }
  }

  const message = isEligible
    ? 'مبارك! تاريخ ميلاد طفلك يقع ضمن الفئة العمرية المحددة للتسجيل في الصف الأول للعام الدراسي 2027/2028م، مع ضرورة استيفاء بقية شروط التسجيل الواردة في الإعلان.'
    : 'وفق تاريخ الميلاد المُدخل، لا يقع الطفل ضمن فترة المواليد المحددة في الإعلان للتسجيل للعام الدراسي 2027/2028م.';

  return {
    checked: true,
    isEligible,
    birthDate,
    age,
    message,
    reason,
  };
}

/**
 * Format Arabic age string
 * e.g. "5 سنوات و 7 أشهر و 14 يومًا"
 */
export function formatArabicAge(age: ChildAge): string {
  const yearsText =
    age.years === 1
      ? 'سنة واحدة'
      : age.years === 2
      ? 'سنتان'
      : age.years >= 3 && age.years <= 10
      ? `${age.years} سنوات`
      : `${age.years} سنة`;

  const monthsText =
    age.months === 1
      ? 'شهر واحد'
      : age.months === 2
      ? 'شهران'
      : age.months >= 3 && age.months <= 10
      ? `${age.months} أشهر`
      : `${age.months} شهرًا`;

  const daysText =
    age.days === 1
      ? 'يوم واحد'
      : age.days === 2
      ? 'يومان'
      : age.days >= 3 && age.days <= 10
      ? `${age.days} أيام`
      : `${age.days} يومًا`;

  const parts = [];
  if (age.years > 0) parts.push(yearsText);
  if (age.months > 0) parts.push(monthsText);
  if (age.days > 0 || parts.length === 0) parts.push(daysText);

  return parts.join(' و ');
}

/**
 * Get registration timeline status relative to today
 */
export function getRegistrationStatus(now: Date = new Date()): RegistrationStatusInfo {
  const start = new Date(2026, 9, 1, 0, 0, 0); // 1 Oct 2026
  const end = new Date(2026, 10, 30, 23, 59, 59); // 30 Nov 2026

  const nowTime = now.getTime();
  const startTime = start.getTime();
  const endTime = end.getTime();

  if (nowTime < startTime) {
    const diffMs = startTime - nowTime;
    const daysUntilStart = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return {
      status: 'before',
      message: 'يبدأ التسجيل في 1 أكتوبر 2026م',
      daysUntilStart,
      startDateFormatted: REGISTRATION_DATES.startFormatted,
      endDateFormatted: REGISTRATION_DATES.endFormatted,
    };
  } else if (nowTime > endTime) {
    return {
      status: 'after',
      message: 'انتهت فترة التسجيل المحددة في الإعلان.',
      startDateFormatted: REGISTRATION_DATES.startFormatted,
      endDateFormatted: REGISTRATION_DATES.endFormatted,
    };
  } else {
    const diffMs = endTime - nowTime;
    const daysRemaining = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    return {
      status: 'during',
      message: `متبقي على انتهاء فترة التسجيل: ${daysRemaining} يومًا`,
      daysRemaining,
      startDateFormatted: REGISTRATION_DATES.startFormatted,
      endDateFormatted: REGISTRATION_DATES.endFormatted,
    };
  }
}

/**
 * Arabic months helper
 */
export const ARABIC_MONTHS = [
  { value: 1, name: '1 - يناير (كانون الثاني)' },
  { value: 2, name: '2 - فبراير (شباط)' },
  { value: 3, name: '3 - مارس (آذار)' },
  { value: 4, name: '4 - أبريل (نيسان)' },
  { value: 5, name: '5 - مايو (أيار)' },
  { value: 6, name: '6 - يونيو (حزيران)' },
  { value: 7, name: '7 - يوليو (تموز)' },
  { value: 8, name: '8 - أغسطس (آب)' },
  { value: 9, name: '9 - سبتمبر (أيلول)' },
  { value: 10, name: '10 - أكتوبر (تشرين الأول)' },
  { value: 11, name: '11 - نوفمبر (تشرين الثاني)' },
  { value: 12, name: '12 - ديسمبر (كانون الأول)' },
];
