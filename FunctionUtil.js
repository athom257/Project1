import $ from 'jquery';

export function updateBackGroundColor(color) {
    $('body').css('background-color', color);
}

export function getColorBackGround() {
    const color = $('body').css('background-color');

  // iExecuteYourCallback(function() {
  //     console.log('Im a callback function2!');
  // });

  // console.log(myFunction(10,9));
  //
  // test(function hello() {
  //     console.log("Hi");
  // });

  // test2(function(a, b) {
  //     console.log("Hi everybody");
  //     console.log((a+b));
  // });

    if (color === 'rgb(0, 255, 255)') {
        return 'Aqua';
    } else if (color === 'rgb(128, 128, 0)') {
        return 'Olive';
    } else if (color === 'rgb(128, 128, 128)') {
        return 'Gray';
    } else if (color === 'rgb(143, 188, 139)') {
        return 'DarkSeaGreen';
    } else if (color === 'rgb(95, 158, 160)') {
        return 'CadetBlue';
    }
    return color;
}

// function iExecuteYourCallback(callback) {
//     // callback contains the anonymous function passed to it
//     // Similar to doing:
//     // var callback = function () { };
//     console.log('pre-callback()...');
//     callback();
// }

// function test(a) {
//   a();
// }

// function test2(c) {
//   c(1, 5);
// }

// const test2 = (c => {
//   c(1, 9);
// });
// const iExecuteYourCallback = (callback => {
//     console.log('pre-callback2()...');
//     callback();
// });

// const myFunction = (function(a, b) {
//   return a*b;
// });
