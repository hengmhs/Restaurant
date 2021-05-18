const renderContact = () => {
    const info = document.getElementById('info');
    const p = document.createElement('p');
    p.innerHTML = 'Ah Huat: +65 9123 9999 <br> Lao Lee: +65 6123 6666';
    info.appendChild(p);
    const contact = document.getElementById('contact');
    contact.innerHTML = '<strong>Contact</strong>';
    contact.classList.add('navselect');
}

export { renderContact }