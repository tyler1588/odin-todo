function navbar(){
    const container = document.querySelector(".container");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    container.appendChild(navbar);

    const title = document.createElement("h1");
    title.innerHTML = "ToDo";
    navbar.appendChild(title);
}

export default navbar