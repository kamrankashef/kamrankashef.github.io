(function(){function f(){if(e.length)var b=JSON.stringify(e);else window.Browser&&!window.Browser.info&&window.Browser.warn(),b=JSON.stringify([{time:new Date,location:location.href,browser:navigator.userAgent+(window.Browser?" ::: "+window.Browser.info.t+" "+window.Browser.info.fullv:""),width:document.documentElement.clientWidth||document.body.clientWidth}]);var c=new FormData;c.set("data",b);if(navigator.sendBeacon)navigator.sendBeacon("/cgi-bin/util/error_detector.pl#t="+ +new Date,c);else{if(window.XMLHttpRequest){var d=
new XMLHttpRequest;d.overrideMimeType&&d.overrideMimeType("text/html")}else if(window.ActiveXObject)try{d=new ActiveXObject("Msxml2.XMLHTTP")}catch(g){try{d=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}}b=d;b.open("POST","/cgi-bin/util/error_detector.pl#t="+ +new Date,!1);b.setRequestHeader("Content-Type","multipart/form-data");b.send(c)}e=[]}var e=[];window.onerror=function(b,c,d,g){var a=navigator.userAgent;if(!(/cloudflare/.test(a)||/ahrefs/.test(a)||/ventures/.test(a)||/scrapy/.test(a)||
/BingPreview/.test(a)||/bot\.html/.test(a)||/rv:11\.0/.test(a)||/spider\.html/.test(a)||/alibaba/.test(a)||/duckduck/.test(a)||/MSIE 9/.test(a))&&"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]"!=a&&"Mozilla/5.0 (linux) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.2.2"!=a&&"Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_6 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G37 Safari/601.1"!=a&&"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36"!=
a&&"Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1"!=a&&"Mozilla/5.0 (iPhone; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/29.2 Mobile/15E148 Safari/605.1.15"!=a&&"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0"!=a&&"Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1 Device Width: 1600"!=a){if(window.Browser&&(window.Browser.info||
window.Browser.warn(),a=window.Browser.info.t+" "+window.Browser.info.fullv,"Internet Explorer 7"==a||"Internet Explorer 8"==a||"Internet Explorer 9"==a||"Internet Explorer 10.0"==a||"Internet Explorer 11.0"==a||"Safari 4"==a))return;/fast\.fonts\.net/.test(c)||!d&&!c&&"Script error."==b||/SecurityError: Blocked a frame with origin/.test(b)||/safari-extension/.test(c)||e.push({time:new Date,location:location.href,value:b,line:d,column:g,source:c,browser:navigator.userAgent+(window.Browser?" ::: "+
window.Browser.info.t+" "+window.Browser.info.fullv:""),width:document.documentElement.clientWidth||document.body.clientWidth})}};"onpagehide"in window?window.onpagehide=function(){f()}:window.onbeforeunload=function(){f()}})();