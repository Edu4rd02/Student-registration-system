//Function for validate the inputs are not empty
function noEmpty(){
    //Create a list that contain all the info from the inputs
    let info = [inputName.value,inputAge.value,inputGender.value,inputEmail.value,inputG1.value,inputG2.value,inputG3.value];

    //With a for, we iterate in the list and apply the trim function, if the input is empty the function return a false
    for (let i = 0; i < info.length; i++) {
        let tmp = info[i];
        if (!tmp.trim()) {
           return false; 
        }
    }
    //If iterate all the list and no value is empty, we return a true
    return true;
}