
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function formatDate(date) {
    return date.getFullYear() + "-" + padTo2Digits(date.getMonth() + 1) + "-" + padTo2Digits(date.getDate()) + " " + padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());
        
}

export function getCurrentTime() {
    return formatDate(new Date());
}