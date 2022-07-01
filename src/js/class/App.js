import Noticia from "./Noticia.js";

class App {
  static requisicao() {
    fetch("https://kenzie-news-api.herokuapp.com/api/news")
      .then((response) => response.json())
      .then((data) => {
        Noticia.criarNoticiaPrincipal(data[0]);
        data.shift();
        data.forEach((element) => Noticia.criarOutrasNoticias(element));
      });
  }
}
export default App;
