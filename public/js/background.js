const backgroundEffect = document.body.querySelector('.bg')
const height = document.body.clientHeight-500;
for(let i = 0; i*500 < height; i++){
    backgroundEffect.innerHTML += `<span class='filter-${i} filter-bg' style="top: ${(height)*(i/15)}px; left: ${Math.random() < 0.5?document.body.scrollWidth*0.7-200*Math.random():200*Math.random()}px; "></span>`
}