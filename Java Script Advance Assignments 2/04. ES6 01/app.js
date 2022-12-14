// ex1---
// (function IIFE() {
//   function foo(x) {
//     var y = x * 2;

//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         var obj = [];

//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );

//         return obj;
//       }
//     };
//   }
//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);

//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);

//   setTimeout(function () {
//     console.log(
//       list1[0] ===
//         list2.reduce(function (s, v) {
//           return s + v;
//         }, 0)
//     );
//   }, 200);
// })();
// ============================================================================

// ex2---

var x = 2;
fns = [];

(function () {
  var x = 5;

  for (var i = 0; i < x; i++) {
    fns[i] = function () {
      return x - 1;
    };
  }
})();

console.log(x * 2 === fns[x * 2]());
// ============================================================================
// ex3---
function foo(a, b) {
  let arr = [...a, ...b];
  arr.splice(1, 2);
  return arr;
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
  return foo(a1, a2);
}
console.log(bar().join("") === "281012");
// ============================================================================

// ex4---

// function ajax(ur1, cb) {
//   cb({
//     foo: 2,
//     baz: [6, 8, 10],
//     bam: {
//       qux: 12,
//     },
//   });
// }
// function check(data) {
//   console.log(
//     56 ===
//       data.foo +
//         data.baz[0] +
//         data.baz[1] +
//         data.baz[2] +
//         data.bam.qux +
//         data.bam.qam
//   );
// }
// var defaults = {
//   foo: 0,
//   bar: 4,
//   bam: {
//     qux: 0,
//     qam: 14,
//   },
// };

// function response() {
//   check();
// }

// ajax("http://fun.tld", response);
// ============================================================================

// ex5---

// function upper(strings, values) {}

// var name = "Nguyen Van A",
//   account = "ANV";
// classname = "Fresher FrontEnd";

// console.log();
