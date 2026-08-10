// ============================================================
// TEACHERS — بيانات المدرسين
// ضيف مدرس جديد: انسخ object وعدّل البيانات — الاسم، المادة، المرحلة، نبذة، سنين الخبرة، الصورة
// photo: مسار الصورة من public/images (أو خلّيها null و هيظهر Placeholder)
// ============================================================

export const teachersSection = {
  title: 'معلمونا',
  subtitle: 'خبرة، تخصص، وشغف بالتعليم.',
  ctaLabel: 'تعرف على كل المدرسين',
}

export const teachers = [
  {
    id: 1,
    name: 'محمد عبده ',
    subject: 'Math',
    stage: 'إعدادي / ثانوي', 
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.', // TODO: نبذة حقيقية
    experienceYears:20 , 
    photo: '/images/teacher2.jpg',
  },
  {
    id: 2,
    name: 'علاء خليل ',
    subject: 'Math',
    stage: 'إعدادي / ثانوي',
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.',
    experienceYears: 33,
    photo: '/images/teacher1.jpeg',
  },
  {
    id: 3,
    name: 'زكريا خليل ',
    subject: 'لغة عربية',
    stage: 'إعدادي / ثانوي',
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.',
    experienceYears: 12,
    photo: '/images/teacher3.jpg',
  },
  {
    id: 4,
    name: ' مصطفي فؤاد ',
    subject: 'science',
    stage: 'إعدادي / ثانوي',
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.',
    experienceYears: 7,
    photo: '/images/teacher4.jpeg', // TODO: حط صورة المدرس الرابع هنا
  },
  {
    id: 5,
    name: ' عماد حمودين ',
    subject: 'لغة عربية',
    stage: 'إعدادي / ثانوي',
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.',
    experienceYears: 7,
    photo: null, // TODO: حط صورة المدرس الرابع هنا
  },
  {
    id: 6,
    name: ' أحمد سليمان  ',
    subject: 'ICT',
    stage: 'إعدادي / ثانوي',
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.',
    experienceYears: 7,
    photo: null, // TODO: حط صورة المدرس الرابع هنا
  },
  {
    id: 7,
    name: ' هاني ',
    subject: 'دراسات',
    stage: 'إعدادي / ثانوي',
    bio: 'نبذة قصيرة عن المدرس وطريقة شرحه.',
    experienceYears: 7,
    photo: null, // TODO: حط صورة المدرس الرابع هنا
  },
]
