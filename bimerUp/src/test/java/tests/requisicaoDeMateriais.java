package tests;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TestName;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class requisicaoDeMateriais {
    private WebDriver navegador;

    @Rule
    public TestName test = new TestName();

    @Before
    public void setUp(){
        //Abrir o navegador do BimerUp
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Arthursantos.dsn.erp\\Drivers\\chromedriver.exe");
        navegador = new ChromeDriver();

        //Navegar para a página do BimerUp
        navegador.get("http://PAT1715:8047/#/");
        navegador.manage().window().maximize();
        navegador.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @Test
    public void acessoUsuario(){
        // Informar no Id Login o usuário "Adriana"
        navegador.findElement(By.id("login")).sendKeys("Adriana");

        // Informar a senha do usuário
        navegador.findElement(By.id("senha")).sendKeys("123456");

        // Clicar no botão para efetuar login
        navegador.findElement(By.name("icone-efetuar-login")).click();

        // Abrir o menu 'Estoque'
        navegador.findElement(By.linkText("Estoque")).click();

        // Abrir o menu Nova requisição.
        navegador.findElement(By.linkText("Nova requisição")).click();
        //navegador.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        // Selecionar o setor requisitante
        navegador.findElement(By.name("SetorRequisitante")).click();















        //navegador.findElement(By.cssSelector("ng-select-bimerUp ng-select ng-select-single ng-select-searchable ng-pristine ng-valid ng-touched ng-select-bottom"));
        //navegador.findElement(By.name("SetorRequisitante")).click();


        //WebElement setorRequisitante = navegador.findElement(By.className("Setor requisitante"));
        //String textoNoElementoSetorRequisitante = setorRequisitante.getText();
        //assertEquals("Setor requisitante", textoNoElementoSetorRequisitante);

    }



}
