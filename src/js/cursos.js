const cursosDisponiveis = [
  {
    id: 1,
    titulo: 'Artesanato Sandálias',
    descricao:
      'Aprenda a criar sandálias artesanais exclusivas com técnicas detalhadas e passo a passo.',
    preco: 100,
    link: '#curso1',
    imagem: '../public/sandalia1.png',
  },
  {
    id: 2,
    titulo: 'Artesanato em Feltro',
    descricao:
      'Descubra como produzir peças criativas em feltro, desde o básico até projetos avançados.',
    preco: 30,
    link: '#curso2',
    imagem: '../public/sandalia2.png',
  },
  {
    id: 3,
    titulo: 'Artesanato com Fios e Barbantes',
    descricao:
      'Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.Aprenda técnicas de artesanato utilizando fios e barbantes para criar itens decorativos e utilitários.',
    preco: 50,
    link: '#curso3',
    imagem: '../public/sandalia1.png',
  },
];

const cursosLista = document.getElementById('cursos');

cursosDisponiveis.forEach(curso => {
  const cursoContainer = document.createElement('div');
  cursoContainer.classList.add('cursoContainer');

  const containerWrapper = document.createElement('div');
  containerWrapper.classList.add('containerWrapper');

  const cursoContainerTextos = document.createElement('div');
  cursoContainerTextos.classList.add('cursoContainerTextos');

  const cursoImagem = document.createElement('img');
  cursoImagem.classList.add('cursoImagem');

  cursoImagem.src = curso.imagem;
  cursoImagem.alt = `Capa do curso de ${curso.titulo}`;

  const cursoTitulo = document.createElement('h4');
  cursoTitulo.classList.add('cursoTitulo');

  const cursoDescricao = document.createElement('p');
  cursoDescricao.classList.add('cursoDescricao');

  cursoTitulo.textContent = curso.titulo;
  cursoDescricao.textContent = curso.descricao;

  const botaoComprar = document.createElement('a');
  botaoComprar.classList.add('botaoComprar');

  botaoComprar.href = curso.link;
  botaoComprar.innerText = 'Comprar Agora';

  cursosLista.appendChild(containerWrapper);

  containerWrapper.appendChild(cursoContainer);
  containerWrapper.appendChild(botaoComprar);

  cursoContainer.appendChild(cursoImagem);
  cursoContainer.appendChild(cursoContainerTextos);
  cursoContainerTextos.appendChild(cursoTitulo);
  cursoContainerTextos.appendChild(cursoDescricao);
});
