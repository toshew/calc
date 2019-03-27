
  const getTotal = document.getElementById('showTotal');
  const btnReset = document.getElementById('reset');
  const display = document.getElementById('display');
  const plusMinus = document.getElementById('plus-minus');
  
  
  document.body.addEventListener("click", addNum, true);
  getTotal.addEventListener("click", showResult, true);  
  btnReset.addEventListener("click", clearDisplay, true);
  plusMinus.addEventListener("click", changeSign, true);
  
  
  function addNum(e) {
    if (e.target.classList.contains('unos')) {
      display1.textContent += e.target.value;
      e.target.blur();
    }
  }
  
  function showResult(e) {
    if (display1.textContent.includes('%')) {
      let percent = display1.textContent.replace('%', '*(1/100)');
      display.textContent = eval(percent).toFixed(7);
      e.target.blur();
    }
    display.textContent = eval(display1.textContent).toFixed(7);
    e.target.blur();
  }

  function changeSign(e) {
    let num = -parseInt(display1.textContent);
    display.textContent = num;
    e.target.blur();
  }
  
  function clearDisplay(e) {
    display.textContent = '';
    display1.textContent = '';
    e.target.blur();
  }
  




