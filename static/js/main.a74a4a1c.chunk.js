(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{32:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c,i,a,o,r,l,s,d,j,b,p,x,u,h,O,f,v,g,m=t(2),w=t.n(m),y=t(18),k=t.n(y),z=(t(32),t(12)),R=t(19),S=t(6),M=t(4),T=t(5),P=t(1),D=T.a.div(c||(c=Object(M.a)(["\ndisplay:flex;\nflex-direction: column;\npadding: 10px;\nwidth:280px;\ncursor: pointer;\n"]))),Y=T.a.span(i||(i=Object(M.a)(["\nfont-size: 18px;\nfont-weight: 600;\ncolor:black;\nmargin: 15px 0; \n"]))),C=T.a.img(a||(a=Object(M.a)(["\nobject-fit: cover;\nheight:362;\n"]))),I=T.a.span(o||(o=Object(M.a)(["\ndisplay:flex;\nflex-direction:row;\njustify-content: space-between;\ncolor:black;\n"]))),A=T.a.span(r||(r=Object(M.a)(["\nfont-size:16px;\nfont-weight: 500;\ncolor:black;\ntext-transform: capitalize;\n"]))),B=function(e){var n=e.movie,t=n.Title,c=n.Year,i=n.Type,a=n.Poster,o=n.imdbID;return Object(P.jsxs)(D,{onClick:function(){return e.onMovieSelect(o)},children:[Object(P.jsx)(C,{src:a}),Object(P.jsx)(Y,{children:t}),Object(P.jsxs)(I,{children:[Object(P.jsxs)(A,{children:[" Year: ",c]}),Object(P.jsxs)(A,{children:[" Type: ",i," "]})]})]})},E=t(42),G=T.a.div(l||(l=Object(M.a)(["\ndisplay:flex;\nflex-direction: row;\npadding: 20px 30px;\njustify-content: center;\nborder-bottom: 1px solid lightgray;\n"]))),J=T.a.img(s||(s=Object(M.a)(["\n  object-fit: cover;\n  height: 350px;\n"]))),L=T.a.div(d||(d=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n"]))),F=T.a.span(j||(j=Object(M.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  & span {\n    opacity: 0.8;\n  }\n"]))),Q=T.a.span(b||(b=Object(M.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  overflow: hidden;\n  margin: 4px 0;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  & span {\n    opacity: 0.5;\n  }\n"]))),q=T.a.span(p||(p=Object(M.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background: lightgray;\n  height: fit-content;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.8;\n"]))),H=function(e){var n=Object(m.useState)(),t=Object(S.a)(n,2),c=t[0],i=t[1],a=e.selectedMovie;return Object(m.useEffect)((function(){E.a.get("https://www.omdbapi.com/?i=".concat(a,"&apikey=").concat(K)).then((function(e){return i(e.data)}))}),[a]),Object(P.jsx)(G,{children:c?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J,{src:null===c||void 0===c?void 0:c.Poster,alt:null===c||void 0===c?void 0:c.Title}),Object(P.jsxs)(L,{children:[Object(P.jsxs)(F,{children:[null===c||void 0===c?void 0:c.Type,": ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Title})]}),Object(P.jsxs)(Q,{children:["IMDB Rating: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.imdbRating})]}),Object(P.jsxs)(Q,{children:["Year: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Year})]}),Object(P.jsxs)(Q,{children:["Language: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Language})]}),Object(P.jsxs)(Q,{children:["Rated: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Rated})]}),Object(P.jsxs)(Q,{children:["Released: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Released})]}),Object(P.jsxs)(Q,{children:["Runtime: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Runtime})]}),Object(P.jsxs)(Q,{children:["Genre: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Genre})]}),Object(P.jsxs)(Q,{children:["Director: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Director})]}),Object(P.jsxs)(Q,{children:["Actors: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Actors})]}),Object(P.jsxs)(Q,{children:["Plot: ",Object(P.jsx)("span",{children:null===c||void 0===c?void 0:c.Plot})]})]}),Object(P.jsx)(q,{onClick:function(){return e.onMovieSelect()},children:"close"})]}):"Patientez un instant"})},K="7872d860",N=T.a.div(x||(x=Object(M.a)(["\n display: flex;\n flex-direction: column;\n "]))),U=T.a.div(u||(u=Object(M.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nbackground-color : blue;\ncolor: white;\npadding: 15px;\nalign-items: center;\nfont-size: 22px;\nfont-weight: bold;\n"]))),V=T.a.div(h||(h=Object(M.a)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\n"]))),W=T.a.div(O||(O=Object(M.a)(["\ndisplay:flex;\nflex-direction: row;\npadding:10px;\nbackground-color:white;\nborder-radius: 7px;\nmargin-left: 30px;\nwidth: 50%;\nalign-items: center;\n"]))),X=T.a.img(f||(f=Object(M.a)(["\nwidth:30px;\nheight:30px;\n"]))),Z=T.a.input(v||(v=Object(M.a)(["\nborder: none;\nfont-size: 16px;\nfont-weight: bold;\noutline: none;\ncolor: black;\nmargin-left: 10px;\n"]))),$=T.a.div(g||(g=Object(M.a)(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\npadding: 20px;\njustify-content: space-evenly;\n"])));var _=function(){var e=Object(m.useState)(),n=Object(S.a)(e,2),t=n[0],c=n[1],i=Object(m.useState)(),a=Object(S.a)(i,2),o=a[0],r=a[1],l=Object(m.useState)([]),s=Object(S.a)(l,2),d=s[0],j=s[1],b=Object(m.useState)(),p=Object(S.a)(b,2),x=p[0],u=p[1],h=function(){var e=Object(R.a)(Object(z.a)().mark((function e(n){var t;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://www.omdbapi.com/?s=".concat(n,"&apikey=").concat(K));case 2:t=e.sent,j(t.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(P.jsxs)(N,{children:[Object(P.jsxs)(U,{children:[Object(P.jsx)(V,{children:"Movies.fr"}),Object(P.jsxs)(W,{children:[Object(P.jsx)(X,{src:"/search.png"}),Object(P.jsx)(Z,{placeholder:"Quel film recherchez vous ?",value:t,onChange:function(e){clearTimeout(o),c();var n=setTimeout((function(){return h(e.target.value)}),500);r(n)}})]})]}),x&&Object(P.jsx)(H,{selectedMovie:x}),Object(P.jsx)($,{children:null!==d&&void 0!==d&&d.length?d.map((function(e,n){return Object(P.jsx)(B,{movie:e,onMovieSelect:u},n)})):"Rechechez un film dans la barre de recherche"})]})};k.a.createRoot(document.getElementById("root")).render(Object(P.jsx)(w.a.StrictMode,{children:Object(P.jsx)(_,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a74a4a1c.chunk.js.map