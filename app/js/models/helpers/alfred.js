
Object.defineProperty(v, "Alfred", {
    value:{
        dateViewFormat: "MM/DD/YYYY",
        dateTimeViewFormat: "MM/DD/YYYY hh:mmA",

        guid: function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        },

        getURLParams: function () {
            return new URI().search(true);
        },

        keys: function (obj) {
            var keys = [];
            if (obj !== null && obj instanceof Object) {
                keys = Object.keys(obj);
            }
            return keys;
        },
        
        escape: function (rawText) {
            var finalText;
            finalText = rawText.replace(/&/g, '%26');
            finalText = finalText.replace(/#/g, '%23');
            return finalText;
        },

        isJson: function (text) {

            if (s.isBlank(text)) return false;

            return /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
        },

        capitalizeFirstLetter: function (string, keepTail) {
            if (string)
                if (!keepTail) {
                    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
                } else {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
            else
                return "";
        },

        lowercaseFirstLetter: function (string) {
            if (string)
                return string.charAt(0).toLowerCase() + string.slice(1);
            else
                return "";
        }
    }
});