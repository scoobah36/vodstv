ko.components.register('admin', {
    template: { fromUrl: 'controllers/admin.html', postRender:function(){
        $.AdminLTE.layout.activate();
        $(document).ajaxStart(function() { Pace.restart(); });
    }},
    viewModel: function(){
        var vm = {}
        var components = {
            watchers: "watcher-list",
            tags: "tag-list",
            dashboard: "admin-dashboard"
        }

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