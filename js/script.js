/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberEl = document.getElementById("num-field");
const convertBtn = document.getElementById("convert-btn");

const lengthResult = document.getElementById("length-paragraph");
const volumeResult = document.getElementById("volume-paragraph");
const massResult = document.getElementById("mass-paragraph");

const conversionFactors = {
    length : {
        meterToFeet: 3.28084,
        feetToMeter : 1/3.28084
    },
    volume: {
        literToGallon: 0.264172, 
        gallonToLitter: 1/0.264162
    },
    mass: {
        kilogramToPound: 2.20462, 
        poundToKilogram: 1/202462
    }
}

function convertValue(value,factor) {
    return (value * factor).toFixed(2)
}

function updateResults(value){
    if(value){
        lengthResult.innerHTML = `${value} meters = ${convertValue(value, conversionFactors.length.meterToFeet)} feet | ${value} feet = ${convertValue(value, conversionFactors.length.feetToMeter)} meters`;
        volumeResult.innerHTML = `${value} liters = ${convertValue(value, conversionFactors.volume.literToGallon)} gallons | ${value} gallons = ${convertValue(value, conversionFactors.volume.gallonToLiter)} liters`;
        massResult.innerHTML = `${value} kilograms = ${convertValue(value, conversionFactors.mass.kilogramToPound)} pounds | ${value} pounds = ${convertValue(value, conversionFactors.mass.poundToKilogram)} kilograms`;
    }
}

convertBtn.addEventListener("click", function() {
    let numberValue = parseFloat(numberEl.value)
    updateResults(numberValue)
})

