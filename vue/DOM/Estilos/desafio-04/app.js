new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false
	},
	methods: {
		iniciarEfeito() {
			return {
				encolher: this.aplicarEfeito,
				destaque: !this.aplicarEfeito
			}

		},
		iniciarProgresso() {

		}
	}
})
