// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const app = new Vue (
    {
        el: '#app',
        data: {
            textNew: '',
            todo: [
                {
                    text: 'fare bucato',
                    done: false,
            }
        ]
        },
        methods: {
            add: function() {
                let newTodo = {
                    text: this.textNew,
                    done: false,
                }
                this.todo.unshift(newTodo)
                this.textNew = ''
            },
            checked: function() {
                this.done = true;
                console.log('click');
            }
        }
    
    }
);