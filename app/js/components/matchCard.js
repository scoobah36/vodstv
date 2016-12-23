ko.components.register('match-card', {
    template: { fromUrl: 'components/matchCard.html'},
    viewModel: function(params){
        var vm = {};
        vm.title = "test";
        vm.tags = [];
        
        vm.match = v.model.match.create()
        if(params.match){
            vm.match.load(params.match)
        }
        return vm;
    }
});