const scriptURL = "https://script.google.com/a/macros/tsuniv.edu.in/s/AKfycbzmiBzJAYhykYphO6qEvkxld8BIMgIafsK9CvWmCyfHJab_6z2l_NwtBCuAMdlWpfNKiw/exec"

const form = document.getElementById("registrationForm")

form.addEventListener("submit", e => {

e.preventDefault()

fetch(scriptURL,{
method:"POST",
body:new FormData(form)
})
.then(res => res.text())
.then(data => {

alert("Team Registered Successfully!")

form.reset()

})

})