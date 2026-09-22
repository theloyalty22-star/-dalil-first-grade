/**
 * Official registration announcement data for Grade 1
 * العام الدراسي 2027/2028م - سلطنة عُمان
 */

import { RequiredDocument } from '../types';

export const APP_INFO = {
  country: 'سلطنة عُمان',
  ministry: 'وزارة التعليم',
  school: 'مدرسة الكفاءة للتعليم الأساسي',
  preparer: 'أ. إيمان الهاشمي',
  academicYear: '2027/2028م',
  portalUrl: 'https://eportal.moe.gov.om',
  contactCenter: 'مركز التوجيه المهني والإرشاد الطلابي',
  socialAccount: 'ncgc_moe',
};

// Official registration dates
export const REGISTRATION_DATES = {
  startDate: new Date(2026, 9, 1), // 1 October 2026
  endDate: new Date(2026, 10, 30, 23, 59, 59), // 30 November 2026
  startDayName: 'الخميس',
  endDayName: 'الإثنين',
  startFormatted: '1 أكتوبر 2026م',
  endFormatted: '30 نوفمبر 2026م',
  displayPeriod: 'من 1 أكتوبر 2026م إلى 30 نوفمبر 2026م',
};

// Official eligible birth date window: 1 September 2020 to 1 January 2022 (inclusive)
export const ELIGIBLE_BIRTH_WINDOW = {
  startDate: new Date(2020, 8, 1), // Month 8 is September (0-indexed) -> 2020/09/01
  endDate: new Date(2022, 0, 1), // Month 0 is January -> 2022/01/01
  startFormatted: '1 سبتمبر 2020م',
  endFormatted: '1 يناير 2022م',
};

// Royal Decree Reference
export const LEGAL_REFERENCE = {
  decree: 'قانون التعليم المدرسي الصادر بالمرسوم السلطاني رقم (2023/31م)',
  articles: [
    {
      number: 'المادة (24)',
      text: 'التعليم الأساسي إلزامي لجميع الأطفال الذين يبلغون سن (6) السادسة، توفره الدولة ويلتزم به ولي أمر الطالب، ويجوز النزول بسن القبول وفقاً للقواعد التي تبينها اللائحة، دون الإخلال بالكثافة المقررة للصفوف.',
    },
    {
      number: 'المادة (26)',
      text: 'يجب على ولي أمر الطالب تسجيله في الصف الأول من مرحلة التعليم الأساسي خلال الموعد المحدد لذلك عند بلوغه السن المقررة للقبول، ومتابعة انتظامه في الدراسة حتى إتمام هذه المرحلة.',
    },
  ],
};

// The 7 official conditions from the announcement
export const OFFICIAL_CONDITIONS = [
  {
    number: 1,
    title: 'الفئة العمرية المحددة',
    text: 'يكون التسجيل حصرًا على الأطفال من مواليد الفترة من 2020/9/1م حتى 2022/1/1م، ولا يُقبل من هم خلاف ذلك.',
    highlight: '2020/9/1م حتى 2022/1/1م',
  },
  {
    number: 2,
    title: 'الرقم المدني (للطلبة العُمانيين)',
    text: 'أن يكون لدى الطفل العُماني وولي أمره رقم مدني.',
    highlight: 'رقم مدني سارٍ',
  },
  {
    number: 3,
    title: 'بطاقة الإقامة (للطلبة غير العُمانيين)',
    text: 'أن يكون لدى الطفل غير العُماني وولي أمره بطاقة إقامة سارية المفعول بسلطنة عُمان.',
    highlight: 'إقامة سارية بسلطنة عُمان',
  },
  {
    number: 4,
    title: 'التقديم الإلكتروني عبر منصة منظرة',
    text: 'يتم تقديم طلبات التسجيل عن طريق مستخدم ولي الأمر عبر منصة "منظرة" من نافذة طلب تسجيل طالب في مدرسة حكومية، وذلك بالدخول عبر الرابط: https://eportal.moe.gov.om .',
    highlight: 'منصة منظرة',
  },
  {
    number: 5,
    title: 'مراجعة المدرسة وإحضار المستندات',
    text: 'بعد التسجيل في الموقع الإلكتروني، يقوم ولي الأمر بمراجعة المدرسة مصطحبًا معه الطفل، وإحضار السجل الطبي للتأكد من التطعيمات وتقرير طبي معتمد في حالة وجود أمراض مزمنة أو رعاية خاصة.',
    highlight: 'مراجعة المدرسة مع الطفل',
  },
  {
    number: 6,
    title: 'الفحوصات الطبية المعتمدة',
    text: 'خضوع الطفل للفحوصات الطبية من قبل المؤسسات الصحية المعتمدة قبل القبول النهائي بالمدرسة.',
    highlight: 'فحوصات طبية معتمدة',
  },
  {
    number: 7,
    title: 'الالتزام بالفترة المحددة',
    text: 'الالتزام بالشروط المحددة والفترة الزمنية، ولن يُسمح دون ذلك.',
    highlight: 'الالتزام بالمواعيد الرسمية',
  },
];

// Important Kindergarten Notice
export const KINDERGARTEN_NOTICE = {
  title: 'ملاحظة مهمة لطلبة التمهيدي',
  text: 'في حالة كان الطفل مُسجلًا بالتمهيدي بالعام الدراسي الحالي، يقوم ولي أمره بتسجيله بالصف الأول بالعام الدراسي القادم، ولا يُترك أمر التسجيل للمدرسة الخاصة.',
};

// Checklist for parents to prepare documents
export const REQUIRED_DOCUMENTS: RequiredDocument[] = [
  {
    id: 'birth_cert',
    title: 'شهادة ميلاد الطفل',
    description: 'أصل شهادة الميلاد الصادرة من شرطة عُمان السلطانية (الأحوال المدنية) مع نسخة ملونة.',
    isMandatory: true,
    badge: 'أساسي',
  },
  {
    id: 'parent_id',
    title: 'البطاقة الشخصية لولي الأمر',
    description: 'البطاقة الشخصية لولي الأمر (أو بطاقة الإقامة للمقيمين) سارية المفعول.',
    isMandatory: true,
    badge: 'أساسي',
  },
  {
    id: 'medical_record',
    title: 'السجل الطبي للطفل (كرت التطعيمات)',
    description: 'السجل الطبي المعتمد للتأكد من أخذ كافة التطعيمات الإلزامية المقررة من وزارة الصحة.',
    isMandatory: true,
    badge: 'إلزامي بالوزارة',
  },
  {
    id: 'student_photos',
    title: 'صور شخصية حديثة للطالب',
    description: 'صور شخصية حديثة بخلفية بيضاء للملف المدرسي والسجل الإلكتروني.',
    isMandatory: true,
    badge: 'مطلوب للملف',
  },
  {
    id: 'medical_report',
    title: 'تقرير طبي معتمد (عند الحاجة)',
    description: 'تقرير طبي من مؤسسة صحية معتمدة في حال كان الطفل يعاني من أمراض مزمنة أو إعاقة تتطلب رعاية خاصة.',
    isMandatory: false,
    badge: 'لحالات خاصة',
  },
];
