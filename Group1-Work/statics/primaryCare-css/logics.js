var navbar = document.getElementById("menuLists")

navbar.style.height = "0px"


function toggleMenu(){
    if(navbar.style.height == "0px"){
        navbar.style.paddingBlock = "20px"
        navbar.style.height = "70vh"
        
    }
    else{
        navbar.style.paddingBlock = "0px"
        navbar.style.height = "0px"
    }
}