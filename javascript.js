

const input = document.querySelector("#items")

const list = document.querySelector("#to-do-box")




input.addEventListener(
    `keyup`,
    function(event){
       
        if(event.key=="Enter"){
            addli(this.value)
            this.value=""
        }
    }
    
    )


const addli= (input)=>{

    const listitems=document.createElement("li")
    listitems.innerHTML=`
    
    ${input }
    <i class="fas fa-times"></i>
    `
listitems.addEventListener(
    "click",
    function(){
        this.classList.toggle("done")
    }
)

listitems.querySelector("i").addEventListener(
    "click",
    function(){
        listitems.remove()
    }
)

    list.appendChild(listitems)
}