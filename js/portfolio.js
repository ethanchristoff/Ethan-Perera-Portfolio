function downloadpdf() {
    const link = document.createElement('a');
    link.href = 'css/images/CV/Ethan.Perera_Resume.pdf'; 
    link.download = 'Ethan.Perera_CV.pdf'; 
    link.click(); 
}

// Segment for the popup navigation bar
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}