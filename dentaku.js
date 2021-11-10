    var result = document.getElementById("result");
    function edit(elem) {
      result.value = result.value + elem.value;
    }
    
    function ac() {
      result.value = 0;
    }
    function calc() {
      result.value = new Function("return " + result.value)();
    }

    
    