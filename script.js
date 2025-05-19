function toggleTheme() {
    const html = document.documentElement

    // if(html.classList.contains('light-theme')){
    //     html.classList.remove('light-theme')
    // } else{
    //     html.classList.add('light-theme')
    // }

    html.classList.toggle('light-theme')

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light-theme")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo usando óculos de sol, uma jaqueta e camiseta preta")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo usando jaqueta e camiseta preta")
    }
}