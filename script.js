// Single number js plagin 

  let counter = document.querySelector('.counter')
  // console.log(counter); 
  let endValue = counter .dataset.number
  let count = 0;

  function counterup(){

          count++;
          counter.innerHTML = count;
        
        
          if(count == endValue){
                  clearInterval(stop);
         }
  }
  let stop = setInterval(function () {
          counterup();
  },100);

// Single number js plagin 

// multi.number js plagin 

 let counterUp= document.querySelectorAll(".counterUp")
 let arr = Array.from(counterUp)

//   console.log(arr)

 arr.map((item)=>{
        // console.log(item); 
        // console.log(item.dataset.number); 
         let counter=0;
        function count(){                 
                counter++
                item.innerHTML = counter;
       if(counter ==item.dataset.number ){
                clearInterval(stop);

        }}   
        let stop=setInterval (function(){
                count();
         },3000/item.dataset.number);
 })

// multi.number js plagin 

// clock function 
// 
// clock function