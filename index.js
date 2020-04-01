function changeStyles({color,fontSize}){

    const elements = document.querySelectorAll('.changeStyle');

    elements.forEach(element=>{
        element.style.color=color;
        element.style.fontSize = fontSize;
    })

}


module.exports.changeStyles = changeStyles;


