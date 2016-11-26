ko.components.register('admin', {
    template: { fromUrl: 'controllers/admin.html', postRender:function(){
        $.AdminLTE.layout.activate();
        $(document).ajaxStart(function() { Pace.restart(); });
        $('.ajax').click(function(){
            $.ajax({url: '#', success: function(result){
                $('.ajax-content').html('<hr>Ajax Request Completed !');
            }});
        });
    }},
    viewModel: function(){
        this.title = "Watchers";
        this.page = "watcher-list";


    }
});