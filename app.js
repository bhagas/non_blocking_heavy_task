const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
const { Worker } = require('worker_threads')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

function test(cb){
  const worker = new Worker('./proses.js');
  worker.postMessage(true)
  worker.on('message', function(data) {
    cb(data)
  });
}

app.get('/', (req, res) => {
    test(function(params) {
      res.status(200).json(['a','b',params]);
    })
})
app.get('/test', (req, res) => {
	res.status(200).json(['a','b','c']);
})

// function test1(callback) {
// 	setTimeout(function() {
// 		var prime = 0;
// 		var flag = true;
// 		for (var i = 3; i < 400000; i++) {
// 			flag = true;
// 			for (var j = 2; j < i; j++) {
// 				if (i % j === 0) {
// 					flag = false;
// 					break;
// 				}
// 			}
// 			if (flag) {
// 				console.log(i);
// 				prime += 1;
// 			}
// 		}
// 		callback(prime);
// 	}, 0);
// }

// app.get('/test_async', (req, res) => {
//   test1(function (msg) {
//     res.status(200).json(['a','b','c']);
//   });
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})