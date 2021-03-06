var http = {};
http.ajax = {};
http.ajax.CONTENT_TYPE_1 = "application/x-www-form-urlencoded;charset=utf-8";
http.ajax.CONTENT_TYPE_2 = "application/json;charset=utf-8";
http.ajax.get = function (async, cache, url, data, contentType, callback, callbackFn,err) {
    $.ajax({
        async: async,
        cache: cache,
        type: "GET",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        beforeSend: function () {
            layer.load(0, {
                shade: false,
                offset: ["55%", "50%"]
            })
        },
        complete: function (response) {
            if (typeof callbackFn == 'function') {
                callbackFn(response)
            }
        },
        success: function (result) {
            if (typeof callback == "function") {
                callback(result)
            }
        },
        error: function (res) {
            if (typeof err == "function") {
                err(res)
            }
            layer.closeAll('loading');
        }
    })
};
http.ajax.get_no_loading = function (async, cache, url, data, contentType, callback, callbackFn,err) {
    $.ajax({
        async: async,
        cache: cache,
        type: "GET",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        complete: function (response) {
            if (typeof callbackFn == 'function') {
                callbackFn(response);
                return;
            }
        },
        success: function (result) {
            if (typeof callback == "function") {
                callback(result);
                return
            }
        },
        error: function (res) {
            if (typeof err == "function") {
                err(res)
            }
        }
    })
};
http.ajax.post = function (async, cache, url, data, contentType, callback, cb, err) {
    $.ajax({
        async: async,
        cache: cache,
        type: "POST",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        beforeSend: function () {
            layer.load(0, {
                shade: false,
                offset: ["55%", "50%"]
            })
        },
        complete: function (response) {
            if (typeof cb == 'function') {
                cb(response);
                layer.closeAll('loading');
                return
            }
        },
        success: function (result) {
            if (typeof callback == "function") {
                callback(result);
                return false
            } else {
                if (result.msg != null && result != "") {
                    layer.msg("鏈嶅姟鍣ㄥ紓甯�" + result.msg)
                }
            }
        },
        error: function (res) {
            if (typeof err == "function") {
                err(res);
            }
            layer.closeAll('loading');
        }
    })
};
http.ajax.post_no_loading = function (async, cache, url, data, contentType, callback, cb, err) {
    $.ajax({
        async: async,
        cache: cache,
        type: "POST",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        success: function (result) {
            if (typeof callback == "function") {
                callback(result);
                return false;
            }
        },
        complete: function (response) {
            if (typeof cb == 'function') {
                cb(response)
                return false;
            }
        },
        error: function (res) {
            if (typeof err == "function") {
                err(res)
            }
        }
    })
};
http.ajax.patch = function (async, cache, url, data, contentType, callback, cb, err) {
    $.ajax({
        async: async,
        cache: cache,
        type: "PATCH",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        beforeSend: function () {
            layer.load(2, {
                offset: ["55%", "50%"]
            })
        },
        complete: function (xHttp) {
            if (typeof cb == 'function') {
                cb(xHttp)
            }
        },
        success: function (result) {
            if (typeof callback == "function") {
                if (result.success) {
                    callback(result);
                    return
                }
                if (result.msg != null && result != "") {
                    layer.msg(result.msg);
                    return
                }
                layer.msg("鏈嶅姟鍣ㄥ紓甯�")
            }
        },
        error: function (res) {
            if (typeof err == "function") {
                err(res)
            }
            layer.closeAll('loading');
        }
    })
};
http.ajax.put = function (async, cache, url, data, contentType, callback,err) {
    $.ajax({
        async: async,
        cache: cache,
        type: "PUT",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        beforeSend: function () {
            layer.load(0, {
                shade: false,
                offset: ["55%", "50%"]
            })
        },
        complete: function (response) {
            if (response.status == 400) {
                layer.msg("璇锋鏌ユ偍杈撳叆鐨勭殑鏁版嵁");
                layer.closeAll("loading");
                return false
            }
            if (response.status == 500) {
                layer.msg("鏈嶅姟鍣ㄥ唴閮ㄩ敊璇紒");
                layer.closeAll("loading");
                return false
            } else {
                layer.closeAll("loading")
            }
        },
        success: function (result) {
            if (typeof callback == "function") {
                callback(result);
                return false
            }
        },
        error: function (res) {
            if (typeof err == "function") {
                err(res)
            }
            layer.closeAll('loading');
        }
    })
};
http.ajax.put_no_loading = function (async, cache, url, data, contentType, callback, cb) {
    $.ajax({
        async: async,
        cache: cache,
        type: "PUT",
        url: url,
        data: data,
        contentType: contentType,
        dataType: "json",
        complete: function (response) {
            if (typeof cb == 'function') {
                cb(response)
                return
            }
        },
        success: function (result) {
            if (typeof callback == "function") {
                callback(result);
                return
            }
        }
    })
};
//export default http;
