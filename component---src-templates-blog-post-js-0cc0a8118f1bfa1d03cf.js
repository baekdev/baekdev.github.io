(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(e,t){},"1oc3":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("tHN7"),c=n("su/s"),l=a.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"ebqgo0-0"})(["position:relative;display:table;width:100%;height:360px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:contain;max-width:770px;margin:0 auto;"]);a.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"ebqgo0-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),a.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"ebqgo0-2"})(["font-weight:700;font-size:3rem;margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]),a.b.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"ebqgo0-3"})(["margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]);t.a=function(e){var t=Object(i.a)().siteCover,n=Object(c.a)(t).fluid,r=e.heroImg||n.src;return o.a.createElement(l,{style:{backgroundImage:'url("'+r+'")'}})}},"7zRj":function(e,t,n){(function(t){var r,o=void 0!==t?t:"undefined"!=typeof window?window:{},a=n(0);"undefined"!=typeof document?r=document:(r=o["__GLOBAL_DOCUMENT_CACHE@4"])||(r=o["__GLOBAL_DOCUMENT_CACHE@4"]=a),e.exports=r}).call(this,n("yLpj"))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DKqX:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=n("b9pq"),l=n("Wbzz"),s=i.b.div.withConfig({displayName:"Translations__TranslationContainer",componentId:"vnx1jd-0"})(["border-radius:5px;padding:10px;margin-top:10px;background-color:var(--color-lightYellow);border:1px solid var(--color-grey700);"]),d=i.b.span.withConfig({displayName:"Translations__InfoText",componentId:"vnx1jd-1"})(["color:var(--color-grey900);"]),p=i.b.a.withConfig({displayName:"Translations__TranslationLink",componentId:"vnx1jd-2"})(["color:var(--color-grey900);text-decoration:underline;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.translations;return a.a.createElement(s,null,a.a.createElement(d,null,"This article also exists in: "),e.map((function(t,n){return a.a.createElement(o.Fragment,{key:"translation-"+n},a.a.createElement(p,{href:Object(l.withPrefix)(t.link)},t.language),n<e.length-1?", ":"")})))},t}(a.a.Component),m=function(e){var t=i.b.time.withConfig({displayName:"Time__TimeContainer",componentId:"sc-1rnkboc-0"})(["color:var(--color-textSecondary);"]),n=e.date,r=new Date(n),o=r.toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"numeric"}).split("/").reverse().join("-"),c=r.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"});return a.a.createElement(t,{datetime:o},c)},g=n("LObP"),f=i.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"hqu41n-0"})(["margin:1rem 0;color:var(--color-textSecondary);font-size:0.9em;text-align:right;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags,r=e.translations;return a.a.createElement(f,null,t&&a.a.createElement(m,{date:t}),t&&Array.isArray(n)&&n.length>0&&a.a.createElement(g.a,null),Array.isArray(n)&&n.length>0&&a.a.createElement(o.Fragment,null,a.a.createElement(c.a,{tags:n})),r&&a.a.createElement(u,{translations:r}))},t}(a.a.Component);t.a=h},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},H35Q:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KE4F:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=(n("DKqX"),n("X8hv")),l=n.n(c),s=i.b.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-4t2sv6-0"})(["line-height:1.6;& > h2{color:var(--color-h2);padding-top:3rem;margin-top:3rem;border-bottom:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{fill:var(--color-text);box-shadow:0 2px 0 0 var(--color-secondary);&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}h1 .anchor svg,h2 .anchor svg,h3 .anchor svg,h4 .anchor svg,h5 .anchor svg,h6 .anchor svg{visibility:hidden;margin-left:-16px;}h1:hover .anchor svg,h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg,h1 .anchor:focus svg,h2 .anchor:focus svg,h3 .anchor:focus svg,h4 .anchor:focus svg,h5 .anchor:focus svg,h6 .anchor:focus svg{visibility:visible;}& > blockquote{box-sizing:border-box;background-color:var(--color-secondaryContentBackground);border-left:5px solid var(--color-secondary);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0 0 0;@media (max-width:500px){border-radius:0;margin-left:-25px;margin-right:-25px;}}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}& .gatsby-highlight-code-line{background-color:var(--color-darkBlue);display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid var(--color-yellow);}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:var(--color-yellow);color:black;padding:2px 6px;font-size:0.9em;border-radius:0.3rem;word-wrap:break-word;word-spacing:-3px;}& u{text-decoration-style:wavy;text-decoration-color:#ea3d3d;}& code{word-wrap:break-word;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background-color:var(--color-secondaryContentBackground);}& tr{border-bottom:2px solid var(--color-white);}& tbody tr:last-child{border-bottom:none;}}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.content;e.date,e.tags,e.translations;return a.a.createElement("section",null,a.a.createElement(s,null,a.a.createElement(l.a,null,t)))},t}(a.a.Component);t.a=d},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),i=n("8OQS");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),d=n("7ljp").mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,["scope","children"]),c=p(t),u=s.useMemo((function(){if(!n)return null;var e=l({React:s,mdx:d},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return s.createElement(u,l({},a))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},b9pq:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("Wbzz"),c=n("vOnD"),l=c.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-8b91p3-0"})(["display:inline;color:var(--color-textSecondary);"]),s=Object(c.b)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-8b91p3-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),d=c.b.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-8b91p3-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.noLink;return a.a.createElement(l,null,t.map((function(e,r){return a.a.createElement(o.Fragment,{key:"tag-list-"+r},!n&&a.a.createElement(s,{to:"/tags/"+e},e),n&&a.a.createElement(d,{to:"/tags/"+e},e),r<t.length-1?", ":"")})))},t}(a.a.Component);t.a=p},eJL6:function(e,t,n){var r,o,a,i,c,l=n("vgmO"),s=n("7zRj");void 0!==typeof l&&(l.fbAsyncInit=function(){FB.init({appId:"2757197850997445",xfbml:!0,version:"v2.8"}),FB.Canvas.getPageInfo((function(e){alert("Width: "+e.clientWidth+" Height: "+e.clientHeight)})),FB.AppEvents.logPageView()},o="script",a="facebook-jssdk",c=(r=s).getElementsByTagName(o)[0],console.log("js:",i,"fjs:",c),r.getElementById(a)||void 0!==c&&((i=r.createElement(o)).id=a,i.src="//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8",c.parentNode.insertBefore(i,c)))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,i){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a},vgmO:function(e,t,n){(function(t){var n;n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n}).call(this,n("yLpj"))},xwj8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return D}));var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("Bl7J"),c=n("SgMy"),l=n("1oc3"),s=n("vOnD"),d=n("tHN7"),p=n("su/s"),u=s.b.div.withConfig({displayName:"HeroPost__HeroContainer",componentId:"sc-1ro0v1y-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:contain;max-width:770px;margin:0 auto;"]),m=s.b.div.withConfig({displayName:"HeroPost__TitleContainer",componentId:"sc-1ro0v1y-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),g=s.b.h1.withConfig({displayName:"HeroPost__HeroTitle",componentId:"sc-1ro0v1y-2"})(["font-weight:700;font-size:2rem;padding-bottom:20px;border-bottom:1px solid #ececec;"]),f=s.b.h2.withConfig({displayName:"HeroPost__HeroSubTitle",componentId:"sc-1ro0v1y-3"})(["margin:10px 50px;"]),h=function(e){var t=Object(d.a)().siteCover,n=Object(p.a)(t).fluid;e.heroImg||n.src;return a.a.createElement(u,null,a.a.createElement(m,null,a.a.createElement(g,null,e.title),e.subTitle&&a.a.createElement(f,null,e.subTitle)))},b=n("DKqX"),x=n("LObP"),v=(s.b.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-1pwqxfv-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#ececec 0 0 0 1px;background-color:var(--color-wrapperBackground);}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"]),Object(s.b)(x.e).withConfig({displayName:"Bio__BioText",componentId:"sc-1pwqxfv-1"})(["& a{box-shadow:0 2px 0 0 var(--color-secondary);}& a:hover{filter:brightness(150%);box-shadow:none;}"]),n("KE4F")),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.siteUrl,n=e.slug;return a.a.createElement("div",{style:{margin:"10px 0 20px 0","text-align":"center"}},a.a.createElement("div",{className:"fb-like","data-href":t+"/"+n,"data-width":"300","data-layout":"button_count","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"true"}))},t}(o.Component),w=s.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"sem4xn-0"})(["padding:0;@media only screen and (max-width:500px){padding:0;}"]),A=(s.b.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"sem4xn-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-bottom:1px solid #ececec;"]),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.post,r=e.siteMetadata;n("eJL6");return a.a.createElement(w,null,a.a.createElement(y,{siteUrl:r.siteUrl,slug:t.frontmatter.slug}),a.a.createElement(v.a,{content:t.body,date:t.frontmatter.date,tags:t.frontmatter.tags,translations:t.frontmatter.translations}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(y,{siteUrl:r.siteUrl,slug:t.frontmatter.slug}))},t}(a.a.Component)),E=n("Wbzz"),k=n("b9pq"),C=(n("ygxU"),s.b.aside.withConfig({displayName:"PrevNextPost__PreviewContainer",componentId:"sc-18h5ce7-0"})(["display:flex;flex-wrap:wrap;max-width:770px;width:80%;margin:0px auto 30px auto;top:20px;position:relative;@media (max-width:780px){width:100%;padding:25px;}"])),I=s.b.article.withConfig({displayName:"PrevNextPost__Preview",componentId:"sc-18h5ce7-1"})(["cursor:pointer;flex:1 1 300px;background-color:white;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);margin:20px 20px;border-radius:5px;&:hover{box-shadow:0 0 0 0,0 6px 12px var(--color-grey300);transition:all 0.3s ease;transform:translate3D(0,-1px,0);}@media (min-width:780px){&:first-child{margin-left:0;}&:last-child{margin-right:0;}}"]),O=s.b.div.withConfig({displayName:"PrevNextPost__PreviewCover",componentId:"sc-18h5ce7-2"})(["width:auto;height:200px;background:#c5d2d9 no-repeat 50%;background-size:cover;border-radius:5px 5px 0 0;"]),j=s.b.div.withConfig({displayName:"PrevNextPost__PreviewContent",componentId:"sc-18h5ce7-3"})(["padding:20px;header{padding:0 0 10px 0;}section{padding-bottom:10px;}footer{font-size:0.8em;}"]),N=function(e){var t=[e.previous,e.next].filter((function(e){return e})).map((function(e){return{node:e}})),n=Object(d.a)(),r=n.siteCover,i=(n.defaultLang,Object(p.a)(r).fluid);return a.a.createElement(o.Fragment,null,a.a.createElement(C,null,t.map((function(e,t){var n=e.node,r=n.excerpt,o=n.timeToRead,c=e.node.frontmatter,l=c.tags,s=c.hero,d=c.cover,p=c.title,u=c.slug,m=(c.language,s||d&&d.publicURL||i.src);return a.a.createElement(I,{key:"prev-next-"+t},a.a.createElement(E.Link,{to:"/"+u,"aria-label":"View "+p+" article"},a.a.createElement(O,{style:{backgroundImage:'url("'+m+'")'}}),a.a.createElement(j,null,a.a.createElement("header",null,a.a.createElement("h3",null,p)),a.a.createElement("section",{style:{"font-size":"0.9rem"}},a.a.createElement("p",null,r)),a.a.createElement("footer",{style:{"font-size":"0.7rem"}},a.a.createElement(x.c,{min:o}),Array.isArray(l)&&a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,null),a.a.createElement(k.a,{tags:l,noLink:!0}))))))}))))},P=n("EYWl");var S=function(){var e=Object(E.useStaticQuery)("2540126770").site;return Object(o.useEffect)((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})})),a.a.createElement("ins",{className:"adsbygoogle",style:{display:"block","text-align":"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":e.siteMetadata.googleAdsence.adClient,"data-ad-slot":e.siteMetadata.googleAdsence.adSlot})},_=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=this.props.data.post,n=this.props.pageContext,r=n.previous,o=n.next;return a.a.createElement(i.a,{location:this.props.location},a.a.createElement(P.a,{title:t.frontmatter.title,description:t.excerpt,cover:t.frontmatter.hero?t.frontmatter.hero:t.frontmatter.cover&&t.frontmatter.cover.publicURL,imageShare:t.frontmatter.imageShare&&t.frontmatter.imageShare.publicURL,lang:t.frontmatter.language,translations:t.frontmatter.translations,path:t.frontmatter.slug,isBlogPost:!0}),a.a.createElement(c.a,null,a.a.createElement(h,{title:t.frontmatter.title}),(t.frontmatter.tags||t.frontmatter.date||t.frontmatter.translations)&&a.a.createElement(b.a,{date:t.frontmatter.date,tags:t.frontmatter.tags,translations:t.frontmatter.translations}),t.frontmatter.hero?a.a.createElement(l.a,{heroImg:t.frontmatter.hero}):a.a.createElement(l.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL}),a.a.createElement(S,null),a.a.createElement(A,{post:t,siteMetadata:e}),a.a.createElement(S,null)),a.a.createElement(N,{previous:r,next:o}))},t}(a.a.Component),D=(t.default=_,"4113014004")},ygxU:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=n("xwj8"),l=n.n(c),s=n("H35Q"),d=n.n(s),p=i.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"n9jb7f-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?l.a:d.a,n="en"===e?"english post":"post en francais";return a.a.createElement(p,{src:t,alt:n,className:"flag"})},t}(a.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0cc0a8118f1bfa1d03cf.js.map