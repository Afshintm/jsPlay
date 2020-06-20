function squarSum(...params) {
    // map shoud return new array and does not change the existing array
    const squarArray = params.map((x) => Math.pow(x,2) );
    let result = 0;
    squarArray.forEach((x)=>result+=x);
    return result;

var items = [1,2,3];
items.map((x)=>squarArray(x));

// const squareSum = (...args) => {
//     const squared = args.map(x => Math.pow(x, 2))
//     return squared.reduce((prev, curr) => prev + curr)
//   }
//   this.items.map(x => this.doSomethingWith(x));
