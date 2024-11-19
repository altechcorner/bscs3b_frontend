const content = document.querySelector("#content")

window.addEventListener("load", () =>{
    getUsers();
})


function getUsers(){

    let html=""

    //fetch("http://localhost:5000/api/members", {mode: "cors"}) //cross origin  offline
    fetch("https://bscs3b-crud-api-yvd4.onrender.com/api/members", {mode: "cors"}) //cross origin live

    .then((response)=>{
        console.log(response)
        return response.json();
    })

    .then((data)=>{
        data.forEach((element)=>{
            html += `<li> ${element.first_name} ${element.last_name}</li>`
        })
        content.innerHTML = html
    })

    .catch((error) =>{
        console.log(error)
    })

}





