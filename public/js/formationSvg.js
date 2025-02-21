let svgAnims = document.querySelectorAll(".svg-animate");
for(let svgAnim of svgAnims){    
    for (let i = 0; i < svgAnim.children.length; i++) {
        svgAnim.children[i].style.animationDelay = `${i * 0.25}s`;
        svgAnim.children[i].classList.add('path');
    }
}