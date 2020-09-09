const puppeteer = require('puppeteer');

async function getBanRate(name) {

    try {

      const browser = await puppeteer.launch({ timeout: 0 });
      const page = await browser.newPage();
      await page.goto(`https://app.mobalytics.gg/pt_br/lol/champions/${name}/build`, { timeout: 0 });
     
      const dados = page.evaluate(() => {
        const listNode = document.querySelectorAll('span.rolestyles__RateValue-sc-5trqmb-5.bnhKmj');
        const listEn = [...listNode];
        const mapear = listEn.map(opa => opa.textContent);
  
        const listImgs = document.querySelectorAll('div.widget-panelcomponent__Body-m55zwo-5.llxlyN span img');
        const listImn = [...listImgs];
        const mape = listImn.map(img => img.src);
  
        const dots = [mape[9], mape[10]];
  
        return {
          summonerSpells: dots,
          winRate: mapear[0],
          pickRate: mapear[1],
          banRate: mapear[2]
        }
      })
      const result =  await dados
      await browser.close();
      return result;
    }
    catch (err) {
      console.log(err)
    }
}

module.exports = {
  getBanRate
}