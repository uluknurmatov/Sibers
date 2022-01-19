
$(document).ready(function () {
    
    let btn = $(".btn");
    let inp = $(".task-input");
    let list = $(".task-list");
    let API = " https://demo.sibers.com/users";

    // Get API
    $.ajax({
    url: "https://demo.sibers.com/users",
    type: "GET",
    success: function (data ) {
        localStorage.setItem("contacts", JSON.stringify(data));

    },
    error: function () {},
});

// Render list 
function render(){
    let newData = JSON.parse(localStorage.getItem("contacts"));
    list.html("");
    newData.forEach((item) => {
            list.append(`
            <div class='card'>
            <li style="font-weight: bold;">${item.name}
            <li>
            <img class="img" src="./img/user.png" />
            ${item.username}
            </li>
            <li>
            <img class="img" src="./img/email.png" />
            ${item.email}
            </li>
            <li>
            <img class="img" src="./img/house.png" />
            ${item.address.country}, ${item.address.city}
            </li>
            <li>
            <img class="img" src="./img/phone (1).png" />
            ${item.phone}
            </li>
            <li>
            <img class="img" src="./img/suitcase.png" />
            ${item.company.name}
            </li>
            <button class="btn-delete">Delete</button>
            <button class="btn-update">Update</button> 
            </li>
            </div>
            `)
        })

    }

// Delete
    $('body').on('click','.btn-delete', function(){
        let data = JSON.parse(localStorage.getItem("contacts")); 
        let index = $(this).parent().index(); // Index contact
        console.log(index)
        data.splice(index, 1); 
        localStorage.setItem("contacts", JSON.stringify(data)); 

        render(); 
    })

// Update
    $('body').on('click','.btn-update', function(){
        let data = JSON.parse(localStorage.getItem("contacts")); 
        let index = $(this).parent().index();
        
        let edit = prompt("New name", data[index].name) // update name
        data[index].name = edit
        let resp = {
            name: `${data[index].name}`
        }
        resp.name = {...edit}
      
        localStorage.setItem("contacts", JSON.stringify(data));

        render()
    })

    render()
})