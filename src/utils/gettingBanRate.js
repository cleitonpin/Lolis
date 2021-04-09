require('./connection');
const puppeteer = require('puppeteer');
const champions = require('./champions');
const ChampionSchema = require('../models/ChampionSchema');

const dataEvaluation = () => {
	const name = document.querySelector('h1.champion-base-infostyles__ChampionName-sc-100fwq2-3.kHuTSW').textContent.replace('• build', '');
	const listNode = document.querySelectorAll('span.rolestyles__RateValue-sc-5trqmb-5.bnhKmj');
	const listEn = [...listNode];
	const mapear = listEn.map(opa => opa.textContent);

	const listImgs = document.querySelectorAll('div.widget-panelcomponent__Body-m55zwo-5.llxlyN span img');
	const listImn = [...listImgs];
	const mape = listImn.map(img => img.src);
		
	const dots = [mape[9], mape[10]];
	const data = {
		championName: name,
		summonerSpells: dots,
		winRate: mapear[0],
		banRate: mapear[2],
		pickRate: mapear[1]
	}
	ChampionSchema.create(data, (err) => {
		if (err) return console.log(err);
	});

	return true;
}

(async function(){
    try {
		console.log(1);
		const browser = await puppeteer.launch({ timeout: 0 });
		const page = await browser.newPage();
		await page.goto(`https://app.mobalytics.gg/pt_br/lol/champions/Rengar/build`, { timeout: 0 });
			
    	await page.evaluate(dataEvaluation);
		await browser.close();
    }
    catch (err) {
    	console.log(err)
    }
})();