function addActivity(currentParkList)
    {

        for (var counter = 0; counter<currentParkList[index].actvitySelection[counter];counter++)
        {
            switch (currentParkList[index].actvitySelection[counter])
        {
            case "Hiking":
            activityIconLocation = "assets/SVG/hiking-icon.svg";
            break;
            case "Biking":
            activityIconLocation = "assets/SVG/biking-icon.svg";
            break;
            case "Fishing":
            activityIconLocation = "assets/SVG/fish-icon.svg";
            break;
            case "Camping":
            activityIconLocation = "assets/SVG/camping-icon.svg";
            break;
            case "Fireworks":
            activityIconLocation = "assets/SVG/fireworks-icon.svg";
            
            break;
            case "Picnic":
            activityIconLocation = "assets/SVG/picnic-icon.svg";
            break;
            default:
            //activityIconLocation = "assets/SVG/picnic-icon";


        }

        console.log(activityIconLocation);
        }
    }

        
     for (var counter = 0; counter <= currentParkList[index].actvitySelection.length; counter++)
 
        //console.log(currentParkList[index].codeName +"Activities");
    
        //console.log(stringID);

        //console.log(currentParkList[index].actvitySelection[counter]);

        switch (currentParkList[index].actvitySelection[counter])
        {
            case "Hiking":
            activityIconLocation = "assets/SVG/hiking-icon.svg";
            break;
            case "Biking":
            activityIconLocation = "assets/SVG/biking-icon.svg";
            break;
            case "Fishing":
            activityIconLocation = "assets/SVG/fish-icon.svg";
            break;
            case "Camping":
            activityIconLocation = "assets/SVG/camping-icon.svg";
            break;
            case "Fireworks":
            activityIconLocation = "assets/SVG/fireworks-icon.svg";
            
            break;
            case "Picnic":
            activityIconLocation = "assets/SVG/picnic-icon.svg";
            break;
            default:
            activityIconLocation = "assets/SVG/picnic-icon";


         
        }