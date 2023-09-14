function printPowsOf2(number) {
    if (typeof number !== 'number') {
      console.log('Incorrect type');
      return;
    }
  
    let i = 0;
    while (Math.pow(2, i) <= number) {
      console.log(Math.pow(2, i));
      i++;
    }
  }
  
  printPowsOf2("302");
  printPowsOf2(null);
  printPowsOf2(128);
  printPowsOf2(60);