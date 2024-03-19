import java.util.concurrent.ThreadLocalRandom;

public class Cofrinho {
    String meta;

    Double saldo = 0.0;

    Boolean cofrinhoQuebrado = false;
    void depositar (Double valorDeposito){
        if(valorDeposito <= 0){
            System.out.println("O valor desposito precisa ser maior que 0");
        } else if (cofrinhoQuebrado == true){
            System.out.println("O cofrinho está quebrado");
        } else{
            saldo+= valorDeposito;
            System.out.println("Deposito efetuado");
        }
    };

    Double quebrarCofre(){
        cofrinhoQuebrado = true;
        return saldo;
    };

    Double agitarCofre(){
        Double valorAleatorio = 0.0;
        if(cofrinhoQuebrado == true){
            System.out.println("Cofrinho já foi quebrado");
        }else{
            valorAleatorio = ThreadLocalRandom.current().nextDouble(0, saldo);

        }
        return valorAleatorio;
    };
}
