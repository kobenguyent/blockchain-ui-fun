const { I } = inject()
Feature('Create transactions page');


Before(() => {
    I.amOnPage('/')
    I.waitForText('Blocks on chain')
    I.click('$createTransaction')
    I.waitInUrl('/#/createTransaction')
})
Scenario('Create transactions page is loaded',  () => {
    I.dontSee('Blocks on chain')
});

Scenario('Create new transaction successfully',  () => {
    I.fillField('$form-amount', 10)
    I.click('$form-createTransaction')
    I.waitForText('Woohoo, your transaction is created successfully!')
});
