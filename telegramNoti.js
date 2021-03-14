const { Builder, By, Key, until } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options4 = new chrome.Options();

options4.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\telegramnoti\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
]);
options4.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver4 = new Builder().forBrowser("chrome").setChromeOptions(options4).build();

telegramSend();

async function telegramSend() {
	let messageDb = new Array();
	// for (;;) {
	await driver4.get("https://web.telegram.org/#/im");
	await driver4.sleep(3000);
	count = 2;
	await driver4.wait(until.elementLocated(By.xpath(`/html/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/ul/li[${count}]/a`)), 1000).click();
	let link = await driver4.findElement(By.tagName("a"));
	let blabla = await link.findElements(By.className("im_message_author"));
	console.log(blabla);
	// let authorDiv = await driver4.findElements(By.className("im_message_author"));
	// for (let e of authorDiv) {
	// 	let authors = await e.getText();
	// 	console.log(authors);
	// 	console.log(messageDb);
	// 	console.log(authorDiv);
	// }
}

// if Кристина Чернова IRENS

// }
