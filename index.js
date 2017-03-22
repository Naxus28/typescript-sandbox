//void--returns type null or undefined
function warnUser() {
    console.log('this function doesn\'t return any value');
}
;
warnUser(); // in the node repl this will log the string and return 'undefined'
// we should use 'void' in function signatures to indicate no return value is expected
// declaring variables with void type is useless because we can only assign 'null' or 'undefined'
var unusable = undefined;
var disposable = null;
