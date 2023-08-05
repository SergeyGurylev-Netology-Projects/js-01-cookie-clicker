const counterElement = document.getElementById("clicker__counter");
const frequencyElement = document.getElementById("clicker__frequency");
const cookie = document.getElementById("cookie");
const cookieWidth = cookie.width
let ratio;
let counterValue = 0;
let dateLastClick = new Date(), dateCurrentClick;

cookie.onclick = () => {
    counterValue++;
    counterElement.textContent = String(counterValue);
    ratio = counterValue % 2 ? 1.25 : 1;
    cookie.width = cookieWidth * ratio;

    dateCurrentClick = new Date();
    frequencyElement.textContent = (1 / ((dateCurrentClick - dateLastClick) / 1000)).toFixed(2);
    dateLastClick = dateCurrentClick;
}