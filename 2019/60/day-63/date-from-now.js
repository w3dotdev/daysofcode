class DateFromNow {
  constructor() {
    this.second = 1000;
    this.minute = 60 * this.second;
    this.hour 	= 60 * this.minute;
    this.day 	  = 24 * this.hour;
    this.week 	= 7 * this.day;
    this.month 	= 31 * this.day;
    this.year 	= 365 * this.day;
    this.now 	  = (new Date()).getTime();
  };

  countDays(date) {
    return Math.floor(date / this.day);
  }

  messageFormat(date, numberDays){
    let message;

    switch(true) {
      case (numberDays === 0):
        switch(true) {
          case (date < this.minute):
            message = "Agora mesmo";
            break;
          case (date < (this.minute*2)):
            message = "1 minuto atrás";
            break;
          case (date < this.hour):
            message = Math.floor( date / this.minute ) + " minutos atrás";
            break;
          case (date < (this.hour*2)):
            message = "1 hora atrás";
            break;
          case (date < this.day):
            message = Math.floor( date / this.hour ) + " horas atrás";
            break;
        }
        break;
      case (numberDays === 1):
        message = "Ontem";
        break;
      case (numberDays < 7):
        message = numberDays + " dias atrás";
        break;
      case (numberDays < 31):
        message = Math.ceil( numberDays / this.week ) + " semanas atrás";
        break;
    }

    return message;
  }

  format(now, time){
    let date = new Date(time || "");
    let difference = ((new Date(now)).getTime() - date.getTime());
    let differenceInDays = this.countDays(difference);

    if ( isNaN(differenceInDays) || differenceInDays < 0 || differenceInDays >= 31 ) {
      return;
    }

    return this.messageFormat(difference, differenceInDays);
  }

	// update(now) {
	// 	var links = document.getElementsByTagName("a");
	// 	for ( var i = 0; i < links.length; i++ ) {
	// 		if ( links[i].title ) {
	// 			var date = prettyDate.format(now, links[i].title);
	// 			if ( date ) {
	// 				links[i].innerHTML = date;
	// 			}
	// 		}
	// 	}
	// }
}

module.exports = DateFromNow;

// const p1 = new DateFromNow();
// console.log(p1.format( "2008/02/09 24:29:00", "2008/01/28 22:24:30"));