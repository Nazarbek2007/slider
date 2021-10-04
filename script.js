const upBtn = document.querySelector('.up-button'),
    downBtn = document.querySelector('.down-button'),
    sideBar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    slidesCount = mainSlide.querySelectorAll('div').length,
    container = document.querySelector('.container');


// console.log(slidesCount);

let activeSlide = 0;
let height = container.clientHeight
let widthSlider = mainSlide.children[0].clientWidth
let widthSideBar = sideBar.children[0].clientWidth
// sideBar.style.left = `-${(slidesCount - 2) * 100}vw`

for (let i = 0; i < sideBar.children.length; i++) {
    sideBar.children[i].style.transform = `translateX(-${widthSideBar}px)`

}
sideBar.children[activeSlide].style.transform = `translateX(0)`
function changeSlide(str) {
    if (str === 'left') {
        activeSlide++
        if (activeSlide === slidesCount) {
            activeSlide = 0
        }
    } else if (str === 'right') {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slidesCount - 1
        }
    }


    
    mainSlide.style.transform = `
        translateX(-${activeSlide * widthSlider}px)
    `

    for (let i = 0; i < sideBar.children.length; i++) {
        sideBar.children[i].style.transform = `translateX(-${widthSideBar}px)`

    }
    sideBar.children[activeSlide].style.transform = `translateX(0)`
}


upBtn.addEventListener('click', function () {
    changeSlide('left')
})

downBtn.addEventListener('click', function () {
    changeSlide('right')
})

