ko.components.register('auth', {
    template: { fromUrl: 'controllers/auth.html'},
    viewModel: function(){
        var vm = {}
        var components = {
            login: "auth-login",
            register: "auth-register"
        }

        vm.content = ko.pureComputed(function(){
            var page = "auth-register"
            if(v.page.params() && v.page.params().content){
                page = components[v.page.params().content] || v.page.params().content
            }
            return page;
        });
        return vm;
    }
});