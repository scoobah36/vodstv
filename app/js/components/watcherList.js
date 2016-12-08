
ko.components.register('watcher-list', {
    template: { fromUrl: 'components/watcherList.html', postRender:function(){
        
        $('#watchers').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "autoWidth": false
        });
    }},
    viewModel: function(params){
        var vm = {};
        vm.title = "Watchers";
        vm.data = ko.observableArray([]);
        v.service.watcher.list().then(function(watchers){
            var data = [];
            _.each(watchers, function(watcher){
                data.push(v.model.watcher.create(watcher));
            })
            vm.data(data);
        });

        vm.add = function(){
            vm.data.push(v.model.watcher.create());
        }

        return vm;
    }
});
