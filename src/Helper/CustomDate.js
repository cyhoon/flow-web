const changeDateFormat = (date) => {
    var dt = null;
    if (date) {
        dt = new Date(date);
    } else {
        dt = new Date();
    }
    let year = "" + dt.getFullYear();
    let month = "" + (dt.getMonth() + 1); if (month.length === 1) { month = "0" + month; }
    let day = "" + dt.getDate(); if (day.length === 1) { day = "0" + day; }
    let hour = "" + dt.getHours(); if (hour.length === 1) { hour = "0" + hour; }
    let minute = "" + dt.getMinutes(); if (minute.length === 1) { minute = "0" + minute; }
    let second = "" + dt.getSeconds(); if (second.length === 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

export { changeDateFormat };