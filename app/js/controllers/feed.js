
ko.components.register('feed', {
    template: { fromUrl: 'controllers/feed.html'},
    viewModel: function(){
        var vm = {};
        vm.name = "This is a Feed";
        vm.matches = ko.observableArray();
        
        vm.selTags = ko.observableArray();
        vm.tags = ko.observableArray([]);
        vm.sugTags = ko.observableArray([]);
        v.service.tag.list().then(function(tags){
            var data = [];
            _.each(tags, function(tag){
                data.push(v.model.tag.create(tag));
            })
            vm.tags(data);
        });

        var query = ko.computed(function(){
            return {tagIds:vm.selTags()};
        });
        query.subscribe(function(q){
            v.service.vod.list(q).then(function(matches){
                vm.matches(matches);
            });
            v.service.tag.getSuggested(q.tagIds).then(function(tags){
                vm.sugTags(tags);
            });
        });

        return vm;
    }
});
