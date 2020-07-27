function makeDelay(func, millisecond) {
  setTimeout(() => func(), millisecond);
}
makeDelay(() => console.log("test"), 3000);
