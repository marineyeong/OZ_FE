// 다크모드 구현
function darkMode(el){
  const bgArea = document.getElementById('wrap');

  if(el.classList == 'btn_black'){
      bgArea.className = 'bg_black';
  }
  else {
      bgArea.classList.remove('bg_black');
  }
}

//캐러셀 구현
const prevButton = document.querySelector('.btn_prev');
const nextButton = document.querySelector('.btn_next');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
if (index === 0) return;
index -= 1;

carousel.style.transform = `translate3d(-${300 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
if (index === 2) return;
index += 1;

carousel.style.transform = `translate3d(-${300 * index}px, 0, 0)`;
});

function btnJoin () {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const pw = document.getElementById("pwd").value;
  const pw_check = document.getElementById("chk_pwd").value;
  const num1 = document.getElementById("number_first").value;
  const num2 = document.getElementById("number_second").value;
  const num3 = document.getElementById("number_third").value;
  const region = document.getElementById("region").value;
  const man = document.getElementById("man").value;
  const woman = document.getElementById("woman").value;

  const data = {
      email,
      name,
      pw,
      pw_check,
      num1, num2, num3,
      region,
      man,
      woman
  };

  console.log(data);
}