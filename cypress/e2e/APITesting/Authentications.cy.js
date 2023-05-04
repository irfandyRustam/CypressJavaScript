describe("Authentication", () => {
  it("Basic Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  it("Digest Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        username: "postman",
        password: "password",
        method: "degest",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  const token = "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";
  it("Bearer Token Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("API Key Authentication", () => {
    cy.request({
      method: "GET",
      url: "api.openweathermap.org/data/2.5/forecast/daily",
      qs: {
        q: "Delhi",
        appid: "6476ad4ee0a65f599545127a3831e129", // API key and value
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
