
ko.components.register('match-list', {
    template: { fromUrl: 'components/matchList.html'},
    viewModel: function(params){
        var vm = {};
        vm.title = "Matchs"
        vm.data = ko.observableArray([]);

        vm.add = function(){
            vm.data.push(v.model.match.create());
        };

        vm.selTags = ko.observableArray();
        vm.tags = ko.observableArray([]);
        v.service.tag.list().then(function(tags){
            var data = [];
            _.each(tags, function(tag){
                data.push(v.model.tag.create(tag));
            })
            vm.tags(data);
        })

        var query = ko.computed(function(){
            return {tagIds:vm.selTags()}
        });
        query.subscribe(function(obj){
            v.service.match.list(obj).then(function(matchs){
                var data = [];
                _.each(matchs, function(match){
                    data.push(v.model.match.create(match));
                })
                vm.data(data);
            });
        });

        vm.selTags([9,8]);
        
        return vm;
    }
});
