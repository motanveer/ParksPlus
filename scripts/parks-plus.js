
/*


██████╗  █████╗ ██████╗ ██╗  ██╗███████╗    ██████╗ ██╗     ██╗   ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝██╔════╝    ██╔══██╗██║     ██║   ██║██╔════╝
██████╔╝███████║██████╔╝█████╔╝ ███████╗    ██████╔╝██║     ██║   ██║███████╗
██╔═══╝ ██╔══██║██╔══██╗██╔═██╗ ╚════██║    ██╔═══╝ ██║     ██║   ██║╚════██║
██║     ██║  ██║██║  ██║██║  ██╗███████║    ██║     ███████╗╚██████╔╝███████║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝
                                                                             
ParksPlus is a simple web project made by @MohTanveer.

This project uses the following resources and technologies:

- Vanilla JS + some minimal jQuery
- Bootstrap 4
- Flat UI Bootstrap Theme (Free Version)
- Animate.CSS
- Font Awesome (Free Version) 
 */



/*-------------------------------[UI] Data Structure     ----------------------------*/

class park {

    constructor(codeName, parkLocation, actvitySelection, friendsList) {
        this.codeName = codeName;
        this.parkLocation = parkLocation;
        this.actvitySelection = actvitySelection;
        this.friendsList = friendsList;
    }
}

var parkList = [];//Stores the entire list of park objects

var friendsList = []; //Stores the list of everyone's who attening the park visit
var actvitySelection = [];

var codeName = document.querySelector("#trip-codename"); //Gets Codename Value from Input
var parkLocation = document.querySelector("#park-location");



/*------------------------------- Build Park Object  ---------------------------*/


var submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
    
   var localInput = JSON.parse(localStorage.getItem("parks"));
   var newPark = JSON.parse(localStorage.getItem("parks"));
   if(localInput === null)
   {
    parkList.push(newPark);
   }
   else
   {
    parkList.push(newPark);
   }
  

    //console.log(parkLocation.value);
    //console.log(codeName)
    //getCheckbox();
    //console.log(actvitySelection);
  
    console.log(parkList)
    
    localStorage.setItem("parks",JSON.stringify(parkList));

 

   //console.log(parkList);
//console.log(localStorage.getItem("parks"));
 
});





/*-------------------------------[UI] Activity Selection  ---------------------------
 
checks and unchecks checkboxes and shows a selection state via updated styles
 
 */


var activityCards = [...document.querySelectorAll(".activity-card")]; //Array of elements with the "activity-card" class
var checkboxes = [...document.querySelectorAll(".checkbox-input")];  //Array of elements with the "checkbox-input" class

// Arrays must match one to one at the index level for the activity cards to map up correctly to their respective checkboxes

//console.log(checkboxes);

for (let index = 0; index < activityCards.length; index++) {
    activityCards[index].addEventListener("click", function () {

        updateCheckbox(index);
    }
    );

}

function updateCheckbox(index) {
    let check = false;
    let counter = 0;

    for (let runner = 0; runner < checkboxes.length; runner++) {
        if (runner == index)
            counter = index;
    }

    if (checkboxes[counter].checked == true) {
        activityCards[index].style.border = "lightgray 2px solid";

    }

    if (counter == index && checkboxes[counter].checked == false) {


        checkboxes[counter].checked = true;
        check = true;

        if (checkboxes[counter].checked == true) {
            activityCards[index].style.border = "#2ecc71 3.5px solid";
            actvitySelection.push(activityCards[index]);
        }

    }

    else {
        checkboxes[counter].checked = false;
        

    }


}



/*-------------------------------[UI] Add Friends  ---------------------------
 
checks and unchecks checkboxes and shows a selection state via updated styles

 */

var friendAdd = document.querySelector("#add-friend");
friendAdd.addEventListener("click", function () {
    addFriend();
});


function addFriend() {

    //-- The following will add the friend name to an array 
    let friend = document.querySelector("#friend-input");
    friendsList.push(friend.value);


    //-- The following will append the added name to the table, serving as a visual confirmation 
    // Note there is no connection between the array, used for storage and the table
    const list = document.querySelector('#friend-table');
    const row = document.createElement('tr');

    row.innerHTML =
        `<td>${friend.value}</td>
         <td><span class="fui-cross"></span></td>`;

    list.appendChild(row);

    friend.value = '';


    console.log(friendsList);

}

/*-------------------------------[UI] Clear Fields  ---------------------------
 
checks and unchecks checkboxes and shows a selection state via updated styles

 */

 function clearFields()
 {
    for (var index = 0; index < checkboxes.length; index++)
    {
        checkboxes[index].checked = false;
    }

    codeName.value = '';
    parkLocation.value = '';

    
    //localStorage.clear();
    
    console.log(localStorage.getItem("parks"));
    console.log(JSON.parse(localStorage.getItem("parks")));
 //   console.log(parkList);
    //console.log(localStorage.getItem("parks"))
    
 }


 function startAuto()
 {
     var autoInput = document.querySelector("#park-location");
     var autoComplete = new google.maps.places.Autocomplete(autoInput);
 }