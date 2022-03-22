const puppeteer = require('puppeteer');

async function getPic(){
    const browser = await puppeteer.launch();
    var gh = 0;
    while(gh < 1000){
        const context = await browser.createIncognitoBrowserContext();
        // Create a new page in a pristine context.
        const page = await context.newPage();
        //const page = await browser.newPage({context : 'context' + gh});
        await page.goto('https://bokapass.nemoq.se/Booking/Booking/Index/stockholm',{waitUntil: 'networkidle2'});

        //You'll get this value from inspect element -> right click on the html tag of the form -> copy -> copy selector(for input tags)
        await page.focus('#custom_css > div.platform.ng-isolate-scope > div > div > div > div > div:nth-child(3) > div > div > div.entry-detail.ng-scope > div > div:nth-child(2) > div.col-sm-4 > div.main-actions-container.css-panel > div.vote-container.wp_voting_methods.ng-scope > div > div > div.now.ng-scope > form > div > input');

        //Generating random email ID
        var email = "k" + Math.random() + "@g.com";
        await page.keyboard.type(email);

        //Submitting form
        //You'll get this value from inspect element -> right click on the html tag of the form -> copy -> copy selector(for submit button)
        await page.click('#custom_css > div.platform.ng-isolate-scope > div > div > div > div > div:nth-child(3) > div > div > div.entry-detail.ng-scope > div > div:nth-child(2) > div.col-sm-4 > div.main-actions-container.css-panel > div.vote-container.wp_voting_methods.ng-scope > div > div > div.now.ng-scope > form > div > button');
        console.log("done for" + gh);
        gh++;
    }
    await browser.close();
}

getPic();