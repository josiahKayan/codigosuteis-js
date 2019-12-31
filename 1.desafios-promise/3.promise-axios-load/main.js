function verificaUsername(){

    var element =  document.getElementById('load');
    
    element.style.display = "block"

   
    var username = document.getElementById("inputUsername").value;

    getUsers(username).then( function(x){
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

function getUsers(username){
    return new Promise( function(resolve,reject){
        axios.get('https://api.github.com/users/'+username+'/repos').then( function(c){

            var x = document.getElementById("load");
            x.style.display = "none";
            
            resolve(c);
        } ).catch( function (cs){
            reject(cs);
        })
    });
}


