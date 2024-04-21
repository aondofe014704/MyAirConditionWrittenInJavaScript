class AirCondition{
    constructor(){
      Boolean:this.isOn = false;
      Integer:this.temperature = 16;
    }
    toggle(){
        this.isOn = !this.isOn;
    }
    isPowerOn(){
        return this.isOn;
    }
    increaseTemperature(){
        if(this.temperature <30){
            this.temperature++;
        }
        
    }
    getTemperature(){
       return this.temperature;
    }
    decreaseTemperature(){
        if(this.temperature > 16){
            this.temperature--;
        }
    }

}

        module.exports = AirCondition;