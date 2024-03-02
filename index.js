/** @format */

const appPopup = document.getElementById('app-popup')
const closeBtn = document.getElementById('close-button')

closeBtn.addEventListener('click', () => {
    appPopup.style.display = 'none'
})
