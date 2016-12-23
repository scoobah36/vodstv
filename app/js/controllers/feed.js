ko.components.register('feed', {
    template: { fromUrl: 'controllers/feed.html'},
    viewModel: function(){
        var vm = {};
        vm.name = "This is a Feed";
        vm.matches = ko.observableArray();
        v.service.match.list().then(function(matches){
            vm.matches(matches);
        })
        return vm;
    }
});