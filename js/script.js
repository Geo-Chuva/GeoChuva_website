window.onload = function() {
    const temaSalvo = localStorage.getItem('temaGeoChuva') || 'claro';
    mudarTema(temaSalvo);

   
   
    const intro = document.getElementById("inicio");
    const content = document.getElementById("content");
    if (intro && content) {
        setTimeout(()=>{
            intro.classList.add("efeito-out")
            setTimeout(()=>{
                intro.style.display ="none";
                content.classList.remove("hidden")
                content.classList.add("efeito-in")
            },4000)
        },120000)
    }

    const slides = document.querySelectorAll('.slide');
    const legendas = document.querySelectorAll('.legenda');
    if (slides.length > 0) {
        let indexAtual = 0;
        let ciclos = 0;
        function mostrarSlide(index) {
            slides.forEach(slide => slide.classList.remove('ativo'));
            slides[index].classList.add('ativo');
            legendas.forEach(legenda => legenda.classList.remove('ativo'));
            setTimeout(() => {
                legendas[index].classList.add('ativo');
            }, 1000);
        }
        function proximoSlide() {
            indexAtual++;
            if (indexAtual >= slides.length) {
                ciclos++;
                if (ciclos === 1) { 
                    window.location.href = "./pages/sobre.html";
                    return;
                }
                indexAtual = 0;
            }
            mostrarSlide(indexAtual);
        }
        mostrarSlide(indexAtual); 
        setInterval(proximoSlide, 4000);
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

//Mudar tema

function mudarTema(tema) {
    // Salva o tema escolhido
    localStorage.setItem('temaGeoChuva', tema);

    if (tema === 'claro') {
        document.documentElement.style.setProperty('--background-color', '');
        document.documentElement.style.setProperty('--color-topicos','');
        document.documentElement.style.setProperty('--color-text', '');
        document.documentElement.style.setProperty('--color-title', '');
        document.documentElement.style.setProperty('--color-text-header', '#00000');
        document.body.style.background = '';
    } else if (tema === 'escuro') {
        document.documentElement.style.setProperty('--background-color', '#222831');
        document.documentElement.style.setProperty('--color-topicos', '#393E46');
        document.documentElement.style.setProperty('--color-text', '#FFFFFF');
        document.documentElement.style.setProperty('--color-title', '#007A70');
        document.documentElement.style.setProperty('--color-text-header', '#FFFFFF');
        document.body.style.background = '#222831';
    } else if (tema === 'azul') {
        document.documentElement.style.setProperty('--background-color', '#cce6ff');
        document.documentElement.style.setProperty('--color-topicos', '#007A70');
        document.documentElement.style.setProperty('--color-text', '#FFFFFF');
        document.documentElement.style.setProperty('--color-text-header', '');
        document.documentElement.style.setProperty('--color-title', '');
        document.body.style.background = '#cce6ff';
    }
    document.querySelectorAll('.temaBotoes button').forEach(btn => btn.classList.remove('ativo'));
    const btn = document.querySelector(`.temaBotoes button[data-tema="${tema}"]`);
    if(btn) btn.classList.add('ativo');
}

let indexAtual = 0;
const slides = document.querySelectorAll('.slide');
const legendas = document.querySelectorAll('.legenda');
const totalSlides = slides.length;
let ciclos = 0; 

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[index].classList.add('ativo');

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
      window.location.href = "./pages/sobre.html";
      return;
    }
    indexAtual = 0;
  }
  mostrarSlide(indexAtual);
}

document.addEventListener("DOMContentLoaded", function() {
    const temaSalvo = localStorage.getItem('temaGeoChuva') || 'claro';
    mudarTema(temaSalvo);

    const intro = document.getElementById("inicio");
    const content = document.getElementById("content");
    if (intro && content) {
        setTimeout(()=>{
            intro.classList.add("efeito-out")
            setTimeout(()=>{
                intro.style.display ="none";
                content.classList.remove("hidden")
                content.classList.add("efeito-in")
            },1000)
        },120000)
    }

    if (typeof mostrarSlide === "function") {
        mostrarSlide(indexAtual); 
        setInterval(proximoSlide, 4000);
    }

    // Menu hamburguer
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});