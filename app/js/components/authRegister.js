ko.components.register('auth-register', {
    template: { fromUrl: 'components/authRegister.html'},
    viewModel: function(params){
        var vm = {}
        vm.username = ko.observable();
        vm.email = ko.observable();
        vm.pass = ko.observable();
        vm.passCheck = ko.observable();
        vm.passMatch = ko.computed(function(){
            return vm.pass() === vm.passCheck();
        });

        vm.termsCheck = ko.observable(false);

        vm.login = function(){
            if(vm.termsCheck()){
                v.Ajax.doPost({
                    url: v.api + '/register',
                    data: { username: vm.username(), email: vm.email(), password: vm.pass() },
                    onSuccess: function(data){
                        v.currentUser.load(data);
                        page("/");
                    },
                })
            }else{
                alert("must agree to terms");
            }
            
        }
        return vm;
    }
});