
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

    for (var changer = 0; changer < actvitySelection.length; changer++) {
        var activityID = actvitySelection[changer].id;
        activityID = activityID.substring(0, activityID.length - 2);
        //console.log(activityID);
        actvitySelection[changer] = activityID;
    }


    if (JSON.parse(localStorage.getItem('storedParks') == null)) {

        //Create new parkList
        parkList.push(new park(codeName.value, parkLocation.value, actvitySelection, friendsList));
        var jsonParkList = JSON.stringify(parkList);
        localStorage.setItem('storedParks', jsonParkList);
        console.log(JSON.parse(localStorage.getItem('storedParks')));

    }
    else {
        parkList = JSON.parse(localStorage.getItem('storedParks'));
        parkList.push(new park(codeName.value, parkLocation.value, actvitySelection, friendsList));
        localStorage.removeItem('storedParks');
        var jsonParkList = JSON.stringify(parkList);
        localStorage.setItem('storedParks', jsonParkList);
        console.log(JSON.parse(localStorage.getItem('storedParks')));
        console.log(parkList);

    }
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
    let friendID = friend.value + '1';
    friendsList.push(friend.value);


    //-- The following will append the added name to the table, serving as a visual confirmation 
    // Note there is no connection between the array, used for storage and the table
    const list = document.querySelector('#friend-table');
    const row = document.createElement('tr');

    row.innerHTML =
        `<td>${friend.value}</td>
         <td><span id="${friendID}" class="fui-cross"></span></td>`;

    row.id = friend.value;
    list.appendChild(row);

    //console.log(friendID);
    var loader = friendID.toString();
    //console.log(loader);

    //console.log(document.getElementById(loader));
    document.getElementById(loader).addEventListener("click", removeFriend);
    friend.value = "";


    //console.log(friendsList);


    function removeFriend() {
        var getRemovalID = document.getElementById(loader).id;
        //var getRemovalID = document.querySelector(`span[id=${friendID}]`).id;
        var getTRID = getRemovalID.substring(0, getRemovalID.length - 1);

        //console.log("Element removed called: " + getTRID);
        //console.log(friend.value);
        //console.log(friendsList)

        document.getElementById(getTRID).remove();

        for (var index = 0; index <= friendsList.length; index++) {
            if (getTRID == friendsList[index]) {
                var spliceIndex = friendsList.indexOf(getTRID);
                friendsList.splice(spliceIndex, 1);
            }
        }

        //console.log(friendsList);

    }

}



/*-------------------------------[UI] Clear Fields  ---------------------------
 
checks and unchecks checkboxes and shows a selection state via updated styles

 */

function clearFields() {
    for (var index = 0; index < checkboxes.length; index++) {
        checkboxes[index].checked = false;
    }

    codeName.value = '';
    parkLocation.value = '';

    console.log(JSON.parse(localStorage.getItem('storedParks')));
    if (JSON.parse(localStorage.getItem('storedParks') == null)) {
        console.log("No parks found!");
    }




}



function startAuto() {
    var autoInput = document.querySelector("#park-location");
    var autoComplete = new google.maps.places.Autocomplete(autoInput);
}




function addPark() {

    var currentParkList = JSON.parse(localStorage.getItem('storedParks'));
    const savedContainer = document.querySelector("#savedParks-container");




    for (var index = 0; index < currentParkList.length; index++) {
        {
            var stringID = currentParkList[index].codeName + "Activities";
            stringID = stringID.toString();

            console.log("🔥 Yeah Babby! " + currentParkList[index].actvitySelection);

            currentParkList[index].actvitySelection.forEach(() => {
                console.log("😡 Pop");
            });

            var parkCard = document.createElement('div');
            parkCard.setAttribute("id", currentParkList[index].codeName)
            parkCard.setAttribute("class", "col-lg-4 md-12 align-items-center dflex align-self-center text-center mb-5");
            parkCard.innerHTML =

                `<a class="card wallet">
            <div class="overlay"></div>
            <div class="circle">
                <i class="fas fa-tree"></i>
            </div>
            <p class="mb-2 card-header">${currentParkList[index].codeName}</p>
            <p class="add-name">${currentParkList[index].parkLocation}</p>
            <table class="table  w-75">
                <thead>
                    <span class="head">Activites</span>
                </thead>
                <tbody>
                    <tr id="${stringID}">
                    
                    </tr>
                </tbody>
            </table>
            <table class="table w-75 table-striped">
                <thead>
                    <span class="head">Who's Going?</span>
                </thead>
                <tr>
                    <td>Lily James</td>
                </tr>
                
                <tr>
                        <td>Lily James</td>
                    </tr>
            </table>
        </a>`;
            savedContainer.appendChild(parkCard);
        }
    }

}
