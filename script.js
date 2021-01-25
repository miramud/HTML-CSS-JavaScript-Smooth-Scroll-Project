const home = document.getElementById('home')
const navLink = document.querySelectorAll('#nav-link');
const h1 = document.querySelector('h1');
const div = document.querySelectorAll('.display-hide');
const overlay = document.querySelectorAll('.overlay');

// const arrDiv = Array.from(div)


navLink.forEach((tag, i) => {
    overlay.forEach((el, index) => {
        tag.addEventListener('click', () => {
            if (i === index) {
                if (!el.classList.contains('fade')) {
                    el.style.color = 'white'
                    el.classList.add('overlay')
                    setTimeout(() => {
                        el.style.color = '#ffffff'
                        el.classList.remove('overlay')
                        el.classList.add('fade')
                    }, 100);
                    // el.style.display = 'block'
                    // arrDiv.filter((element, ind) => ind !== i).forEach(div => div.classList.add('hide'))

                } else if (el.classList.contains('fade')) {
                    el.style.color = '#00000000'
                    el.classList.remove('fade')
                    el.classList.add('overlay')
                    setTimeout(() => {
                        el.style.color = '#ffffff'
                        el.classList.remove('overlay')
                        el.classList.add('fade')
                    }, 100);
                }

            }
        })
    });
})