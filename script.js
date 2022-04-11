const script = {

    board: ['','','','','','','','',''],
    simbols: {
                options: ['O','X'],
                turn_index: 0,
                change: function(){
                    this.turn_index = ( this.turn_index === 0 ? 1:0 );
                }
            },
    container_element: null,
    fimdejogo: false,
    acertos: [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ],

    init: function(container) {
        this.container_element = container;
    },

    make_play: function(position) {
        if (this.fimdejogo) return false;
        if (this.board[position] === ''){
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();
            let acertos_index = this.check_winning_sequences( this.simbols.options[this.simbols.turn_index] );
            if (acertos_index >= 0){
                this.fim_de_jogo();
            } else{
                this.simbols.change();
            }
            return true;
        }
        else {
            return false;
        }
    },

    check_winning_sequences: function(simbol) {

        for ( i in this.acertos ) {
            if (this.board[ this.acertos[i][0] ] == simbol  &&
                this.board[ this.acertos[i][1] ] == simbol &&
                this.board[ this.acertos[i][2] ] == simbol) {
                console.log('Sequência do acerto' + i);
                return i;
            }
        };
        return -1;
    },

    fim_de_jogo: function() {
        this.fimdejogo = true;
        console.log('FIM DE JOGO');
    },

    start: function() {
        this.board.fill('');
        this.draw();
        this.fimdejogo = false;       
    },

    draw: function() {
        let content = '';

        for ( i in this.board ) {
            content += '<div onclick="script.make_play(' + i + ')">' + this.board[i] + '</div>';
        };

        this.container_element.innerHTML = content;
    },
};