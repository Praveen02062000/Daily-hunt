const email = document.querySelector('.email');
const pass = document.querySelector('.pass');
const signup = document.querySelector('.signup');
const login_con = document.querySelector('.login')
const Signup_con = document.querySelector('.sign')

//password details con

const alhpa  = "abcdefghijklmnopqrstuvwxyz"
const upp_aplha = alhpa.toUpperCase()
const num = "12234567890"
const spl = "!@#$%^&*()_+}{:,.\\"

const user_data = {
    name:"",
    password:""
}

email.addEventListener("focus",()=>{
    const user_ani = document.querySelector('.e')
    user_ani.style.top = "2rem"
    
})

pass.addEventListener("focus",()=>{
    const pass_ani = document.querySelector('.p')
    pass_ani.style.top = "11rem"
})

email.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        var email_get = email.value
        if(email.value === ""){
            email.style.border = "3px solid red"
        }else{
            if(email_get.slice(-10,email_get.length) === "@gmail.com"){
                pass.focus()

            }else{
                alert("enter the crt email id")
                email.style.border = "3px solid red"
            }
            
        }
    }
})

pass.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        if(pass.value === ""){
            pass.style.border = "3px solid red"
          
        }else{
            user_data.name = email.value
            user_data.password = pass.value
            console.log(user_data)
         }

        }
        
    
})

signup.addEventListener('click',()=>{
        if(email.value == ""){
            email.style.border = "3px solid red"
        }else{
            email.style.border = "3px solid black"
        }
        if(pass.value === "" ){
            pass.style.border = "3px solid red"
          
        }else{
           if(email.value === pass.value){
            email.style.border = "3px solid red"
            pass.style.border = "3px solid red"

           }
           else{
            if(email.value.slice(-10,email.value.length) === "@gmail.com"){
                user_data.name = email.value
                user_data.password = pass.value
                console.log(user_data)
                window.localStorage.setItem("email",email.value)
                window.localStorage.setItem("password",pass.value)
                signup_con()
            }else{
                email.style.border = "3px solid red"
            }
            
           }
            
         }

    

})

var lower =0
var upper =0
var len =0
var nums =0
var spls =0
var password_con = ""
var flag = false

const rank_det = document.querySelector(".rank-det")
const rank = document.querySelector(".rank")
setInterval(function check(){
    var pass_value = pass.value
    var email_value = email.value
    // console.log(email_value.length)
    password_con = pass.value
    
    if(pass_value.length > 8){
        len = 1
        
    }else{
        len = 0
    }
    for(let x = 0;x<alhpa.length;x++){
        for(let y = 0;y<pass_value.length;y++){
            if(pass_value[x] === alhpa[y] ){
                lower = 1
            }
        }
    }
    for(let a = 0;a<upp_aplha.length;a++){
        for(let b= 0;b<pass_value.length;b++){
            if(pass_value[b] === upp_aplha[a]){
                upper = 1

            }
        }
    }
    for(let x= 0;x<num.length;x++){
        for(let y= 0 ;y<pass_value.length;y++){
            if(pass_value[y] === num[x]){
                nums = 1
            }
        }
    }
    for(let x= 0;x<spl.length;x++){
        for(let y= 0 ;y<pass_value.length;y++){
            if(pass_value[y] === spl[x]){
                spls = 1
            }
        }
    }
   


    var sum_0f_count = nums+spls+upper+lower+len;
    
   
    if(sum_0f_count === 1){
        rank.style.width = "3rem"
        rank.style.backgroundColor = "red"
        rank.style.transition = "2s"
        rank_det.textContent = "Very Poor"
        rank_det.style.display = "block"
        rank_det.style.color = "red"
    }else{
        rank.style.width = "0rem"
        rank.style.backgroundColor = "red"
        rank.style.transition = "2s"

    }if(sum_0f_count === 2){
        rank.style.width = "6rem"
        rank.style.backgroundColor = "red"
        rank.style.transition = "2s"
        rank_det.textContent = "Poor"
        rank_det.style.display = "block"
        rank_det.style.color = "red"

    }if(sum_0f_count === 3){
        rank.style.width = "9rem"
        rank.style.backgroundColor = "yellow"
        rank.style.transition = "2s"
        rank_det.textContent = "Modrate"
        rank_det.style.display = "block"
        rank_det.style.color = "orange"

    }if(sum_0f_count === 4){
        rank.style.width = "12rem"
        rank.style.backgroundColor = "green"
        rank.style.transition = "2s"
        rank_det.textContent = "Good"
        rank_det.style.display = "block"
        rank_det.style.color = "green"

    }if(sum_0f_count === 5){
        rank.style.width = "15rem"
        rank.style.backgroundColor = "green"
        rank.style.transition = "2s"
        rank_det.textContent = "Strong"
        rank_det.style.display = "block"
        rank_det.style.color = "green"

    }
    if(pass_value  === ""){
        rank.style.width = "0rem"
        rank.style.backgroundColor = "red"
        rank.style.transition = "2s"

    }


    
   
      


    

},100)










