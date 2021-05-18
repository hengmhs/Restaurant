const renderAbout = () => {
    console.log('coming from renderAbout');
    const info = document.getElementById('info');
    const title = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement("img");
    img.src = "https://media.istockphoto.com/vectors/chicken-vector-id996860396?k=6&m=996860396&s=612x612&w=0&h=A0uVf1Wre2kV7u8KwtSdOv1NAJaZl4BgfQlKTDXvlr4=";
    info.appendChild(title);
    info.appendChild(p);
    info.appendChild(img);
    title.innerText = 'About';
    p.innerText = 'Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes. It was created by immigrants from Hainan in southern China and adapted from the Hainanese dish Wenchang chicken. It is considered one of the national dishes of Singapore and is most commonly associated with Singaporean cuisine, being widely available in most food courts and hawker centres around the country. The dish is also seen throughout Southeast Asia, particularly Malaysia where it is a culinary staple.';

}

export { renderAbout }