const birthDate = document.getElementById("date");
const calcBtn = document.getElementById("calc");
const ageE = document.getElementById("age");

const today = new Date();

const calculateAge = () => {
    const birthday = birthDate.value.split('-');

    let age = today.getFullYear() - birthday[0];
    const birthMonth = parseInt(birthday[1], 10) - 1;
    const birthDay = parseInt(birthday[2], 10);

    if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
        age--;
    }

    ageE.textContent = `Your age is ${age} years old`;
}

calcBtn.addEventListener("click", calculateAge);
