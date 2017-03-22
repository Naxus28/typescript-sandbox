//void--returns type null or undefined

function warnUser(): void {
  console.log('this function doesn\'t return any value');
};

warnUser(); // in the node repl this will log the string and return 'undefined'

// we should use 'void' in function signatures to indicate no return value is expected
// declaring variables with void type is useless because we can only assign 'null' or 'undefined'

let unusable: void = undefined;
let disposable: void = null;