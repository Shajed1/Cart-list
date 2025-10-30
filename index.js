//Cards 1 Start
let btn = document.querySelector(".add-to-cart-btn");
let before = document.querySelector(".before-hover");
let after = document.querySelector(".after-hover"); 

btn.addEventListener("mouseover", () => {
  before.style.display = "none";
  after.style.display = "flex";
});

btn.addEventListener("mouseout", () => {
  before.style.display = "flex";
  after.style.display = "none";
});

function increment() {
  let countElement1 = document.querySelector(".countdownid");
  let countValue1 = parseInt(countElement1.innerText);
  countValue1++;
  countElement1.innerText = countValue1;
//second part javascript
  let beforeclick=document.getElementById("before-cart")
   let aftercart=parseFloat(beforeclick.innerText)
   aftercart=aftercart+1
   beforeclick.innerText=aftercart
}
function discriment(){
      let countElement1 = document.querySelector(".countdownid");
  let countValue1 = parseInt(countElement1.innerText);
  if(countValue1>0){
      countValue1--;
      countElement1.innerText = countValue1;
            //Second part
        // Cart count decrement, sudhu jokhon cart > 0
            // Jokhon aftercount == 0, kono operation hobe na

        let beforeclick = document.getElementById("before-cart");
        let aftercart = parseFloat(beforeclick.innerText);

        if (aftercart > 0) {
            aftercart = aftercart - 1;
            beforeclick.innerText = aftercart;
        }
  }

  }
//Cards 1 Ends
//Cards 2 start here
let cards2beforehover=document.querySelector(".before-hover2");
let cards2afterhover=document.querySelector(".after-hover2")
let cards2parents=document.querySelector(".add-to-cart-btn2")

cards2parents.addEventListener("mouseover",()=>{
    cards2beforehover.style.display="none"
    cards2afterhover.style.display="flex"
})
cards2parents.addEventListener("mouseout",()=>{
    cards2beforehover.style.display="flex"
    cards2afterhover.style.display="none"
})

 function increment2(){
    let beforecount=document.querySelector(".countdownid2")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
    //second part javascript
  let beforeclick=document.getElementById("before-cart")
   let aftercart=parseFloat(beforeclick.innerText)
   aftercart=aftercart+1
   beforeclick.innerText=aftercart
 } 
function discriment2() {
    
    let beforecount = document.querySelector(".countdownid2");
    let aftercount = parseFloat(beforecount.innerText);

    // Sudhu jokhon aftercount > 0, decrement hobe
    if (aftercount > 0) {
        // Item count decrement
        aftercount = aftercount - 1;
        beforecount.innerText = aftercount;
      //Second part
        // Cart count decrement, sudhu jokhon cart > 0
            // Jokhon aftercount == 0, kono operation hobe na

        let beforeclick = document.getElementById("before-cart");
        let aftercart = parseFloat(beforeclick.innerText);

        if (aftercart > 0) {
            aftercart = aftercart - 1;
            beforeclick.innerText = aftercart;
        }
    } 

}

 //cards 2 end here
 //cards 3 start here
 let cards3beforehover=document.querySelector(".before-hover3");
let cards3afterhover=document.querySelector(".after-hover3")
let cards3parents=document.querySelector(".add-to-cart-btn3")

cards3parents.addEventListener("mouseover",()=>{
    cards3beforehover.style.display="none"
    cards3afterhover.style.display="flex"
})
cards3parents.addEventListener("mouseout",()=>{
    cards3beforehover.style.display="flex"
    cards3afterhover.style.display="none"
})

 function increment3(){
    let beforecount=document.querySelector(".countdownid3")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment3(){
      let beforecount=document.querySelector(".countdownid3")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
             beforecount.innerText=aftercount 

                         //Second part
        // Cart count decrement, sudhu jokhon cart > 0
            // Jokhon aftercount == 0, kono operation hobe na

        let beforeclick = document.getElementById("before-cart");
        let aftercart = parseFloat(beforeclick.innerText);

        if (aftercart > 0) {
            aftercart = aftercart - 1;
            beforeclick.innerText = aftercart;
        }
    }


 }
 // Cards 3 end here
 // Cards 4 start here
  let cards4beforehover=document.querySelector(".before-hover4");
let cards4afterhover=document.querySelector(".after-hover4")
let cards4parents=document.querySelector(".add-to-cart-btn4")

