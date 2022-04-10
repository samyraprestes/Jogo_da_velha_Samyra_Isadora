const script = {
    board: ['','','','','','','','',''],
    simbols: {
        options: ['X','O'],
        turn_index:0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    container_element: null,
    gameover: false,
    acertos: [
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    ],

    init: function(container){
        this.container_element = container;
    },

    make_play: function(position){
        if(this.gameover) return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();
            let acertos_index = this.check_acertos(this.simbols.options [this.simbols.turn_index]);
            if(acertos_index >= 0){
                this.fim_de_jogo();
            }else{

            this.simbols.change();
            }
            return true;
        } else{
            return false;
        }
    },

    fim_de_jogo: function(){
        this.gameover = true;
        console.log("FIM DE JOGO");
    },
    
    sequencias_venc: function(simbol){
        for(i in this.sequencias_venc){
            if(this.board[this.sequencias_venc[i][0]] == simbol &&
                this.board[this.sequencias_venc[i][1]] == simbol &&
                this.board[this.sequencias_venc[i][2]] == simbol ){
                    console.log('Sequência vencedora: ' + i);
                    return i;
                }
        }
    },

    draw: function(){
        let content = '';
        for(i in this,this.board){
            content += '<div onclick = "script.make_play(' + i + ')">' + this.board[i] + '</div>';
        }       
        this.container_element.innerHTML = content;
    },
    
    apagar: function (){
        this.board = ['','','','','','','','','']
        this.draw();
    },
};


