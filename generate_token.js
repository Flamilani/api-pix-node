//Desenvolvido pela Consultoria Técnica da Efí

"use strict";
const https = require("https");
var axios = require("axios");
var fs = require("fs");

//Insira os valores de suas credenciais em desenvolvimento do pix
var credenciais = {
  client_id: "Client_Id_d708d14215ac1bc0da1ec61c82875c98ebaa88b2",
  client_secret: "Client_Secret_afa19264c021fd3bfc5250ee321f819bf3622b99",
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Codificando as credenciais em base64
var auth = Buffer.from(data_credentials).toString("base64");

//Consumo em desenvolvimento da rota post oauth/token
var config = {
  method: "POST",
  url: "https://cobrancas-h.api.efipay.com.br/v1/authorize",
  headers: {
    Authorization: "Basic " + auth,
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});