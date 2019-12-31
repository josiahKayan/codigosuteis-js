var minhaPrimose = function(){
    // 4. Cria uma nova Promise e põe resolve e reject como parâmetro.
    return new Promise(function(resolve,reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET',"https://api.github.com/users/diego3g");
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    // 5. Passa o resolve 
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject('Erro a requisição');
                }
            }
        }
    });
}

// 1. Chama o método e adiciona o then e o cath
minhaPrimose()
.then(  function(response){
    // 2. O resultado da função adiciona aqui - É possível trabalhar com o resultado.
    console.log(response);
} )
.catch(function(err){
    // 3. O resultado da função erro adiciona aqui - É possível trabalhar com o resultado.
    console.log(err);
})
