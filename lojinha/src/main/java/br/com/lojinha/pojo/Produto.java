package br.com.lojinha.pojo;

import br.com.lojinha.enums.Tamanho;
import java.util.List;

public class Produto {
    private String nome;
    private String marca;
    protected double valor;
    private Tamanho tamanho;
    private List<ItemIncluso> itensInclusos;

    public Produto(String marcaInicial, Tamanho tamanhoInicial) {
        // Construtor serve para definir comandos que serão iniciados durante a instanciação
        this.marca = marcaInicial;
        this.tamanho = tamanhoInicial;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String novoNome) {
        this.nome = novoNome;
    }

    public String getMarca(){
        return this.marca;
    }

    public void setMarca(String novaMarca) {
        this.marca = novaMarca;
    }

    public double getValor(){
        return this.valor;
    }

    public void setValor(double novoValor){
        if (novoValor > 0){
            this.valor = novoValor;
        } else {
            throw new IllegalArgumentException("Os valores devem ser maiores que zero!");
        }
    }

    public Tamanho getTamanho(){
        return this.tamanho;
    }

    public void setTamanho(Tamanho novoTamanho){
        this.tamanho = novoTamanho;
    }

    public List<ItemIncluso> getItensInclusos(){
        return this.itensInclusos;
    }

    public void setItensInclusos(List<ItemIncluso> novosItensInclusos){
        this.itensInclusos = novosItensInclusos;
    }

}
