// Common JS
document.querySelectorAll('.watch-control,.controls a,.iphone-btn').forEach((control) => {
    control.addEventListener('click', (e) => {
        e.preventDefault()
    })
})
// End of Common JS


// Slideshow
const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(./images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}
slideshowDivs();
// ************
const divs = document.querySelectorAll('.slideshow div')
let count = 1;
const slideshow = () => {
    setInterval(() => {
        count++
        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')
        if (count < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            count = 1
        }

    }, 20000)
}
slideshow()
// End of Slideshow

// Cuboid controls
const cube = document.querySelector('.cube')
let y = 20
let x = 0
let z = 0
let bool = true
let interval

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})
document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
    bool = false
})
document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
})
document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
})
document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})
document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})
playPause()
// End of Cuboid controls


// Section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >=
        section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})
// End of Section 3

// Section 4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0
let axisX = 0

const hideControl = () => {
    switch (axisY) {
        case -280:
            watchTopControl.classList.add('hideControl')
            break;
        case 280:
            watchBottomControl.classList.add('hideControl')
            break;
        default:
            watchTopControl.classList.remove('hideControl')
            watchBottomControl.classList.remove('hideControl')
    }
    switch (axisX) {
        case -280:
            watchLeftControl.classList.add('hideControl')
            break;
        case 280:
            watchRightControl.classList.add('hideControl')
            break;
        default:
            watchLeftControl.classList.remove('hideControl')
            watchRightControl.classList.remove('hideControl')
    }

}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})
watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControl()
})
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControl()
})
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
})



// End of Section 4