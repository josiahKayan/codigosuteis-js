
//REST

function unir(a,b,...params){
    return params;
}

const punir = unir(1,2,4,5,6,7)

const usuario = {
    nome: 'Josias',
    idade:28,
    endereco:{
        cidade:'Manaus',
        estado:'Am'
    }
}


const usuario2 = {  ...usuario, nome :'Sammya' } 


console.log(usuario2);