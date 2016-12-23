
Object.defineProperty(v.model, "feed", v._propDefinition(function() {
    var self = v.model.domain.extend({
        _type:"feed",
        name: ko.observable(),
        type: ko.observable(),

        tags: ko.observableArray([]),
    });
    return self;
}));
