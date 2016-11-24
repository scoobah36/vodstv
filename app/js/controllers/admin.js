ko.components.register('admin', {
    template: { fromUrl: 'controllers/admin.html'},
    viewModel: function(){
        this.title = "Watchers";
    }
});