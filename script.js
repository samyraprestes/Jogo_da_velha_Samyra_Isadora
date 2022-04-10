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

    init: function(container){
        this.container_element = container;
    },

    make_play: function(position){
        if(this.gameover) return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();

            this.simbols.change();
        }
    },

    draw: function(){
        let content = '';

        for(i in this,this.board){
            content += '<div onclick = "script.make_play(' + i + ')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    }







};
