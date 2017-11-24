//Global Variables
var streamUrl = ["https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", "https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2", "https://wind-bow.glitch.me/twitch-api/streams/esl_dota2", "https://wind-bow.glitch.me/twitch-api/streams/esl_csgo"];

//AJAX Calls to retrieve data about the current Twitch TV Streams.
(function sendRequest1() {
    var httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function (data) {
        if (httpx.readyState === 4 && httpx.status === 200) {
            var data1 = JSON.parse(httpx.response);
            if (data1.stream !== null) {
                document.getElementById('txt1').innerHTML = '<p> Currently streaming: ' + data1.stream.channel.status + '</p>' + '<p>Viewers: ' + data1.stream.viewers + '</p>' + '<p>Game: ' + data1.stream.channel.game + '</p>';
            }
        }
    };
    httpx.open("GET", streamUrl[0], true);
    httpx.send();
})();

(function sendRequest2() {
    var httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function (data) {
        if (httpx.readyState === 4 && httpx.status === 200) {
            var data2 = JSON.parse(httpx.response);
            if (data2.stream !== null) {
                document.getElementById('txt2').innerHTML = '<p> Currently streaming: ' + data2.stream.channel.status + '</p>' + '<p>Viewers: ' + data2.stream.viewers + '</p>' + '<p>Game: ' + data2.stream.channel.game + '</p>';
            }
        }
    };
    httpx.open("GET", streamUrl[1], true);
    httpx.send();
})();

(function sendRequest3() {
    var httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function (data) {
        if (httpx.readyState === 4 && httpx.status === 200) {
            var data3 = JSON.parse(httpx.response);
            if (data3.stream !== null) {
                document.getElementById('txt3').innerHTML = '<p> Currently streaming: ' + data3.stream.channel.status + '</p>' + '<p>Viewers: ' + data3.stream.viewers + '</p>' + '<p>Game: ' + data3.stream.channel.game + '</p>';
            }
        }
    };
    httpx.open("GET", streamUrl[2], true);
    httpx.send();
})();

(function sendRequest4() {
    var httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function (data) {
        if (httpx.readyState === 4 && httpx.status === 200) {
            var data4 = JSON.parse(httpx.response);
            if (data4.stream !== null) {
                document.getElementById('txt4').innerHTML = '<p> Currently streaming: ' + data4.stream.channel.status + '</p>' + '<p>Viewers: ' + data4.stream.viewers + '</p>' + '<p>Game: ' + data4.stream.channel.game + '</p>';
            }
        }
    };
    httpx.open("GET", streamUrl[3], true);
    httpx.send();
})();