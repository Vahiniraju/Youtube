(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ma:!0},ea={};try{ea.__proto__=da;ca=ea.ma;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function v(){}
function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function qa(a){return"array"==pa(a)}
function ra(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function sa(a){return"function"==pa(a)}
function ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=wa:w=xa;return w.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Ba(a,b){return a<b?-1:a>b?1:0}
function Ca(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Da=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Fa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ga(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ha(a,b){var c=Da(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ia(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ja(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ka;a:{var La=p.navigator;if(La){var Ma=La.userAgent;if(Ma){Ka=Ma;break a}}Ka=""}function D(a){return-1!=Ka.indexOf(a)}
;function Na(a,b){var c=ra(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Oa(a){var b=Pa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Qa(a){for(var b in a)return!1;return!0}
function Ra(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Sa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ta.length;f++)c=Ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Va(a){Va[" "](a);return a}
Va[" "]=v;function Wa(a,b){var c=Xa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ya=D("Opera"),E=D("Trident")||D("MSIE"),Za=D("Edge"),$a=D("Gecko")&&!(-1!=Ka.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),ab=-1!=Ka.toLowerCase().indexOf("webkit")&&!D("Edge");function bb(){var a=p.document;return a?a.documentMode:void 0}
var cb;a:{var db="",eb=function(){var a=Ka;if($a)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Za)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ab)return/WebKit\/(\S+)/.exec(a);if(Ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
eb&&(db=eb?eb[1]:"");if(E){var fb=bb();if(null!=fb&&fb>parseFloat(db)){cb=String(fb);break a}}cb=db}var gb=cb,Xa={};
function F(a){return Wa(a,function(){for(var b=0,c=ya(String(gb)).split("."),d=ya(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ba(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ba(0==g[2].length,0==h[2].length)||Ba(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var hb;var ib=p.document;hb=ib&&E?bb()||("CSS1Compat"==ib.compatMode?parseInt(gb,10):5):void 0;!$a&&!E||E&&9<=Number(hb)||$a&&F("1.9.1");E&&F("9");function kb(){this.b="";this.g=lb}
kb.prototype.ca=!0;kb.prototype.ba=function(){return this.b};
function mb(a){return a instanceof kb&&a.constructor===kb&&a.g===lb?a.b:"type_error:TrustedResourceUrl"}
var lb={};function nb(){this.b="";this.g=ob}
nb.prototype.ca=!0;nb.prototype.ba=function(){return this.b};
function pb(a){return a instanceof nb&&a.constructor===nb&&a.g===ob?a.b:"type_error:SafeUrl"}
var qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function rb(a){if(a instanceof nb)return a;a=a.ca?a.ba():String(a);qb.test(a)||(a="about:invalid#zClosurez");return sb(a)}
var ob={};function sb(a){var b=new nb;b.b=a;return b}
sb("about:blank");function tb(){this.b=""}
tb.prototype.ca=!0;tb.prototype.ba=function(){return this.b};
function ub(a){var b=new tb;b.b=a;return b}
ub("<!DOCTYPE html>");ub("");ub("<br>");function vb(a,b){var c=b instanceof nb?b:rb(b);a.href=pb(c)}
function wb(a,b){a.src=mb(b)}
;function xb(a,b){this.width=a;this.height=b}
l=xb.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function yb(a){var b=document;return r(a)?b.getElementById(a):a}
function zb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ab(a){Bb();var b=new kb;b.b=a;return b}
var Bb=v;var Cb=document,G=window;function Db(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Eb=(new Date).getTime();function Fb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Gb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var P=1518500249}else m=d^f^h,P=1859775393;else 60>c?(m=d&f|h&(d|f),P=2400959708):(m=d^f^h,P=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+P+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(f[m++]=a[d++],y++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,y;a();return{reset:a,update:c,digest:d,oa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Hb(a,b,c){var d=[],e=[];if(1==(qa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Ib(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Ib(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ib(a){var b=Gb();b.update(a);return b.oa().toLowerCase()}
;function Jb(a){this.b=a||{cookie:""}}
l=Jb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ya(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ya(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Kb=new Jb("undefined"==typeof document?null:document);Kb.g=3950;function Lb(){var a=[],b=Fb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Jb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Jb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Hb(Fb(d),b,a||null)].join(" "):null}return null}
;function Mb(a,b,c){this.h=c;this.f=a;this.i=b;this.g=0;this.b=null}
Mb.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function Nb(a,b){a.i(b);a.g<a.h&&(a.g++,b.next=a.b,a.b=b)}
;function Ob(a){p.setTimeout(function(){throw a;},0)}
var Pb;
function Qb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.fa;c.fa=null;a()}};
return function(a){d.next={fa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Rb(){this.g=this.b=null}
var Tb=new Mb(function(){return new Sb},function(a){a.reset()},100);
Rb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function Sb(){this.next=this.scope=this.b=null}
Sb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Sb.prototype.reset=function(){this.next=this.scope=this.b=null};function Ub(a,b){Vb||Wb();Xb||(Vb(),Xb=!0);var c=Yb,d=Tb.get();d.set(a,b);c.g?c.g.next=d:c.b=d;c.g=d}
var Vb;function Wb(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);Vb=function(){a.then(Zb)}}else Vb=function(){var a=Zb;
!sa(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Pb||(Pb=Qb()),Pb(a)):p.setImmediate(a)}}
var Xb=!1,Yb=new Rb;function Zb(){for(var a;a=Yb.remove();){try{a.b.call(a.scope)}catch(b){Ob(b)}Nb(Tb,a)}Xb=!1}
;function H(){this.g=this.g;this.B=this.B}
H.prototype.g=!1;H.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function $b(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?w(b,void 0):b))}
H.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function ac(a){a&&"function"==typeof a.dispose&&a.dispose()}
function bc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ra(d)?bc.apply(null,d):ac(d)}}
;function cc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function dc(a,b){if(a.classList)var c=a.classList.contains(b);else c=cc(a),c=0<=Da(c,b);return c}
function ec(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):dc(a,"inverted-hdpi")&&(a.className=Ea(cc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var fc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function gc(){}
gc.prototype.next=function(){throw fc;};
gc.prototype.R=function(){return this};
function hc(a){if(a instanceof gc)return a;if("function"==typeof a.R)return a.R(!1);if(ra(a)){var b=0,c=new gc;c.next=function(){for(;;){if(b>=a.length)throw fc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ic(a,b){if(ra(a))try{C(a,b,void 0)}catch(c){if(c!==fc)throw c;}else{a=hc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==fc)throw c;}}}
function jc(a){if(ra(a))return Ia(a);a=hc(a);var b=[];ic(a,function(a){b.push(a)});
return b}
;E&&F("9");!ab||F("528");$a&&F("1.9b")||E&&F("8")||Ya&&F("9.5")||ab&&F("528");$a&&!F("8")||E&&F("9");(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",v,b);p.removeEventListener("test",v,b);return a})();function kc(a){var b=[];lc(new mc,a,b);return b.join("")}
function mc(){}
function lc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(qa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),lc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),nc(d,c),c.push(":"),lc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":nc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var oc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function nc(a,b){b.push('"',a.replace(pc,function(a){var b=oc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),oc[a]=b);return b}),'"')}
;function qc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function rc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function I(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=v)try{var c=this;a.call(b,function(a){sc(c,2,a)},function(a){sc(c,3,a)})}catch(d){sc(this,3,d)}}
function tc(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
tc.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var uc=new Mb(function(){return new tc},function(a){a.reset()},100);
function vc(a,b,c){var d=uc.get();d.h=a;d.g=b;d.context=c;return d}
function wc(a){return new I(function(b,c){c(a)})}
function xc(a,b,c){yc(a,b,c,null)||Ub(x(b,a))}
function zc(a){return new I(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],xc(e,b,c)})}
function Ac(a){return new I(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Y:!0,value:f}:{Y:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],xc(g,x(e,f,!0),x(e,f,!1));
else b(d)})}
I.prototype.then=function(a,b,c){return Bc(this,sa(a)?a:null,sa(b)?b:null,c)};
qc(I);function Cc(a,b){var c=vc(b,b,void 0);c.f=!0;Dc(a,c);return a}
function Ec(a,b){return Bc(a,null,b,void 0)}
I.prototype.cancel=function(a){0==this.b&&Ub(function(){var b=new Fc(a);Gc(this,b)},this)};
function Gc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Gc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Hc(c),Ic(c,e,3,b)))}a.f=null}else sc(a,3,b)}
function Dc(a,b){a.g||2!=a.b&&3!=a.b||Jc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Bc(a,b,c,d){var e=vc(null,null,null);e.b=new I(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Fc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Dc(a,e);return e.b}
I.prototype.u=function(a){this.b=0;sc(this,2,a)};
I.prototype.A=function(a){this.b=0;sc(this,3,a)};
function sc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,yc(c,a.u,a.A,a)||(a.m=c,a.b=b,a.f=null,Jc(a),3!=b||c instanceof Fc||Kc(a,c)))}
function yc(a,b,c,d){if(a instanceof I)return Dc(a,vc(b||v,c||null,d)),!0;if(rc(a))return a.then(b,c,d),!0;if(ta(a))try{var e=a.then;if(sa(e))return Lc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Lc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Jc(a){a.j||(a.j=!0,Ub(a.B,a))}
function Hc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
I.prototype.B=function(){for(var a;a=Hc(this);)Ic(this,a,this.b,this.m);this.j=!1};
function Ic(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,Mc(b,c,d);else try{b.f?b.h.call(b.context):Mc(b,c,d)}catch(e){Nc.call(null,e)}Nb(uc,b)}
function Mc(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Kc(a,b){a.i=!0;Ub(function(){a.i&&Nc.call(null,b)})}
var Nc=Ob;function Fc(a){B.call(this,a)}
A(Fc,B);Fc.prototype.name="cancel";function J(a){H.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(J,H);l=J.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Oc(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.C(b)}}
l.C=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=v):(c&&Ha(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.F=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Pc(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.C(c)}}return 0!=e}return!1};
function Pc(a,b,c){Ub(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.C,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){J.o.l.call(this);this.clear();this.h.length=0};function Qc(a){this.b=a}
Qc.prototype.set=function(a,b){q(b)?this.b.set(a,kc(b)):this.b.remove(a)};
Qc.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qc.prototype.remove=function(a){this.b.remove(a)};function Rc(a){this.b=a}
A(Rc,Qc);function Sc(a){this.data=a}
function Tc(a){return!q(a)||a instanceof Sc?a:new Sc(a)}
Rc.prototype.set=function(a,b){Rc.o.set.call(this,a,Tc(b))};
Rc.prototype.g=function(a){a=Rc.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rc.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Uc(a){this.b=a}
A(Uc,Rc);Uc.prototype.set=function(a,b,c){if(b=Tc(b)){if(c){if(c<z()){Uc.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}Uc.o.set.call(this,a,b)};
Uc.prototype.g=function(a,b){var c=Uc.o.g.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<z()||!!d&&d>z()}if(d)Uc.prototype.remove.call(this,a);else return c}};function Vc(a){this.b=a}
A(Vc,Uc);function Wc(){}
;function Xc(){}
A(Xc,Wc);Xc.prototype.clear=function(){var a=jc(this.R(!0)),b=this;C(a,function(a){b.remove(a)})};function Yc(a){this.b=a}
A(Yc,Xc);l=Yc.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.R=function(a){var b=0,c=this.b,d=new gc;d.next=function(){if(b>=c.length)throw fc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function Zc(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(Zc,Yc);function $c(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A($c,Yc);function ad(a){if(!sa(a))if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function bd(){var a=null;return Ec(new I(function(b,c){a=ad(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var cd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a.match(cd)}
function dd(a){return a?decodeURI(a):a}
function ed(a,b,c){if(qa(b))for(var d=0;d<b.length;d++)ed(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fd(a){var b=[],c;for(c in a)ed(c,a[c],b);return b.join("&")}
function gd(a,b){var c=fd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var hd=!1,id="";function jd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(hd=!0,a.description)){id=jd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){hd=!0;id="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],hd=!(!a||!a.enabledPlugin))){id=jd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");hd=!0;id=jd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");hd=!0;id="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),hd=!0,id=jd(b.GetVariable("$version"))}catch(c){}})();
var kd=hd,ld=id;var md=/^\.google\.(com\.)?[a-z]{2,3}$/,nd=/\.(cn|com\.bi|do|sl)$/;function od(a){return md.test(a)&&!nd.test(a)}
var pd=p;function qd(){var a="https://adservice"+L[1]+(L[3]?"/generate_204":"/adsid/integrator.js"),b=["domain="+encodeURIComponent(p.location.hostname)];M[3]>=z()&&b.push("adsid="+encodeURIComponent(M[1]));return a+"?"+b.join("&")}
var M,L;function rd(){pd=p;M=pd.googleToken=pd.googleToken||{};var a=z();M[1]&&M[3]>a&&0<M[2]||(M[1]="",M[2]=-1,M[3]=-1,M[4]="");L=pd.googleIMState=pd.googleIMState||{};od(L[1])||(L[1]=".google.com");0!=L[2]&&(L[2]=1);"boolean"==typeof L[3]||(L[3]=!1);"boolean"==typeof L[4]||(L[4]=!1);qa(L[5])||(L[5]=[])}
function sd(){rd();return M[1]}
function td(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}}
function ud(){if(!L[4]){L[4]=!0;var a=p.document;if(0==L[2]){var b=qd().replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"}),c=Va("script");
a.write("<"+c+' src="'+b+'"></'+c+">"+("<"+c+">processGoogleToken("+(L[3]?'{"newToken":"FBS"}':"{}")+");</"+c+">"))}else{b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
L[3]&&(b.onload=function(){var a={};return p.processGoogleToken((a.newToken="FBA",a))});
c=Ab(qd());wb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b)}catch(d){}p.setTimeout(function(){return p.processGoogleToken({},1)},1E3)}}}
function vd(a){p.processGoogleToken=p.processGoogleToken||wd;rd();var b=pd.googleToken[5]||0;a&&(0!=b||M[3]>=z()?td(a):(L[5].push(a),ud()));M[3]>=z()&&M[2]>=z()||ud()}
var xd=0;
function wd(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;var c=a.newToken||"",d=a.altDomain||"",e=parseInt(a.freshLifetimeSecs||"",10)||3600,f=parseInt(a.validLifetimeSecs||"",10)||86400,g=a["1p_jar"]||"";rd();L[4]=!1;if(1E-5>Math.random()){var h="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b;p.google_image_requests||(p.google_image_requests=[]);var k=p.document.createElement("img");k.src=h;p.google_image_requests.push(k)}if(!c&&d&&od(d)&&2>=++xd)od(d)&&(L[1]=d),ud();else{d=pd.googleToken=
pd.googleToken||{};d[5]=b;0==b&&c&&r(c)&&0<e&&0<f&&r(g)&&(h=z(),d[1]=c,d[2]=h+1E3*e,d[3]=h+1E3*f,d[4]=g,rd());c=L[5];for(e=0;e<c.length;e++)td(c[e]);L[5]=[]}}
;function Ad(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var N=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Bd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Bd,void 0);function O(a){Ad(Bd,arguments)}
function Q(a,b){return a in Bd?Bd[a]:b}
function R(a){return Q(a,void 0)}
;function Cd(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=Q("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),O("ERRORS",c))}
;function T(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function Dd(a){a&&(a.dataset?a.dataset[Ed("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Fd(a,b){return a?a.dataset?a.dataset[Ed(b)]:a.getAttribute("data-"+b):null}
var Gd={};function Ed(a){return Gd[a]||(Gd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function U(a,b){sa(a)&&(a=Cd(a));return window.setTimeout(a,b)}
;var Hd=u("ytPubsubPubsubInstance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.C;J.prototype.publish=J.prototype.F;J.prototype.clear=J.prototype.clear;t("ytPubsubPubsubInstance",Hd,void 0);var Id=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Id,void 0);var Jd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Jd,void 0);var Kd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Kd,void 0);
function Ld(a,b){var c=Md();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Id[d]&&b.apply(window,c)};
try{Kd[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Id[d]=!0;Jd[a]||(Jd[a]=[]);Jd[a].push(d);return d}return 0}
function Nd(a){var b=Md();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Id[a]}))}
function Od(a,b){var c=Md();c&&c.publish.apply(c,arguments)}
function Pd(a){var b=Md();if(b)if(b.clear(a),a)Qd(a);else for(var c in Jd)Qd(c)}
function Md(){return u("ytPubsubPubsubInstance")}
function Qd(a){Jd[a]&&(a=Jd[a],C(a,function(a){Id[a]&&delete Id[a]}),a.length=0)}
;var Rd=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Sd=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Td(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Rd,""),c=c.replace(Sd,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ud(a,b)}
function Ud(a,b){var c=Vd(a),d=document.getElementById(c),e=d&&Fd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Ld(c,b);var g=""+(b[ua]||(b[ua]=++va));Wd[g]=e}f||(d=Xd(a,c,function(){Fd(d,"loaded")||(Dd(d),Od(c),U(x(Pd,c),0))}))}}
function Xd(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
wb(d,Ab(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Yd(a){a=Vd(a);var b=document.getElementById(a);b&&(Pd(a),b.parentNode.removeChild(b))}
function Zd(a,b){if(a&&b){var c=""+(b[ua]||(b[ua]=++va));(c=Wd[c])&&Nd(c)}}
function Vd(a){var b=document.createElement("a");vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ca(a)}
var Wd={};var $d=null;function ae(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?Td(b,function(){window.botguard?be(c):(Yd(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?be(c):S(Error("Unable to load Botguard from JS"),"WARNING"))}
function be(a){$d=new window.botguard.bg(a);T("botguard_periodic_refresh")&&N()}
function ce(){return null!=$d}
function de(){return $d?$d.invoke():null}
;z();var ee=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function fe(){if(!ee)return null;var a=ee();return"open"in a?a:null}
function ge(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function he(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?qa(b[f])?Ja(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ie(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=he(d[1]||"");for(var e in b)d[e]=b[e];return gd(a,d)+c}
;var je={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ke=!1;
function le(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(a)[1]||null,e=dd(K(a)[3]||null);d&&e?(d=c,c=K(a),d=K(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?dd(K(c)[3]||null)==e&&(Number(K(c)[4]||null)||null)==(Number(K(a)[4]||null)||null):!0;for(var f in je){if((e=d=Q(je[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=dd(K(a)[3]||null);e=h?(g=g[h])?0<=Da(g,e):!1:!0}e&&(b[f]=d)}return b}
function me(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ra&&(!dd(K(a)[3]||null)||b.withCredentials||dd(K(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.w&&b.w[c])}
function ne(a,b){var c=b.format||"JSON";b.ta&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=Q("XSRF_FIELD_NAME",void 0),e=Q("XSRF_TOKEN",void 0),f=b.Ma;f&&(f[d]&&delete f[d],a=ie(a,f||{}));f=b.postBody||"";var g=b.w;me(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=he(f),Ua(d,g),f=b.ga&&"JSON"==b.ga?JSON.stringify(d):fd(d));d=f||g&&!Qa(g);!ke&&d&&"POST"!=b.method&&(ke=!0,S(Error("AJAX request with postData should use POST")));var h=
!1,k,m=oe(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=ge(a),e=null;if(d||400<=a.status&&500>a.status)e=pe(c,a,b.Qa);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.I&&b.I.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.za&&b.za.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.U&&0<b.timeout&&(k=U(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.U.call(b.context||p,m))},b.timeout))}
function pe(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?qe(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=re(a)})}c&&se(d);
return d}
function se(a){if(ta(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=ub(a[b]);a[c]=d}else se(a[b])}}
function qe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function re(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function te(a,b){b.method="POST";b.w||(b.w={});ne(a,b)}
function oe(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Cd(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=fe();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=le(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var ue={},ve=0;function we(a,b){a&&(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?oe(a,b,"GET","",void 0):xe(a,b))}
function xe(a,b){var c=new Image,d=""+ve++;ue[d]=c;c.onload=c.onerror=function(){b&&ue[d]&&b();delete ue[d]};
c.src=a}
;var ye={},ze=0;
function Ae(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=ze)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(P){h="Not available",g=!0}try{var k=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(P){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(ye[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={Ma:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},w:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.w.stack=k);for(var m in f)h.w["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var y in m)h.w[y]=m[y];ne("/error_204",h);ye[a.message]=!0;ze++}}}
;var Be=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Be,void 0);function Ce(a){Ad(Be,arguments)}
;function De(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Ee(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var Fe=[],Ge=!1;function He(){function a(){Ge=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)}
Td("//static.doubleclick.net/instream/ad_status.js",a);Fe.push(De(function(){Ge||"google_ad_status"in window||(Zd("//static.doubleclick.net/instream/ad_status.js",a),O("DCLKSTAT",3))},1))}
function Ie(){return parseInt(Q("DCLKSTAT",0),10)}
;var Je=0;t("ytDomDomGetNextId",u("ytDomDomGetNextId")||function(){return++Je},void 0);var Ke={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Le(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ke||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Le.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Le.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Le.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Pa=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Pa,void 0);var Me=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Me,void 0);function Ne(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Oa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Oe(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ne(a,b,c,d);if(e)return e;e=++Me.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Le(d);if(!zb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Le(b);
b.currentTarget=a;return c.call(a,b)};
g=Cd(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Pa[e]=[a,b,c,g,d];return e}
function Pe(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Pa){var b=Pa[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Pa[a]}}))}
;function Qe(){if(null==u("_lact",window)){var a=parseInt(Q("LACT"),10);a=isFinite(a)?z()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&Re();Oe(document,"keydown",Re);Oe(document,"keyup",Re);Oe(document,"mousedown",Re);Oe(document,"mouseup",Re);Ld("page-mouse",Re);Ld("page-scroll",Re);Ld("page-resize",Re)}}
function Re(){null==u("_lact",window)&&Qe();var a=z();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function Se(){var a=u("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function Te(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
var Ue=1;function Ve(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=Ve(a.b));return b}
;var We={log_event:"events",log_event2:"events",log_interaction:"interactions"},Xe=Object.create(null);Xe.log_event="GENERIC_EVENT_LOGGING";Xe.log_event2="GENERIC_EVENT_LOGGING";Xe.log_interaction="INTERACTION_LOGGING";var Ye={},Ze={},$e=0,W=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",W,void 0);var af=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",af,void 0);var bf=u("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",bf,void 0);t("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{},void 0);function cf(a,b){Ze[a.endpoint]=b;if(a.T){var c=a.T;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);af[a.T.token]=d;c=df(a.endpoint,a.T.token)}else c=df(a.endpoint);c.push(a.payload);c.length>=(Number(T("web_logging_max_batch")||0)||20)?ef():ff()}
function ef(){window.clearTimeout($e);if(!Qa(W)){for(var a in W){var b=Ye[a];if(!b){var c=Ze[a];if(!c)continue;b=new c;Ye[a]=b}c=void 0;var d=a,e=b,f=We[d],g=bf[d]||{};bf[d]=g;b=Math.round(N());for(c in W[d]){var h=e.b;h={client:{hl:h.wa,gl:h.va,clientName:h.ua,clientVersion:h.innertubeContextClientVersion}};Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=df(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var k=af[c];if(k)a:{var m=h,y=c;if(k.videoId)var P="VIDEO";else if(k.playlistId)P="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:y,scope:P}]}delete af[c];gf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete W[a]}Qa(W)||
ff()}}
function ff(){window.clearTimeout($e);$e=U(ef,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function df(a,b){b||(b="");W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
;function hf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||N());f[a]=b;f.context={lastActivityMs:String(d?-1:Se())};cf({endpoint:"log_event",payload:f,T:e},c)}
;function jf(a,b,c){kf(lf,{attachChild:{csn:a,parentVisualElement:Ve(b),visualElements:[Ve(c)]}})}
function kf(a,b,c){b.eventTimeMs=c?c:Math.round(N());b.lactMs=Se();cf({endpoint:"log_interaction",payload:b},a)}
;function mf(){if(!nf&&!of||!window.JSON)return null;try{var a=nf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=of.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var of,pf=new Zc;of=pf.isAvailable()?new Vc(pf):null;var nf,qf=new $c;nf=qf.isAvailable()?new Vc(qf):null;function rf(){var a=Q("ROOT_VE_TYPE",void 0);return a?new Te(void 0,a,void 0):null}
function sf(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
;function tf(a,b,c){Kb.set(""+a,b,c,"/","youtube.com",!1)}
;function uf(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new Te(a))}}
;function vf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=dd(K(window.location.href)[3]||null);f&&e.push(f);f=dd(K(d)[3]||null);if(0<=Da(e,f)||!f&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(e=document.createElement("a"),vb(e,d),d=e.href),d){f=K(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
sf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ca(d).toString(36),e=b?fd(b):"",tf(d,e,h||5),uf(b))}else h="ST-"+Ca(d).toString(36),d=b?fd(b):"",tf(h,d,5),uf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var y=void 0===y?window:y;c=y.location;a=gd(a,k)+m;a=a instanceof nb?a:rb(a);c.href=pb(a)}return!0}
;t("yt.abuse.botguardInitialized",u("yt.abuse.botguardInitialized")||ce,void 0);t("yt.abuse.invokeBotguard",u("yt.abuse.invokeBotguard")||de,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",u("yt.abuse.dclkstatus.checkDclkStatus")||Ie,void 0);t("yt.player.exports.navigate",u("yt.player.exports.navigate")||vf,void 0);t("yt.util.activity.init",u("yt.util.activity.init")||Qe,void 0);t("yt.util.activity.getTimeSinceActive",u("yt.util.activity.getTimeSinceActive")||Se,void 0);
t("yt.util.activity.setTimestamp",u("yt.util.activity.setTimestamp")||Re,void 0);function wf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function lf(a){this.b=a||{apiaryHost:R("APIARY_HOST"),Na:R("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!Q("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:R("GAPI_HINT_PARAMS"),innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ua:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),wa:R("INNERTUBE_CONTEXT_HL"),va:R("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:R("XHR_APIARY_HOST")||"",xa:R("INNERTUBE_HOST_OVERRIDE")||""}}
function gf(a,b,c){var d={};!Q("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":Q("VISITOR_DATA","")},w:c,ga:"JSON",U:d.U,I:function(a,b){d.I&&d.I(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=Lb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));var g="",h=a.b.xa;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);te(""+g+wf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function xf(a){a=a||{};this.url=a.url||"";this.args=a.args||Sa(yf);this.assets=a.assets||{};this.attrs=a.attrs||Sa(zf);this.params=a.params||Sa(Af);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var yf={enablejsapi:1},zf={},Af={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Bf(a){a instanceof xf||(a=new xf(a));return a}
function Cf(a){var b=new xf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==pa(d)?Sa(d):d}return b}
;function Df(){H.call(this);this.b=[]}
n(Df,H);Df.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Pa)}H.prototype.l.call(this)};var Ef=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ff(a){a=a||"";if(window.spf){var b=a.match(Ef);spf.style.load(a,b?b[1]:"",void 0)}else Gf(a)}
function Gf(a){var b=Hf(a),c=document.getElementById(b),d=c&&Fd(c,"loaded");d||c&&!d||(c=If(a,b,function(){Fd(c,"loaded")||(Dd(c),Od(b),U(x(Pd,b),0))}))}
function If(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ab(a);d.rel="stylesheet";d.href=mb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Hf(a){var b=document.createElement("A");a=sb(a);vb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ca(b)}
;var Jf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Kf;var Lf=Ka;Lf=Lf.toLowerCase();if(-1!=Lf.indexOf("android")){var Mf=Lf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Mf)Kf=parseFloat(Mf[1]);else{var Nf=[],Of=0,Pf;for(Pf in Jf)Nf[Of++]=Pf;var Qf=Lf.match("("+Nf.join("|")+")");Kf=Qf?Jf[Qf[0]]:0}}else Kf=void 0;var Rf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Sf=['audio/mp4; codecs="mp4a.40.2"'];var Tf=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",Tf,void 0);var Uf=0;function Vf(a){Tf[a]=Tf[a]||{count:0};var b=Tf[a];b.count++;b.time=N();Uf||(Uf=De(Wf,0));return 10<b.count?(11==b.count&&Ae(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Wf(){var a=N(),b;for(b in Tf)6E4<a-Tf[b].time&&delete Tf[b];Uf=0}
;function Xf(a,b){this.version=a;this.args=b}
;function Yf(a){this.topic=a}
Yf.prototype.toString=function(){return this.topic};var Zf=u("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.C;J.prototype.publish=J.prototype.F;J.prototype.clear=J.prototype.clear;t("ytPubsub2Pubsub2Instance",Zf,void 0);t("ytPubsub2Pubsub2SubscribedKeys",u("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",u("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",u("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function $f(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function ag(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function bg(){var a=ag(),b;for(b in a)Ee(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function cg(a,b){Xf.call(this,1,arguments)}
n(cg,Xf);function dg(a,b){Xf.call(this,1,arguments)}
n(dg,Xf);var hg=new Yf("aft-recorded"),ig=new Yf("timing-sent");var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var jg=z().toString();var kg={vc:!0},lg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},mg="ap c cver ei srt yt_fss yt_li ba vpil vpni vpst yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),ng="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),og=!1;
function pg(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=qg();var c=N();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=ag();if(c=b[a])Ee(c),b[a]=0;rg()["tick_"+a]=void 0;N();T("csi_on_gel")?(b=sg(),"_start"==a?Vf("baseline_"+b)||hf("latencyActionBaselined",{clientActionNonce:b},lf,void 0,void 0):Vf("tick_"+a+"_"+b)||hf("latencyActionTicked",{tickName:a,clientActionNonce:b},lf,void 0,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&
(b=R("TIMING_ACTION"),a=qg(),u("ytglobal.timingready_")&&b&&a._start&&(b=tg()))){T("tighter_critical_section")&&!og&&($f(hg,new cg(Math.round(b-a._start),void 0)),og=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ug()}}
function vg(){var a=wg().info.yt_lt="hot_bg";rg().info_yt_lt=a;if(T("csi_on_gel"))if("yt_lt"in lg){var b={},c=lg.yt_lt;0<=Da(ng,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=sg();c=Object.keys(b).join("");Vf("info_"+c+"_"+a)||(b.clientActionNonce=a,hf("latencyActionInfo",b,lf,void 0,void 0))}else 0<=Da(mg,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function tg(){var a=qg();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ug(){bg();if(!T("csi_on_gel")){var a=qg(),b=wg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&qa(a[d])){var e=d.slice(1);if(e in kg){var f=Fa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))xg(f,e),yg(),zg(),Ag(!1,void 0),Q("TIMING_ACTION")&&O("PREVIOUS_ACTION",Q("TIMING_ACTION")),O("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:Q("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+u("ytplayer.config.assets.js");(k=X.getEntriesByName?X.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=tg();Bg()&&"youtube"==g&&(vg(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=N();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);xg(f,e,void 0);$f(ig,new dg(b.aft+(h||0),void 0))}}}
var zg=w(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||v,X);
function xg(a,b,c){if(T("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||we(a,void 0)}catch(f){we(a,void 0)}else we(a);Ag(!0,c)}
function sg(){var a=wg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=z();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(jg)for(b=1,c=0;c<jg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^jg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");wg().nonce=a}return a}
function qg(){return wg().tick}
function rg(){var a=wg();"gel"in a||(a.gel={});return a.gel}
function wg(){return u("ytcsi.data_")||yg()}
function yg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Ag(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Bg(){var a=qg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==wg().info.yt_pvis}
;function Cg(a,b){H.call(this);this.m=this.O=a;this.H=b;this.u=!1;this.f={};this.M=this.G=null;this.A=new J;$b(this,x(ac,this.A));this.i={};this.K=this.N=this.h=this.X=this.b=null;this.J=!1;this.j=this.D=null;this.P={};this.ka=["onReady"];this.W=null;this.ea=NaN;this.L={};Dg(this);this.S("WATCH_LATER_VIDEO_ADDED",w(this.Aa,this));this.S("WATCH_LATER_VIDEO_REMOVED",w(this.Ba,this));this.S("onAdAnnounce",w(this.na,this));this.la=new Df;$b(this,x(ac,this.la))}
n(Cg,H);l=Cg.prototype;
l.da=function(a,b){if(!this.g){this.X=a;this.b=Cf(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.H,this.b.attrs.id=this.H);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.H;this.N||(this.N=Eg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;var c=this.b.attrs.width;c&&(this.m.style.width=Db(Number(c)||c));if(c=this.b.attrs.height)this.m.style.height=Db(Number(c)||c);
if(!this.g){if(!b&&!q(this.b.disable.html5)){c=!0;void 0!=this.b.args.deviceHasDisplay&&(c=this.b.args.deviceHasDisplay);if(2.2==Kf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?Rf:Sf;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d=d&&(Fg(this)||this.b.assets.js);this.b.disable.html5=!d;d||(this.b.args.html5_unavailable=
"1")}Gg(this)}this.u&&Hg(this)}};
l.qa=function(){return this.X};
function Hg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Fg(a){var b=!0,c=Ig(a);c&&a.b&&(a=a.b,b=Fd(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
function Gg(a){if(!a.J){var b=Fg(a);if(b&&"html5"==(Ig(a)?"html5":null))a.K="html5",a.u||a.V();else if(Jg(a),a.K="html5",b&&a.j)a.O.appendChild(a.j),a.V();else{a.b.loaded=!0;var c=!1;a.D=w(function(){c=!0;var a=Cf(this.b);u("yt.player.Application.create")(this.O,a);this.V()},a);
a.J=!0;b?a.D():(Td(a.b.assets.js,a.D),Ff(a.b.assets.css),Kg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Ig(a){var b=yb(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
l.V=function(){if(!this.g){var a=Ig(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.J=!1,!a.isNotServable||!a.isNotServable(this.b.args.video_id)){Dg(this);this.u=!0;a=Ig(this);a.addEventListener&&(this.G=Lg(this,a,"addEventListener"));a.removeEventListener&&(this.M=Lg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Lg(this,a,d))}for(var e in this.i)this.G(e,
this.i[e]);Hg(this);this.N&&this.N(this.f);this.A.F("onReady",this.f)}}else this.ea=U(w(this.V,this),50)}};
function Lg(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,S(e,"WARNING"))}}}
function Dg(a){a.u=!1;if(a.M)for(var b in a.i)a.M(b,a.i[b]);for(var c in a.L)window.clearTimeout(parseInt(c,10));a.L={};a.G=null;a.M=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.S,a);a.f.removeEventListener=w(a.Ea,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.ra,a);a.f.getPlayerType=w(a.sa,a);a.f.getCurrentVideoConfig=w(a.qa,a);a.f.loadNewVideoConfig=w(a.da,a);a.f.isReady=w(a.ya,a)}
l.ya=function(){return this.u};
l.S=function(a,b){if(!this.g){var c=Eg(this,b);if(c){if(!(0<=Da(this.ka,a)||this.i[a])){var d=Mg(this,a);this.G&&this.G(a,d)}this.A.subscribe(a,c);"onReady"==a&&this.u&&U(x(c,this.f),0)}}};
l.Ea=function(a,b){if(!this.g){var c=Eg(this,b);c&&Oc(this.A,a,c)}};
function Eg(a,b){var c=b;if("string"==typeof b){if(a.P[b])return a.P[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.P[b]=c}return c?c:null}
function Mg(a,b){var c="ytPlayer"+b+a.H,d=w(function(a){if("html5"==(Ig(this)?"html5":null)){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.A.F(b,a);return}}var d=U(w(function(){if(!this.g){this.A.F(b,a);var c=this.L,e=String(d);e in c&&delete c[e]}},this),0);
Ra(this.L,String(d))},a);
a.i[b]=c;p[c]=d;return c}
l.na=function(a){Od("a11y-announce",a)};
l.Aa=function(a){Od("WATCH_LATER_VIDEO_ADDED",a)};
l.Ba=function(a){Od("WATCH_LATER_VIDEO_REMOVED",a)};
l.sa=function(){return this.K||(Ig(this)?"html5":null)};
l.ra=function(){return this.W};
function Jg(a){pg("dcp");a.cancel();Dg(a);a.K=null;a.b&&(a.b.loaded=!1);var b=Ig(a);"html5"==(Ig(a)?"html5":null)&&(Fg(a)||!Kg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.O;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.D&&Zd(this.b.assets.js,this.D);window.clearTimeout(this.ea);this.J=!1};
l.l=function(){Jg(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.P=null;for(var a in this.i)p[this.i[a]]=null;this.X=this.b=this.f=null;delete this.O;delete this.m;H.prototype.l.call(this)};
function Kg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Ng={},Og="player_uid_"+(1E9*Math.random()>>>0);function Pg(a){var b="player";b=r(b)?yb(b):b;a=Bf(a);var c=Og+"_"+(b[ua]||(b[ua]=++va)),d=Ng[c];if(d)return d.da(a),d.f;d=new Cg(b,c);Ng[c]=d;Od("player-added",d.f);$b(d,x(Qg,d));U(function(){d.da(a)},0);
return d.f}
function Qg(a){delete Ng[a.H]}
;function Rg(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Sg(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Tg(a)}
function Tg(a,b,c){if(ta(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Ug(a,b,c,d){if(ta(a)&&!qa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Vg(a){var b=a.video_id||a.videoId;if(r(b)){var c=mf()||{},d=mf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=of;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Wg(a){H.call(this);this.f=a;this.f.subscribe("command",this.ha,this);this.h={};this.i=!1}
A(Wg,H);l=Wg.prototype;l.start=function(){this.i||this.g||(this.i=!0,Xg(this.f,"RECEIVING"))};
l.ha=function(a,b){if(this.i&&!this.g){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=w(this.Ga,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&Yg(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Zg(a,b||{}),c=this.b[a].apply(this.b,c),(c=$g(a,c))&&this.i&&!this.g&&Xg(this.f,a,c))}}};
l.Ga=function(a,b){this.i&&!this.g&&Xg(this.f,a,this.Z(a,b))};
l.Z=function(a,b){if(null!=b)return{value:b}};
function Yg(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
l.l=function(){var a=this.f;a.g||Oc(a.b,"command",this.ha,this);this.f=null;for(var b in this.h)Yg(this,b);Wg.o.l.call(this)};function ah(a,b){Wg.call(this,b);this.b=a;this.start()}
A(ah,Wg);ah.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
ah.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Zg(a,b){switch(a){case "loadVideoById":return b=Tg(b),Vg(b),[b];case "cueVideoById":return b=Tg(b),Vg(b),[b];case "loadVideoByPlayerVars":return Vg(b),[b];case "cueVideoByPlayerVars":return Vg(b),[b];case "loadPlaylist":return b=Ug(b),Vg(b),[b];case "cuePlaylist":return b=Ug(b),Vg(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function $g(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ah.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ah.o.Z.call(this,a,b)};
ah.prototype.l=function(){ah.o.l.call(this);delete this.b};function bh(a,b,c,d){H.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=w(this.A,this);window.addEventListener("message",this.m)}
n(bh,H);bh.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Da(this.j,b.func))&&this.i(b.func,b.args)}}};
bh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=kc(a);c.postMessage(d,this.u)}catch(e){S(e,"WARNING")}}};
bh.prototype.l=function(){window.removeEventListener("message",this.m);H.prototype.l.call(this)};function ch(a,b,c){bh.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(ch,bh);function dh(){var a=this.g=new ch(!!Q("WIDGET_ID_ENFORCE")),b=w(this.Da,this);a.i=b;a.j=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
l=dh.prototype;l.Da=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,eh(this,c)),this.i[c]=!0)}else this.ja(a,b)};
l.ja=function(){};
function eh(a,b){return w(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.pa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");C(this.h,this.ia,this);this.h=[]};
l.aa=function(){return null};
function fh(a,b){a.sendMessage("infoDelivery",b)}
l.ia=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
l.sendMessage=function(a,b){this.ia({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.g=null};function gh(a){dh.call(this);this.b=a;this.f=[];this.addEventListener("onReady",w(this.Ca,this));this.addEventListener("onVideoProgress",w(this.Ka,this));this.addEventListener("onVolumeChange",w(this.La,this));this.addEventListener("onApiChange",w(this.Fa,this));this.addEventListener("onPlaybackQualityChange",w(this.Ha,this));this.addEventListener("onPlaybackRateChange",w(this.Ia,this));this.addEventListener("onStateChange",w(this.Ja,this))}
A(gh,dh);l=gh.prototype;l.ja=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Rg(a)){var c=b;if(ta(c[0])&&!qa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Tg.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Sg.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Ug.apply(window,c)}c=d}Vg(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Rg(a)&&fh(this,this.aa())}};
l.Ca=function(){var a=w(this.pa,this);this.g.b=a};
l.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ha(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
l.Ja=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());fh(this,a)};
l.Ha=function(a){fh(this,{playbackQuality:a})};
l.Ia=function(a){fh(this,{playbackRate:a})};
l.Fa=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);if(f){b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}else S(Error("getOptions() returns ["+a.join(", ")+"], but getOption("+e+") returns null."))}this.sendMessage("apiInfoDelivery",b)};
l.La=function(){fh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Ka=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());fh(this,a)};
l.dispose=function(){gh.o.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function hh(){H.call(this);this.b=new J;$b(this,x(ac,this.b))}
A(hh,H);hh.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
hh.prototype.C=function(a){return this.g?!1:this.b.C(a)};
hh.prototype.j=function(a,b){this.g||this.b.F.apply(this.b,arguments)};function ih(a,b,c){hh.call(this);this.f=a;this.h=b;this.i=c}
A(ih,hh);function Xg(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(kc(a),d.h))}}
ih.prototype.l=function(){this.h=this.f=null;ih.o.l.call(this)};function jh(a,b,c){H.call(this);this.b=a;this.h=c;this.i=Oe(window,"message",w(this.j,this));this.f=new ih(this,a,b);$b(this,x(ac,this.f))}
A(jh,H);jh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=JSON.parse(a)}catch(d){return}a.command&&(b=this.f,b.g||b.j("command",a.command,a.data))}};
jh.prototype.l=function(){Pe(this.i);this.b=null;jh.o.l.call(this)};function kh(){var a=Na(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||Q("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||T("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Sa(lh);return new I(function(c,d){b.I=function(a){ge(a)?c(a):d(new mh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new mh("Unknown request error","net.unknown"))};
b.U=function(){d(new mh("Request timed out","net.timeout"))};
ne(a,b)})}
function mh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(mh,B);function nh(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
nh.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),rc(a)?a:oh(a)):2===this.g&&b?(a=b.call(c,this.b),rc(a)?a:ph(a)):this};
nh.prototype.getValue=function(){return this.b};
qc(nh);function ph(a){var b=new nh;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function oh(a){var b=new nh;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function qh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof rh;this.isTimeout=a instanceof mh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Fc}
n(qh,B);qh.prototype.name="BiscottiError";function rh(){B.call(this,"Biscotti ID is missing from server")}
n(rh,B);rh.prototype.name="BiscottiMissingError";var lh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},sh=null;function th(){if("1"===Na(Q("PLAYER_CONFIG",{}),"args","privembed"))return wc(Error("Biscotti ID is not available in private embed mode"));sh||(sh=Ec(kh().then(uh),function(a){return vh(2,a)}));
return sh}
function uh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new rh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new rh;a=a.id;wh(a);sh=oh(a);xh(18E5,2);return a}
function vh(a,b){var c=new qh(b);wh("");sh=ph(c);0<a&&xh(12E4,a-1);throw c;}
function xh(a,b){U(function(){Ec(kh().then(uh,function(a){return vh(b,a)}),v)},a)}
function wh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function yh(){try{var a=u("yt.ads.biscotti.getId_");return a?a():th()}catch(b){return wc(b)}}
;function zh(a){B.apply(this,arguments)}
n(zh,B);zh.prototype.name="MutsuError";function Ah(){var a=new zh("ID is missing"),b=new zh("Timeout"),c=null,d=!1;vd(function(){c=sd();d=!0});
if(d)return c?oh(c):ph(a);var e=new I(function(b,c){vd(function(){var d=sd();d?b(d):c(a)})}),f=bd().then(function(){return wc(b)});
return Cc(zc([e,f]),function(){return f.cancel()})}
;function Bh(a){if("1"!==Na(Q("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",th,void 0);try{var b=yh();if(T("enable_mutsu")){u("yt.ads.mutsu.getId_")||(rd(),L[3]=!0,t("yt.ads.mutsu.getId_",Ah,void 0));try{var c=u("yt.ads.mutsu.getId_")()}catch(d){c=wc(d)}}else c=wc(new zh("unimplemented"));Ac([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Y||a.Y){b=b.value;a=a.value;var c={};c.dt=Eb;c.flash=ld||"0";a:{try{var d=window.top.location.href}catch(jb){d=
2;break a}d=null!=d?d==window.document.location.href?0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?G:h;try{var k=h.history.length}catch(jb){k=0}d.u_his=k;d.u_java=!!G.navigator&&"unknown"!==typeof G.navigator.javaEnabled&&!!G.navigator.javaEnabled&&G.navigator.javaEnabled();G.screen&&(d.u_h=G.screen.height,d.u_w=G.screen.width,d.u_ah=G.screen.availHeight,d.u_aw=G.screen.availWidth,d.u_cd=G.screen.colorDepth);G.navigator&&G.navigator.plugins&&(d.u_nplug=G.navigator.plugins.length);
G.navigator&&G.navigator.mimeTypes&&(d.u_nmime=G.navigator.mimeTypes.length);d.ca_type=kd?"flash":"image";if(T("enable_server_side_search_pyv")||T("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var y=k.screenY}catch(jb){}try{var P=k.outerWidth;var eg=k.outerHeight}catch(jb){}try{var fg=k.innerWidth;var gg=k.innerHeight}catch(jb){}m=[k.screenLeft,k.screenTop,m,y,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,P,eg,fg,gg];y=window.top;try{if(y.document&&!y.document.body)var V=
new xb(-1,-1);else{var za=(y||window).document,yd="CSS1Compat"==za.compatMode?za.documentElement:za.body;V=(new xb(yd.clientWidth,yd.clientHeight)).round()}var Aa=V}catch(jb){Aa=new xb(-12245933,-12245933)}V={};za=0;p.SVGElement&&p.document.createElementNS&&(za|=1);V.bc=za;V.bih=Aa.height;V.biw=Aa.width;V.brdim=m.join();Aa=(V.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Cb.webkitVisibilityState||Cb.mozVisibilityState||Cb.visibilityState||""]||0,V.wgl=!!G.WebGLRenderingContext,V);for(var zd in Aa)d[zd]=
Aa[zd]}void 0!==b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Ch++;te("//www.youtube.com/ad_data_204",{ta:!1,w:d})}});
U(Bh,18E5)}catch(d){S(d)}}}
var Ch=0;var Y=u("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Z(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Kb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
Z.prototype.get=function(a,b){Dh(a);Eh(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
Z.prototype.set=function(a,b){Dh(a);Eh(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
Z.prototype.remove=function(a){Dh(a);Eh(a);delete Y[a]};
Z.prototype.clear=function(){for(var a in Y)delete Y[a]};
function Eh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Dh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Fh(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Z.b=void 0;Z.getInstance=function(){return Z.b?Z.b:Z.b=new Z};var Gh=null,Hh=null,Ih=null,Jh={};function Kh(a){hf(a.payload_name,a.payload,lf,void 0,void 0)}
function Lh(a){var b=a.id;a=a.ve_type;var c=Ue++;a=new Te(void 0,a,c,void 0,void 0);Jh[b]=a;b=sf();c=rf();b&&c&&jf(b,c,a)}
function Mh(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(O("client-screen-nonce",b),O("ROOT_VE_TYPE",a),a=rf()))for(var c in Jh){var d=Jh[c];d&&jf(b,a,d)}}
function Nh(a){Jh[a.id]=new Te(a.tracking_params)}
function Oh(a){var b=sf();a=Jh[a.id];b&&a&&kf(lf,{click:{csn:b,visualElement:Ve(a)}})}
function Ph(a){a=a.ids;var b=sf();if(b)for(var c=0;c<a.length;c++){var d=Jh[a[c]];if(d){var e=b,f=lf;T("interaction_logging_on_gel_web")?hf("visualElementShown",{csn:e,ve:Ve(d),eventType:1},f):kf(f,{visibilityUpdate:{csn:e,visualElements:[Ve(d)]}},void 0)}}}
function Qh(){var a=Gh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",O,void 0);t("yt.config.set",O,void 0);t("yt.setMsg",Ce,void 0);t("yt.msgs.set",Ce,void 0);t("yt.logging.errors.log",Ae,void 0);
t("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Bh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Vg(a.args);Gh=a=Pg(a);a.addEventListener("onScreenChanged",Mh);a.addEventListener("onLogClientVeCreated",Lh);a.addEventListener("onLogServerVeCreated",Nh);a.addEventListener("onLogToGel",Kh);
a.addEventListener("onLogVeClicked",Oh);a.addEventListener("onLogVesShown",Ph);a.addEventListener("onReady",Qh);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Ih=new gh(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(Hh=new jh(window.parent,b,c),Ih=new ah(a,Hh.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&ae();He()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){we(a+"mac_204?action_fcts=1");return!0},void 0);
var Rh=Cd(function(){pg("ol");var a=Z.getInstance(),b=!!((Fh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&dc(document.body,"exp-invert-logo"))if(c&&!dc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):dc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&dc(document.body,"inverted-hdpi")&&ec();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Fh(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Y[b]:Y[b]=d.toString(16).toString();a=a.b;c=[];for(var e in Y)c.push(e+"="+encodeURIComponent(String(Y[e])));tf(a,c.join("&"),63072E3)}}),Sh=Cd(function(){var a=Gh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&($d=null);a=0;for(var b=Fe.length;a<b;a++)Ee(Fe[a]);Fe.length=0;Yd("//static.doubleclick.net/instream/ad_status.js");Ge=!1;O("DCLKSTAT",0);bc(Ih,Hh);if(a=Gh)a.removeEventListener("onScreenChanged",Mh),a.removeEventListener("onLogClientVeCreated",Lh),a.removeEventListener("onLogServerVeCreated",Nh),a.removeEventListener("onLogToGel",Kh),a.removeEventListener("onLogVeClicked",Oh),a.removeEventListener("onLogVesShown",Ph),a.removeEventListener("onReady",
Qh),a.destroy();Jh={}});
window.addEventListener?(window.addEventListener("load",Rh),window.addEventListener("unload",Sh)):window.attachEvent&&(window.attachEvent("onload",Rh),window.attachEvent("onunload",Sh));}).call(this);
