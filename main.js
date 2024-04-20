const viewAll = document.querySelector('#view-all')
const birthdayList = document.querySelectorAll('.birthday-list')

viewAll.addEventListener('click', () => {
    birthdayList.forEach((birthday) => {
        birthday.classList.toggle("hidden");
    })
})