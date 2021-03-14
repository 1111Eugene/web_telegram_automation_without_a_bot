const { Builder, By, Key } = require("selenium-webdriver");
let fs = require("fs");
// const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options4 = new chrome.Options();

options4.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\telegramsend\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
	"--window-size=1920,1080",
	"--headless",
]);
options4.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver4 = new Builder().forBrowser("chrome").setChromeOptions(options4).build();

telegramSend();

async function telegramSend() {
	// try {
	await driver4.get("http://sphere.irens.net/");
	// await driver4.sleep(400);
	// await driver4.findElement(By.name("email")).sendKeys("user_32465");
	// await driver4.findElement(By.name("password")).sendKeys("73gtqlOzWgqu");
	// await driver4.findElement(By.className("btn btn-primary btn-block")).click();
	let money = await driver4.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div/div/span")).getText();
	await driver4.get("https://web.telegram.org/#/im");
	await driver4.sleep(1000);

	await driver4.actions().sendKeys(Key.BACK_SPACE).perform();
	await driver4.actions().sendKeys("380").perform();
	await driver4.actions().sendKeys(Key.TAB).perform();
	await driver4.actions().sendKeys("991637921").perform();
	await driver4.actions().sendKeys(Key.ENTER).perform();
	await driver4.sleep(1000);
	await driver4.actions().sendKeys(Key.ENTER).perform();
	await driver4.sleep(1000);
	await driver4.actions().sendKeys("47593").perform();
	await driver4.sleep(1000);
	await driver4.actions().sendKeys(Key.ENTER).perform();
	await driver4.sleep(1000);
	let encodedString = await driver4.takeScreenshot();
	await fs.writeFileSync("./image.png", encodedString, "base64");

	// await driver4.findElement(By.className("/html/body/div[1]/div/div[3]/div[2]/form/div[2]/div[1]/input")).click();
	// await driver4.sleep(400);

	// await driver4.findElement(By.xpath("/html/body/div[6]/div[2]/div/div/div[2]/div[1]/input")).sendKeys("+380");
	// let encodedString = await driver4.takeScreenshot();
	// await fs.writeFileSync("./image.png", encodedString, "base64");
	// await driver4.findElement(By.className("countries_modal_country")).click();

	console.log(money);
	// await driver4.get("https://web.telegram.org/#/im");

	// await driver4.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/ul/li[1]/a")).click();
	// console.log(money);
	// await driver4
	// 	.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[3]/div[2]/div/div/div/form/div[2]/div[5]"))
	// 	.sendKeys(`${money}`, Key.ENTER);
	// await driver4.sleep(3000);
	// // player.play("success.mp3");
	await driver4.quit();
	// 	} catch {
	// 		await driver4.get("https://web.telegram.org/#/im");
	// 		await driver4.sleep(3000);
	// 		await driver4.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/ul/li[1]/a")).click();
	// 		await driver4.sleep(1000);
	// 		await driver4
	// 			.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[3]/div[2]/div/div/div/form/div[2]/div[5]"))
	// 			.sendKeys("blablabla", Key.ENTER);
	// 		player.play("failed.mp3");
	// 		await driver4.quit();
	// 	}
}
