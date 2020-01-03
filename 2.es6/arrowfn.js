const arr = [1,3,4,6,7];

const newa = arr.map( (item, index)=>{
    return item * 3 ;
} );

console.log(newa);

const newa3 = arr.map( (item, index)=> item * 3 );

console.log(newa3);

const obj = () => ({ 'name':'Josias','idade':28 });