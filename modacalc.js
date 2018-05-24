
var modafinil =
{
  sum: 0,
  halflife: 15,
  inputsMg: [],
  inputsH: [],

  calc: function(mg, h) //Exponential decay calculation.
  {
    let sum = mg * Math.pow(0.5, h/this.halflife);
    this.sum += sum;
  },
  accumulated: function() //Accumulated calculation.
  {
    for (var i = 0; i < this.inputsMg.length; i++)
    {
      modafinil.calc(this.inputsMg[i], this.inputsH[i]);
    }
  },
}
