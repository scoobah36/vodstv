Object.defineProperty(v.service, 'watcher', v._propDefinition(function() {
    var self = v.service.domain.extend({
        model:"watcher"
    });
    return self;
}));