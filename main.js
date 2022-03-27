// DOM Document Objects Model
// document.body.style.background = 'red', DOM é a Interação do js ao html/css

// Toggle Abre e fecha o menu quando clicar no icone, 3 barras e X

const nav = document.querySelector('#header nav') // Procurar o nav no header, e atribuir ao nav
const toggle = document.querySelectorAll('nav .toggle') // Procurar dotos que têm toggle na tag nav

for (const element of toggle) {
  // for in, lista as coisas. Ele criar uma var e vai se atribuindo e imprimindo no console até terminar a quantidade daquele item
  element.addEventListener('click', function () {
    // Ele vigia o elemento, quando voce ê clicar ele vai executar algo ali, no caso é a function
    nav.classList.toggle('show') // Aqui vai fazer o toggle mudar
  }) // resumindo, Ele está verificando a lista de classe do nav, e casso tenha o show, ele tira e se tiver ele coloca
}

// Quando clicar em uma item do menu, econder o menu
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  // Mudar o header da página quando dar scroll

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Testimonials carousel slider swiper

// https://swiperjs.com/swiper-api <-- Um código que eu peguei, e os parametros que eu estou pegando estã com uma descrição informando a funcionalidade de cada um

const swiper = new Swiper('.swiper', {
  slidesPerView: 1, // Quantos slides eu posso ver de uma vez só.
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, // Habilita a rolagem lateral com mouse dos depoimentos
  keyboard: true, // Habilia a rolagame com o teclado
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1023: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
    1200: {
      slidesPerView: 3,
      setWrapperSize: true,
      mousewheel: false
    }
  }
})

// ScrollReveal: Mostrar elementos quandor der scroll na página

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}) // configuração co começo da trnasição

scrollReveal.reveal(
` #home .text, 
#home .image, 
#about .image,
#about .text,
#services header,
#services .card,
#testimonials .testimonials,
#contact .text, 
#contact .links, 
footer .brand,
footer .social`,
  { interval: 100 }
) // Efeito de transição de forma ordenada

// Botão voltar ao topo

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
// Menu ativo conforme a seção visivel na pagina

const sections = document.querySelectorAll('main section[id]') // Dentro de main, procure todos os id's que estiverem em uma section

function activateMenuAtCurrentSection(){
  checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 // traço virtual

  for(const section of sections) {
    const sectionTop = section.offsetTop // pegando o topo
    const sectionHeight = section.offsetHeight // pegando a altura
    const sectionId = section.getAttribute('id') // pegando o id dela


    // Verificador de comeco e fim do traço virtual da seção
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active') // Pegue a seção do menu que o usuario se encontra e adiciona um evento, a transição
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})