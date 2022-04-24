const btn = document.getElementById("calculate");

btn.addEventListener("click", function() {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if(height == "" || weight ==""){
        alert("Please fill out the input fields!");
        return;
    }

    // BMI = weight in KG / (height in m * height in m)

    // Change height from cm to m
    height = height / 100;

    // Calculate BMI
    let BMI = weight / (height * height);

    // take BMI value only upto 2 decimal places
    BMI = BMI.toFixed(2);

    document.querySelector("#result").innerHTML = BMI;

    let status = "";

    if(BMI < 18.5){
        status = "Underweight";
    }
    if(BMI >= 18.5 && BMI < 25){
        status = "Healthy";
    }
    if(BMI >= 25 && BMI < 30){
        status = "Overweight";
    }
    if(BMI > 30){
        status = "Obese";
    }
    console.log(status);
    document.querySelector(".comment").innerHTML = `Comment: You are <span id="comment">${status}</span>`
})