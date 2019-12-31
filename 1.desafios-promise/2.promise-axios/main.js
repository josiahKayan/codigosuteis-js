function verificaUsername(){
    var username = document.getElementById("inputUsername").value;

    axios.get('https://api.github.com/users/'+username+'/repos')
    .then( function(x){
        var ul  = document.getElementById("listas");
        var li = document.createElement("li");
        li.appendChild( document.createTextNode(x.config.url)  );
        li.setAttribute("id", x.config.url);
        ul.appendChild(li);
    }  )
    .catch(function(z){
        console.log(z);
    })
}