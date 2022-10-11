import 'lazysizes'
import { Fancybox } from '@fancyapps/ui'
import Inputmask from 'inputmask'

import InputLabel from './components/InputLabel'

import Swiper,{ Navigation, Autoplay } from 'swiper';

class App {
    scrollToOffset = 100
    popupLoadedEvent = 'app.popup_loaded'

    constructor(config) {
        if (typeof config === 'object') {
            Object.keys(config).forEach((key) => {
                this[key] = config[key]
            })
        }
        this.body = document.querySelector('body')

        this.initFancybox()
        this.initScrollTo()
        this.initBurgerClickHandler()
        this.initMobileMenuCloseHandler()
        this.initSwiper()

        this.initMask()
        document.addEventListener(this.popupLoadedEvent, (ev) => {
            this.initMask(ev.detail.$content)
        })

        new InputLabel

        this.body.classList.add('_init')
    }

    initSwiper(){
    console.log(Swiper);
        var swiper = new Swiper('.mySwiper', {
            grabCursor: true,
            slidesPerView: 2,
            loop: true,
            autoplay: {
              delay: 1000,
              disableOnInteraction: false,
            },
            spaceBetween: 74,
            speed: 1000,
            modules: [Navigation, Autoplay],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 141
                },
                // when window width is >= 1280px
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 130
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 180
                }
              },

          });
    }

    initFancybox() {
        Fancybox.bind('[data-fancybox]', {
            dragToClose : false,
            on: {
                done: (fancybox, slide) => {
                    document.dispatchEvent(
                        new CustomEvent(this.popupLoadedEvent, {
                            detail: {
                                $content: slide.$content,
                            },
                        })
                    )
                },
            },
        })
    }

    initInputLabel(wrapper = document) {
        const selector = '.js-label input, .js-label textarea'
        const className = '_label-empty'
        const items = wrapper.querySelectorAll(selector)
        document.addEventListener(
            'focus',
            (e) => {
                console.log(e.target)
                const parent = e.target.parentNode
                if (parent.classList.contains('js-label')) {
                    const label = Array.prototype.find.call(
                        parent.children,
                        (child) => child.tagName === 'LABEL'
                    )
                    label.classList.remove(className)
                }
            },
            true
        )
        document.addEventListener(
            'blur',
            (e) => {
                console.log(e.target)
                if (!e.target.value) {
                    const parent = e.target.parentNode
                    if (parent.classList.contains('js-label')) {
                        const label = Array.prototype.find.call(
                            parent.children,
                            (child) => child.tagName === 'LABEL'
                        )
                        label.classList.add(className)
                    }
                }
            },
            true
        )
        // this.app.document
        //     .on('focus', sel, function () {
        //         $(this).siblings('label').removeClass(className);
        //     })
        //     .on('blur', sel, function () {
        //         if (!$(this).val()) {
        //             $(this).siblings('label').addClass(className);
        //         }
        //     });
        items.forEach((el) => {
            const label = Array.prototype.find.call(
                el.parentNode.children,
                (child) => child.tagName === 'LABEL'
            )
            if (!el.value) {
                label.classList.add(className)
            }
        })
    }

    initMask(wrapper = document) {
        const selector = 'input.js-mask[type="tel"]'
        const items = wrapper.querySelectorAll(selector)
        // простой вариант
        // Inputmask({
        //     mask: '+7 (999) 999 99 99',
        //     showMaskOnHover: false,
        // }).mask(items);
        // подмена восьмерки, подстановка +7, городские номера
        Inputmask({
            mask: '+7 (999) 999-99-99',
            postValidation: function (
                buffer,
                pos,
                c,
                currentResult,
                opts,
                maskset,
                strict,
                fromCheckval
            ) {
                // console.log(pos, c)
                if (pos === 0 && ['0', '8'].indexOf(c) !== -1) {
                    return {
                        pos: 1,
                        c: 7,
                        remove: 4,
                    }
                }
                if (pos === 4 && c === '7') {
                    return {
                        remove: 4,
                    }
                }
                return true
            },
            showMaskOnHover: false,
            jitMasking: true,
        }).mask(items)
    }

    initScrollTo() {
        document.querySelectorAll('.js-scrollto[data-target]').forEach((el) => {
            let target = document.querySelector(el.dataset.target)
            if (target) {
                el.addEventListener('click', () => {
                    const y =
                        target.getBoundingClientRect().top +
                        window.pageYOffset -
                        this.scrollToOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                    return false
                })
            }
        })
    }

    initBurgerClickHandler() {
        document.querySelector('.js-burgerMenu').addEventListener('click', () => {
            document.querySelector('.js-mobileMenu').style.visibility = 'visible'
            document.querySelector('body').style.overflow = 'hidden'
        })
    }

    initMobileMenuCloseHandler(){
        document.querySelector('.js-mobileMenuCloseIcon').addEventListener('click', () => {
            document.querySelector('.js-mobileMenu').style.visibility = 'hidden'
            document.querySelector('body').style.overflow = 'initial'
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App(appConfig || {})
})
