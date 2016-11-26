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
        var vm = {}
        var components = {
            watchers: "watcher-list",
            dashboard: "admin-dashboard"
        }

        vm.title = "Watchers";
        vm.content = ko.pureComputed(function(){
            var page = "watcher-list"
            if(v.page.params() && v.page.params().content){
                page = components[v.page.params().content] || v.page.params().content
            }
            return page;
        });
        return vm;
    }
});