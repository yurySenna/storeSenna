
async function carregarSecao(categorias, containerId) {
    try {
        const resposta = await fetch(`http://localhost:3000/produtos/${categorias}`);
        const produtos = await resposta.json();

        const container = document.getElementById(containerId);
        container.innerHTML = ''; // limpa antes

        produtos.forEach(produto => {
            const card = `
                <div class="card">
                    <div class="caixa-img">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="texto-produto">
                        <h2>${produto.nome}</h2>
                        <p>${produto.descricao}</p>
                         <p>De <s>${produto.precoantigo}</s></p>
                         <span><strong>Por ${produto.precoatual}</strong></span>
                         <button onclick="adicionarAoCarrinho('${produto.nome}', '${produto.precoatual}')">
                             Compre Agora
                         </button>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (erro) {
        console.error(`Erro ao carregar ${categorias}:`, erro);
    }
}

// Chama para cada seção
carregarSecao('Smartphones', 'secao-smartphones');
carregarSecao('Eletrodomesticos', 'secao-eletro');
carregarSecao('TVs', 'secao-tvs');
carregarSecao('Tablets', 'secao-tablets');
carregarSecao('Notebooks', 'secao-notebooks');
carregarSecao('Games', 'secao-games');
carregarSecao('Mais vendidos', 'secao-maisVendidos');
carregarSecao('Salao', 'secao-salao');





// menu lateral
function mostrarMenu() {
  document.getElementById('menu-lateral').classList.toggle('mostrar');

   const botoes = [
  { nome: 'Smartphones', link: 'smartphones.html' },
  { nome: 'Tablets', link: 'tablets.html' },
  { nome: 'Notebooks', link: 'notebooks.html' },
  { nome: 'Games', link: 'games.html' },
  { nome: 'Drones', link: 'drones.html' },
  { nome: 'AirPods', link: 'aipods.html' },
  { nome: 'Salão', link: 'salao.html' },
  { nome: 'TVs', link: 'tv-video.html' },
  { nome: 'Smartwatches', link: 'smartwatch.html' },
  { nome: 'Áudio', link: 'audio.html' }
];

// Pega o menu do HTML
const botoesFloat = document.getElementById('btn-nav-menu');

// Cria cada botão com link
botoes.forEach(i => {
  const a = document.createElement('a');  // cria uma tag <a>
  a.href = i.link;                     // define o link do item
  a.className = 'item-menu';              // classe para estilizar
  a.innerHTML = `
    <span>${i.nome}</span>
  `;
  botoesFloat.appendChild(a); // adiciona no menu
});

 const itemMenu = [
  { nome: 'Smartphones', link: 'smartphones.html' },
  { nome: 'Tablets', link: 'tablets.html' },
  { nome: 'Notebooks', link: 'notebooks.html' },
  { nome: 'Games', link: 'games.html' },
  { nome: 'Informatica', link: 'informatica.html' },
  { nome: 'Drones', link: 'drones.html' },
  { nome: 'Eletrodomésticos', link: 'eletrodomesticos.html' },
  { nome: 'Salão', link: 'salao.html' },
  { nome: 'Tv e Video', link: 'tv-video.html' },
  { nome: 'Smartwatches', link: 'smartwatches.html' },
  { nome: 'Áudio', link: 'audio.html' }
];

// Pega o menu do HTML
const menu = document.getElementById('menu');

// Cria cada botão com link
itemMenu.forEach(item => {
  const a = document.createElement('a');  // cria uma tag <a>
  a.href = item.link;                     // define o link do item
  a.className = 'item-menu';              // classe para estilizar
  a.innerHTML = `
    <span>${item.nome}</span>
    <button><img src="img/iconright.png" alt=""></button>
  `;
  menu.appendChild(a); // adiciona no menu
});

const itemMarca = [
  { nome: 'Apple', link: 'smartphones.html' },
  { nome: 'Samsung', link: 'smartwatches.html' },
  { nome: 'Redimi', link: 'smartphones.html' },
  { nome: 'Motorola', link: 'smartphones.html' },
  { nome: 'LG', link: 'smartphones.html' },
  { nome: 'Lenovo', link: 'smartphones.html' },
  { nome: 'Dell', link: 'informatica.html' },
  { nome: 'Mondial', link: 'informatica.html' },
  { nome: 'Eletrolux', link: 'eletrodomesticos.html' }

];
const marca = document.getElementById('marca');

// Cria cada botão com link
itemMarca.forEach(ite => {
  const a = document.createElement('a');  // cria uma tag <a>
  a.href = ite.link;                     // define o link do item
  a.className = 'item-menu';              // classe para estilizar
  a.innerHTML = `
    <span>${ite.nome}</span>
    <button><img src="img/iconright.png" alt=""></button>
  `;
  marca.appendChild(a);
});
}

function fecharMenu() {
  document.getElementById('menu-lateral').classList.remove('mostrar');
}

function mostrarCep() {
  document.getElementById('fundo-cep').classList.toggle('aberto');
  

}

async function buscarCep() {
  let cep = document.getElementById('txt-cep').value
  let res = document.getElementById('res')

  const URL = 'https://brasilapi.com.br/api/cep/v1/'

  let response = await fetch(URL + cep)

  let data = await response.json()

  res.innerHTML = `${data.street},<br> ${data.neighborhood},<br>  ${data.city}-${data.state}

`

}

function fecharCep() {
  document.getElementById('fundo-cep').classList.remove('aberto');

}

function abrirLogin() {
  document.getElementById('card-login').classList.add('active');
}

function fecharLogin() {
  document.getElementById('card-login').classList.remove('active');
}

  //  codigo banner carrocel
let current = 0;
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

function showSlide(index, direction) {
  const currentItem = items[current];
  const nextItem = items[index];

  currentItem.classList.remove('active');
  currentItem.style.transform = `translateX(${direction > 0 ? '-100%' : '100%'})`;
  currentItem.style.opacity = 0;

  nextItem.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`;
  nextItem.style.opacity = 0;


  requestAnimationFrame(() => {
    nextItem.classList.add('active');
    nextItem.style.transform = 'translateX(0)';
    nextItem.style.opacity = 1;
  });

  dots[current].classList.remove('active');
  dots[index].classList.add('active');
  current = index;
}

document.getElementById('next').addEventListener('click', () => {
  let next = (current + 1) % items.length;
  showSlide(next, 1);
});

document.getElementById('prev').addEventListener('click', () => {
  let prev = (current - 1 + items.length) % items.length;
  showSlide(prev, -1);
});

//codigo carrinho compras
function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContador();
  alert(`${nome} foi adicionado ao carrinho!`);

}

function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  document.getElementById('contador-carrinho').textContent = carrinho.length;
}

function abrirCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('itens-carrinho');

  container.innerHTML = carrinho.map((item, index) => `
    <div class="item-carrinho">
      <strong>${item.nome}</strong><br>
      R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})">X</button>
    </div>
  `).join('');

  document.getElementById('carrinho').classList.add('aberto');

}

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('aberto');
}

