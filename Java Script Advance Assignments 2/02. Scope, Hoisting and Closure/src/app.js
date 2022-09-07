// 1.
// The output is undefined and 2 and the reason is a and foo are both hoisted so a have the value undefined
// and foo can be call before initialized

// 2.
// The ouput is 5 because variable assignment has higher priority than function declaration

// 3.
// The ouput is 1 because when you assign the a variable, it only exists in the b function scope

// 4.
// The problem is that the variable i, within each of the anonymous functions, is bound to the same variable outside of the function.
// var nodes = document.getElementsByTagName('button');
// for (let i = 0; i < nodes.length; i++) {
//     nodes[i].addEventListener('click', function() {
//         console.log('You clicked element #' + i);
//     });
// }