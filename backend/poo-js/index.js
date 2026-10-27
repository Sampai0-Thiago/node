import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

//Dá o nome para a biblioteca
const minhaBiblioteca = new Biblioteca('GT Bezerra - Tarde');

//Cria o objeto livro com base na classe livro
const livro1 = new Livro('Dom Casmurro', 'Machado de Assis', 1899)
const livro2 = new Livro('Nárnia', 'C.S. Lewis', 1960)
const livro3 = new LivroEspecial('Bíblia','Vários Autores(Espírito Santo', 100, 'Bíblico')

//Adiciona o livro1 na biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
//Movimentação
livro1.emprestar();
livro3.emprestar();


//Lista os livros
minhaBiblioteca.listarLivros();