let dropdownBtn = document.querySelector('#dropdown-btn')
let dropdownMenu = document.querySelector('#dropdown-menu')
let hideTimeout; 
dropdownBtn.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block'

    setTimeout(() => {

        dropdownMenu.style.opacity = 1
        dropdownMenu.style.transform = 'translateY(0px)'

    }, 10);
}) 
dropdownBtn.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block'

    setTimeout(() => {

        dropdownMenu.style.opacity = 1
        dropdownMenu.style.transform = 'translateY(0px)'

    }, 10);
}) 
dropdownBtn.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block'

    setTimeout(() => {

        dropdownMenu.style.opacity = 1
        dropdownMenu.style.transform = 'translateY(0px)'

    }, 10);
}) 
dropdownBtn.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block'

    setTimeout(() => {

        dropdownMenu.style.opacity = 1
        dropdownMenu.style.transform = 'translateY(0px)'

    }, 10);
}) 
dropdownBtn.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block'

    setTimeout(() => {

        dropdownMenu.style.opacity = 1
        dropdownMenu.style.transform = 'translateY(0px)'

    }, 10);
}) 
dropdownBtn.addEventListener('mouseleave', (e) => {
    dropdownMenu.style.opacity = 0
    dropdownMenu.style.transform = 'translateY(30px)'

    hideTimeout = setTimeout(() => {
        dropdownMenu.style.display = 'none';
    }, 500);



})
 
dropdownBtn.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdownMenu.style.display = 'block'

    setTimeout(() => {

        dropdownMenu.style.opacity = 1
        dropdownMenu.style.transform = 'translateY(0px)'

    }, 10);
})