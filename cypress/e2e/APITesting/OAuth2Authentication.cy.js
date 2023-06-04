// Pre-requisite: generate Auth code
// https://github.com/login/oauth/authorize/{client_id}
// Ex: https://github.com/login/oauth/authorize?client_id=xxxxxxxxxxxxxxx

/* 1) Get the OAuth2 access token
POST: https://github.com/login/oauth/access_token
Query params
    ----
    client_id
    client_secret
    code

2) Send GET request by using access token
GET: https://api.github.com/user/repos
Auth: accessToken

*/
describe("OAuth2", () => {
  let accessToken = "";
  let githubData;
  before(() => {
    cy.fixture("githubAuth.json").then((data) => {
      githubData = data;
    });
  });

  it("Get OAuth2 access token", () => {
    cy.request({
      method: "POST",
      url: "https://github.com/login/oauth/access_token",
      qs: {
        client_id: githubData.client_id,
        client_secret: githubData.client_secret,
        code: githubData.code,
      },
    }).then((response) => {
      // access_token=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&scope=&token_type=bearer
      const params = response.body.split("&");
      accessToken = params[0].split("=")[1];
    });
  });

  it("OAuth2.0 Demo", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.equal(542028480);
    });
  });
});
