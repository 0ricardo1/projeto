function toggleMode() {
   const html = document.documentElement
   html.classList.toggle('light')
   
   const img = document.querySelector("#profile img")
   
   html.classList.contains("light")
   ? img.setAttribute("src", "./assets/profile-light.jpg")
   : img.setAttribute("src", "./assets/profile-dark.jpg") 
}
