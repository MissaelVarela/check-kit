
const monthsArray = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const shortMonthsArray = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

// Private Functions

export function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function destructureDate(date) {
    return {
        month: date.getMonth(),
        day: date.getDate(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };   
}

export function hour24ToHour12(hour) {
    if (hour > 12) {
        return { hourBase12: hour - 12, ampm: "pm" }
    } 
    else if (hour === 12) {
        return { hourBase12: 12, ampm: "pm" }
    } 
    else if (hour === 0) {
        return { hourBase12: 12, ampm: "am" }
    } 
    else {
        return { hourBase12: hour, ampm: "am" }
    }
}

export function hour12ToHour24(hourBase12, ampm) {
    if (ampm === "am") {
        if (hourBase12 === 12) {
            return 0;
        }
        return hourBase12;
    } else if (ampm === "pm") {
        if (hourBase12 === 12) {
            return 12;
        }
        return hourBase12 + 12;
    }
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
        const { month, day, year } = destructureDate(date);
    
        return day + " de " + monthToText(month) + ", " + year;
    }
    else {
        return "No es una fecha"
    }
}

export function toTimeString(date) {
    if (date instanceof Date) {
        const { hour, minutes } = destructureDate(date);
        const  { hourBase12, ampm } = hour24ToHour12(hour);
        return hourBase12 + ":" + padTo2Digits(minutes) + " " + ampm ;
    }
    else {
        return "No es una hora"
    }
}


export function toShortDateString(date) {
    if (date instanceof Date) {
        const { month, day, year, hour, minutes } = destructureDate(date);
    
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