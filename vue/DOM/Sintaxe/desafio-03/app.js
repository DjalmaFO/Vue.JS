new Vue({
    el: "#desafio",
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ?
                (this.resultado = "Valor igual a 37!") :
                (this.resultado = "Valor diferente de 37!");
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    }
});