const PROXY_CONFIG = [
  {
    context: [
      //"/weatherforecast",
      "/invoices/invoices"
    ],
    target: "https://localhost:7120",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
