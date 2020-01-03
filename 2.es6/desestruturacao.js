const usuario = {
    nome: 'Josias',
    idade:28,
    endereco:{
        cidade:'Manaus',
        estado:'Am'
    }
}


function nome( { nome, idade, endereco:{estado} }  ){
    console.log(nome, idade, estado);
} 


nome(usuario);