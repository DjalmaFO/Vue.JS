new Vue({
    el: '#desafio',
    data: {
        valor: ' '
    },
    methods: {
        alertar(evente) {
            alert('Botao clicado!!!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})