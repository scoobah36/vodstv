ko.components.register('auth-login', {
    template: { fromUrl: 'components/authLogin.html'},
    viewModel: function(params){
        var vm = {}
        vm.email = "";
        vm.pass = "";
        vm.login = function(){
            v.Ajax.doPost({
                url: v.api + '/login',
                data: { email: vm.email, password: vm.pass },
                onSuccess: function(data){
                    v.currentUser.load(data);
                    page("/");
                },
            })
        }
        return vm;
    }
});