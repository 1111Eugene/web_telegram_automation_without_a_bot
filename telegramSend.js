const { Builder, By, Key } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options4 = new chrome.Options();

options4.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\telegramsend\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
]);
options4.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver6 = new Builder().forBrowser("chrome").setChromeOptions(options4).build();

telegramSend();

async function telegramSend() {
	try {
		await driver6.get("http://sphere.irens.net");
		await driver6.sleep(3000);
		let money = await driver6.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div/div/span")).getText();
		await driver6.get("https://web.telegram.org/#/im");
		await driver6.sleep(3000);
		await driver6.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/ul/li[4]/a")).click();
		await driver6.sleep(1000);
		await driver6
			.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[3]/div[2]/div/div/div/form/div[2]/div[5]"))
			.sendKeys(`${money}`, Key.ENTER);
		await driver6.sleep(3000);
		// player.play("success.mp3");
		await driver6.quit();
	} catch {
		await driver6.get("https://web.telegram.org/#/im");
		await driver6.sleep(3000);
		await driver6.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/ul/li[4]/a")).click();
		await driver6.sleep(1000);
		await driver6
			.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[3]/div[2]/div/div/div/form/div[2]/div[5]"))
			.sendKeys("0", Key.ENTER);
		player.play("failed.mp3");
		await driver6.quit();
	}
}
