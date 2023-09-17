let stars = document.querySelectorAll(".stars span");
let btn = document.querySelector("button");
let section = document.querySelector("section")
let x;
stars.forEach((star) => {
 
  star.addEventListener("click", (e) => {
    stars.forEach((star) => {
        star.classList.remove("active");
      });
    e.currentTarget.classList.add("active");
      x = e.currentTarget.innerHTML
    btn.style.cssText = "color:hsl(25, 97%, 53%); background: white ;";
  });
});

btn.onclick =  function(){
section.innerHTML = ""
let img = document.createElement("img")
img.src = "images/illustration-thank-you.svg"
img.style.cssText = " margin-bottom: 15px;"
section.appendChild(img)
section.style.cssText = "display:flex; flex-direction:column; align-items:center; "
let p = document.createElement("p")
p.innerText = `you chose ${x} out of 5`
section.appendChild(p)
p.style.cssText = "color:orange; border-radius:20px; padding:10px 15px;  background-color: rgba(255, 255, 255, 0.041);   "
let h1 = document.createElement("h1")
h1.innerText = "Thank You!"
h1.style.cssText = "margin:10px 0"
section.appendChild(h1)
let p2 = document.createElement("p")
p2.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
p2.style.cssText = "line-height: 1.3; color:hsl(216, 12%, 54%); font-size: 15px; text-align:center;"
section.appendChild(p2)
}
