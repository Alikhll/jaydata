// JayData 1.0.4
// Dual licensed under MIT and GPL v2
// Copyright JayStack Technologies (http://jaydata.org/licensing)
//
// JayData is a standards-based, cross-platform Javascript library and a set of
// practices to access and manipulate data from various online and offline sources.
//
// Credits:
//     Hajnalka Battancs, D�niel J�zsef, J�nos Roden, L�szl� Horv�th, P�ter Nochta
//     P�ter Zentai, R�bert B�nay, Szabolcs Czinege, Viktor Borza, Viktor L�z�r,
//     Zolt�n Gyebrovszki
//
// More info: http://jaydata.org

if (typeof console === 'undefined') {
    console = {
        warn: function () { },
        error: function () { },
        log: function () { },
        dir: function () { },
        time: function () { },
        timeEnd: function () { }
    };
}

if (!console.warn) console.warn = function () { };
if (!console.error) console.error = function () { };

(function (global) {
    /// <summary>NodeJS detecting, handling, and module export.</summary>

    $ = typeof $ !== 'undefined' && $ || require('jquery');

    if (typeof window === "undefined") {
        window = this;
    }

    $data = window["$data"] || (window["$data"] = {});

    if (typeof module !== "undefined" && module.exports) {
        sqLiteModule = require('sqlite3');
		if (sqLiteModule) window['openDatabase'] = true;
        module.exports = $data;
    }

})(this);

(function ($data) {
    ///<summary>
    /// Collection of JayData services
    ///</summary>
    $data.__namespace = true;
    $data.version = "JayData 1.0.4";
    $data.versionNumber = "1.0.4";
    $data.root = {};

})($data);