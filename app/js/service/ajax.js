
Object.defineProperty(v, "Ajax", {
    value:{
        getDefaultAjaxOptions : function(){
            return {
                url: '',
                type: 'GET',
                cache: false,
                async: true,
                contentType: "application/json; charset=utf-8",
                xhrFields: {
                    withCredentials: true
                },
                dataType: "json",
                data: {},
                onSuccess: function(response){
                },
                onError: function(response){
                },
                onComplete:function(){
                }
            };
        },

        _buildAjax :function (options){
            var self = this;

            _.extend(options.body, options.data);

            if(options.type === "POST"){
                options.body = JSON.stringify(options.data);
            }
            return {
                url: options.url,
                type: options.type,
                cache: options.cache,
                async: options.async,
                contentType: options.contentType,
                dataType: options.dataType,
                data: options.body,
                success:function(response){
                    if(options.contentType.toLowerCase().indexOf("json") > 0 && typeof response === "string"){
                        response = self._tryParseJson(response);
                    }

                    options.onSuccess(response);
                    options.response = response;
                },
                error:function(response){
                    if(options.contentType.toLowerCase().indexOf("json") > 0 && typeof response.responseText === "string"){
                        response = self._tryParseJson(response.responseText);
                    }
                    if(options.onError !== null){
                        options.onError(response);
                    }
                    options.response = response;
                },
                complete:function(){
                    if(options.onComplete !== null){
                        options.onComplete();
                    }

                }
            };
        },

        _tryParseJson: function(text){
            if(v.Alfred.isJson(text)){
                return JSON.parse(text);
            }else{
                return {success:false, data: text, message: "Response was not JSON."};
            }
        },

        doPost: function(options){
            var self = this;
            var ajaxOptions = self.getDefaultAjaxOptions();
            options.type = 'POST';
            _.extend(ajaxOptions, options);
            return self._sendAjax(self._buildAjax(ajaxOptions));
        },

        doGet : function(options){
            var self = this;
            var ajaxOptions = self.getDefaultAjaxOptions();
            _.extend(ajaxOptions, options);
            return self._sendAjax(self._buildAjax(ajaxOptions));
        },

        getTemplate : function(options){
            var self = this;
            var ajaxOptions = self.getDefaultAjaxOptions();
            options.contentType = "application/x-www-form-urlencoded";
            options.dataType = "html";
            _.extend(ajaxOptions, options);
            return self._sendAjax(self._buildAjax(ajaxOptions));
        },

        _sendAjax : function(options){
            return $.ajax(options);
        }
    }
});
