const nav_btn = document.querySelectorAll('.features-nav-btn')
const info_img = document.querySelector('.info-img')
const info_note = document.querySelectorAll('.info-note')
const question_btn = document.querySelectorAll('.question h2')
const detail = document.querySelectorAll('.question p')



for (let i = 0; i < question_btn.length; i++) {
      const element = question_btn[i];
      element.addEventListener('click', () => {
            detail[i].classList.toggle('active-for-dropdown')
      })
}

