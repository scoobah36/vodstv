
ko.components.register('feed-list', {
    template: { fromUrl: 'components/feedList.html', postRender:function(){
        
        $('#feeds').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "autoWidth": false
        });
    }},
    viewModel: function(params){
        var vm = {};
        vm.title = "Feeds"
        vm.data = ko.observableArray([]);
        v.service.feed.list().then(function(feeds){
            var data = [];
            _.each(feeds, function(feed){
                data.push(v.model.feed.create(feed));
            })
            vm.data(data);
        })

        vm.add = function(){
            vm.data.push(v.model.feed.create());
        }

        return vm;
    }
});
