const Gerencianet = require('gn-api-sdk-node')
// const options = require('../../credentials')

const options = {
	sandbox: true,
	client_id: 'Client_Id_2e3dc6c5732517f617bc46752113c39fd0a686d6',
	client_secret: 'Client_Secret_e3ff9ca77f6ca4270cafe3042602282f8e48a788',
	certificate: '../certificados/homologacao-493471-VibraBlockApp.p12',
}

let params = {
	inicio: '2022-01-22T16:01:35Z',
	fim: '2022-11-30T20:10:00Z',
}

const gerencianet = new Gerencianet(options)

gerencianet.pixListCharges(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
