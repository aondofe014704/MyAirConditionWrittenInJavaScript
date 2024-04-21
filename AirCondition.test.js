

let AirCondition = require("./AirCondition.js");
describe("AirCondition", ()=>{
    let airCondition
    beforeEach(()=>{
        airCondition = new AirCondition();
    })

test("ToPowerOnTheAirCondition", ()=>{
    airCondition.toggle();
    let result = airCondition.isPowerOn();
    expect(result).toBe(true);
})

test("ToPowerOffTheAirCondition", ()=>{
    airCondition.toggle();
    airCondition.toggle();
    var result = airCondition.isPowerOn();
    expect(result).toBe(false);
})
test("ToIncreaseAirConditionTemperature", ()=>{
    airCondition.toggle();
    var resultOn = airCondition.isPowerOn();
    airCondition.increaseTemperature();
    expect(airCondition.getTemperature()).toBe(17);
})
test("ToDecreaseAirConditionTemperature", ()=>{
    airCondition.toggle();
    airCondition.isPowerOn();
    airCondition.decreaseTemperature();
    expect(airCondition.getTemperature()).toBe(16);
})



})