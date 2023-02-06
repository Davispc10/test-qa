package selenium;



import java.time.Duration;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class OpenBrowser {

	@Test
	public void test() throws InterruptedException {

		WebDriverManager.chromedriver().setup();

		WebDriver driver = new ChromeDriver();

		driver.get("https://www.saucedemo.com");

		String title = driver.getTitle();

		System.out.println(title);

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofMillis(500));

		WebElement textBox = driver.findElement(By.id("user-name"));
		WebElement submitButton = driver.findElement(By.xpath("//input[@id='user-name']"));

		textBox.sendKeys("standard_user");
		Thread.sleep(3000);
		submitButton.click();

		WebElement textPassword = driver.findElement(By.id("password"));
		WebElement submitPassword = driver.findElement(By.xpath("//input[@id='password']"));

		textPassword.sendKeys("secret_sauce");
		Thread.sleep(3000);
		submitPassword.click();

		WebElement submitLogin = driver.findElement(By.xpath("//input[@id='login-button']"));

		Thread.sleep(3000);
		submitLogin.click();
		
		Thread.sleep(3000);
		WebElement submitMochila = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
		submitMochila.click();

		Thread.sleep(3000);
		WebElement submitBlusa = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']"));
		submitBlusa.click();

		
		Thread.sleep(3000);
		WebElement submitCarrinho = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		submitCarrinho.click();
		
		
		Thread.sleep(3000);
		WebElement submitRemoverBlusa = driver.findElement(By.xpath("//button[@id='remove-sauce-labs-bolt-t-shirt']"));
		submitRemoverBlusa.click();
		

		Thread.sleep(3000);
		WebElement submitContinueComprando = driver.findElement(By.xpath("//button[@id='continue-shopping']"));
		submitContinueComprando.click();
		
		Thread.sleep(3000);
		WebElement submitProdutoCaro = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']"));
		submitProdutoCaro.click();
		
		Thread.sleep(3000);
		WebElement submitCarrinhoNovamente = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		submitCarrinhoNovamente.click();
		
		Thread.sleep(3000);
		WebElement submitCheckout = driver.findElement(By.xpath("//button[@id='checkout']"));
		submitCheckout.click();
		
		WebElement textNome = driver.findElement(By.id("first-name"));
		WebElement submitName = driver.findElement(By.xpath("//input[@id='first-name']"));
		textNome.sendKeys("Maria");
		Thread.sleep(3000);
		submitName.click();
		
		WebElement textSobrenome = driver.findElement(By.id("last-name"));
		WebElement submitLastName = driver.findElement(By.xpath("//input[@id='last-name']"));
		textSobrenome.sendKeys("Amarante");
		Thread.sleep(3000);
		submitLastName.click();
		
		WebElement textCep = driver.findElement(By.id("postal-code"));
		WebElement submitPostalCode= driver.findElement(By.xpath("//input[@id='postal-code']"));
		textCep.sendKeys("39401-861");
		Thread.sleep(3000);
		submitPostalCode.click();
		
		Thread.sleep(3000);
		WebElement submitContinue = driver.findElement(By.xpath("//input[@id='continue']"));
		submitContinue.click();
		

		Thread.sleep(3000);
		WebElement submitFinish = driver.findElement(By.xpath("//button[@id='finish']"));
		submitFinish.click();
		
		Thread.sleep(3000);
		WebElement submitBackHome = driver.findElement(By.xpath("//button[@id='back-to-products']"));
		Thread.sleep(3000);
		submitBackHome.click();
		
		Thread.sleep(1000);
		driver.quit();
	}

}
