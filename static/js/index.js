var clicked = function() {
  counter.increase();
}

var reset = function() {
  counter.reset();
}

var aho = document.getElementById('_aho');
var $sn = document.getElementById('show_number');

var counter = {

  num: parseInt($sn.innerText, 10),

  increase: function() {
    this.num += 1;
    $sn.innerText = this.num;
    this.nabeatsu(this.num);
  },

  nabeatsu: function(num) {
    // Nabeatsu
    var n = "1";
    var isInclude = String(num).includes('3');
    var isMultiplesOfThree = num % 3 === 0
    var isNumWithThree = isMultiplesOfThree || isInclude;

    if (!isMultiplesOfThree && isInclude) {
      n = String(parseInt(Math.random() * 3) + 1);
    }

    aho.src = "img/nabeatsu_"+ n +".jpg";
    aho.style.display = isNumWithThree ? "block" : "none";
  },

  reset: function() {
    $sn.innerText = 0;
    aho.style.display = "none";
    // Reset number
    this.num = 0;
  }

}
