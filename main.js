import data from "./data.json" assert {type: 'json'}
import new_data from "./NEW_DATA.json" assert {type : "json"}

const offers_word = ["First is 50% offers Enter the coupon and Hunt it------------","Monday offer get large pizza and get medium free"]







const back_cart = document.querySelector(".back_cart")
const cart_con =document.querySelector(".cart_con")
const cart_btn = document.querySelector(".cart_btn")
const mini_acc = document.querySelector(".acc");
const blk = document.querySelector(".blk");
const side_acc = document.querySelector(".side_acc");
const word_dance = document.querySelector(".word_dance");

var side_flag = false 
mini_acc.addEventListener("click",()=>{
    if(side_flag === false){
        side_acc.style.display = "block"
        side_flag = true
        blk.style.display = "block"
        setTimeout(()=>{
            side_acc.style.right = "0rem"
        },10)
        
        

    }
    blk.addEventListener("click",()=>{
        if(side_flag === true){
            side_acc.style.right = "-50rem"
            side_flag = false
            blk.style.display = "none"
            setTimeout(()=>{
                side_acc.style.display = "none"
            },500)
        }
    })


})



var cart_flag = false
cart_btn.addEventListener("click",()=>{
    if(cart_flag === false){
         cart_con.style.top = "0rem"
         cart_flag = true
    }
   
})
back_cart.addEventListener("click",()=>{
    if(cart_flag === true){
        cart_con.style.top = "-80rem"
        cart_flag = false

    }
})


word_dance.innerHTML = offers_word[0]

console.log(data)
console.log(new_data)




