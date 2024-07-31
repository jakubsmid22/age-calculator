const birthDate = document.getElementById("date");
const calcBtn = document.getElementById("calc");
const ageE = document.getElementById("age");

const today = new Date();

const calculateAge = () => {
    const birthday = birthDate.value.split('-');

    let age = today.getFullYear() - birthday[0];

    if ((today.getMonth() < birthday[1]) && (today.getDay() < birthday[2]) ) {
        age--;
    }

    ageE.textContent = `Your age is ${age} years old`;
}

calcBtn.addEventListener("click", calculateAge);