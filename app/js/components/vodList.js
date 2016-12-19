
ko.components.register('vod-list', {
    template: { fromUrl: 'components/vodList.html'},
    viewModel: function(params){
        var vm = {};
        vm.title = "Vods"
        vm.data = ko.observableArray([]);

        vm.add = function(){
            vm.data.push(v.model.vod.create());
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
            v.service.vod.list(obj).then(function(vods){
                var data = [];
                _.each(vods, function(vod){
                    data.push(v.model.vod.create(vod));
                })
                vm.data(data);
            });
        });

        vm.selTags([9,8]);
        
        return vm;
    }
});
