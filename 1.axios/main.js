// 1. Axios apis
axios.get('https://api.github.com/users/diego3g')
.then(  function(response){
    // 2. O resultado da função adiciona aqui - É possível trabalhar com o resultado.
    console.log(response);
} )
.catch(function(err){
    // 3. O resultado da função erro adiciona aqui - É possível trabalhar com o resultado.
    console.log(err);
})
