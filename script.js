M.AutoInit();

M.toast({html: 'Nope, we do not use cookies, you don\'t need to agree to shit, thanks for using our service'})

var thicknessSelector = document.getElementById("thickness-slider");
var lengthSelector = document.getElementById("length-slider");
var hardnessSelector = document.getElementById("hardness-slider");

var thicknessOutput = document.getElementById("thicknessOutput");
var lengthOutput = document.getElementById("lengthOutput");
var hardnessOutput = document.getElementById("hardnessOutput");

var thicknessNumber = document.getElementById("thickness-number");
var lengthNumber = document.getElementById("length-number");
var hardnessNumber = document.getElementById("hardness-number");

var tweetNow = document.getElementById("tweet-now");

var thickness = 0;
var length = 0;
var hardness = 0;

const selector = '█';
const background = '░';

thicknessOutput.innerText = calculateBar(thickness);
lengthOutput.innerText = calculateBar(length);
hardnessOutput.innerText = calculateBar(hardness);
tweetNow.href = buildTweet();

thicknessNumber.innerText = thickness;
lengthNumber.innerText = length;
hardnessNumber.innerText = hardness;

thicknessSelector.addEventListener("input", (e) => {
    thickness = thicknessSelector.value;
    thicknessOutput.innerText = calculateBar(thickness);
    tweetNow.href = buildTweet();
    thicknessNumber.innerText = thickness;
});

lengthSelector.addEventListener("input", (e) => {
    length = lengthSelector.value;
    lengthOutput.innerText = calculateBar(length);
    tweetNow.href = buildTweet();
    lengthNumber.innerText = length;
});

hardnessSelector.addEventListener("input", (e) => {
    hardness = hardnessSelector.value;
    hardnessOutput.innerText = calculateBar(hardness);
    tweetNow.href = buildTweet();
    hardnessNumber.innerText = hardness;
});

function calculateBar(number){
    var result = '';
    for (let i = 0; i <= 10; i++) {
        result += i == number ? selector : background;
    }
    return result;
}

function buildTweet(){
    var result = 'https://twitter.com/intent/tweet?text=(っ◔◡◔)っ ♥ desired %23PeePeeSettings ♥%0A%0A';
    result += 'thiccness:%0A';
    result += calculateBar(thickness) + '%0A';
    result += 'length:%0A';
    result += calculateBar(length) + '%0A';
    result += 'hardness:%0A';
    result += calculateBar(hardness) + '%0A%0A';
    result += 'Make your own with https://codingneko.com/ppsettings';
    return result;
}