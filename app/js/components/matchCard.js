ko.components.register('match-card', {
    template: { fromUrl: 'components/matchCard.html'},
    viewModel: function(params){
        this.title = "test";
        this.tags = [];

        if(params.match){
            this.title = params.match.title;
            this.tags = params.match.tags;
        }
    }
});