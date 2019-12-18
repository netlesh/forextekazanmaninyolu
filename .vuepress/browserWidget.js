module.exports = {
var totalCountBrowser;
if (totalCountBrowser == null)
    totalCountBrowser = 0;
browserScripts = new Array();

(function () {
    if (location.host.indexOf("myfxbook") != -1) {
        loadBrowserWidget(true);
    } else if (document.getElementsByClassName("powered").length == 0) {
        loadBrowserWidget(false);
    }
}());


function loadBrowserWidget(fromFx) {
    getBrowserScripts();
    var url = protocol(location.protocol) + "//widgets.myfxbook.com";
    var widgetContainer;
    if (fromFx) {
        widgetContainer = document.getElementById("browserScript");
    } else {
        widgetContainer = document.createElement("div");
        var script = browserScripts[browserScripts.length-1];
        if (script.parentNode.nodeName.toLowerCase() == 'head') {
            document.childNodes[document.childNodes.length-1].appendChild(widgetContainer);
        } else {
            script.parentNode.insertBefore(widgetContainer, script.nextSibling);
        }
    }
    widgetContainer.innerHTML = (['<iframe name="myfxbook_browser" width="700" height="500" scrolling="no" frameborder="0" allowtransparency="true" hspace="0" vspace="0" marginheight="0" marginwidth="0" src=',url, "/widgets/browser.html?accountOid="+ getBrowserURLParameter("oid") +"></iframe>"].join(''));
}


function showBrowserWidget() {
    var error = false;
    try {
        if (document.getElementsByClassName("myfxbookLink")[0].getAttribute("href") == "https://www.myfxbook.com") {
            loadBrowserWidget(false);
        } else {
            error = true;
        }
    } catch (e) {
        error = true;
    }
    if (error) {
        document.write("Please use the original code provided by Myfxbook.");
    }

}

function getBrowserURLParameter(name, startSetCount) {
    return decodeURIComponent(
        (getBrowserScriptQuery('fxBrowser.js', startSetCount).match(RegExp("[?|&]" + name + '=(.+?)(&|$)')) || [, null])[1]
    );
}

function getBrowserScriptQuery(element, startSetCount) {
    var curScript = browserScripts[totalCountBrowser];
    if (curScript.src.match(element)) {
        if (startSetCount)
            totalCountBrowser++;
        return (curScript.src.match(/\?.*/) || [undefined])[0];
    }
    return "";
}

function getBrowserScripts() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].src.match('fxBrowser.js')) {
            browserScripts.push(scripts[i]);
        }
    }
}
function protocol(name) {
    if (name == 'https:') {
        return name
    }
    else return "http:"
}

}