const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
        entry.target.classList.toggle('activate', entry.isIntersecting)
   })
}, {
    threshold: 1 // all pixels of target must be visible
})

// find all the target elements
const characters = document.querySelectorAll('.character')

// observe each target element
characters.forEach(character => {
    observer.observe(character)
})
