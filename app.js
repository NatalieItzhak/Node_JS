const yargs = require("yargs");

yargs.command({
   command: "add",
   describe: "Add 2 numbers",
   builder: {
      num1: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
      num2: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
   },
   handler(argv) {
      console.log(argv.num1 + argv.num2);
   },
});

yargs.command({
   command: "sub",
   describe: "Subtract 2 numbers",
   builder: {
      num1: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
      num2: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
   },
   handler(argv) {
     console.log(argv.num1- argv.num2);
   },
});

yargs.command({
   command: "multiple",
   describe: "Multiple 2 numbers",
   builder: {
      num1: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
      num2: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
   },
   handler(argv) {
   console.log(argv.num1 * argv.num2);
   },
});
yargs.command({
   command: "pow",
   describe: "Number squared",
   builder: {
      num1: {
         describe: "number 1",
         demandOption: true,
         type: "integer",
      },
   },
   handler(argv) {
      console.log(Math.pow(argv.num1, argv.num1));
   },
});

yargs.parse();