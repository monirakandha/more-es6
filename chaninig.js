//declare variable based on the name if an object property

const myObject = {x:2, y:50, z:600 , a:45, t:68};
const {x,a} = myObject;
console.log(a);
console.log('myObject' , myObject?.p?.q);
//destructuring array
const [p,q] = [45, 37,90,76,865];
console.log(p,q);

const[best , faltu] = ['momotaj', 'porshi'];
console.log(best, faltu);
const{sky,soil,money,color} = {sky:'blue' , soil:'color' , money:'500' , color:'red'};
console.log(sky);


//chaining 

const company = { name:'gp',
ceo:{id:1, name:'ajmal' , food:'fuchka'},
web:{work:'website development', employee:22, farmwork:'react',
 tech:{
    first:'html',
    seond:'css',
    third:'js',
}
}
};


console.log(company.web.tech.first);
console.log(company?.backend?.tech.third);