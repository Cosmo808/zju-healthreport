    var script = document.createElement('script');
    host = window.location.host
    if(host == "zjuam.zju.edu.cn")
        path = 'injected/zjuam.js'
    else if(host == 'healthreport.zju.edu.cn')
        path = 'injected/health_report.js'
    script.src = chrome.runtime.getURL(path);
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
    window.addEventListener("injectedMsg", function(data) {
        alert(data.detail)
    }, false);
    setTimeout(function() {
        window.dispatchEvent(new CustomEvent("contentMsg", {detail: 'Hi!'}));
    }, 0);