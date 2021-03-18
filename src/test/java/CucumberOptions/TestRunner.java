package CucumberOptions;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(jsonReport = "target/cucumber.json",
        overviewReport = true,
        outputFolder = "target")
@CucumberOptions(
        features = "src/test/java/features",
        glue = "stepDefinations" ,
        plugin = { "json:target/cucumber.json", "pretty","html:target/cucumber-reports" ,
                "html:target/cucumber-html-report",
                "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
                "usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml"}
)

public class TestRunner {
}
