document.addEventListener("DOMContentLoaded", function(event) {
    const form2 = document.querySelector('form#form2');
    const storageKey = 'user_data';

    function storeData(nama, email, password) {
        const data = JSON.parse(localStorage.getItem(storageKey)) || [];
        data.push({ nama, email, password });
        localStorage.setItem(storageKey, JSON.stringify(data));
    }

    form2.addEventListener('submit', (event) => {
        event.preventDefault();

        const nama = form2.nama.value;
        const email = form2.email.value;
        const password = form2.password.value;

        storeData(nama, email, password);

        alert('Registrasi berhasil silahkan login');

        form2.reset();
    });
});
