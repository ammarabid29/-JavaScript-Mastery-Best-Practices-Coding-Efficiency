
const myButton = document.getElementById('myButton');
const body = document.body;

let clickCount = 0;
myButton.addEventListener('click', function () {
    clickCount++;
    const output = document.getElementById('output');
    output.textContent = `Button Clicked ${clickCount} times`;

    if (clickCount === 2) {
        body.classList.add('clicked');
        clickCount = 0;
    }
})