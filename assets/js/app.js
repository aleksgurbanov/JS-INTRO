let hours = new Date().getHours();
console.log(hours)

function Mode() {

    if (hours > 8 && hours < 18) {
        document.body.style.backgroundColor = 'blue';

    } else if (hours > 19 && hours < 7) {
        document.body.style.backgroundColor = "black";

    }



}

Mode();