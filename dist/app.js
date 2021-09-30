const cards = [
    
  ]; 
  
  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newQuestion: '',
      newAnswer: '',
      flipped:false,
      error: false
    },
    methods: {
      toggleCard: function(card){
        card.flipped = !card.flipped;
      },
      addNew: function(){
        if(!this.newQuestion || !this.newAnswer){
          this.error = true;
        } else {
          this.cards.push({
            question: this.newQuestion,
            answer: this.newAnswer,
            flipped: false
          });
          this.newQuestion = '';
          this.newAnswer= '';
          this.error = false;
        }
      }
    }
  });