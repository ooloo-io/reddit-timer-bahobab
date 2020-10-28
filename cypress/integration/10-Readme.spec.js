import describeOnBranches from '../utils/describeOnBranches';

describeOnBranches('readme')('Readme', () => {
  before(() => {
    cy.stubFetch();
  });

  beforeEach(() => {
    cy.initMockRedditAPI();
    cy.visitWithStubbedFetch('/search/javascript');
    cy.waitForRedditRequests();
  });

  it('Has h2 headline "Color Scheme" and two radio buttons', () => {
    cy.contains('Color Scheme');

    cy.get('[type="radio"]').check('hourBackgroundDefault');
    cy.get('[type="radio"]').check('hourBackground1');
  });

  it('Has h2 headline "Show Posts in Modal Window" and one checkbox to choose how to display posts table', () => {
    // click Sunday 6 am, the "5" in the heatmap
    cy.contains(/^5$/)
      .click();

    cy.get('#viewInModal').check();
    cy.get('[data-testid="postsModal"]').get('[data-cy="closeModal"]').click();
    cy.get('#viewInModal').uncheck();
  });
});