// for password view and close ................
const open = document.querySelector(".open")
const close = document.querySelector(".close")
var pass_flag = false
close.addEventListener('click',()=>{
    if(pass_flag === false){
        open.style.display = "block"
        close.style.display = "none"
        pass.setAttribute("type","text")
        pass_flag = true
    }
    if(pass_flag === true){
        open.addEventListener("click",()=>{
            open.style.display = "none"
            close.style.display = "block"
            pass.setAttribute("type","password")
            pass_flag = false

        })
    }


})
const user_get = document.querySelector('.get_id');
const pass_get = document.querySelector('.get_pass');
const signup_btn = document.querySelector('.btn3');
const blackcsreen = document.querySelector('.blackscreen')
const name_get_black = document.querySelector('.name_acc')
const see_pass = document.querySelector('.sign_close');
const unseen_pass = document.querySelector('.sign_open');


function signup_con(){
   
   
    login_con.style.animation = "side 1s linear 1"

    setTimeout(()=>{
        login_con.style.display = "none"
        Signup_con.style.animation = "side2 1s linear 1"
        Signup_con.style.display = "block"


    },1000)
    
    signup_btn.addEventListener('click',()=>{
        var get_name = localStorage.getItem("email")
        var get_password = localStorage.getItem("password")
       
                if(get_name === user_get.value){
                    pass_get.focus()
                    if(get_password === pass_get.value){
                        // alert("welcom"+get_name.slice(0,8))
                        blackcsreen.style.display = "block"
                        name_get_black.textContent = get_name.slice(-(get_name.length)-10,-10)
                        blackcsreen.style.transition = "1s"
                    }else{
                        alert("worng password")
                    }
                }else{
                    alert("create new account")
                }

                if(user_get.value === ""){
                    user_get.style.border = "2px solid red"
                }

            
        
       
    })
    flag = false

    pass_get.addEventListener("keypress",(Event)=>{
        if(Event.key === "Enter"){
                if(flag === true){
                    if(pass_get.value === localStorage.getItem("password")){ 
                        alert("hi")

                    }
                    
                }else{
                    user_get.style.border = "2px solid red"
                }


        

        }
    })

    user_get.addEventListener("keypress",(Event)=>{
        if(Event.key === "Enter"){
            if(user_get.value  === localStorage.getItem("email")){
                pass_get.focus()
                flag = true
                user_get.style.border = "2px solid rgb(198, 198, 198)"
            }else{
                user_get.style.border = "2px solid red"
            }

        }
        
        
    })
    var view_pass = false
    see_pass.addEventListener("click",()=>{
        if(view_pass === false){
            pass_get.setAttribute("type","text")
            see_pass.style.display = "none"
            unseen_pass.style.display = "block"
            view_pass = true

        }

    })

    unseen_pass.addEventListener("click",()=>{
        if(view_pass === true){
            pass_get.setAttribute("type","password")
            see_pass.style.display = "block"
            unseen_pass.style.display = "none"
            view_pass = false

        }

    })




}

const already_btn = document.querySelector('.already');
already_btn.addEventListener("click",()=>{
    signup_con()

})
const create_new = document.querySelector(".create_new");
create_new.addEventListener("click",()=>{
   
    Signup_con.style.animation = "side3 1s linear 1"
    setTimeout(()=>{
        login_con.style.display = "block"
        login_con.style.animation = "side2 1s linear 1"
        Signup_con.style.display = "none"


    },1000)
    setTimeout(()=>{
        window.location.reload()
    },1000)

})




