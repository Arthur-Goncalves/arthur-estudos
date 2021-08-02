package br.com.lojinha.pojo;

import br.com.lojinha.enums.Tamanho;
import br.com.lojinha.interfaces.Favorito;

public class ProdutoInternacional extends Produto implements Favorito {

    private double taxaInternacional;

    public ProdutoInternacional(String marcaInicial, Tamanho tamanhoInicial) {
        super(marcaInicial, tamanhoInicial);
    }

    public void setValor(double novoValor){
        if (novoValor > -100){
            this.valor = novoValor;
        } else {
            throw new IllegalArgumentException("Os valores devem ser maiores que menos 100.00!");
        }
    }

    public double getTaxaInternacional() {
        return this.taxaInternacional;
    }

    public void setTaxaInternacional(double novaTaxaInternacional){
        this.taxaInternacional = novaTaxaInternacional;
    }

    public String getDadosFavoritos() {
        return this.getNome() + ", " + this.getMarca() + ", " + " e " + this.getValor();
    }
}
