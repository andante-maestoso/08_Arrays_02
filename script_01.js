
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter */
// mögliche Tests:

let arr //= ["Ich","bin","Holger", "Plottke"];
let sZ;
let str;
let gap = " ";
let punct = ".";
let quest = "?";
let excl = "!";
let i;



ausgabe(getSentence(["Ich","bin","Peter"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"Ekhkjhjk"));




//ausgabe(satzMachen2(arr));
    function getSentence(arr, sZ){
        str = "";
        for (let i = 0; i < arr.length-1; i++) {
            str += arr[i] + gap;
        } 
        switch (sZ) {
            case "S":
                str += arr[arr.length-1] + punct;
                break;
            case "Q":
                str += arr[arr.length-1] + quest;
                break;
            case "E":
                str += arr[arr.length-1] + excl;
                break;
            default:
                str = "Ungültiges Satzzeichen!"
                break;
        }           
    return str;
    }

   
    function ausgabe(outputStr) {
        console.log(outputStr);
    }