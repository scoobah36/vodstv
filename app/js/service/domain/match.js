Object.defineProperty(v.service, 'match', v._propDefinition(function() {
    var self = v.service.domain.extend({
        model:"match",
        urls:{
            list: v.api + '/matches'
        },
    });
    return self;
}));