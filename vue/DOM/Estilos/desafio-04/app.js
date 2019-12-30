new Vue({
    el: '#desafio',
    data: {
        aplicarEfeito: 'destaque',
        perigo: true,
        classeCSS: '',
        ativar: '',
        cor: '',
        estilo: {
            width: '200px',
            height: '200px'
        },
        width: '0'
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                    this.aplicarEfeito = this.aplicarEfeito == 'destaque' ?
                        'encolher' :
                        'destaque'
                },
                1000)

        },
        iniciarProgresso() {
            let valor = 0
            const temporizador = setInterval(() => {
                valor += 4
                this.width = valor + '%' //`${valor}%`
                if (valor == 100) clearInterval(temporizador) // para reiniciar => valor = 0
            }, 500)

        },
        setPerigo(event) {
            if (event.target.value == 'liga') {
                this.perigo = true
            } else if (event.target.value == 'desliga') {
                this.perigo = false
            }
        }
    }
})