cards4parents.addEventListener("mouseover",()=>{
    cards4beforehover.style.display="none"
    cards4afterhover.style.display="flex"
})
cards4parents.addEventListener("mouseout",()=>{
    cards4beforehover.style.display="flex"
    cards4afterhover.style.display="none"
})

 function increment4(){
    let beforecount=document.querySelector(".countdownid4")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment4(){
      let beforecount=document.querySelector(".countdownid4")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
    }

    beforecount.innerText=aftercount
 }

  // Cards 4 end here
 // Cards 5 start here
  let cards5beforehover=document.querySelector(".before-hover5");
let cards5afterhover=document.querySelector(".after-hover5")
let cards5parents=document.querySelector(".add-to-cart-btn5")

cards5parents.addEventListener("mouseover",()=>{
    cards5beforehover.style.display="none"
    cards5afterhover.style.display="flex"
})
cards5parents.addEventListener("mouseout",()=>{
    cards5beforehover.style.display="flex"
    cards5afterhover.style.display="none"
})

 function increment5(){
    let beforecount=document.querySelector(".countdownid5")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment5(){
      let beforecount=document.querySelector(".countdownid5")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
    }

    beforecount.innerText=aftercount
 }
   // Cards 5 end here
 // Cards 6 start here
  let cards6beforehover=document.querySelector(".before-hover6");
let cards6afterhover=document.querySelector(".after-hover6")
let cards6parents=document.querySelector(".add-to-cart-btn6")

cards6parents.addEventListener("mouseover",()=>{
    cards6beforehover.style.display="none"
    cards6afterhover.style.display="flex"
})
cards6parents.addEventListener("mouseout",()=>{
    cards6beforehover.style.display="flex"
    cards6afterhover.style.display="none"
})

 function increment6(){
    let beforecount=document.querySelector(".countdownid6")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment6(){
      let beforecount=document.querySelector(".countdownid6")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
    }

    beforecount.innerText=aftercount
 }
    // Cards 6 end here
 // Cards 7 start here
  let cards7beforehover=document.querySelector(".before-hover7");
let cards7afterhover=document.querySelector(".after-hover7")
let cards7parents=document.querySelector(".add-to-cart-btn7")

cards7parents.addEventListener("mouseover",()=>{
    cards7beforehover.style.display="none"
    cards7afterhover.style.display="flex"
})
cards7parents.addEventListener("mouseout",()=>{
    cards7beforehover.style.display="flex"
    cards7afterhover.style.display="none"
})

 function increment7(){
    let beforecount=document.querySelector(".countdownid7")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment7(){
      let beforecount=document.querySelector(".countdownid7")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
    }

    beforecount.innerText=aftercount
 }
     // Cards 7 end here
 // Cards 8 start here
  let cards8beforehover=document.querySelector(".before-hover8");
let cards8afterhover=document.querySelector(".after-hover8")
let cards8parents=document.querySelector(".add-to-cart-btn8")

cards8parents.addEventListener("mouseover",()=>{
    cards8beforehover.style.display="none"
    cards8afterhover.style.display="flex"
})
cards8parents.addEventListener("mouseout",()=>{
    cards8beforehover.style.display="flex"
    cards8afterhover.style.display="none"
})

 function increment8(){
    let beforecount=document.querySelector(".countdownid8")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment8(){
      let beforecount=document.querySelector(".countdownid8")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
    }

    beforecount.innerText=aftercount
 }
      // Cards 8 end here
 // Cards 9 start here
  let cards9beforehover=document.querySelector(".before-hover9");
let cards9afterhover=document.querySelector(".after-hover9")
let cards9parents=document.querySelector(".add-to-cart-btn9")

cards9parents.addEventListener("mouseover",()=>{
    cards9beforehover.style.display="none"
    cards9afterhover.style.display="flex"
})
cards9parents.addEventListener("mouseout",()=>{
    cards9beforehover.style.display="flex"
    cards9afterhover.style.display="none"
})

 function increment9(){
    let beforecount=document.querySelector(".countdownid9")
    let aftercount=parseFloat(beforecount.innerText)
    aftercount=aftercount+1
    beforecount.innerText=aftercount
 } 
 function discriment9(){
      let beforecount=document.querySelector(".countdownid9")
    let aftercount=parseFloat(beforecount.innerText)
    if(aftercount>0){
          aftercount=aftercount-1
    }

    beforecount.innerText=aftercount
 }
 
 //Second part is start here 
