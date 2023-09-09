const Gerencianet = require('gn-api-sdk-node')
// let options = require('../../credentials')

const options = {
	sandbox: true,
	client_id: 'Client_Id_2e3dc6c5732517f617bc46752113c39fd0a686d6',
	client_secret: 'Client_Secret_e3ff9ca77f6ca4270cafe3042602282f8e48a788',
	certificate: '../certificados/homologacao-493471-VibraBlockApp.p12',
}

options['validateMtls'] = false

let body = {
	webhookUrl: 'https://exemplo-pix/webhook',
}

let params = {
	chave: '039577bb-6b84-4e61-89d0-d63c7887bc02',
}

const gerencianet = new Gerencianet(options)

gerencianet.pixConfigWebhook(params, body)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
