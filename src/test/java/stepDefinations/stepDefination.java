package stepDefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefination {

    @Given("^User is on NetBanking landing page$")
    public void userIsOnNetBankingLandingPage() {
        System.out.println("test1");

    }

    @When("^User login into application with username and password$")
    public void userLoginIntoApplicationWithUsernameAndPassword() {
        System.out.println("test2");
    }

    @Then("^Home page is populated$")
    public void homePageIsPopulated() {
        System.out.println("test3");

    }
    @When("^User login into application with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_login_into_application_with_username_and_password(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(arg1);
        System.out.println(arg2);
    }

    @Then("^Cards are displayed \"([^\"]*)\"$")
    public void cards_are_displayed(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(arg1);
    }
}
