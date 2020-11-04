const sentence = ['\r| ','\r/ ','\r- ','\r\\ ','\r| ','\r/ ','\r- ','\r\\ ','\r| ','\r/ ','\r- ','\r\ '];
let time = 100;
for (const char of sentence) {
time += 200;

setTimeout (() => {
  process.stdout.write(char);
}, time);

};