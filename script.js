const testBtn = document.getElementById("testBtn");
const result = document.getElementById("result");

testBtn.addEventListener("click", () => {
    testNetworkSpeed();
});

function testNetworkSpeed() {


    let downloadSize = 5616998; // bytes
    let time_start, end_time;

    let downloadImgSrc = new Image();

    downloadImgSrc.onload = function () {
        end_time = new Date().getTime();
        displaySpeed(time_start, end_time, downloadSize);
    };

    time_start = new Date().getTime();
    downloadImgSrc.src = userImageLink;
}

function displaySpeed(time_start, end_time, downloadSize) {
    let timeDuration = (end_time - time_start) / 1000;
    let loadedBits = downloadSize * 8;

    let bps = (loadedBits / timeDuration).toFixed(2);
    let speedInKbps = (bps / 1024).toFixed(2);
    let speedInMbps = (speedInKbps / 1024).toFixed(2);

    result.innerHTML = `
        Your internet connection speed is:<br>
        ${bps} bps<br>
        ${speedInKbps} kbps<br>
        ${speedInMbps} Mbps
    `;
}