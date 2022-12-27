import { sliderList } from './const.js'

export default function slider() {
    const parentEl = document.querySelector('#slider')
    const indicatorEl = document.querySelector(".carousel-indicators")
    let count = 0

    sliderList.forEach((slide, index) => {
        parentEl.innerHTML += `
        <div class="carousel-item">
            <div class="container >
                <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                        <div class="detail-box">
                            <h1>
                                ${slide.title}
                            </h1>
                            <p>
                                ${slide.text}
                            </p>
                            <div class="btn-box">
                                <a href="" class="btn1">
                                    Замовити
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        indicatorEl.innerHTML += `
        <li data-target="#customCarousel1" data-slide-to="${index}"></li>
        `
        count++
    }
    )
    parentEl.children[0].classList.add("active")
    indicatorEl.children[0].classList.add("active")
}