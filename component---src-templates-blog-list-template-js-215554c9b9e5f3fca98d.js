(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{b9pq:function(e,t,a){"use strict";var n=a("9Hrx"),o=a("q1tI"),r=a.n(o),i=a("Wbzz"),l=a("vOnD"),c=l.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-8b91p3-0"})(["display:inline;color:var(--color-textSecondary);"]),s=Object(l.b)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-8b91p3-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),p=l.b.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-8b91p3-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,a=e.noLink;return r.a.createElement(c,null,t.map((function(e,n){return r.a.createElement(o.Fragment,{key:"tag-list-"+n},!a&&r.a.createElement(s,{to:"/tags/"+e},e),a&&r.a.createElement(p,{to:"/tags/"+e},e),n<t.length-1?", ":"")})))},t}(r.a.Component);t.a=m},"e+E3":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("b9pq"),l=a("tHN7"),c=a("vOnD"),s=a("LObP"),p=c.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"sc-1lmpvf-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;margin-bottom:1.5rem;"]),m=Object(c.b)(r.Link).withConfig({displayName:"PostsListItem__ReadPost",componentId:"sc-1lmpvf-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;color:var(--color-text);&:hover{background-color:var(--color-grey600);border-radius:0.25rem;color:var(--color-white);}"]),d=c.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"sc-1lmpvf-2"})(["padding:1em 0;"]),g=c.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"sc-1lmpvf-3"})(["line-height:1.45;padding-bottom:0.5em;color:darkgray;"]),u=Object(c.b)(r.Link).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"sc-1lmpvf-4"})(["color:var(--color-h2);&:hover{border-bottom:1px dotted var(--color-text);}"]),b=c.b.div.withConfig({displayName:"PostsListItem__FooterLine",componentId:"sc-1lmpvf-5"})(["font-size:0.8em;"]),f=function(e){var t=e.title,a=(e.type,e.excerpt),n=e.slug,r=(e.language,e.tags),c=e.timeToRead,f=e.hero,h=e.cover;Object(l.a)().defaultLang;return o.a.createElement(p,null,o.a.createElement(d,null,f&&o.a.createElement("div",{style:{"margin-bottom":"25px"}},o.a.createElement("img",{src:f||h&&h.publicURL})),o.a.createElement("h2",null,o.a.createElement(u,{to:"/"+n},t))),o.a.createElement("section",null,o.a.createElement(g,{dangerouslySetInnerHTML:{__html:a}})),o.a.createElement("footer",null,o.a.createElement(b,null,o.a.createElement(s.c,{min:c}),o.a.createElement(s.a,null),o.a.createElement(i.a,{tags:r})),o.a.createElement(m,{to:"/"+n,"aria-label":"View "+t+" article"},"Read post ›")))};t.a=function(e){var t=e.posts,a=Object(l.a)().defaultLang;return o.a.createElement(n.Fragment,null,t.map((function(e){var t={title:e.node.frontmatter.title,type:e.node.frontmatter.type,excerpt:e.node.excerpt,slug:e.node.frontmatter.slug,timeToRead:e.node.timeToRead,language:e.node.frontmatter.language||a,tags:e.node.frontmatter.tags||[],hero:e.node.frontmatter.hero,cover:e.node.frontmatter.cover};return o.a.createElement(f,Object.assign({key:t.slug},t))})))}},"tJ/O":function(e,t,a){"use strict";a.r(t),a.d(t,"PageTitle",(function(){return x})),a.d(t,"PageTitleHr",(function(){return v}));var n=a("9Hrx"),o=a("q1tI"),r=a.n(o),i=a("Bl7J"),l=a("SgMy"),c=a("e+E3"),s=a("Wbzz"),p=a("vOnD"),m=p.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"sc-1t5yerg-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),d=Object(p.b)(s.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"sc-1t5yerg-1"})(["border-radius:3px;background-color:var(--color-primary);border:1px solid var(--color-primary);color:var(--color-white);padding:8px 20px;min-width:130px;&:hover{background-color:var(--color-white);color:var(--color-primary);border:1px solid var(--color-primary);}@media (max-width:564px){margin-top:10px;width:100%;}"]),g=Object(p.b)(d).withConfig({displayName:"Pagination__PreviousBtn",componentId:"sc-1t5yerg-2"})(["order:1;@media (max-width:564px){order:2;}"]),u=Object(p.b)(d).withConfig({displayName:"Pagination__NextBtn",componentId:"sc-1t5yerg-3"})(["order:3;"]),b=p.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"sc-1t5yerg-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),f=p.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"sc-1t5yerg-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,a=e.nbPages,n=2===t?"/":"/pages/"+(t-1);return r.a.createElement(m,null,1!==t?r.a.createElement(g,{to:n},"‹ Newer posts"):r.a.createElement(b,{className:"previous"}),r.a.createElement(f,null,"Page ",t," of ",a),t<a?r.a.createElement(u,{to:"/pages/"+(t+1)},"Older posts ›"):r.a.createElement(b,{className:"next"}))},t}(r.a.Component),y=a("EYWl"),x=p.b.h2.withConfig({displayName:"blog-list-template__PageTitle",componentId:"l3djtm-0"})([""]),v=p.b.hr.withConfig({displayName:"blog-list-template__PageTitleHr",componentId:"l3djtm-1"})(["margin:20px 0 10px 0;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.posts.edges,t=this.props.pageContext;return r.a.createElement(i.a,{location:this.props.location},r.a.createElement(y.a,null),r.a.createElement(l.a,null,r.a.createElement(x,null,"All Posts"),r.a.createElement(v,null),r.a.createElement(c.a,{posts:e})),r.a.createElement(h,{nbPages:t.nbPages,currentPage:t.currentPage}))},t}(r.a.Component);t.default=w}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-215554c9b9e5f3fca98d.js.map