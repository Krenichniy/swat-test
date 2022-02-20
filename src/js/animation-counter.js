
  {
    //write - let mobile = [false, false, false] - for enable mobile adnimation
    //write - let mobile = false - for disable mobile adnimation
    let mobile = [false, false, false];

    //add event for scroll

    let runNumbers = (function () {
      if (!mobile) {
        return function () {
          if (check('counter-1')) {
            runall();
            window.removeEventListener('scroll', runNumbers, false);
          }
        };
      } else {
        return function () {
          if (check('counter-1') && !mobile[0]) {
            run1();
            mobile[0] = true;
          } else if (check('counter-2') && !mobile[1]) {
            run2();
            mobile[1] = true;
          } else if (check('counter-3') && !mobile[2]) {
            run3();
            mobile[2] = true;
          }
          if (mobile[0] && mobile[1] && mobile[2]) {
            window.addEventListener('scroll', throttleScroll, false);
          }
        };
      }
    })();
    
    let isScrolling = false;
    window.addEventListener('scroll', throttleScroll, false);
    
    //function prevents call an event more than 60 times/second
    function throttleScroll() {
      if (isScrolling == false) {
        window.requestAnimationFrame(function () {
          runNumbers();
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
    // check if element is on a screen
    function check(element) {
      let el = document.getElementById(element);
      let elementBoundary = el.getBoundingClientRect();

      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;
      let top = elementBoundary.height;

      return top + height >= 0 && height + window.innerHeight >= bottom;
    }
    // run animation
    let runall = function () {
      timer('counter-1', 721, [4, 3, 1], 3);
      timer('counter-2', 16, [1, 1, 1], 1);
      timer('counter-3', 84, [4, 2, 1], 4);
    };

    let run1 = function () {
      timer('counter-1', 721, [6, 1, 1], 3);
    };

    let run2 = function () {
      timer('counter-2', 16, [1, 1, 1], 2);
    };

    let run3 = function () {
      timer('counter-3', 84, [4, 2, 1], 4);
    };

    //the animation 
    function timer(id, b, c, d) {
      let numbers = document.getElementById(id);

      let currentNumber = 0;
      let maxNumber = b;

      let step = c[0];
      let steps = [b - b * 0.15, b - b * 0.09];

      let duration = d;
      let speed = (1000 * duration) / maxNumber;
      var speed2 = (speed / maxNumber) * 3;

      let fun = function () {
        currentNumber = currentNumber + step;
        numbers.innerText = currentNumber;
        if (currentNumber > maxNumber) {
          numbers.innerText = maxNumber;
          console.log('finish');
        } else if (currentNumber > steps[0]) {
          step = c[1];
          speed = speed + speed / 50;
          setTimeout(fun, speed);
        } else if (currentNumber > steps[1]) {
          step = c[2];
          speed = speed + speed;
          setTimeout(fun, speed);
        } else {
          speed = speed + speed / 250;
          setTimeout(fun, speed);
        }
      };

      fun();
    }
  }

