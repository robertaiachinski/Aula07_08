import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag-listas',
  styleUrl: './tag-listas.css',
  templateUrl: './tag-listas.html',
})
export class TagListas {
  /**Variaveis GLOBAIS */
  /**string é o padrão que fica entrege Aspas ou Pelica, simples ou dupla */

  nomeVariavelString: string = 'Roberta Iachinski';
  nomeVariavelString2: string = 'Henrique';
  /***Number */
  nomeVariavelNumber: number = 10;
  /***Bolean */
  nomeVariavelBooleanFalse: boolean = false;
  nomeVariavelBooleanTrue: boolean = true;

  /***este é o construtor */

  constructor() {
    this.nomeVariavelString2 = 'Henrique';
    /*** o metodo console.log() faz com que seja lançado ou impresso no cliente ou navegador */
    console.log('Minha variavel sendo impressa: ', this.nomeVariavelString);
    console.log('Minha 2ª variavel sendo impressa: ', this.nomeVariavelString2);
    console.log('Minha 3ª varial sendo impressa: ', this.nomeVariavelNumber);
    console.log('Minha 4ª varial sendo impressa: ', this.nomeVariavelBooleanFalse);
    console.log('Minha 5ª varial sendo impressa: ', this.nomeVariavelBooleanTrue);

    /***Criando error de tipagens */
    // this.nomeVariavelNumber = "roberta";
    // this.nomeVariavelBooleanTrue = 10;
  } //Fim construtor
} // Fim de classe
