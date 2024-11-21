// function floatInputBgColor() {
//     // fetch array of all form-input class members
//     const allFormInputs = document.getElementsByClassName('form-input');
    
//     // iterate through array
//     for (let i=0; i < allFormInputs.length; i++) {
//         //get each element
//         const input = allFormInputs[i];
//         //get the element input value
//         const inputValue = input.value;

//         //conditional
//         if (inputValue.length > 0) {
//             input.style.backgroundColor = '#fff0d0';
//         }
//         else {
//             input.style.backgroundColor = '';
//         }
//     }

// }

//simpler function that works with event handler
function floatInputBgColor(input) {
    if (input.value.length > 0) {
        input.style.backgroundColor = '#fff0d0';
    }
    else {
        input.style.backgroundColor = '';
    }
}
//wrap script in DOMContentLoaded event so it doesn't run before HTML elements are loaded
document.addEventListener('DOMContentLoaded', () => {
    //fetch array of all form-input class members
    const allFormInputs = document.querySelectorAll('.form-input')

    //event handler for all form-input class members
    allFormInputs.forEach((input) => {
        input.addEventListener('input', () => floatInputBgColor(input));
    });
});


