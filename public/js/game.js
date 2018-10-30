function weightConverter(valNum) {


    document.getElementById("outputPounds").innerHTML=valNum*2.2046;

  
    document.getElementById("outputGrams").innerHTML=valNum*1000;
    i = valNum;
  }

  function a(i)
  {
    if (typeof i !== 'number') {
      throw Error('not a number');
    }
   

    return 0;
  }