package stepDefinition;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GmailLoginSteps {
	WebDriver driver;
	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Elcot\\Desktop\\drivers\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("http://mail.google.com");
		Thread.sleep(3000);
	}

	@When("^User enters the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_the_username_as_and_password_as(String userName, String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("identifierId")).sendKeys(userName);
		driver.findElement(By.id("identifierNext")).click();
		Thread.sleep(3000);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@When("^clicks on the login button$")
	public void clicks_on_the_login_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("passwordNext")).click();
	}

	@Then("^user should be getting error message$")
	public void user_should_be_getting_error_message() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String message=driver.findElement(By.xpath("//*[@id='password']/div[2]/div[2]")).getText();
		if(message.contains("Wrong")){
			System.out.println("Working as expected");
		}
		else{
			System.out.println("Something is wrong");
		}
	}
}
