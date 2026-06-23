class Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    this.frabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.qtdPortas = qtdPortas; //Propriedade da Classe
  }

  mostrarDadosDoVeiculo() {
    console.log(
      `${this.frabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas} portas`,
    );
  }

  mostrarModelo() {
    console.log(`O modelo do carro é: ${this.modelo}`);
  }
}
class Carro extends Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    super(fabricante, modelo, ano, tipo, qtdPortas);
  }
}

class Moto extends Veiculo {
  constructor(fabricante, modelo, ano, cilidradas) {
    super(fabricante, modelo, ano);
    this.cilidradas = cilidradas;
  }

  mostrarDadosDoVeiculo() {
    console.log(`${this.frabricante} ${this.modelo}, ${this.ano}, ${this.cilidradas} cilidradas`);
  }
}

const meuCarro = new Carro("Ford", "KA", "2000", "Sedan", 4);
meuCarro.mostrarDadosDoVeiculo();

const minhaMoto = new Moto("Yamaha", "K2", "2000", "300");
minhaMoto.mostrarDadosDoVeiculo();
