
var idade = 0;
function verificaIdade(){
    idade = document.getElementById("inputIdade").value;

    validaIdade(idade)
    .then( function(x){
        console.log(x);
    }  )
    .catch(function(z){
        console.log(z);
    })
}

function validaIdade(idade){
    return new Promise(function(resolve,reject){
        setTimeout( function()  {
            if(idade>18){
                resolve(idade);
            }
            else{
                reject('menor de 18 anos');
            }
        }, 2000);
    });
}