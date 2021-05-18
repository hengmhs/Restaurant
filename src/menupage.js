const renderMenu = () => {
    const info = document.getElementById('info');
    const p = document.createElement('p');
    const img = document.createElement("img");
    img.src = "https://lh3.googleusercontent.com/proxy/dds55EhPKpoWROAoKkWvX9OQwvXdNxGxtLvV_7cqwrUZTfsx6D7_me8hygj8mXxzALGpk0h_N5TfTdKhg3WZ9pGeZp_2seflhZKmUHriYMxDFH1pZNJ4gNYPtKG3iSvfra83Wek";
    info.appendChild(img);
    info.appendChild(p);
    p.innerText = 'Chicken Rice - $5';
    p.classList.add('dish');
    const menu = document.getElementById('menu');
    menu.innerHTML = '<strong>Menu</strong>';
    menu.classList.add('navselect');
    const img2 = document.createElement('img');
    const p2 = document.createElement('p');
    img2.src = "https://www.healthhub.sg/sites/assets/Assets/Categories/Pregnancy/Article008_images_mainimage.jpg";
    info.appendChild(img2);
    info.appendChild(p2);
    p2.innerText = 'Rice of Chicken - $5.50';
    p2.classList.add('dish');
}

export { renderMenu }