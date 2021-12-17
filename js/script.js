// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


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
                if (this.textNew != '') {
                    let newTodo = {
                        text: this.textNew,
                        done: false,
                    }
                    this.todo.unshift(newTodo)
                    this.textNew = ''
                }
            },
            checked: function(index) {
                this.todo[index].done = !this.todo[index].done;
                console.log('click');
            },
            cancel: function(index){
                this.todo.splice(index, 1)
            }
        }
    
    }
);