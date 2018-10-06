var btn = document.getElementById("boton");

btn.addEventListener("click",function(){
    alert("Para actvar esta función, contacte al desarrollador");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

