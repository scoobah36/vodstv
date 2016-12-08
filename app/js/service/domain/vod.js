Object.defineProperty(v.service, 'vod', v._propDefinition(function() {
    var self = v.service.domain.extend({
        model:"vod"
    });
    return self;
}));