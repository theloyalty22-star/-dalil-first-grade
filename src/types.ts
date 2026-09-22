/**
 * Types and interfaces for the First Grade Registration Guide Applet
 * دليل تسجيل طلبة الصف الأول للعام الدراسي 2027/2028م
 */

export type ActiveSection = 'home' | 'announcement' | 'eligibility' | 'requirements' | 'manzara';

export interface ChildAge {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

export interface EligibilityResult {
  checked: boolean;
  isEligible: boolean;
  birthDate: Date;
  age: ChildAge;
  message: string;
  reason?: 'too_young' | 'too_old' | 'eligible';
}

export interface RequiredDocument {
  id: string;
  title: string;
  description: string;
  isMandatory: boolean;
  badge?: string;
}

export interface RegistrationStatusInfo {
  status: 'before' | 'during' | 'after';
  message: string;
  daysRemaining?: number;
  daysUntilStart?: number;
  startDateFormatted: string;
  endDateFormatted: string;
}
