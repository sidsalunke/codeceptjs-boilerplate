
Feature('Search bar');

Scenario('Search for an item', (I) => {
  I.amOnPage('/');
  I.fillField('input[title="Search"]', 'Macbook pro 2019');
  I.pressKey('Enter');
  I.seeTitleEquals('Macbook pro 2019 - Google Search');
});
