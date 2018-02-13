package com.saucelabs.appium;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.ios.IOSDriver;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * Simple <a href="https://github.com/appium/appium">Appium</a> test which runs against a local Appium instance deployed
 * with the 'TestApp' iPhone project which is included in the Appium source distribution.
 *
 * @author Ross Rowe
 */
@SuppressWarnings("deprecation")
public class SimpleTest {

    private AppiumDriver<WebElement> driver;

    private List<Integer> values;

    private static final int MINIMUM = 0;
    private static final int MAXIMUM = 10;

    @Before
    public void setUp() throws Exception {
        // set up appium


        // /Users/amusse/reactStuff/testProject/ios/build/Build/Products/Debug-iphonesimulator
        File appDir = new File(System.getProperty("user.dir"), "../ios/build/Build/Products/Debug-iphonesimulator");
        File app = new File(appDir, "testProject.app");
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformVersion", "11.0");
        capabilities.setCapability("deviceName", "iPhone 6");
        capabilities.setCapability("app", app.getAbsolutePath());
        driver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
        values = new ArrayList<Integer>();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }

    private void populate() {
        //populate text fields with two random number
        List<WebElement> elems = driver.findElements(By.className("UIATextField"));
        Random random = new Random();
        for (WebElement elem : elems) {
            int rndNum = random.nextInt(MAXIMUM - MINIMUM + 1) + MINIMUM;
            elem.sendKeys(String.valueOf(rndNum));
            values.add(rndNum);
        }
    }

    private Point getCenter(WebElement element) {

      Point upperLeft = element.getLocation();
      Dimension dimensions = element.getSize();
      return new Point(upperLeft.getX() + dimensions.getWidth()/2, upperLeft.getY() + dimensions.getHeight()/2);
    }

    @Test
    public void testUIComputation() throws Exception {

        // populate text fields with values
        // trigger computation by using the button

        driver.findElementByAccessibilityId("chartButton").click();
        // button.click();

        Thread.sleep(400);
        WebElement button2 = driver.findElementByAccessibilityId("Open Next Chart");
        assertTrue(button2.isDisplayed());
        Thread.sleep(2000);
        button2.click();
        Thread.sleep(2000);

        // driver.findElementByAccessibilityId("chartButton3").click();
        // Thread.sleep(500);

        // driver.findElementByAccessibilityId("chartButton4").click();
        // Thread.sleep(500);



        // WebElement button2 = driver.findElement(MobileBy.AccessibilityId("chartButton2"));
        // button2.click();
        // Thread.sleep(6000);

        // WebElement button3 = driver.findElement(MobileBy.AccessibilityId("chartButton3"));
        // button3.click();
        // Thread.sleep(6000);


        // WebElement button4 = driver.findElement(MobileBy.AccessibilityId("chartButton4"));
        // button4.click();
        // is sum equal ?
        // WebElement texts = driver.findElement(By.AccessibilityId("button"));
        // assertEquals(String.valueOf(values.get(0) + values.get(1)), texts.getText());
    }
}
