Object.defineProperty(v.service, 'feed', v._propDefinition(function() {
    var self = v.service.domain.extend({
        model:"feed"
    });
    return self;
}));