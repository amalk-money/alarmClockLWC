import { LightningElement } from 'lwc';

//importing the clock app assets
import alarmClockAssets from '@salesforce/resourceUrl/alarmClockAssets';

export default class AlarmClock extends LightningElement {
    clockImage = alarmClockAssets + '/AlarmClockAssets/clock.png';
    currentTime = '';
    hours=[];
    minutes=[];
    meridians = ['AM', 'PM'];

    hourSelected=''
    minuteSelected=''
    meridianSelected=''

    alarmTime = ''
    isAlarmSet = false

    isAlarmTriggered = false

    get allFieldSelected(){
        return !(this.hourSelected && this.minuteSelected && this.meridianSelected)
    }

    get shakeImage(){
        return this.isAlarmTriggered ? 'shake' : '';
    }

    connectedCallback(){
        this.currentTimeHandler()
        this.createHoursOptions()
        this.createMinutesOptions()
    }

    currentTimeHandler(){

        setInterval(() => {
            let dateTime = new Date();
            let hour = dateTime.getHours();
            let minute = dateTime.getMinutes();
            let second = dateTime.getSeconds();
            let meredian = "AM";

            if(hour === 0){
                hour = 12;
                meredian = "AM";
            }
            else if(hour === 12){
                meredian = "PM";
            }
            else if(hour >=12){
                hour = hour - 12;
                meredian = "PM";
            }

            hour = hour<10  ? "0"+hour : hour;
            minute = minute<10 ? "0"+minute : minute;
            second = second<10 ?  "0"+second : second;

            this.currentTime = `${hour}:${minute}:${second} ${meredian}`;

            if(this.alarmTime === `${hour}:${minute} ${meredian}`){
                this.isAlarmTriggered = true
            }

        }, 1000)
    }

    createHoursOptions(){
        for(let i=1; i<=12; i++){
            let val = i<10 ? "0"+i : i;
            this.hours.push(val);
        }
    }

    createMinutesOptions(){
        for(let i=0; i<=59; i++){
            let val = i<10 ? "0"+i : i;
            this.minutes.push(val);
        }
    }

    optionHandler(event){
        const {label, value} = event.detail;
        if(label === "Hour(s)"){
            this.hourSelected = value;
        }
        else if(label === "Minute(s)"){
            this.minuteSelected = value;
        }
        else if(label === "AM/PM"){
            this.meridianSelected = value;
        }

        console.log(this.hourSelected, this.minuteSelected, this.meridianSelected);
        
    }

    setAlarmHandler(){
        this.alarmTime = `${this.hourSelected}:${this.minuteSelected} ${this.meridianSelected}`
        this.isAlarmSet = true;
    }

    resetAlarmHandler(){
        this.alarmTime = ""
        this.isAlarmSet = false
        this.isAlarmTriggered = false
        const elements = this.template.querySelectorAll('c-clock-drop-down')
        Array.from(elements).forEach(element => {
            element.reset("")
        })
    }
}