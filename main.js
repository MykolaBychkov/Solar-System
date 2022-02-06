const sun = document.querySelector('.sunPic')
const earth = document.querySelector('.earthPic')
const system = document.querySelector('.system')

function spin () {
    system.classList.add('rotation')
}
function stopSpin () {
    system.classList.remove('rotation')
}

sun.addEventListener('click', spin)
earth.addEventListener('click', stopSpin)