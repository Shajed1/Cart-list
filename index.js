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
  let countElement = document.querySelector(".countdownid");
  let countValue = parseInt(countElement.innerText);
  countValue++;
  countElement.innerText = countValue;
}
function discriment(){
      let countElement = document.querySelector(".countdownid");
  let countValue = parseInt(countElement.innerText);
  if(countValue>0){
      countValue--;
  }
    countElement.innerText = countValue;
}
//Cards 1 Ends