// function prosesData(full_name){
  
//     console.log("Hello "+full_name);
//   }
  
//   function getInput(first_name,last_name,myCallback){
    
//     var full_name = first_name+" "+last_name;
//     if(typeof myCallback == "function"){
//         myCallback(full_name);  
//     }
//     else{
//        console.log("r u kidding? that's not a function");  
//     }
//   }
  
//   getInput("Ganjar","Setia",prosesData);











  var sapaan = (full_name) => {
      console.log('Hello ' + full_name)
  }


  var nama = (first,last,cb) => {
      full = first + ' ' + last
      cb(full)
  }


  nama('jamaludin' , 'fikri', sapaan)