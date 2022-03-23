var moment = require('moment');

describe('Pass', function() {

    before(browser => browser.navigateTo('https://bokapass.nemoq.se/Booking/Booking/Index/stockholm'));

    it('Boka tid', function(browser) {
        browser
            // Startsidan
            .waitForElementVisible('body')
            .assert.visible('input[type=submit]')
            .pause(1000)
            .click('input[type=submit]')

            // Dataskyddsinformation, välja antal personer
            .waitForElementVisible('body')
            .click('#AcceptInformationStorage')
            .click('#NumberOfPeople option[value="2"]')
            .pause(1000)
            .click('input[type=submit]')

            // Boende - ja, jag bor i Sverige
            .waitForElementVisible('body')
            .click('#ServiceCategoryCustomers_0__ServiceCategoryId')
            .click('#ServiceCategoryCustomers_1__ServiceCategoryId')
            .pause(1000)
            .click('input[type=submit]')

            // Sök tid - första lediga tid
            .waitForElementVisible('body')
            .click('input[name=TimeSearchFirstAvailableButton]')

            // Sök tid - resultat
            .waitForElementVisible('body')
            .pause(1000)
            .getValue('input[id=datepicker]', function(result) {
                console.log("Date: " + result.value);
                const isBefore = moment(result.value).isBefore('2022-09-26');
                console.log(isBefore);
                if (isBefore) {
                    // Get all buttons at
                    this.elements('css selector', 'div[data-sectionid="43"]', function (result) {
                        // Check for suitable time
                        for (var i = 0; i < result.value.length; i++) {
                            const id = result.value[i];
                            console.log(id);
                        }
                        console.log(result);
                        console.log(result.value);
                        console.log(result.value[0].elementIdText);
                        console.log(result[0].elementIdValue);

                    });

                    this.pause(1000);
                    this.click('input[id=booking-next]');
                    this.waitForElementVisible('body');

                    // Enter info
                    this.setValue('#Customers_0__BookingFieldValues_0__Value', 'förnamn');
                    this.setValue('#Customers_0__BookingFieldValues_1__Value', 'efternamn');
                    this.click('#Customers_0__Services_0__IsSelected');

                }
            })
            .pause(10000000)
    });

    after(browser => browser.end());
});