(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{46:function(n,t,e){},59:function(n,t,e){"use strict";e.r(t);var r,a,c,i,o=e(1),s=e.n(o),u=e(15),l=e.n(u),d=(e(45),e(46),e(16)),b=e(21),j=e(22),p=e(25),x=e(24),f=e(18),m=e(9),h=e(4),O=e.n(h),g=e(8),v=e(5),y=e(6),k=e(7),w=e(12),S="user",E=function(n){return localStorage.setItem(S,JSON.stringify(n))},N=function(n){return function(t){setTimeout((function(){t(n)}),1500)}},I=function(){return new Promise((function(n){var t=JSON.parse(localStorage.getItem(S));null===t&&(t={}),N(t)(n)}))},C=function(n){return new Promise((function(t){E(Object(d.a)(Object(d.a)({},{name:"",email:"",image:"",description:""}),n)),N("OK")(t)}))},B=function(n){return new Promise((function(t){E(Object(d.a)({},n)),N("OK")(t)}))},F=e(2),D=k.a.div(r||(r=Object(y.a)(["\n      width: 80px;\n      height: 80px;\n      border: 15px solid #fc466b;\n      border-top-color: transparent;\n      border-radius: 50%;\n      animation: loading 0.6s  linear infinite ;\n      margin-top: 50px;\n  \n      @keyframes loading { \n        to { \n          transform: rotate(360deg);\n        }\n      }\n"]))),P=k.a.div(a||(a=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      \n      .isMusicCard {\n        width: 30px;\n        height: 30px;\n        border: 8px solid #fc466b;\n        border-top-color: transparent;\n        border-radius: 50%;\n        margin-left: 450px;\n        margin-top: 15px;\n\n        @media (max-width: 800px) {\n           margin-left: 375px;\n           margin-top: 15px;\n        }\n\n      }\n\n      p {\n        color: #111;\n      }\n"])));function J(n){var t=n.isMusicCard;return Object(F.jsx)(P,{children:Object(F.jsx)(D,{className:t&&"isMusicCard"})})}var U=k.a.div(c||(c=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 15%;\n      \n      @media (max-width: 800px) {\n      \n         form {\n           width: 350px;\n           margin-top: 20%;\n         }\n\n      }\n"]))),z=k.a.form(i||(i=Object(y.a)(["\n      display: flex;\n      background: rgb(63,94,251);\n      background: radial-gradient(circle, \n        rgba(63,94,251,1) 0%, \n        rgba(252,70,107,1) 100%);\n      height: 300px;\n      width: 500px;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      border-radius: 5%;\n\n      h1 {\n        margin-bottom: 20px;\n      }\n\n      Input {\n        width: 300px;\n      }\n\n      Button {\n        margin-top: 20px;\n        width: 300px;\n      }\n"])));function M(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],c=r[1],i=Object(o.useState)(!1),s=Object(v.a)(i,2),u=s[0],l=s[1];return Object(o.useEffect)((function(){return function(){l(!1)}}),[]),Object(F.jsx)(U,{"data-testid":"page-login",children:u?Object(F.jsx)(J,{}):Object(F.jsxs)(z,{onSubmit:function(){var n=Object(g.a)(O.a.mark((function n(e){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),l(!0),n.next=4,C({name:a});case 4:l(!1),t.push("/search");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),children:[Object(F.jsx)("h1",{children:"TRYBETUNES"}),Object(F.jsx)(w.b,{type:"text","data-testid":"login-name-input",onChange:function(n){var t=n.target;c(t.value)},value:a,placeholder:"nome",maxLength:"15"}),Object(F.jsx)(w.a,{disabled:a.length<3,type:"submit","data-testid":"login-submit-button",color:"primary",children:"Entrar"})]})})}var T,K,R,L=function(){var n=Object(g.a)(O.a.mark((function n(t){var e,r,a,c,i,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=encodeURI(t).replaceAll("%20","+"),r="https://itunes.apple.com/search?enitity=album&term=".concat(e),n.next=4,fetch(r);case 4:return a=n.sent,n.next=7,a.json();case 7:return c=n.sent,i=c.results,o=i.map((function(n){return{artistId:n.artistId,artistName:n.artistName,collectionId:n.collectionId,collectionName:n.collectionName,collectionPrice:n.collectionPrice,artworkUrl100:n.artworkUrl100,releaseDate:n.releaseDate,trackCount:n.trackCount}})),n.abrupt("return",o);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),q=L,A=k.a.section(T||(T=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: wrap;\n\n      & .musicCard:hover {\n        box-shadow: 0px 1px 5px 5px #7B68EE;\n        cursor: pointer;\n      }\n"]))),Y=k.a.div(K||(K=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      height: 300px;\n      width: 300px;\n      background: rgb(63,94,251);\n      background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n      margin: 30px;\n      border-radius: 20%;\n\n      img {\n        height: 150px;\n        width: 150px;\n        border: 5px solid black;\n        margin-bottom: 20px;\n      }\n\n      .link {\n        text-align: center;\n        font-size: 20px;\n        color: #111;\n      }\n"]))),_=k.a.form(R||(R=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n\n      Input {\n        margin-top: 50px;\n        width:500px;\n      }\n\n      Button {\n        background-color: #7B68EE;\n        margin-top: 15px;\n        width:500px;\n        border: none;\n      }\n\n      Button:hover {\n        background-color: #4B0082;\n        border: none;\n      }\n\n      h3 {\n        margin-top: 60px;\n        color: #fff;\n      }\n"])));function G(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],c=r[1],i=Object(o.useState)(!1),s=Object(v.a)(i,2),u=s[0],l=s[1],d=Object(o.useState)([]),b=Object(v.a)(d,2),j=b[0],p=b[1],x=Object(o.useState)(""),m=Object(v.a)(x,2),h=m[0],y=m[1],k=function(){var n=Object(g.a)(O.a.mark((function n(t){var e;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),l(!0),n.next=4,q(a);case 4:e=n.sent,c(""),p(e),l(!1);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(F.jsx)("div",{"data-testid":"page-search",children:u?Object(F.jsx)(J,{}):Object(F.jsxs)(_,{onSubmit:k,children:[Object(F.jsx)(w.b,{type:"text","data-testid":"search-artist-input",value:a,onChange:function(n){var t=n.target;c(t.value)},placeholder:"m\xfasica ou artista"}),Object(F.jsx)(w.a,{disabled:a.length<2,type:"submit","data-testid":"search-artist-button",onClick:function(){return y(a)},children:"Pesquisar"}),0===j.length?Object(F.jsx)("h3",{children:"Nenhum \xe1lbum foi encontrado"}):Object(F.jsxs)("section",{style:{textAlign:"center"},children:[Object(F.jsx)("h3",{children:"Resultado de \xe1lbuns de: ".concat(h)}),Object(F.jsx)(A,{children:j.map((function(n,e){return Object(F.jsxs)(Y,{className:"musicCard",onClick:function(){return t.push("/album/".concat(n.collectionId))},children:[Object(F.jsx)("img",{src:n.artworkUrl100,alt:n.artistName}),Object(F.jsx)(f.b,{"data-testid":"link-to-album-".concat(n.collectionId),to:"/album/".concat(n.collectionId),style:{textDecoration:"none"},className:"link",children:Object(F.jsx)("h4",{children:n.collectionName})})]},e)}))})]})]})})}var H=e(30),Q=e(38),V="favorite_songs";JSON.parse(localStorage.getItem(V))||localStorage.setItem(V,JSON.stringify([]));var W,X=function(){return JSON.parse(localStorage.getItem(V))},Z=function(n){return localStorage.setItem(V,JSON.stringify(n))},$=function(n){return function(t){setTimeout((function(){t(n)}),500)}},nn=function(){return new Promise((function(n){var t=X();$(t)(n)}))},tn=function(n){return new Promise((function(t){if(n){var e=X();Z([].concat(Object(Q.a)(e),[n]))}$("OK")(t)}))},en=function(n){return new Promise((function(t){var e=X();Z(e.filter((function(t){return t.trackId!==n.trackId}))),$("OK")(t)}))},rn=k.a.article(W||(W=Object(y.a)(["\n      margin-bottom: 50px;;\n  \n      label {\n        color: #111;\n        margin-left: 400px;\n      }\n\n      svg {\n        height: 30px;\n        width: 30px;\n        color: red;\n        margin-top: 15px;;\n      }\n\n      svg:hover {\n        cursor: pointer;\n      }\n\n      input {\n        display: none;\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      audio {\n        position: absolute;\n      }\n\n      p {\n        margin-top: 30px;\n        margin-bottom: 30px;\n      }\n\n      audio::-webkit-media-controls-panel {\n        background: rgb(63,94,251);\n        background: radial-gradient(circle, \n          rgba(63,94,251,1) 0%, \n          rgba(252,70,107,1) 100%);\n      }\n      \n"])));function an(n){var t=n.track,e=Object(o.useState)([]),r=Object(v.a)(e,2),a=r[0],c=r[1],i=Object(o.useState)(!1),s=Object(v.a)(i,2),u=s[0],l=s[1],d=t.trackName,b=t.previewUrl,j=t.trackId,p=-1!==a.findIndex((function(n){return n.trackId===j})),x=function(){var n=Object(g.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn();case 2:t=n.sent,c(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=Object(g.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!p){n.next=6;break}return l(!0),n.next=4,en(t);case 4:n.next=9;break;case 6:return l(!0),n.next=9,tn(t);case 9:return n.next=11,nn();case 11:l(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){x()}),[a]),Object(o.useEffect)((function(){return function(){l(!1),c([])}}),[]),Object(F.jsxs)(rn,{children:[Object(F.jsx)("p",{children:d}),Object(F.jsxs)("div",{children:[Object(F.jsxs)("audio",{"data-testid":"audio-component",src:b,controls:!0,children:[Object(F.jsx)("track",{kind:"captions"}),Object(F.jsx)("code",{children:"audio"})]}),u?Object(F.jsx)(J,{isMusicCard:!0}):Object(F.jsxs)("label",{htmlFor:j,children:["Favorita",p?Object(F.jsx)(H.a,{}):Object(F.jsx)(H.b,{}),Object(F.jsx)("input",{checked:p,"data-testid":"checkbox-music-".concat(j),type:"checkbox",id:j,onChange:f})]})]})]})}var cn,on,sn=function(){var n=Object(g.a)(O.a.mark((function n(t){var e,r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),un=sn,ln=k.a.div(cn||(cn=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n\n      p {\n        margin-top: 15px;\n        font-size: 25px;\n      }\n\n\n      img {\n        margin-top: 50px;\n        height: 200px;\n        width: 200px;\n        border-radius: 50%;\n        border: 8px solid rgb(63,94,251);\n        margin-bottom: 20px;\n      }\n\n"])));function dn(n){var t=Object(o.useState)([]),e=Object(v.a)(t,2),r=e[0],a=e[1];return Object(o.useEffect)((function(){var t=function(){var t=Object(g.a)(O.a.mark((function t(){var e,r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.match.params,r=e.id,t.next=4,un(r);case 4:c=t.sent,a(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),Object(F.jsx)("div",{"data-testid":"page-album",children:0===r.length?Object(F.jsx)(J,{}):Object(F.jsxs)(ln,{children:[Object(F.jsxs)("section",{children:[Object(F.jsx)("img",{src:r[0].artworkUrl100,alt:r[0].collectionName}),Object(F.jsx)("h1",{"data-testid":"artist-name",children:r[0].artistName}),Object(F.jsx)("p",{"data-testid":"album-name",children:r[0].collectionName})]}),Object(F.jsx)("section",{children:r.slice(1).map((function(n){return Object(F.jsx)(an,{track:n},n.trackId)}))})]})})}var bn=k.a.div(on||(on=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      flex-direction: column;\n\n      p {\n        font-size: 25px;\n      }\n"])));function jn(){var n=Object(o.useState)([]),t=Object(v.a)(n,2),e=t[0],r=t[1],a=function(){var n=Object(g.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){a()}),[e]),Object(o.useEffect)((function(){return function(){r([])}}),[]),Object(F.jsx)(bn,{"data-testid":"page-favorites",children:e.map((function(n){return Object(F.jsx)(an,{track:n},n.trackId)}))})}var pn,xn,fn,mn=e.p+"static/media/img.3bbfa889.png",hn=k.a.div(pn||(pn=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n"]))),On=k.a.div(xn||(xn=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      margin-top: 100px;;\n      width: 800px;\n      text-align: center;\n      word-wrap: break-word;\n\n      label {\n        font-size: 25px;\n        color: #7B68EE;\n      }\n\n      p {\n        margin-top: 30px;\n        margin-bottom: 30px;\n        text-align: justify;\n        max-width: 600px;\n      }\n\n      img {\n        height: 200px;\n        width: 200px;\n        border-radius: 50%;\n        margin-bottom: 30px;\n        border: 3px solid  #7B68EE;\n      }\n\n      Button {\n        border: none;\n        background-color: #7B68EE;\n        margin-top: 50px;\n        margin-bottom: 50px;;\n      }\n\n      Button:hover {\n        border: none;\n        background-color: #4B0082;\n      }\n\n"])));function gn(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],c=r[1],i=Object(o.useState)(!1),s=Object(v.a)(i,2),u=s[0],l=s[1],d=function(){var n=Object(g.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.next=3,I();case 3:t=n.sent,c(t),l(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){d()}),[]),Object(F.jsx)(hn,{"data-testid":"page-profile",children:u?Object(F.jsx)(J,{}):Object(F.jsxs)(On,{children:[Object(F.jsx)("img",{src:""===a.image?mn:a.image,alt:"user","data-testid":"profile-image"}),Object(F.jsxs)("label",{htmlFor:"userName",children:["Nome:",Object(F.jsx)("p",{id:"userName",children:a.name})]}),Object(F.jsxs)("label",{htmlFor:"userEmail",children:["E-mail:",Object(F.jsx)("p",{id:"userEmail",children:a.email})]}),Object(F.jsxs)("label",{htmlFor:"userDescription",children:["Descri\xe7\xe3o:",Object(F.jsx)("p",{id:"userDescription",children:a.description})]}),Object(F.jsx)(w.a,{onClick:function(){t.push("/profile/edit")},children:"Editar perfil"})]})})}var vn=k.a.form(fn||(fn=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n\n      Input {\n        width: 400px;\n        margin-bottom: 30px;\n      }\n\n      label {\n        font-size: 25px;\n        margin-top: 20px;\n        color: #fff;\n        margin-left: 10px;\n        margin-bottom: 5px;;\n      }\n\n      Button {\n        border: none;\n        background-color: #7B68EE;\n        margin-top: 70px;\n        margin-bottom: 40px;\n        width: 400px;\n      }\n\n      Button:hover {\n        border: none;\n        background-color: #4B0082;\n      }\n\n      .description { \n        width: 400px;\n        height: 100px;\n      }\n\n"])));function yn(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],c=r[1],i=Object(o.useState)(""),s=Object(v.a)(i,2),u=s[0],l=s[1],d=Object(o.useState)(""),b=Object(v.a)(d,2),j=b[0],p=b[1],x=Object(o.useState)(""),f=Object(v.a)(x,2),m=f[0],h=f[1],y=Object(o.useState)(!1),k=Object(v.a)(y,2),S=k[0],E=k[1],N=function(){var n=Object(g.a)(O.a.mark((function n(e){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),E(!0),r={name:a,email:u,image:j,description:m},n.next=5,B(r);case 5:E(!1),t.push("/profile");case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=function(){var n=Object(g.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),n.next=3,I();case 3:t=n.sent,c(t.name),l(t.email),p(t.image),h(t.description),E(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){C()}),[]),Object(o.useEffect)((function(){return function(){E(!1)}}),[]),Object(F.jsx)("div",{"data-testid":"page-profile-edit",children:S?Object(F.jsx)(J,{}):Object(F.jsxs)(vn,{onSubmit:N,children:[Object(F.jsx)("label",{htmlFor:"input-name",children:"Nome"}),Object(F.jsx)(w.b,{type:"text",value:a,onChange:function(n){var t=n.target;return c(t.value)},"data-testid":"edit-input-name",id:"input-name",maxLength:"15"}),Object(F.jsx)("label",{htmlFor:"input-email",children:"Email"}),Object(F.jsx)(w.b,{type:"email",value:u,onChange:function(n){var t=n.target;return l(t.value)},"data-testid":"edit-input-email",id:"input-email"}),Object(F.jsx)("label",{htmlFor:"input-image",children:"URL da imagem"}),Object(F.jsx)(w.b,{type:"text",value:j,onChange:function(n){var t=n.target;return p(t.value)},"data-testid":"edit-input-image",id:"input-image"}),Object(F.jsx)("label",{htmlFor:"input-description",children:"Descri\xe7\xe3o"}),Object(F.jsx)(w.b,{className:"description",type:"textarea",value:m,onChange:function(n){var t=n.target;return h(t.value)},"data-testid":"edit-input-description",id:"input-description"}),Object(F.jsx)(w.a,{type:"submit","data-testid":"edit-button-save",disabled:0===a.length||!u.includes("@")||!u.includes(".com")||0===j.length||0===m.length,children:"Salvar"})]})})}var kn,wn=function(n){Object(p.a)(e,n);var t=Object(x.a)(e);function e(){return Object(b.a)(this,e),t.apply(this,arguments)}return Object(j.a)(e,[{key:"render",value:function(){return Object(F.jsx)("div",{"data-testid":"page-not-found"})}}]),e}(o.Component),Sn=k.a.header(kn||(kn=Object(y.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n      background: rgb(63,94,251);\n      background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n      height: 100px;\n\n      h2 {\n        font-size: 50px; \n        color: black;\n      }\n\n      h3 {\n        margin-top: 10px;\n        color: black;\n      }\n\n      nav {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .link {\n        color: black;\n        font-size: 35px;\n        margin-right: 20px;\n        margin-left: 20px;\n        transition: all 0.6s ease;\n      }\n\n\n      div {\n       display: flex;\n       align-items: center;\n       justify-content: center;\n       width: 300px;\n      }\n\n      img {\n        border: 1px solid black;\n        border-radius: 50%;\n        width: 60px;\n        height: 60px;\n        margin-right: 15px;\n        margin-top: 5px;;\n      }\n\n      .link:hover {\n        color: #fff;\n      }\n"])));function En(){var n=Object(o.useState)(""),t=Object(v.a)(n,2),e=t[0],r=t[1],a=Object(o.useState)(!1),c=Object(v.a)(a,2),i=c[0],s=c[1],u=Object(o.useState)(""),l=Object(v.a)(u,2),d=l[0],b=l[1],j=function(){var n=Object(g.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,I();case 3:t=n.sent,r(t),b(t.image),s(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){j()}),[]),Object(F.jsx)("header",{"data-testid":"header-component",children:i?Object(F.jsx)(J,{}):Object(F.jsxs)(Sn,{children:[Object(F.jsx)("h2",{children:"TrybeTunes"}),Object(F.jsxs)("nav",{children:[Object(F.jsx)(f.b,{"data-testid":"link-to-search",to:"/search",style:{textDecoration:"none"},className:"link",children:"Pesquisar"}),Object(F.jsx)(f.b,{"data-testid":"link-to-favorites",to:"/favorites",style:{textDecoration:"none"},className:"link",children:"M\xfasicas Favoritas"}),Object(F.jsx)(f.b,{"data-testid":"link-to-profile",to:"/profile",style:{textDecoration:"none"},className:"link",children:"Perfil"})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("img",{src:""===d?mn:d,alt:"profile"}),Object(F.jsx)("h3",{"data-testid":"header-user-name",children:e.name})]})]})})}var Nn=function(n){Object(p.a)(e,n);var t=Object(x.a)(e);function e(){return Object(b.a)(this,e),t.apply(this,arguments)}return Object(j.a)(e,[{key:"render",value:function(){return Object(F.jsxs)(f.a,{children:[Object(F.jsx)(m.a,{exact:!0,path:"/",render:function(n){return Object(F.jsx)(M,Object(d.a)({},n))}}),Object(F.jsx)(m.a,{path:"/search",render:function(n){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(En,{}),Object(F.jsx)(G,Object(d.a)({},n))]})}}),Object(F.jsx)(m.a,{path:"/album/:id",render:function(n){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(En,{}),Object(F.jsx)(dn,Object(d.a)({},n))]})}}),Object(F.jsx)(m.a,{path:"/favorites",render:function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(En,{}),Object(F.jsx)(jn,{})]})}}),Object(F.jsx)(m.a,{exact:!0,path:"/profile",render:function(n){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(En,{}),Object(F.jsx)(gn,Object(d.a)({},n))]})}}),Object(F.jsx)(m.a,{exact:!0,path:"/profile/edit",render:function(n){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(En,{}),Object(F.jsx)(yn,Object(d.a)({},n))]})}}),Object(F.jsx)(m.a,{path:"*",render:function(){return Object(F.jsx)(wn,{})}})]})}}]),e}(s.a.Component),In=Nn;l.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(In,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.fa3918c1.chunk.js.map