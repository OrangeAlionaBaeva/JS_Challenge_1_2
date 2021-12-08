// case 1
// let marksWeights = 78;
// let marksHeight = 1.69;

// let johnWeights = 92;
// let johnHeight = 1.95;



// case 2
// let marksWeights = 95;
// let marksHeight = 1.88;

// let johnWeights = 85;
// let johnHeight = 1.76;


function myFunction() {
    let marksWeights = document.getElementById("marks_weights-input").value;
    console.log("Marks weights:", marksWeights + ' kg')
    let marksHeight = document.getElementById("marks_height-input").value;
    console.log("Marks height:", marksHeight + ' m')
    document.getElementById('marks_weights_height').innerHTML = `Marks weights is ${marksWeights}kg and Marks height is ${marksHeight}m`;

    let johnWeights = document.getElementById("john_weights-input").value;
    console.log("Johns weights:", johnWeights + ' kg')
    let johnHeight = document.getElementById("john_height-input").value;
    console.log("Johns height:", johnHeight + ' m')
    document.getElementById('john_weights_height').innerHTML = `Johns weights is ${johnWeights}kg and Johns height is ${johnHeight}m`;



    let marksBmi = marksWeights / marksHeight ** 2;
    let johnBmi = johnWeights / johnHeight ** 2;

    console.log('Marks BMI is:', (parseInt(marksBmi * 100)) / 100);
    console.log('Johns BMI is:', (parseInt(johnBmi * 100)) / 100);

    let markHigherBMI = marksBmi >= johnBmi;
    let markIsMore;
    let johnIsMore;

    if (markHigherBMI == true) {
        markIsMore = marksBmi - johnBmi;
        document.getElementById('compare_calc').innerHTML = "Marks's BMI is a higher than John's BMI";
        console.log("Marks's BMI is a higher than John's BMI");
        document.getElementById('compare_calc_more').innerHTML = "Marks BMI is higher than Johns BMI by " + (parseInt(markIsMore * 100)) / 100;
        console.log("Marks BMI is greater than Johns BMI by ", (parseInt(markIsMore * 100)) / 100);
    } else {
        johnIsMore = johnBmi - marksBmi;
        document.getElementById('compare_calc').innerHTML = "John's BMI is a higher than Marks's BMI";
        console.log("John's BMI is a higher than Marks's BMI");
        document.getElementById('compare_calc_more').innerHTML = "Johns BMI is higher than Marks BMI by " + (parseInt(johnIsMore * 100)) / 100;
        console.log("Johns BMI is higher than Marks BMI by ", (parseInt(johnIsMore * 100)) / 100);
    }

    document.getElementById('compare_calc_boolean').innerHTML = "Is The Mark has a higher BMI than John?" + "Answear is: " + markHigherBMI;
    document.getElementById('marks_weights_calc').innerHTML = "Marks's BMI is: " + (parseInt(marksBmi * 100)) / 100;
    document.getElementById('john_weights_calc').innerHTML = "John's BMI is: " + (parseInt(johnBmi * 100)) / 100;
}

function myFunctionRefresh() {

    marksWeights = document.getElementById("marks_weights-input").value = '';
    marksHeight = document.getElementById("marks_height-input").value = '';
    johnWeights = document.getElementById("john_weights-input").value = '';
    johnHeight = document.getElementById("john_height-input").value = '';
}