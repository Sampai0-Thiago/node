//ABSTRAÇÃO 

class Biblioteca{

    constructor(nome) {     // set das propriedades da biblioteca

        this.nome = nome;  // propriedades
        this.livros = [];  // 
    }

    adicionarLivro(livro) {

        this.livros.push(livro); // adiciona o livro no array livros
    }
    listarLivros() {
        console.log(`Livros da Biblioteca ${this.nome}`)
        this.livros.forEach((livro,i) => {
            console.log(`${i+1}. ${livro.exibirInfo()}`)
        })
    }
    
}

export default Biblioteca; 