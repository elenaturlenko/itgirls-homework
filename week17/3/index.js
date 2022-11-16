function formatDate(date) {
  let diff = new Date() - date;
  if(diff < 1000) {
    return 'прямо сейчас'
  } 

  let sec = diff / 1000;
  if(sec < 60) {
    return `${sec} секунд назад`
  }

  let min = sec / 60;
  if(min < 60) {
    return `${min} минут назад`
  }

  else {
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let month = date.getMonth();
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    console.log(year);
    if (year < 10) {
      year = "0" + year;
    }
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return day + "." + month + "." + year + " " + hours + ":" + minutes;
  }

}
alert( formatDate(new Date(new Date - 1)) );
alert( formatDate(new Date(new Date - 30 * 1000)) );
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );
