public class BilheteUnico {
    String nomeTitular;

    Double saldo;

    String codigo;

    void carregar(Double valorRecarga){
        if(valorRecarga <= 0){
            System.out.println("Valor inválido");
        }else {
            saldo+= valorRecarga;
            System.out.println("Recarga efetuada");
        }
    };


}
