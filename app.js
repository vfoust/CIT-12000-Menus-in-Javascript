var pages=["home", "about", "interact"];
function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);
    nav.style.backgroundColor = 'green';
    nav.style.lineHeight="70px";
    nav.style.height="60px";

    document.body.appendChild(nav);

    function createButton(pg){
        var button=document.createElement("button")
        button.innerHTML=pg;
        button.addEventListener("click", function (){
            navigate(pg);
            })
        nav.appendChild(button);
    }

}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}
function navigate(pg) {
    var wrapper=document.body.querySelector(".wrapper")
    if(pg==="home"){

        homePage();
    }if(pg==="about"){

        aboutPage();
    }if(pg==="interact"){

        interactPage();
    }
}
function homePage(){
    var wrapper=document.body.querySelector(".wrapper")
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);

}
function aboutPage(){
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML = "About";
    var name=document.createElement("h3")
    name.innerHTML="Virginia"
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}
function interactPage() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Interact Page";
    var counter = document.createElement("button")
    counter.classList.add("launch")
    counter.innerHTML = "Counter";
    var num = 0
    var number = document.createElement("p")
    number.innerHTML = num;
    counter.addEventListener("click", function () {
        number.innerHTML = "";
        num = (num + 1);
        number.innerHTML = num;
    })
    wrapper.appendChild(header);
    wrapper.appendChild(counter);
    wrapper.appendChild(number);
}

createNav();
createWrapper();
navigate("home");