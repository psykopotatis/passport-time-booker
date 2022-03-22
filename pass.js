describe('Pass', function() {

    before(browser => browser.navigateTo('https://bokapass.nemoq.se/Booking/Booking/Index/stockholm'));

    it('Boka tid', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Tidsbokning för pass / nationellt id-kort')
            .assert.visible('input[type=submit]')
            .pause(1000)
            .click('input[type=submit]')
            .waitForElementVisible('body')
            .pause(1000)
            .assert.visible('#AcceptInformationStorage')
            .click('#AcceptInformationStorage')
            .click('#NumberOfPeople')
            .click('#NumberOfPeople option[value="2"]')
            .pause(1000)
            .click('input[type=submit]')
            .waitForElementVisible('body')
            .click('#ServiceCategoryCustomers_0__ServiceCategoryId')
            .click('#ServiceCategoryCustomers_1__ServiceCategoryId')
            .pause(1000)
            .click('input[type=submit]')
            .waitForElementVisible('body')
            .click('input[name=TimeSearchFirstAvailableButton]')
            .waitForElementVisible('body')

            .pause(10000)

    });

    after(browser => browser.end());
});