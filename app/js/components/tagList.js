
ko.components.register('tag-list', {
    template: { fromUrl: 'components/tagList.html', postRender:function(){
        
        $('#tags').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "autoWidth": false
        });
    }},
    viewModel: function(params){
        var vm = {};
        vm.title = "Tags"
        vm.data = ko.observableArray([]);
        v.service.tag.list().then(function(tags){
            var data = [];
            _.each(tags, function(tag){
                data.push(v.model.tag.create(tag));
            })
            vm.data(data);
        })

        vm.add = function(){
            vm.data.push(v.model.tag.create());
        }

        return vm;
    }
});
