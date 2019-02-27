




//let Indicators = GenerateSubList(WORLDBANK.CHL.indicators,"indicatorName");
//Indicators.sort();
//let OpcionesIndicators="";
//Indicators.forEach(element => {
//    OpcionesIndicators = OpcionesIndicators + "<option id='"+ element + "'>'" + element+ "'</option>";
//});

//document.getElementById("idIndicators").innerHTML = OpcionesIndicators;



const dataPer=WORLDBANK.PER.indicators;                                     //guardo en una variable la ruta de la data a la que quiero accesar
const indicatorsPer = document.getElementById("indicatorsByCountry");       //elementos que quiero manipular

const filterPeru=(dataPer) =>{                                             //creo una función que usa la data y le aplica forEach

    dataPer.forEach(element =>{

        indicatorsPer.innerHTML += element.indicatorName        //Imprimo cada elemento 
        
     })
}

document.getElementById("indicators").addEventListener("change", () => {
    let condition = document.getElementById("indicators").value;          //guardo el valor de la data
    let country = condition.substring(0,6);
    let listOfIndicators = window.filterCountries(dataPer,country);

    indicatorsPer.innerHTML ="";                                       // vacio para que se limpie en cada evento
    listOfIndicators.forEach(element =>{

        indicatorsPer.innerHTML += element.indicatorName          //Imprimo cada elemento 
        
     }) 


});

window.onload= filterPeru(dataPer);