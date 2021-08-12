(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{122:function(t,e,n){"use strict";n.r(e),n.d(e,"language",(function(){return E})),n.d(e,"config",(function(){return b})),n.d(e,"theme",(function(){return g})),n.d(e,"matchDocKey",(function(){return _})),n.d(e,"getProviders",(function(){return O}));var r=n(13),a=n.n(r),s=n(2),o=n.n(s),c=n(0),i=n.n(c),u=n(120);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}class l{static frontMatter(t){return"---\n"+"file: ".concat(t,"\n")+"date: ".concat((new Date).toLocaleDateString(),"\n")+"---\n"}static outdent(t,e){return t.length<=e?"\n":t.substr(e)}static matchBeginTitle(t){var e=t.match(this.REGEX_BEG_TITLE);return e?e[1]:null}static matchEndTitle(t){return!!t.match(this.REGEX_END_TITLE)}static matchBeginSection(t){var e=t.match(this.REGEX_BEG_SECTION);return e?e[1]:null}static matchEndSection(t){return!!t.match(this.REGEX_END_SECTION)}static matchBeginComment(t){var e=t.match(this.REGEX_BEG_COMMENT);return e?e[1]:null}static matchEndComment(t){return!!t.match(this.REGEX_END_COMMENT)}static indentation(t){var e=t.match(this.REGEX_INDENT);return e?e[1].length:0}static isComment(t){return!!t.match(this.REGEX_COMMENT)}static parse(t,e,n){var r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({tabsize:4,code:!1,front:!1},n),s="",o=!1,c=0;return r.front&&e&&(s+=this.frontMatter(e)),t.split("\n").forEach(t=>{if(!this.isComment(t))return o&&(s+="\n",o=!1),void(r.code&&(s+="\t".concat(t,"\n")));if(o){0===c&&(c=this.indentation(t));var e={endC:this.matchEndComment(t),endS:this.matchEndSection(t),endT:this.matchEndTitle(t)},n=e.endC;return n&&(s+="\n---\n\n"),void(n||e.endS||e.endT?o=!1:s+=this.outdent(t,c)+"\n")}var a={c:this.matchBeginComment(t),s:this.matchBeginSection(t),t:this.matchBeginTitle(t)},i=a.c,u=a.s,p=a.t;i?s+="\n### ".concat(i,"\n"):u?s+="\n## ".concat(u,"\n"):p&&(s+="\n# ".concat(p,"\n")),i||u||p?(o=!0,c=0):r.code&&(s+="\t".concat(t,"\n"))}),s}}l.REGEX_BEG_TITLE=/^\s*\/\/#{3,}\s*([^#]*[^#\s])\s*#{3,}$/,l.REGEX_END_TITLE=/^\s*((\/\/#{3,})|(\s*))$/,l.REGEX_BEG_SECTION=/^\s*\/\/={3,}\s*([^=]*[^=\s])\s*={3,}$/,l.REGEX_END_SECTION=/^\s*((\/\/={3,})|(\s*))$/,l.REGEX_BEG_COMMENT=/^\s*\/\/-{3,}\s*([^-]*[^=\s])\s*-{3,}$/,l.REGEX_END_COMMENT=/^\s*((\/\/-{3,})|(\s*))$/,l.REGEX_INDENT=/(^\s*\/\/\s*)[^\s]/,l.REGEX_COMMENT=/^\s*\/\//;class f{static matchLibrary(t){var e=[],n=t.match(new RegExp(this.REGEX_DEF_LIB,"g"));return n&&n.forEach(t=>{var n=t.match(this.REGEX_DEF_LIB);n&&e.push({namespace:n[1],fileName:n[2]})}),e}static matchImport(t){var e=[],n=t.match(new RegExp(this.REGEX_DEF_IMP,"g"));return n&&n.forEach(t=>{var n=t.match(this.REGEX_DEF_IMP);n&&e.push(n[1])}),e}static matchFuncName(t){var e=t.match(this.REGEX_FUNC_NAME);return e?e[1]:null}static getAllConditions(t){return this.getCondition([t])}static getCondition(t){var e=[];return t.forEach(t=>{var n=new RegExp(this.REGEX_FUNC_NAME_COND,"g").exec(t);if(n){var r=n[0],a=n.index,s=n.splice(1).filter(t=>"string"==typeof t).map(t=>t.replace(/^\|/,"")),o=t.substring(0,a),c=t.substring(a+r.length);1===s.length?(e.push(o+c),e.push(o+s+c)):s.forEach(t=>e.push(o+t+c))}}),e.length?this.getCondition(e):t}static parse(t,e,n,r,a){var s=this;return o()(i.a.mark((function o(){var c,u,p,f,m,h,d,E,b,g,v,C,w,_,O,y,x,k,D,N,T,G,R,j,P;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(0!==n){o.next=2;break}return o.abrupt("return",a);case 2:return c=n||2,o.next=5,e(t);case 5:u=o.sent,p=a||{},f=r||[],m=!1,h=0,d="",E="",b=u.split("\n"),g=0;case 14:if(!(g<b.length)){o.next=51;break}if(v=b[g]){o.next=18;break}return o.abrupt("continue",48);case 18:if(l.isComment(v)){o.next=39;break}m&&(m=!1,d&&s.getAllConditions(d).forEach(t=>p[f.concat(t).join(".")]={name:d,path:[...f],doc:E}),d="",E=""),C=s.matchLibrary(v),w=s.matchImport(v),_=0;case 23:if(!(_<C.length)){o.next=30;break}return O=C[_],o.next=27,s.parse(O.fileName,e,c-1,[...f,O.namespace],p);case 27:_++,o.next=23;break;case 30:y=0;case 31:if(!(y<w.length)){o.next=38;break}return x=w[y],o.next=35,s.parse(x,e,c-1,f,p);case 35:y++,o.next=31;break;case 38:return o.abrupt("continue",48);case 39:if(!m){o.next=45;break}return 0===h&&(h=l.indentation(v)),k={endC:l.matchEndComment(v),endS:l.matchEndSection(v),endT:l.matchEndTitle(v)},N=k.endS,T=k.endT,(D=k.endC)||N||T?m=!1:E+=l.outdent(v,h)+"\n",D&&(d&&s.getAllConditions(d).forEach(t=>p[f.concat(t).join(".")]={name:d,path:[...f],doc:E}),d="",E=""),o.abrupt("continue",48);case 45:G={c:l.matchBeginComment(v),s:l.matchBeginSection(v),t:l.matchBeginTitle(v)},j=G.s,P=G.t,(R=G.c)&&(d=s.matchFuncName(R)),(R||j||P)&&(m=!0,h=0,E="");case 48:g++,o.next=14;break;case 51:return o.abrupt("return",p);case 52:case"end":return o.stop()}}),o)})))()}}f.REGEX_DEF_LIB=/\b(\w+)\s*=\s*library\("(.+)"\);/,f.REGEX_DEF_IMP=/\bimport\("(.+)"\);/,f.REGEX_FUNC_NAME=/`.*?([\w[\]|]+)`/,f.REGEX_FUNC_NAME_COND=/\[(.+?)(\|.+?)*?]/;var m=n(15);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E={id:"faust",extensions:["dsp","lib"],mimetypes:["application/faust"]},b={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"/*",close:"*/",notIn:["string"]}]},g={base:"vs-dark",inherit:!0,rules:[{token:"faustFunctions",foreground:"DDDD99"},{token:"faustKeywords",foreground:"4499CC"},{token:"faustLib",foreground:"CCCCBB"},{token:"faustCompOperators",foreground:"FFDDFF"},{token:"identifier",foreground:"77CCFF"}],colors:null},v=["import","component","declare","library","environment","int","float","letrec","with","class","process","effect","inputs","outputs"],C=["mem","prefix","rdtable","rwtable","select2","select3","ffunction","fconstant","fvariable","route","waveform","soundfile","button","checkbox","vslider","hslider","nentry","vgroup","hgroup","tgroup","vbargraph","hbargraph","attach","acos","asin","atan","atan2","cos","sin","tan","exp","log","log10","pow","sqrt","abs","min","max","fmod","remainder","floor","ceil","rint","seq","par","sum","prod"],w=function(){var t=o()(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.fs.readFile("libraries/"+e,{encoding:"utf8"}));case 2:return"https://faustlibraries.grame.fr/libs/",t.next=5,fetch("https://faustlibraries.grame.fr/libs/"+e);case 5:return r=t.sent,t.abrupt("return",r.text());case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=(t,e,n)=>{var r=n.lineNumber,a=e.getLineContent(r),s=e.getWordAtPosition(n);if(!s)return null;for(var o=s.startColumn-1,c=s.word,i=[];o-2>=0&&"."===a[o-1];){o-=2;var p=e.getWordAtPosition(new u.Position(r,o));i.splice(0,0,p.word),o=p.startColumn-1}for(var l=[...i,c];l.length;){var f=l.join("."),m=t[f];if(m)return{nameArray:l,name:f,range:new u.Range(r,o+1,r,s.endColumn),doc:m};o+=l.splice(0,1)[0].length+1}return null},O=function(){var t=o()(i.a.mark((function t(e){var n,r,a,s,c,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},r={},t.prev=2,t.next=5,f.parse("stdfaust.lib",function(){var t=o()(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w(n,e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:return n=t.sent,t.next=8,f.parse("primitives.lib",function(){var t=o()(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w(n,e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:r=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:return a=Object.keys(n),s={provideHover:(t,e)=>{var a=_(d(d({},r),n),t,e);if(a){var s=a.nameArray.slice(),o=s.pop(),c=a.doc;return{range:a.range,contents:[{value:"```\n".concat(s.length?"("+s.join(".")+".)":"").concat(o,"\n```")},{value:c.doc.replace(/#+/g,"######")},{value:s.length?"[Detail...](".concat(m.b,"/").concat(m.a[s.slice(0,2)],"/#").concat(s.join(".")).concat(c.name.replace(/[[\]|]/g,"").toLowerCase(),")"):"[Detail...](https://faustdoc.grame.fr/manual/syntax/index.html#faust-syntax)"}]}}return null}},c={faustKeywords:v,faustFunctions:C,faustLib:a,defaultToken:"invalid",tokenPostfix:".dsp",faustCompOperators:["~",",",":","<:",":>"],operators:["=","+","-","*","/","%","^","&","|","xor","<<",">>",">","<","==","<=",">=","!=","@","'"],symbols:/[=><!~?:&|+\-*/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/!|_/,"keyword"],[/[a-z_$]([\w.$]*[\w$])?/,{cases:{"@faustFunctions":"faustFunctions","@faustKeywords":"faustKeywords","@faustLib":"faustLib","@default":"identifier"}}],[/[A-Z][\w$]*/,"type.identifier"],{include:"@whitespace"},[/[{}()[\]]/,"@brackets"],[/~|,|<:|:>|:/,"faustCompOperators"],[/[<>](?!@symbols)/,"@brackets"],[/=|\+|-|\*|\/|%|\^|&|\||xor|<<|>>|>|<|==|<=|>=|!=|@|'/,{cases:{"@operators":"operators","@default":""}}],[/\d*\.\d+([eE][-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;.]/,"delimiter"],[/"/,{token:"string",next:"@string"}]],comment:[[/[^/*]+/,"comment"],[/\/\*/,"comment","@push"],[/\*\//,"comment","@pop"],[/[/*]/,"comment"]],string:[[/[^\\"$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}},p={provideCompletionItems:()=>{var t=[];return[...v,...C,...a].forEach(e=>{t.push({label:e,kind:u.languages.CompletionItemKind.Text,insertText:e,range:null})}),{suggestions:t}}},t.abrupt("return",{hoverProvider:s,tokensProvider:c,completionItemProvider:p,docs:n});case 19:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=abe25f630d6b5e47abb8.js.map