function finalizar() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const tot = document.getElementById('total');

  const total = carrinho.reduce((soma, item) => {
    const preco = parseFloat(item.preco) || 0;
    const quantidade = parseInt(item.quantidade) || 1;

    return soma + (preco * quantidade);
  }, 0);

  tot.innerHTML = `Total R$ ${total.toFixed(2)}`;



  atualizarContador();
}

const toggle = document.getElementById("menu");

const nav = document.getElementById("nav");

function limparCarrinho() {
  localStorage.removeItem('carrinho');
  atualizarContador();
  document.getElementById('itens-carrinho').innerHTML = '';
  document.getElementById('total').innerHTML = 'R$ 0,00';

}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  abrirCarrinho();
  atualizarContador();
}

// const prevButton = document.getElementById('prev')
// const nextButton = document.getElementById('next')
// const items = document.querySelectorAll('.item')
// const dots = document.querySelectorAll('.dot')
// const numberIndicator = document.querySelector('.numbers')
// const list = document.querySelector('.list')


// let active = 0;
// const total = items.length
// let timer;


// function update(direction) {

//     document.querySelector('.item.active').classList.remove('active')
//     document.querySelector('.dot.active').classList.remove('active')


//     if (direction > 0) {
//         active = active + 1
//         if (active === total) {
//             active = 0
//         }
//     }

//     else if (direction < 0) {
//         active = active - 1

//         if (active < 0) {
//             active = total - 1
//         }

//     }

//     items[active].classList.add('active')
//     dots[active].classList.add('active')

//     numberIndicator.textContent = String(active + 1).padStart(2, '0')
// }
// clearInterval(timer)
// timer = setInterval(() => {
//     update(1)
// }, 5000);



// prevButton.addEventListener('click', () => {
//     update(-1)

// })

// nextButton.addEventListener('click', () => {
//     update(1)
// })






