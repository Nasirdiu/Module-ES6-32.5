//৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const onkgula=[20,1,0,44,522,2,1,2,23,5,1,2,23];
const total=onkgula.map(x=>x*5);
// console.log(total);

//৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const oddNumber=onkgula.filter(x=> x %2 !== 0);
// console.log(oddNumber);

//৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const company=[
    {name:'laptop', price:5006300, color:'black',location:'Dhaka'},
    {name:'Phone', price:5000, color:'black',location:'Dhaka'},
    {name:'MyPhone', price:5000, color:'black',location:'Dhaka'},
    {name:'Phone', price:5000, color:'black',location:'Dhaka'},
    {name:'Watch', price:5004400, color:'green',location:'Dhaka'},
    {name:'Bike', price:5001100, color:'yellow',location:'Dhaka'},
    {name:'Iphone', price:50444000, color:'red',location:'Dhaka'}
];

// const price=company.find(x=> x.price==5000);
// const price2=company.filter(x=> x.price==5000);
// console.log(price,price2);

company.map(x=> console.log(x));
company.forEach(x=> console.log(x));