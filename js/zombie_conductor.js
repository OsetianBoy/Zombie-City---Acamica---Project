/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion) {
  /* Constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* Propiedad/es unicas de ZombieConductor necesarias */
  this.direccion  = direccion;
}

/* Creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
/* Metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if(this.direccion == 'v'){
    this.y+= this.velocidad;
    if(this.y>this.rangoMov.hastaY){
      this.y=0;
    }
  } else {
    this.x+=this.velocidad;
    if(this.x>this.rangoMov.hastaX){
      this.x=0;
    }
  };
};

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(jugador.vidas);  
};

