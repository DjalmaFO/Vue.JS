new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        // se houver resultado
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods: {
        starGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },

        ataque(especial) {
            this.ferimento('playerLife', 7, 12, false, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.ferimento('monsterLife', 5, 10, especial, 'Monstro', 'Jogador', 'monster')
            }
        },
        ferimento(atributo, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const ferimento = this.getRandom(min + plus, max + plus)
                //pega o valor maior da expressao
            this[atributo] = Math.max(this[atributo] - ferimento, 0)
            this.registerLog(`O ${source} atingiu ${target} com um hit de ${ferimento}!`, cls)
        },

        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        curar(min, max) {
            const curar = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + curar, 100)
            this.registerLog(`O jogador foi curado em ${curar} HP!`, 'player')
        },
        curaEferimento() {
            this.curar(10, 15)
            this.ferimento('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        registerLog(text, cls) {
            // dados novos ficam a cima, ao contrario seria "Push"
            this.logs.unshift({ text, cls })
        }

    },
    watch: {
        hasResult(value) {
            if (value) {
                this.running = false
            }
        }
    },
})