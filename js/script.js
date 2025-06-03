window.onload = function(){
    const intro = document.getElementById("inicio");

    setTimeout(()=>{
        intro.classList.add("efeito-out")
        setTimeout(()=>{
            intro.style.display ="none";
            content.classList.remove("hidden")
            content.classList.add("efeito-in")
        },1000)
    },120000)
}

function trocar(cor){
    document.body.style.background=cor;
}

let indexAtual = 0;
const slides = document.querySelectorAll('.slide');
const legendas = document.querySelectorAll('.legenda');
const totalSlides = slides.length;
let ciclos = 0; 

function mostrarSlide(index) {
  // Atualiza slides
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[index].classList.add('ativo');

  // Atualiza legendas
  legendas.forEach(legenda => legenda.classList.remove('ativo'));
  setTimeout(() => {
    legendas[index].classList.add('ativo');
  }, 1000); 
}

function proximoSlide() {
  indexAtual++;
  if (indexAtual >= totalSlides) {
    ciclos++;
    if (ciclos === 1) { 
      window.location.href = "sobre.html";
      return;
    }
    indexAtual = 0;
  }
  mostrarSlide(indexAtual);
}

mostrarSlide(indexAtual); 
setInterval(proximoSlide, 4000);