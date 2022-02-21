//৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const phone={
    namePhone:'phoneCompany',
  iphone:  {name:'iPhone',price:25800,color:'pink',location:'japan'},
  Samsung:{ name:'Samsung',price:2800,color:'red',location:'Usa'} ,
  symphone:{name:'symphone',price:250,color:'black',location:'corian'},
  xamol:{name:'xamol',price:19000,color:'blue',location:'bangla',
  Blackbery:{name:'Blackbery',price:6584,color:'yellow',location:'india',CEO:'Nasir'},
}
    
};

// const {name,color}=phone.xamol.Blackbery;
// console.log(name,color);

//৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const number=[101,22,11,00,11,55,500];
const three=number[4];
// console.log(three);

//১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

 const para = (x, y,z=7) => {
    const total=x+y+z;
    return total ;
}; 

// console.log(para(2,4,));

//১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const phones={
    namePhone:'phoneCompany',
  iphone:  {name:'iPhone',price:25800,color:'pink',location:'japan'},
  Samsung:{ name:'Samsung',price:2800,color:'red',location:'Usa'} ,
  symphone:{name:'symphone',price:250,color:'black',location:'corian'},
  xamol:{name:'xamol',price:19000,color:'blue',location:'bangla',
  Blackbery:{name:'Blackbery',price:2500,color:'yellow',location:'india',CEO:['Nasir']},
}
    
};

const {name,CEO,price}=phones.xamol.Blackbery;
// console.log(name,price,CEO);

//১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

console.log(phones?.xamol?.Blackbery?.CEO?.nai?.ase);
