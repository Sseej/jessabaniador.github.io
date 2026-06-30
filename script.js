const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section=>{

    observer.observe(section);

});

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current = "";

    document.querySelectorAll("section").forEach(section=>{

        const top = section.offsetTop - 120;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light");

    toggle.textContent = "☀️";

}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        toggle.textContent = "☀️";

    }else{

        localStorage.setItem("theme","dark");

        toggle.textContent = "🌙";

    }

});
