import { test } from '@playwright/test';


const priceThreshold : number = 450.00;
const convertPrice = priceThreshold.toFixed(2);
//const CURRENCY_SYMBOL = '$';


test('test', async ({ page }) => {
await page.goto(`https://p2p.binance.com/es/trade/all-payments/USDT?fiat=ARS`);

 const price = page.locator('div[class="css-1m1f8hn"]');
 const priceCount = await price.count();

 //console.log(priceCount);
 
 for(let i=0; i < priceCount; i++){
    const currentPrice = price.nth(i);
    const textContent = await currentPrice.textContent();
    const priceFormat = Number(textContent.substring(textContent.indexOf('') - 1));
    //console.log(priceFormat);
    
    if (priceFormat < priceThreshold){
        console.log(`Se encontraro el precio ${priceFormat} que es menor al consultado ${convertPrice}`)
    }
 }
});