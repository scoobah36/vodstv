
Object.defineProperty(v.model, "match", v._propDefinition(function() {
    var self = v.model.domain.extend({
        _type:"match",
        id: ko.observable(),
        title: ko.observable(),
        
        vods: ko.observableArray()
        
    });
    return self;
}));
