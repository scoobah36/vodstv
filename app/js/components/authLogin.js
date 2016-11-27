ko.components.register('auth-login', {
    template: { fromUrl: 'components/authLogin.html'},
    viewModel: function(params){
        var vm = {}
        vm.email = "";
        vm.pass = "";
        vm.login = function(){
            $.ajax({
                type: "POST",
                url: v.api + '/watcher/login',
                data: JSON.stringify({ email: vm.email, password: vm.pass }),
                xhrFields: {
                    withCredentials: true
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){
                    v.currentUser.load(data);
                    page("/");
                },
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        }
        return vm;
    }
});