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
        api: "http://localhost:9000/v1",
        page: {
            comp: ko.observable("match-bank"),
            params: ko.observable()
        },
        service:{}
    }
})

page.base("/#");
page('/', function(ctx){
    console.log('feed', arguments);
    v.page.params(ctx.params);
    // v.page("feed");
    v.page.comp("admin");
});
page('/matchBank', function(ctx) {
    v.page.params(ctx.params);
    v.page.comp("match-bank");
});
page('/admin/:content', function (ctx) {
    console.log('admin', arguments);
    v.page.params(ctx.params);
    v.page.comp("admin");
});
page('/auth/:content', function (ctx) {
    console.log('auth', arguments);
    v.page.params(ctx.params);
    v.page.comp("auth");
});
page();

ko.components.register('app-main', {
    template: { fromUrl: 'main.html'},
    viewModel: function(){
        this.controller = v.page.comp;
    }
});
