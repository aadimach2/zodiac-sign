const zodiac=document.getElementById("zodiac");




const body=document.body;

const changeBackground=()=>{


    
    switch (zodiac.value) {
        case "Aries":
            body.style.backgroundColor= "Red";
            break;

            case "Tarus":
            body.style.backgroundColor= "green";
            break;
            case "Gemini":
            body.style.backgroundColor= "blue";
            break;
            case "Cancer":
            body.style.backgroundColor= "coral";
            break;
            case "Leo":
            body.style.backgroundColor= "white";
            break;
            case "Virgo":
            body.style.backgroundColor= "brown";
            break;
            case "Libra":
            body.style.backgroundColor= "pink";
            break;
            case "Scorpio":
            body.style.backgroundColor= "purple";
            break;
            case "Sagittarius":
            body.style.backgroundColor= "teal";
            break;
            case "Capricorn":
            body.style.backgroundColor= "orange";
            break;
            case "Aquarius":
            body.style.backgroundColor= "black";
            break;
            case "Pisces":
            body.style.backgroundColor= "violet";
            break;






    
        default:
            body.style.backgroundColor="white";
            break;
    }



};
