const { I } = inject()
Feature('Homepage');

Scenario('Homepage is loaded',  () => {
    I.amOnPage('/')
    I.waitForText('Blocks on chain')
    I.waitForText('Each card represents a block on the chain. Click on a block to see the transactions stored inside.')
    I.waitForText('This block has no transactions')
});
