
Object.defineProperty(v, "Object", v._propDefinition(function() {
    var self = Object.create({

        init: function (params) {
            //override this in order to do something on object init
        },

        create: function () {

            try{
                //if the object was defined with an init() then call it
                if (typeof self.init === "function")
                    self.init.apply(self, arguments);
            }catch(e){
                console.error(e);
                console.error(e.stack);
            }

            return self;
        },

        extend: function () {
            var objClone = self;
            var args = _.toArray(arguments);
            if (args.length > 0) {
                args.unshift(objClone);
                _.extend.apply(this, args);
            }
            if(self.singleton){
                self.createSingleton();
            }
            return objClone;
        }
    });
    return self;
}, {configurable: false}));
