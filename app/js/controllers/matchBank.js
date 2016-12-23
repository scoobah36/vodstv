ko.components.register('match-bank', {
    template: { fromUrl: 'controllers/matchBank.html'},
    viewModel: function(){
        this.title = "matchBank";
        this.matches = v.service.match.list();
    }
});