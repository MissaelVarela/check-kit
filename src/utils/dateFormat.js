
const monthsArray = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const shortMonthsArray = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

// Private Functions

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function destructure(date) {
    return {
        month: date.getMonth(),
        day: date.getDate(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };   
}

// Public Functions

export function monthToText(month) {
    return monthsArray[month];
}

export function monthToShortText(month) {
    return shortMonthsArray[month];
}

export function toDateString(date) {

    if (date instanceof Date) {
        const { month, day, year } = destructure(date);
    
        return day + " de " + monthToText(month) + ", " + year;
    }
    else {
        return "No es una fecha"
    }

}


export function toShortDateString(date) {
    if (date instanceof Date) {
        const { month, day, year, hour, minutes } = destructure(date);
    
        return year + "-" + padTo2Digits(month + 1) + "-" + padTo2Digits(day) + " " + padTo2Digits(hour) + ":" + padTo2Digits(minutes);
    }
    else {
        return "No es una fecha"
    }
    
        
}

export function getCurrentTime() {
    return toShortDateString(new Date());
}



export function toShort(date) {

}