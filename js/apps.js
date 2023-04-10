// step 2  make number 4 desit
function GetPin() {
    const pin = GeneritPin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return GetPin();

    }
}
// step 1 make function randum numver creat 
function GeneritPin() {
    const randum = Math.round(Math.random() * 10000);
    return randum;

}

document.getElementById('Generet_pin_Btn').addEventListener('click', function () {
    const pin = GetPin();
    const PinDesplay = document.getElementById('pin_desplay')
    PinDesplay.value = pin
})
document.getElementById('calcuter').addEventListener('click', function (even) {
    const evenElement = even.target.innerText;
    const YougerDesplayE = document.getElementById('Youger_desplay');
    const previesTypeNumver = YougerDesplayE.value;
    if (isNaN(evenElement)) {
        if (evenElement === 'C') {
            YougerDesplayE.value = ' ';
        }
        else if (evenElement === '<') {
            const degit = previesTypeNumver.split('');
            degit.pop();
            const remainingDigite = degit.join('');
            YougerDesplayE.value = remainingDigite;
        }
    } else {

        const NewTypevalue = previesTypeNumver + evenElement;
        YougerDesplayE.value = NewTypevalue;

    }

})
// step end Is validation and mase numver 
document.getElementById('Submit_btn').addEventListener('click', function () {

    const PinDesplay = document.getElementById('pin_desplay');
    const Creatpin = PinDesplay.value;
    const FinalPin = parseInt(Creatpin)

    const YougerPinElement = document.getElementById('Youger_desplay');
    const YougerPin = YougerPinElement.value;
    const FinalYougerPin = parseInt(YougerPin)

    const pin = document.getElementById('Pin-Success');
    const pinFols = document.getElementById('No-success');
    if (FinalPin === FinalYougerPin) {
        pin.style.display = "block";
        pinFols.style.display = "none";

    }

    else {
        pinFols.style.display = "block";
        pin.style.display = "none";

    }
})