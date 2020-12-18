var d = document.getElementById('lineaSuperior');
var lienzo = d.getContext("2d");

dibujarLineas("blue", 0, 000, 8000, 000);
dibujarLineas("blue", 0, 001, 8000, 001);
dibujarLineas("blue", 0, 002, 8000, 002);
dibujarLineas("blue", 0, 003, 8000, 003);
dibujarLineas("blue", 0, 004, 8000, 004);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
