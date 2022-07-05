function navbar(){
    const container = document.querySelector('.container');

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    container.appendChild(navbar);

    const title = document.createElement('h1');
    title.innerHTML = 'todo';
    navbar.appendChild(title);

    const button = document.createElement('button');
    button.innerHTML = '+';
    button.classList.add('open-modal');
    navbar.appendChild(button);
}

export default navbar