// script

const celciusField = document.querySelector("#celcius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// window loading reset

window.addEventListener("load", () => {
    degree.value = "";
    celciusField.innerHTML = "";
})



convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelcius();

    // add loading feature

    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting..</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>"
    },1000)

})

function convertToCelcius(){
    let inputValue = degree.value;

 setTimeout(() =>{
    if(tempType.value === "fahrenheit"){
        const fahrenheitToCelcius = (inputValue -32) * (5/9);
        celciusField.innerHTML = `${fahrenheitToCelcius.toFixed(3)} &deg; c`;

    }

    else if(tempType.value === "kelvin"){
        const kelvinToCelcius = inputValue - 273.15;
        celciusField.innerHTML = `${kelvinToCelcius.toFixed(3)} &deg; c`;


    }
  },1000)
}


