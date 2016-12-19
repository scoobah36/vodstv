
ko.components.register('vod-list', {
    template: { fromUrl: 'components/vodList.html', postRender:function(){
        
        $('#vods').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "autoWidth": false
        });
    }},
    viewModel: function(params){
        var vm = {};
        vm.title = "Vods"
        vm.data = ko.observableArray([]);
        v.service.vod.list({tagIds:[9,8]}).then(function(vods){
            var data = [];
            _.each(vods, function(vod){
                data.push(v.model.vod.create(vod));
            })
            vm.data(data);
        })

        vm.add = function(){
            vm.data.push(v.model.vod.create());
        }

        return vm;
    }
});
