
/*


██████╗  █████╗ ██████╗ ██╗  ██╗███████╗    ██████╗ ██╗     ██╗   ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝██╔════╝    ██╔══██╗██║     ██║   ██║██╔════╝
██████╔╝███████║██████╔╝█████╔╝ ███████╗    ██████╔╝██║     ██║   ██║███████╗
██╔═══╝ ██╔══██║██╔══██╗██╔═██╗ ╚════██║    ██╔═══╝ ██║     ██║   ██║╚════██║
██║     ██║  ██║██║  ██║██║  ██╗███████║    ██║     ███████╗╚██████╔╝███████║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝
                                                                             


 */



/*-------------------------------[UI] Data Structure     ----------------------------*/

class park
{
    constructor(codeName, parkLocation, actvitySelection, friendsList)
    {
        this.codeName = codeName;
        this.parkLocation = parkLocation;
        this.actvitySelection = actvitySelection;
        this.friendsList = friendsList;
    }
}

var friendsList = [];



/*-------------------------------[UI] Activity Selection  ---------------------------
 
checks and unchecks checkboxes and shows a selection state via updated styles
 
 */


var activityCards = [...document.querySelectorAll(".activity-card")]; //Array of elements with the "activity-card" class
var checkboxes = [...document.querySelectorAll(".checkbox-input")];  //Array of elements with the "checkbox-input" class

// Arrays must match one to one at the index level for the activity cards to map up correctly to their respective checkboxes

console.log(checkboxes);

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
 friendAdd.addEventListener("click", function()
 {
  addFriend();
 });

 
 function addFriend()
 {

    let friend = document.querySelector("#friend-input");
    friendsList.push(friend.value);

    const list = document.querySelector('#friend-table');
    const row = document.createElement('tr');
    
    row.innerHTML =
        `<td>${friend.value}</td>
         <td><span class="fui-cross"></span></td>`;
    
         list.appendChild(row);

    friend.value = '';
    console.log(friendsList);


 }