
const { parentPort } = require("worker_threads");

function hitung(cb) {
    for (let index = 0; index <= 10_000_000; index++) {
        console.log(index);
        if(index == 10_000_000){
            cb(index);
        }
      }
}

parentPort.on("message", (contents) => {
    // Send result back to parent
    hitung(function(data) {
        parentPort.postMessage(data);
    })
});
