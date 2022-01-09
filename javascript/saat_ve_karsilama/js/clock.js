let kullaniciAdi = prompt("Kullanıcı adınızı girin:");

if (kullaniciAdi) {
    document.querySelector("#myName").innerHTML = kullaniciAdi;
} else {
    document.querySelector("#myName").innerHTML = "Misafir";
}

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    let session = "AM";

    if(hour === 0){
        hour = 12;
    }
    
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    switch (day){
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 0:
            day = "Pazar";
            break;
    };

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    let time = `${hour} : ${minute} : ${second} - ${day}`;
    document.querySelector("#myClock").innerHTML = time;
    let t = setTimeout(function(){ showTime() }, 1000);
}

showTime();