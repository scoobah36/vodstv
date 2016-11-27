
Object.defineProperty(v.model, "Base", v._propDefinition(function() {
    var self = v.Object.extend({
        _type:"Base",
        _isVModel: true,
        _mapping:null,
        _uid: v.Alfred.guid(),

        _defineMapping : function(){
            self._mapping = {
                ignore:[]
            };
            v.Alfred.keys(self).forEach(function(key){
                var attr = self[key];
                if(!s.startsWith(key, '_')) {
                    if(self[key] && self[key]._type){
                        self._mapping[key] = {
                            update: function (opt) {
                                var data = ko.unwrap(opt.data);
                                if(opt.target && opt.target.load instanceof Function){
                                    //load existing
                                    if(ko.isObservable(opt.parent[key])){
                                        return ko.unwrap(opt.parent[key].load(data));
                                    }
                                    return opt.target.load(data);
                                }
                                //create new
                                return v.model[attr._type].create(data);
                            }
                        };
                    }else{
                        self._mapping[key] = {
                            update: function (opt) {
                                return ko.unwrap(opt.data);
                            }
                        };
                    }
                }else{
                    self._mapping.ignore.push(key);
                }
            });
        },

        init : function(props) {
            var args = arguments;

            self._defineMapping();

            if(self.preInit) self.preInit.apply(self, args);

            self._empty = self.toJS();
            if(props !== null){
                self.load(props, function(){
                    if(self.postInit) self.postInit.apply(self, args);
                });
            }else{
                if(self.postInit) self.postInit.apply(self, args);
            }


        },

        load : function(data, done){
            //reset obj to a newly created one if loading with null
            if(data === null) {
                data = self._empty;
            }

            //if passed in data is a v.model convert to a plain js obj
            if(data && data.toJS instanceof Function){
                data = data.toJS({}, true);
            }

            try{
                //update self
                ko.mapping.fromJS(data, self._mapping, self);
            } catch (e) {
                console.error(e);
                console.error(e.stack);
            }

            if(done instanceof Function) done();

            return self;
        },

        reset: function(){
            return self.load();
        },

        toJS: function (externalProperties, deep) {
            if(!externalProperties) { externalProperties = {}; }
            var jsObject = {};

            var _process = function (key, attr, callback) {
                if (!(s.startsWith(key, '_') || attr instanceof Function)) {
                    //check for other instances of model objects
                    if (typeof attr === 'object' && attr !== null && attr.toJS instanceof Function) {
                        if(!attr.isNull() || deep){
                            return callback(attr.toJS(externalProperties, deep));
                        }else{
                            return callback(null);
                        }
                    } else if (attr === null || attr === undefined) {
                        return callback(null);
                    } else {
                        return callback(attr);
                    }
                }
            };

            v.Alfred.keys(self).forEach(function(key){
                var attr = ko.unwrap(externalProperties[key] || self[key]);
                if (!(s.startsWith(key, '_') || attr instanceof Function)) {
                    //iterate arrays
                    if (attr instanceof Array) {
                        jsObject[key] = [];
                        attr.forEach(function (item) {
                            _process(key, item, function (result) {
                                if (result !== null) {
                                    jsObject[key].push(result);
                                }
                            });
                        });

                    } else {
                        _process(key, attr, function (result) {
                            jsObject[key] = result;
                        });
                    }
                }
            });
            return jsObject;
        },

        toJSON: function (externalProperties, deep) {
            return JSON.stringify(self.toJS(externalProperties, deep));
        },

        isNull: function(){
            var isNull = true;
            v.Alfred.keys(self).forEach(function(key){
                //found a not null. stop
                if(!isNull) return false;

                var attr = ko.unwrap(self[key]);
                if(s.startsWith(key, '_') || attr instanceof Function)  return true; //continue
                if(attr === null){
                    isNull = true;
                }else if(attr instanceof Array) {
                    isNull = attr.length < 1;
                }else if(attr.isNull instanceof Function) {
                    isNull = attr.isNull();
                }else{
                    isNull = false;
                }
            });
            return isNull;
            
        },

        equals: function(other){
            if(other && other.toJS instanceof Function){
                return JSON.stringify(self.toJS()) === JSON.stringify(other.toJS());
            }
            return false;
        }
    });
    return self;
}));
