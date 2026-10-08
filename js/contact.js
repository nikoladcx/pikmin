// hamburger meni
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// data iz forme
var email = document.getElementById("email");
var password = document.getElementById("password")
var message = document.getElementById("message");

//radio izbor jedan bira koji ce
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var yellow = document.getElementById("yellow")
var purple = document.getElementById("purple")
var white = document.getElementById("white")


//rezultati
var button = document.getElementById("button");
button.addEventListener("click", function (e) {
  e.preventDefault();
  alert(` E-mail ${email.value} Message ${message.value}`)
  // radio forma resenja
  if(red.checked == true)
{
  alert( "The best Pikmin is : " + red.value)
}
else if(blue.checked == true)
{
  alert( "The best Pikmin is : " + blue.value)
}
else if(yellow.checked == true)
{
  alert( "The best Pikmin is : " + yellow.value)
}
else if(purple.checked == true)
{
  alert( "The best Pikmin is : " + purple.value)
}
else if(white.checked == true)
{
  alert( "The best Pikmin is : " + white.value)
}
})