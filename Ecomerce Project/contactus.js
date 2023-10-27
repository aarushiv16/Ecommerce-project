
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name === '' || email === '' || message.length < 10) {
        alert('Please fill in all fields correctly.');
        return;
    }

    
    form.submit();
});
