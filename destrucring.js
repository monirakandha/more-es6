const fish = {name : 'KIng Hilsha' , id : '58' , price : '9000' , phone : '017fush' , address : 'chanpur'  , dress : 'silver'};
// console.log(fish.phone);

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;
// console.log(phone);

const {phone , price , id , name , dress , address} = fish;
console.log(phone);



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

const{work,farmwork} = company.web;
const{food} = company.ceo;
console.log(work,farmwork,food);
const {first,seond} = company.web.tech
console.log(first,seond);