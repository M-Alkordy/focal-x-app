import translations from "./translations.js";
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
english.classList.add('active');
arabic.onclick = ()=>{
  arabic.classList.add('active');
  english.classList.remove('active');
  setLanguage("ar");
};
english.onclick = ()=>{
  english.classList.add('active');
  arabic.classList.remove('active');
  setLanguage("en");
};

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-tr]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-tr");
    element.textContent = translations[language][translationKey];
  });
  if (language === "ar"){
    document.getElementById("Content").setAttribute("dir" , "rtl");
    document.getElementById("Content").classList.add('ar');
    document.getElementById("Content").classList.remove('Content');
    document.getElementById("sec-text").classList.add('sec-text-ar');
    document.getElementById("sec-text").classList.remove('sec-text');
    document.getElementById("sub-text").classList.add('sub-text-ar');
    document.getElementById("sub-text").classList.remove('sub-text');
    document.getElementById("countdown").classList.add('countdown-ar');
    document.getElementById("footer").classList.add('footer-ar');
    document.querySelector("form").innerHTML=`<input type="email" name="Email" placeholder="سّجل من خلال بريدك الإلكتروني" class="input-ar">
    <input type="submit" value="اشترك الآن" class="sub-ar">`;
    
    document.getElementById("focal-txt").innerHTML=`<p class="focal-ar" id="focal">منصة <span>focal app solution</span> بوابة واسعة للأعمال في سورية <br>
 مكان آمن لك إن كنت: صاحب عمل أو شركة، مُستقل،<br>
    باحث عن وظيفة، مصمم، مسّوق، مبرمج، أو  مُدون.</p>`;
  }else{
    document.getElementById("Content").setAttribute("dir" , "ltr");
    document.getElementById("Content").classList.add('Content');
    document.getElementById("Content").classList.remove('ar');
    document.getElementById("sec-text").classList.add('sec-text');
    document.getElementById("sec-text").classList.remove('sec-text-ar');
    document.getElementById("sub-text").classList.add('sub-text');
    document.getElementById("sub-text").classList.remove('sub-text-ar');
    document.querySelector("form").innerHTML=`<input type="email" name="Email" placeholder="Enter your E-mail" class="input">
    <input type="submit" value="Subscribe" class="sub">`;
    document.getElementById("focal-txt").innerHTML=`<p class="focal" id="focal"><span>focal app solution</span> will be a vast business gate in Syria, <br>
    a safe place for you if you are: Business owner, Freelancer, <br>
    job seeker, designer, marketer, developer, or blogger.</p>`;
    document.getElementById("countdown").classList.remove('countdown-ar');
    document.getElementById("footer").classList.remove('footer-ar');
  }
};
