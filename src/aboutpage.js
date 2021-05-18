const renderAbout = () => {
    const info = document.getElementById('info');
    const p = document.createElement('p');
    const img = document.createElement("img");
    img.src = "https://www.newmalaysiankitchen.com/wp-content/uploads/2019/03/Malaysian-Hainanese-Chicken-Rice.jpg";
    info.appendChild(p);
    info.appendChild(img);
    p.innerText = 'Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes. It was created by immigrants from Hainan in southern China and adapted from the Hainanese dish Wenchang chicken. It is considered one of the national dishes of Singapore and is most commonly associated with Singaporean cuisine, being widely available in most food courts and hawker centres around the country. The dish is also seen throughout Southeast Asia, particularly Malaysia where it is a culinary staple.';
    const about = document.getElementById('about');
    about.innerHTML = '<strong>About</strong>';
    about.classList.add('navselect');
}

export { renderAbout }