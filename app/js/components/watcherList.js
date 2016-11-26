
ko.components.register('watcher-list', {
    template: { fromUrl: 'components/watcherList.html', postRender:function(){
        
        $('#example1').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "autoWidth": false
        });
    }},
    viewModel: function(params){
        this.title = "Watchers";
        this.data = v.service.admin.getWatchers();
    }
});
