Object.defineProperty(v.model, "watcher", v._propDefinition(function() {
    var self = v.model.Base.extend({
        _type:"watcher",
        type: ko.observable(),
        name: ko.observable()
    });
    return self;
}));