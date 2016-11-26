var templateFromUrlLoader = {
    loadTemplate: function(name, templateConfig, callback) {
        if (templateConfig.fromUrl) {
            // Uses jQuery's ajax facility to load the markup from a file
            var fullUrl = '/templates/' + templateConfig.fromUrl + '?cacheAge=' + templateConfig.maxCacheAge;
            $.get(fullUrl, function(markupString) {
                // We need an array of DOM nodes, not a string.
                // We can use the default loader to convert to the
                // required format.
                ko.components.defaultLoader.loadTemplate(name, markupString, callback);
                if(templateConfig.postRender instanceof Function){
                    templateConfig.postRender();
                }
            });
        } else {
            // Unrecognized config format. Let another loader handle it.
            callback(null);
        }
    }
};
 
// Register it
ko.components.loaders.unshift(templateFromUrlLoader);

//global
Object.defineProperty(window, 'v', {
    value:{
        context:"/vod",
        page: ko.observable("match-bank"),
        service:{}
    }
})

page.base("/#");
page('/', function(){
    console.log('feed', arguments);
    // v.page("feed");
})
page('/matchBank', function() {
    v.page("match-bank");
})
page('/admin/:content', function (content) {
    console.log('admin', arguments);
    v.page("admin");
})
page('*', function(){
    page.redirect("/")
})
page()

ko.components.register('app-main', {
    template: { fromUrl: 'main.html'},
    viewModel: function(){
        this.controller = v.page;
    }
});
