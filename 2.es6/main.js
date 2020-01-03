const arr = [1,3,4,6,7];

const newa = arr.map( function(item, index){
    return item * 3 ;
}  );

console.log(newa);

const filter = arr.filter(function(item){
    return item >= 4;
});

console.log(filter);

const fnd = arr.find( function(item){
    return item === 4;
});

console.log(fnd);
