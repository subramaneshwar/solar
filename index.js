const input = document.getElementById("input")
const select = document.getElementById("planet")
const bottom = document.getElementById("bottom")

const planets = [
    { planetName: "Sun", gravity: 27.9, image:  "sun.png" },
    { planetName: "Moon", gravity: 0.1655, image:  "moon.png" },
    { planetName: "Mercury", gravity: 0.377, image: "mercury.png"  },
    { planetName: "Venus", gravity: 0.9032, image:  "venus.png" },
    { planetName: "Earth", gravity: 9.8, image: "earth.png" },
    { planetName: "Mars", gravity: 0.3895, image:  "mars.png" },
    { planetName: "Jupiter", gravity: 2.640, image:  "jupiter.png" },
    { planetName: "Saturn", gravity: 1.139, image: "saturn.png" },
    { planetName: "Uranus", gravity: 0.917, image: "uranus.png" },
    { planetName: "Neptune", gravity: 1.148, image: "neptune.png"  },
    { planetName: "Pluto", gravity: 0.063 , image: "pluto.png"  },
    
]


select.innerHTML=`<option disabled selected value>--Select Planent--</option>`
planets.map((ele) => {
    const options = document.createElement("option")
    options.innerHTML = ele.planetName
    options.value = ele.gravity
    // console.log(options)
    options.setAttribute("imgsrcs", ele.image)
    select.appendChild(options)
})
bottom.innerHTML=`<img src="earth.png" id="earth">`

function myplanent() {
    console.log("hi")
    console.log(select.value)
    bottom.innerHTML=""
    let indx = select.selectedIndex
    
    const src=select.options[indx].getAttribute("imgsrcs")
    const planetname=select.options[indx].text
    console.log(planetname)
    const mass = input.value
    error = true
   
    if (mass === "") {
        var error=""
        values = "Mass required"
        if (mass < 0) {
            values = "please enter greater than zero"
        }
        const para = document.createElement("p")
        para.innerHTML=values
        para.setAttribute("id","para")
        bottom.appendChild(para)
        
    }
    else if(select.value === ""){
        values="please select planets"
        const para = document.createElement("p")
        para.innerHTML=values
        para.setAttribute("id","para")
        bottom.appendChild(para)
    }
    else {
        const gravity = +select.value
        const weight = mass * gravity
        const img = document.createElement("img")
        img.setAttribute("width","100")
        img.setAttribute("height","100")
        img.setAttribute("src",src)
        bottom.appendChild(img)
        
        const para = document.createElement("div")
        para.innerHTML=`<p id="ans">The Weight of the object on ${planetname}<p> <p id="circle">${weight}N</p>`
        para.setAttribute("id","para1")
        bottom.appendChild(para)
    }
}
