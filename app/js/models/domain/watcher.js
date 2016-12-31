Object.defineProperty(v.model, "watcher", v._propDefinition(function() {
    var self = v.model.domain.extend({
        _type:"watcher",
        type: ko.observable(),
        username: ko.observable(),
        email: ko.observable(),

        feeds: ko.observableArray()
    });
    return self;
}));