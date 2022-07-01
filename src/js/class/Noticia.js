const mainDeNoticias = document.querySelector(".main__notice");
const containerOutrasNoticias = document.querySelector(
  ".content__others__article"
);

export default class Noticia {
  static criarNoticiaPrincipal(dados) {
    const noticia = document.createElement("article");
    const categoria = document.createElement("span");
    const titulo = document.createElement("h2");
    const resumo = document.createElement("p");
    const fonte = document.createElement("p");
    const containerInfos = document.createElement("div");
    const imagem = document.createElement("img");

    categoria.innerText = dados.categoria;
    titulo.innerText = dados.titulo;
    resumo.innerText = dados.resumo;
    fonte.innerText = `Fonte: ${dados.fonte}`;
    imagem.src = dados.imagem;
    imagem.alt = "Imagem ilustrativa";

    noticia.classList.add("main__article");
    containerInfos.classList.add("info__content");
    resumo.classList.add("resumo");
    fonte.classList.add("fonte");

    mainDeNoticias.append(noticia);
    containerInfos.append(categoria, titulo, resumo, fonte);
    noticia.append(containerInfos, imagem);
  }

  static criarOutrasNoticias(dados) {
    const noticia = document.createElement("article");
    const categoria = document.createElement("span");
    const titulo = document.createElement("h2");
    const resumo = document.createElement("p");
    const fonte = document.createElement("p");
    const containerInfos = document.createElement("div");
    const imagem = document.createElement("img");

    categoria.innerText = dados.categoria;
    titulo.innerText = dados.titulo;
    resumo.innerText = dados.resumo;
    fonte.innerText = `Fonte: ${dados.fonte}`;
    imagem.src = dados.imagem;
    imagem.alt = "Imagem ilustrativa";

    noticia.classList.add("others__articles");
    containerInfos.classList.add("info__content");
    resumo.classList.add("resumo");
    fonte.classList.add("fonte");

    mainDeNoticias.append(containerOutrasNoticias);
    containerOutrasNoticias.append(noticia);
    containerInfos.append(categoria, titulo, resumo, fonte);
    noticia.append(containerInfos, imagem);
  }
}
