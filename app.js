$(document).ready(() => {

    let targeDate = new Date("Dec 25, 2023 00:00:00").getTime();

    let setTimer = setInterval(() => {

        let currentDate = new Date().getTime();

        let distance = targeDate - currentDate;


        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours <= 9 ? '0' + hours  : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        seconds = seconds <= 9 ? '0' + seconds : seconds;

        $('.days').text(days);
        $('.hours').text(hours);
        $('.minutes').text(minutes);
        $('.seconds').text(seconds);

        if (distance < 0) {
            clearInterval(setTimer);
            alert('HAPPY CHRISTMAS EVEYONE');
        }


    }, 1000);

});
