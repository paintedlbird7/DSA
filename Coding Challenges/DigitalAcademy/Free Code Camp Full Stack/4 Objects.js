// Objects                                 1-23-25
// Properties of an object
const person = {
    name: "Alice",
    age: 36,
   //  city: "New York",
    "property with spaces": "World", 
    addresses: [
     { type: "home", street: "123 Main St", city: "Anytown"},
     { type: "work", street: "456 Market St", city: "Workville" },
    ],
    contact: {
     email: "alice@example.com",
     phone: {
      home: "4081234567",
      work: "309 877 3455",
        
      }
    }
   }
   console.log(person.name)
   console.log(person.age)
   console.log(person["property with spaces"])
   console.log(person.contact.phone.work);
   console.log(person.addresses[1].city);
   
   // Review say hello
   function greeting(name){
    console.log("Hello, "+name+"!")
   }
   greeting("Rosa")
   
   // Object with A Method
   const person2 = {
    name: "Bob",
    age: 30,
    sayHello: function (){
     return "Hello, my name is " + this.name;
    } 
   }
   console.log(person2.sayHello());
   
   