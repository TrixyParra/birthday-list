const viewAllBtn = document.querySelector('#view-all-btn')
const closeBtn = document.querySelector('#close-btn')
const birthdayList = document.querySelectorAll('.birthday-list')

// View All Button 
viewAllBtn.addEventListener('click', () => {
    birthdayList.forEach((birthday) => {
        birthday.classList.toggle("hidden");
    });

    viewAllBtn.classList.add("hidden");

    closeBtn.classList.remove("hidden");
})

// View Less Button 
closeBtn.addEventListener('click', () => {
    birthdayList.forEach((birthday) => {
        birthday.classList.toggle("hidden");
    })

    closeBtn.classList.add("hidden");

    viewAllBtn.classList.remove("hidden");
})