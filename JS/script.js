let search = document.getElementById("srch");
let searchbar=document.getElementById("srchbar");
let searchbar2=document.getElementById("srchbar2");



search.onclick =() =>{
   searchbar.classList.toggle("md:flex");

   searchbar2.classList.toggle("hidden")

};



let hamburg = document.getElementById("hamburger");
let navbar = document.getElementById("navbr");

hamburg.onclick = () => {
   navbar.classList.toggle("hidden")
   cartmenu.classList.add("hidden")

}




let cartmenu = document.getElementById("cartmeu");
let carticon = document.getElementById("carticon");
 

carticon.onclick = () => {
   cartmenu.classList.toggle("hidden")
   navbar.classList.add("hidden")

}

let carticon2 = document.getElementById("carticon2");
carticon2.onclick = () => {
   cartmenu.classList.toggle("hidden")
   

}

  
  
let shoe0 =document.getElementById("shoe0");
let shoe1 =document.getElementById("shoe1");
let shoe2 =document.getElementById("shoe2");
let shoe3 =document.getElementById("shoe3");

let shoeicon1 = document.getElementById("shoe-icon1");
let shoeicon2 = document.getElementById("shoe-icon2");
let shoeicon3 = document.getElementById("shoe-icon3");


shoeicon1.onclick = () => {
   shoe1.classList.remove("hidden")
   shoe0.classList.add("hidden")
   shoe2.classList.add("hidden")
   shoe3.classList.add("hidden")
   

}

shoeicon2.onclick = () => {
   shoe2.classList.remove("hidden")
   shoe1.classList.add("hidden")
   shoe3.classList.add("hidden")
   shoe0.classList.add("hidden")
}

shoeicon3.onclick = () => {
   shoe3.classList.remove("hidden")
   shoe1.classList.add("hidden")
   shoe2.classList.add("hidden")
   shoe0.classList.add("hidden")
}


const plus1 = document.querySelector("#plus1"),
    minus1 = document.querySelector("#minus1"),
    num1 = document.querySelector("#num1");
let a = 1;

plus1.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num1.innerText = a;
});

minus1.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num1.innerText = a;
    }
});

const plus2 = document.querySelector("#plus2"),
    minus2 = document.querySelector("#minus2"),
    num2 = document.querySelector("#num2");
let b = 1;

plus2.addEventListener("click", () => {
    b++;
    b = (b < 10) ? "0" + b : b;
    num2.innerText = b ;
});

minus2.addEventListener("click", () => {
    if (b > 1) {
        b--;
        b = (b < 10) ? "0" + b : b;
        num2.innerText = b;
    }
});

const plus3 = document.querySelector("#plus3"),
    minus3 = document.querySelector("#minus3"),
    num3 = document.querySelector("#num3");
let c = 1;


plus3.addEventListener("click", () => {
    c++;
    c = (a < 10) ? "0" + c : c;
    num3.innerText = c;
});

minus3.addEventListener("click", () => {
    if (c > 1) {
        c--;
        c = (c < 10) ? "0" + c : c;
        num3.innerText = c;
    }
});

const plus4 = document.querySelector("#plus4"),
    minus4 = document.querySelector("#minus4"),
    num4 = document.querySelector("#num4");
let d = 1;
plus4.addEventListener("click", () => {
    d++;
    d = (d < 10) ? "0" + d : d;
    num4.innerText = d;
});

minus4.addEventListener("click", () => {
    if (d > 1) {
        d--;
        d = (a < 10) ? "0" + d : d;
        num4.innerText = d;
    }
});


let cartbutton01=document.getElementById("01cartbtn");
let cartbutton10=document.getElementById("10cartbtn");
let cartbutton100=document.getElementById("100cartbtn");
let cartbutton200=document.getElementById("200cartbtn");

let shoe01=document.getElementById("01shoe");
let shoe10=document.getElementById("10shoe");
let shoe100=document.getElementById("100shoe");
let shoe200=document.getElementById("200shoe");


cartbutton01.onclick =()=>{
   shoe01.classList.remove("hidden");
   shoe01.classList.add("flex");


}

cartbutton10.onclick =()=>{
   shoe10.classList.remove("hidden");
   shoe10.classList.add("flex");


}

cartbutton100.onclick =()=>{
   shoe100.classList.remove("hidden");
   shoe100.classList.add("flex");


}

cartbutton200.onclick =()=>{
   shoe200.classList.remove("hidden");
   shoe200.classList.add("flex");


}

let delete01=document.getElementById("01delete")
let delete10=document.getElementById("10delete")
let delete100=document.getElementById("100delete")
let delete200=document.getElementById("200delete")

delete01.onclick =()=>{
   shoe01.classList.remove("flex");
   shoe01.classList.add("hidden");
   


}

delete10.onclick =()=>{
   shoe10.classList.remove("flex");
   shoe10.classList.add("hidden");


}

delete100.onclick =()=>{
   shoe100.classList.remove("flex");
   shoe100.classList.add("hidden");

}

delete200.onclick =()=>{
   shoe200.classList.remove("flex");
   shoe200.classList.add("hidden");

}


let cartItemCount = 0;
let addedItemIds = new Set();

function updateItemCount() {
  const itemCountElement1 = document.getElementById('itemCount1');
  const itemCountElement2 = document.getElementById('itemCount2');
  itemCountElement1.textContent = cartItemCount;
  itemCountElement2.textContent = cartItemCount;
}

function addItemToCart(itemId) {
  if (cartItemCount < 4) {
    if (!addedItemIds.has(itemId)) {
      cartItemCount++;
      addedItemIds.add(itemId);
      updateItemCount();
    } else {
      alert("This item has already been added to the cart.");
    }
  } else {
    alert("This item has already been added to the cart.");
  }
}

function removeItemFromCart(itemId) {
  if (addedItemIds.has(itemId)) {
    cartItemCount--;
    addedItemIds.delete(itemId);
    updateItemCount();
  }
}

updateItemCount();



function placeOrder() {
   if (cartItemCount === 0) {
     alert("You have not placed any order yet.");
   } else {
     alert("Thank you! Your order has been placed.");
   }
 }





