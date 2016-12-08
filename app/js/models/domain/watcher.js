Object.defineProperty(v.model, "watcher", v._propDefinition(function() {
    var self = v.model.domain.extend({
        _type:"watcher",
        type: ko.observable(),
        name: ko.observable(),

        feeds: ko.observableArray()
    });
    return self;
}));