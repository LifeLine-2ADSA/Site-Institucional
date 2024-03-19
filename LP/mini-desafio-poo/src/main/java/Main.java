import javax.sound.midi.Soundbank;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        Cofrinho cofre = new Cofrinho();
        Integer opcao ;

        do{
            System.out.println("Digite a meta do seu cofre:");
            cofre.meta = leitor.nextLine();
            System.out.println("""
                    Digite o que deseja fazer?
                    1 - Depositar
                    2 - Quebrar
                    3 - Agitar
                    """);
            opcao = leitor.nextInt();

            switch (opcao){
                case 1:
                    System.out.println("Digite o valor do deposito: ");
                    Double valorDeposito = leitor.nextDouble();
                    cofre.depositar(valorDeposito);
                    break;
                case 2:
                    System.out.println("O saldo final é de R$: " + cofre.quebrarCofre());
                    break;
                case 3:
                    System.out.println("Valor retirado: " + cofre.agitarCofre());
                    break;
            };
        }while (opcao > 0);
    }
}
