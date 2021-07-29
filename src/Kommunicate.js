const DEFAULT_SETTINGS = {
    "appId": "kommunicate-support",
    "popupWidget": true,
    "automaticChatOpenOnNavigation": true
};

let Kommunicate = {}
Kommunicate.widgetSettings = defaultSettings
Kommunicate.init = function(appId){
    if(appId){
        let kommunicateSettings = {
            "appId": appId,
            "popupWidget": true,
            "automaticChatOpenOnNavigation":true
        };
        Kommunicate.widgetSettings = kommunicateSettings;
    }
    loadWidget(document, window.kommunicate || {})
}



function loadWidget (d, m){
    let kommunicateSettings = Kommunicate.widgetSettings
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget-test.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
}