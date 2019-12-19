new Vue({
    el: '#desafio',
    data: {
        nome: 'Djalma',
        idade: '35',
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        multi_idade() {
            return this.idade * 3

        },
        aleatorio() {
            return Math.random()
        }
    }
})