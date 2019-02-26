


//

let Indicators = GenerateSubList(WORLDBANK.CHL.indicators,"indicatorName");
Indicators.sort();
let OpcionesIndicators="";
Indicators.forEach(element => {
    OpcionesIndicators = OpcionesIndicators + "<option id='"+ element + "'>'" + element+ "'</option>";
});

document.getElementById("idIndicators").innerHTML = OpcionesIndicators;
