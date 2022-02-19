const friends = ['tom nak', 'tom crush', 'toom solaiman' , 'tom nai' , 'tom khai'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    {name : 'bottle' , color:'yellow' , price:'50'},
    {name : 'phone' , color:'black' , price:'15000'},
    {name : 'smart Watch' , color:'black' , price:'1050'},
    {name : 'Sticky Note' , color:'pink' , price:'10'},
    {name : 'water Class' , color:'white' , price:'3'},
]

const productNames = products.map(product => product.name);
console.log(productNames);

const ProductPricess = products.map(product => product.price);
console.log(ProductPricess);


