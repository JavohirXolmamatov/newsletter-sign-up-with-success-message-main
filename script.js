window.addEventListener('DOMContentLoaded', () => {
    const formButton = document.querySelector('.form-button');
    const emailInput = document.querySelector('#name');
    const errorMessage = document.querySelector('span')
    const regSection = document.querySelector('#section')
    const success = document.querySelector('#success')


    formButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Email uchun regulyar ifoda (pattern)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(emailInput.value)) {
            errorMessage.style.display = 'block';
            emailInput.classList.toggle('error')
            emailInput.value = 'ash#loremcompany.com'
            
            // 3 sekunddan keyin xato xabarini yashirish
            setTimeout(() => {
                errorMessage.style.display = 'none';
                emailInput.classList.toggle('error')
                emailInput.value = ''
            }, 3000);
        } else {
            errorMessage.style.display = 'none';
            regSection.classList.toggle('hidden')
            success.classList.toggle('hidden')

            
        }
    });
});
