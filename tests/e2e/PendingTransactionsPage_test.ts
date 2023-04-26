const { I } = inject()
Feature('Pending transactions page');

Scenario('Pending transactions page is loaded',  () => {
    I.amOnPage('/')
    I.waitForText('Blocks on chain')
    I.click('[data-testid="showPendingTransactions"]')
    I.waitInUrl('/#/pendingTransaction')
    I.dontSee('Blocks on chain')
});
