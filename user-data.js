//بخش اطلاعات اولیه برای پروفایل

const profileData = {
  fullName: "مهرداد تهرانی",
  experience: "۶+ سال",
  location: "تهران، ایران",
  bio: "مهندس نرم‌افزار و پژوهشگر در حوزه‌ی یادگیری ماشین و طراحی محصول — تمرکز بر توسعه‌ی سیستم‌های مقیاس‌پذیر و انتشار مقالات علمی.",
  profileImage: "assets/images/profile.jpg",
  profileImageAlt: "عکس پروفایل کاربر"
};




//.........................
//بخش وارد کردن مهارت ها
//.........................

 const skills = [
    { title: "HTML / CSS", level: 94 },
    { title: "React / Frontend", level: 88 },
    { title: "Python / ML", level: 80 },
    { title: "JavaScript", level: 90 },
    { title: "Node.js", level: 85 },
    { title: "SQL / PostgreSQL", level: 78 },
    { title: "Docker / DevOps", level: 72 },
    { title: "UI/UX Design", level: 68 },
    { title: "TypeScript", level: 76 },
    { title: "GraphQL", level: 70 }
  ];



//.......................
//بخش وارد کردن تحصیلات
//.......................
const education = [
    {
      year: "۲۰۲۰ — ۲۰۲۴",
      title: "کارشناسی مهندسی کامپیوتر — دانشگاه غیرانتفاعی",
      desc: "پایان‌نامه: بهینه‌سازی مدل‌های یادگیری"
    },
    {
      year: "۲۰۲۳",
      title: "گواهی‌نامه Data Science — Coursera",
      desc: "تحلیل داده و یادگیری ماشین"
     },
    // {
    //   year: "۲۰۲۳",
    //   title: "گواهی‌نامه Data Science — Coursera",
    //   desc: "تحلیل داده و یادگیری ماشین"
    // },
    // {
    //   year: "۲۰۲۳",
    //   title: "گواهی‌نامه Data Science — Coursera",
    //   desc: "تحلیل داده و یادگیری ماشین"
    // }
  ];



//.......................
//بخش وارد کردن مدارک  
//.......................
const certs = [
    "گوگل آنالیتیکس — ۲۰۲۲",
    "Deeplearning.ai — ۲۰۲۳",
    "React Ad,vanced — ۲۰۲۴",
    
  ];



//........................................
//بخش وارد کردن مقالات و فعالیت های علمی
//........................................
 const publications = [
    {
      title: "پردازش زبان طبیعی و کاربردهای آن",
      source: "ژورنال مثال",
      year: "۲۰۲۴",
      link: "assets/article1.pdf",
      type: "PDF"
    },
    {
      title: "یادگیری عمیق در تشخیص الگوها",
      source: "کنفرانس مثال",
      year: "۲۰۲۳",
      link: "#",
      type: "DOI"
    },
    {
      title: "سیستم‌های توصیه‌گر ترکیبی",
      source: "ژورنال مثال",
      year: "۲۰۲۲",
      link: "#",
      type: "PDF"
    },
     /*{
      title: "  ",
      source: " ",
      year: "",
      link: "#",
      type: ""
    },
     {
      title: "  ",
      source: " ",
      year: "",
      link: "#",
      type: ""
    },
     {
      title: "",
      source: " ",
      year: "",
      link: "#",
      type: ""
    }*/
  ];




//.................................
//بخش وارد کردن نمونه کارها
//.................................
 const portfolio = [
    {
      title: "سیستم مدیریت محتوا",
      tech: "React — Node",
      year: "۲۰۲۴",
      image: "assets/images/project1.jfif",
      alt: "پروژه ۱",
      link: "#"
    },
    {
      title: "اپلیکیشن موبایل",
      tech: "Flutter — Backend",
      year: "۲۰۲۳",
      image: "assets/images/project2.jfif",
      alt: "پروژه ۲",
      link: "#"
    },
    {
      title: "تحلیل داده",
      tech: "Python — ML",
      year: "۲۰۲۲",
      image: "assets/images/project3.jfif",
      alt: "پروژه ۳",
      link: "#"
    },
    {
      title: "پروژه جدید",
      tech: "Next.js — API",
      year: "۲۰۲۴",
      image: "assets/images/project3.jfif",
      alt: "پروژه ۴",
      link: "#"
    },
    {
      title: "پروژه جدید",
      tech: "Vue — Firebase",
      year: "۲۰۲۴",
      image: "assets/images/project3.jfif",
      alt: "پروژه ۵",
      link: "#"
     },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   tech: "",
    //   year: "",
    //   image: "",
    //   alt: "",
    //   link: ""
    // }
  ];


//........................
//وارد کردن اطلاعات تماس و شبکه ها
//........................

const contactData = {
  email: "example@melorverse.com",

  social: {
    linkedin: "https://linkedin.com/in/mehrdad",
    github: "https://github.com/mehrdad",
    telegram: "https://t.me/mehrdad",
    instagram: "https://instagram.com/mehrdad"
  }
};