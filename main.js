document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector("#download-btn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // مسیر فایل رزومه‌ای که خود کاربر داخل پوشه گذاشته
      const resumePath = "assets/pdf/rezome.pdf";

      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Rezome_Mehrdad_Tehrani.pdf"; // اسم فایل دانلودی
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});

// ------------------------------
// اطلاعات قابل ویرایش توسط خریدار
// ------------------------------




// ------------------------------
// تزریق اطلاعات داخل HTML
// ------------------------------
document.getElementById("fullName").textContent = profileData.fullName;
document.getElementById("experience").textContent = profileData.experience;
document.getElementById("location").textContent = profileData.location;
document.getElementById("bio").textContent = profileData.bio;

const img = document.getElementById("profileImage");
img.src = profileData.profileImage;
img.alt = profileData.profileImageAlt;



//بخش مهارت ها
document.addEventListener("DOMContentLoaded", function () {
 

  const skillsGrid = document.getElementById("skillsGrid");

  if (skillsGrid) {
    skills.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.innerHTML = `
        <div class="title">${skill.title}</div>
        <div class="meter"><i style="width:${skill.level}%"></i></div>
      `;
      skillsGrid.appendChild(skillDiv);
    });
  }
});




document.addEventListener("DOMContentLoaded", function () {
  // لیست تحصیلات
  




  // لیست مدارک
  

  const eduList = document.getElementById("eduList");
  const certList = document.getElementById("certList");




  // رندر تحصیلات
  education.forEach(item => {
    const div = document.createElement("div");
    div.className = "edu-item";
    div.innerHTML = `
      <div class="year">${item.year}</div>
      <div>
        <div style="font-weight:800">${item.title}</div>
        <div class="muted" style="margin-top:6px">${item.desc}</div>
      </div>
    `;
    eduList.appendChild(div);
  });




  // رندر مدارک
  certs.forEach(cert => {
    const c = document.createElement("div");
    c.className = "cert";
    c.textContent = cert;
    certList.appendChild(c);
  });
});



//مقالات و فعالیت های علمی

document.addEventListener("DOMContentLoaded", function () {
 
  const pubGrid = document.getElementById("pubGrid");

  publications.forEach(pub => {
    const article = document.createElement("article");
    article.className = "pub";
    article.innerHTML = `
      <h4>${pub.title}</h4>
      <p class="muted">${pub.source} — ${pub.year} — <a href="${pub.link}">${pub.type}</a></p>
    `;
    pubGrid.appendChild(article);
  });
});


document.addEventListener("DOMContentLoaded", function () {

 

  const track = document.getElementById("portfolioTrack");

  // ساخت کارت‌ها
  portfolio.forEach(item => {
    const div = document.createElement("div");
    div.className = "proj";
    div.innerHTML = `
      <a href="${item.link}">
        <img src="${item.image}" alt="${item.alt}">
      </a>
      <div style="padding:10px">
        <div style="font-weight:700">${item.title}</div>
        <div class="muted" style="margin-top:4px">${item.tech}</div>
        <div class="muted" style="margin-top:4px">${item.year}</div>
      </div>
    `;
    track.appendChild(div);
  });

  let index = 0;

  function getCardsPerView() {
    if (window.matchMedia("(max-width: 600px)").matches) return 1;
    if (window.matchMedia("(max-width: 900px)").matches) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.ceil(portfolio.length / getCardsPerView()) - 1;
  }

  function updateSlider() {
    const card = document.querySelector(".proj");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + 14;
    const moveAmount = cardWidth * getCardsPerView();

    track.style.transform = `translateX(${-index * moveAmount}px)`;
  }

  document.querySelector(".next").onclick = () => {
    if (index < getMaxIndex()) {
      index++;
      updateSlider();
    }
  };

  document.querySelector(".prev").onclick = () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  };

  window.addEventListener("resize", updateSlider);

  updateSlider();
});



  // اطلاعات تماس و شبکه‌ها
//


// ------------------------------
document.addEventListener("DOMContentLoaded", () => {

  // ایمیل
  document.getElementById("email").textContent = contactData.email;

  // لینک‌های متنی
  document.getElementById("linkedinLink").textContent = contactData.social.linkedin.replace("https://", "");
  document.getElementById("linkedinLink").href = contactData.social.linkedin;
  document.getElementById("linkedinLink").target = "_blank";

  document.getElementById("githubLink").textContent = contactData.social.github.replace("https://", "");
  document.getElementById("githubLink").href = contactData.social.github;
  document.getElementById("githubLink").target = "_blank";

  document.getElementById("telegramLink").textContent = contactData.social.telegram.replace("https://", "");
  document.getElementById("telegramLink").href = contactData.social.telegram;
  document.getElementById("telegramLink").target = "_blank";

  document.getElementById("instagramLink").textContent = contactData.social.instagram.replace("https://", "");
  document.getElementById("instagramLink").href = contactData.social.instagram;
  document.getElementById("instagramLink").target = "_blank";

  // دکمه‌ها
  document.getElementById("btnLinkedin").href = contactData.social.linkedin;
  document.getElementById("btnLinkedin").target = "_blank";

  document.getElementById("btnGithub").href = contactData.social.github;
  document.getElementById("btnGithub").target = "_blank";

  document.getElementById("btnTelegram").href = contactData.social.telegram;
  document.getElementById("btnTelegram").target = "_blank";

  document.getElementById("btnInstagram").href = contactData.social.instagram;
  document.getElementById("btnInstagram").target = "_blank";

});

// ...existing code...
const portfolioGrid = document.getElementById("portfolioGrid");

portfolio.forEach(proj => {
  const div = document.createElement("div");
  div.className = "proj";
  div.innerHTML = `
    <img src="${proj.image}" alt="${proj.alt}">
    <div style="padding:12px">
      <div style="font-weight:800">${proj.title}</div>
      <div class="muted" style="font-size:13px">${proj.tech} — ${proj.year}</div>
    </div>
  `;
  portfolioGrid.appendChild(div);
});
// ...existing code...


