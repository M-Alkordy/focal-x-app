import translations from "./translations.js";
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
arabic.onclick = ()=>{
  setLanguage("ar");
};

english.onclick = ()=>{
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
    document.getElementById("txt").classList.add('txt-ar');
    document.getElementById("txt").classList.remove('txt');
    document.getElementById("sec-text").classList.add('sec-text-ar');
    document.getElementById("sec-text").classList.remove('sec-text');
    document.getElementById("sub-text").classList.add('sub-text-ar');
    document.getElementById("sub-text").classList.remove('sub-text');
    document.querySelector("form").innerHTML=`<input type="email" name="Email" placeholder="سّجل من خلال بريدك الإلكتروني" class="input-ar">
    <input type="submit" value="اشترك الآن" class="sub-ar">`;
  }else{
    document.getElementById("Content").setAttribute("dir" , "ltr");
    document.getElementById("Content").classList.add('Content');
    document.getElementById("Content").classList.remove('ar');
    document.getElementById("txt").classList.add('txt');
    document.getElementById("txt").classList.remove('txt-ar');
    document.getElementById("sec-text").classList.add('sec-text');
    document.getElementById("sec-text").classList.remove('sec-text-ar');
    document.getElementById("sub-text").classList.add('sub-text');
    document.getElementById("sub-text").classList.remove('sub-text-ar');
    document.querySelector("form").innerHTML=`<input type="email" name="Email" placeholder="Enter your E-mail" class="input">
    <input type="submit" value="Subscribe" class="sub">`;
  }
};
