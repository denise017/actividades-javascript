// funcion backend
function backEnd(a, b) {
  for (let i = 1; i <= 100; i++) {
    if (i % a === 0 && i % b === 0) {
      console.log("back end");
    } else if (i % a === 0) {
      console.log("back");
    } else if (i % b === 0) {
      console.log("end");
    } else {
      console.log(i);
    }
  }
}

// ejecucion
backEnd(3, 5);
