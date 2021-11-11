    var result = document.getElementById("result");
    function edit(elem) {
      
      //末尾が０の状態で数値が入力できない
    var resultNum = result.value;
      
      if(resultNum.slice( -1 )  == "."){
        result.value = result.value + elem.value;
      }else if(resultNum.slice( 0, 1 )  == 0 ){
        if(elem.value == "."){
        result.value = result.value + elem.value;
        }else {
          result.value = elem.value;
        }
      }else if(resultNum.slice( -2 ) == "+0"){
          result.value = resultNum.slice(0,-1);
          result.value = result.value + elem.value;
      }else if(resultNum.slice( -2 ) == "-0"){
          result.value = result.value + elem.value;
      }else if(resultNum.slice( -2 ) == "/0"){
          result.value = result.value + elem.value;
      }else if(resultNum.slice( -2 ) == "*0"){
          result.value = result.value + elem.value;
      }else if(resultNum.slice( -1 ) == "+"){
        if(elem.value=="+"){
          result.value = resultNum.slice(0,-1);
          result.value = result.value + elem.value;
        }else{
        result.value = result.value + elem.value;
        }
      }else if(resultNum.slice( -1 ) == "-"){
        if(elem.value=="-"){
          result.value = resultNum.slice(0,-1);
          result.value = result.value + elem.value;
        }else{
        result.value = result.value + elem.value;
        }
      }else if(resultNum.slice( -1 ) == "/"){
        if(elem.value=="/"){
          result.value = resultNum.slice(0,-1);
          result.value = result.value + elem.value;
        }else{
        result.value = result.value + elem.value;
        }
      }else if(resultNum.slice( -1 ) == "*"){
        if(elem.value=="*"){
          result.value = resultNum.slice(0,-1);
          result.value = result.value + elem.value;
        }else{
        result.value = result.value + elem.value;
        }
      }else{
        result.value = result.value + elem.value;
      }
      }
    function ac() {
      result.value = 0;
    }
    function calc() {
      result.value = new Function("return " + result.value)();
    }
