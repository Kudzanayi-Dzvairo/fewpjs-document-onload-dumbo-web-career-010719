function domContentLoaded(){

document.addEventListener("DOMContentLoaded", updateDOM)
const text = document.querySelector('#text')

}

function updateDOM() {
text.innerHTML = 'This is really cool!'
}
