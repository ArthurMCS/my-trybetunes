(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{50:function(n,t,e){},63:function(n,t,e){"use strict";e.r(t);var r,a,i,c,o=e(2),s=e.n(o),u=e(17),l=e.n(u),d=(e(49),e(50),e(18)),p=e(22),b=e(23),x=e(26),j=e(25),m=e(16),h=e(10),f=e(5),g=e.n(f),O=e(9),v=e(6),w=e(7),k=e(8),y=e(12),S="user",E=function(n){return localStorage.setItem(S,JSON.stringify(n))},N=function(n){return function(t){setTimeout((function(){t(n)}),1500)}},I=function(){return new Promise((function(n){var t=JSON.parse(localStorage.getItem(S));null===t&&(t={}),N(t)(n)}))},B=function(n){return new Promise((function(t){E(Object(d.a)(Object(d.a)({},{name:"",email:"",image:"",description:""}),n)),N("OK")(t)}))},C=function(n){return new Promise((function(t){E(Object(d.a)({},n)),N("OK")(t)}))},D=e(3),F=k.a.div(r||(r=Object(w.a)(["\n      width: 80px;\n      height: 80px;\n      border: 15px solid #fc466b;\n      border-top-color: transparent;\n      border-radius: 50%;\n      animation: loading 0.6s  linear infinite ;\n      margin-top: 50px;\n  \n      @keyframes loading { \n        to { \n          transform: rotate(360deg);\n        }\n      }\n"]))),P=k.a.div(a||(a=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n\n      #isHeader {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 50px;\n        height: 50px;\n        border: 8px solid rgba(63,94,251,1);\n        border-top-color: transparent;\n        border-radius: 50%;\n        margin-bottom: 50px\n      }\n      \n      .isMusicCard {\n        width: 30px;\n        height: 30px;\n        border: 8px solid #fc466b;\n        border-top-color: transparent;\n        border-radius: 50%;\n        margin-left: 400px;\n        margin-top: 15px;\n\n        @media (max-width: 1000px) {\n           margin-left: 0px;\n           margin-top: 120px;\n        }\n\n      }\n\n"])));function z(n){var t=n.isMusicCard,e=n.isHeader;return Object(D.jsx)(P,{children:Object(D.jsx)(F,{className:t&&"isMusicCard",id:e&&"isHeader"})})}var J=k.a.div(i||(i=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 15%;\n      \n      @media (max-width: 800px) {\n      \n         form {\n           height: 250px;\n           width: 300px;\n           margin-top: 20%;\n         }\n\n      }\n"]))),M=k.a.form(c||(c=Object(w.a)(["\n      display: flex;\n      background: rgb(63,94,251);\n      background: radial-gradient(circle, \n        rgba(63,94,251,1) 0%, \n        rgba(252,70,107,1) 100%);\n      height: 300px;\n      width: 500px;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      border-radius: 5%;\n\n      h1 {\n        margin-bottom: 20px;\n      }\n\n      Input {\n        width: 300px;\n      }\n\n      Button {\n        margin-top: 20px;\n        width: 300px;\n      }\n\n      @media (max-width: 1000px) {\n        input {\n          width: 200px;\n        }\n\n        button {\n          width: 200px;\n        }\n"])));function U(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],i=r[1],c=Object(o.useState)(!1),s=Object(v.a)(c,2),u=s[0],l=s[1];return Object(o.useEffect)((function(){return function(){l(!1)}}),[]),Object(D.jsx)(J,{"data-testid":"page-login",children:u?Object(D.jsx)(z,{}):Object(D.jsxs)(M,{onSubmit:function(){var n=Object(O.a)(g.a.mark((function n(e){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),l(!0),n.next=4,B({name:a});case 4:l(!1),t.push("/search");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),children:[Object(D.jsx)("h1",{children:"TRYBETUNES"}),Object(D.jsx)(y.b,{type:"text","data-testid":"login-name-input",onChange:function(n){var t=n.target;i(t.value)},value:a,placeholder:"nome",maxLength:"15"}),Object(D.jsx)(y.a,{disabled:a.length<3,type:"submit","data-testid":"login-submit-button",color:"primary",children:"Entrar"})]})})}var T,A,H,K,R=function(){var n=Object(O.a)(g.a.mark((function n(t){var e,r,a,i,c,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=encodeURI(t).replaceAll("%20","+"),r="https://itunes.apple.com/search?enitity=album&term=".concat(e),n.next=4,fetch(r);case 4:return a=n.sent,n.next=7,a.json();case 7:return i=n.sent,c=i.results,o=c.map((function(n){return{artistId:n.artistId,artistName:n.artistName,collectionId:n.collectionId,collectionName:n.collectionName,collectionPrice:n.collectionPrice,artworkUrl100:n.artworkUrl100,releaseDate:n.releaseDate,trackCount:n.trackCount}})),n.abrupt("return",o);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),L=R,q=e(39),Y=e(40),_=e(41),G=k.a.div(T||(T=Object(w.a)(["\n        display: none;\n         @media (max-width: 1000px) {\n             display: flex;\n             align-items: center;\n             position: fixed;\n             bottom: 0;\n             justify-content: space-around;\n             width: 100%;\n             height: 50px;\n             background: rgb(63,94,251);\n             background: radial-gradient(circle, rgba(63,94,251,1) \n             0%, rgba(252,70,107,1) 100%);\n             border-radius: 8px 8px 0px 0px;\n\n             .link {\n                 color: black;\n             }\n\n             svg {\n                 height: 25px;\n                 width: 25px;\n             }\n         }\n "])));function Q(){return Object(D.jsxs)(G,{children:[Object(D.jsx)(m.b,{to:"/search",style:{textDecoration:"none"},className:"link",children:Object(D.jsx)(q.a,{})}),Object(D.jsx)(m.b,{to:"/favorites",style:{textDecoration:"none"},className:"link",children:Object(D.jsx)(Y.a,{})}),Object(D.jsx)(m.b,{to:"/profile",style:{textDecoration:"none"},className:"link",children:Object(D.jsx)(_.a,{})})]})}var V=k.a.section(A||(A=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: wrap;\n\n      & .musicCard:hover {\n        box-shadow: 0px 1px 5px 5px #7B68EE;\n        cursor: pointer;\n      }\n"]))),W=k.a.div(H||(H=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      height: 300px;\n      width: 300px;\n      background: rgb(63,94,251);\n      background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n      margin: 30px;\n      border-radius: 20%;\n      overflow: hidden;\n\n      img {\n        height: 150px;\n        width: 150px;\n        border: 5px solid black;\n        margin-bottom: 20px;\n      }\n\n      .link {\n        text-align: center;\n        font-size: 20px;\n        color: #111;\n      }\n\n      h4 {\n        width: 250px;;\n        word-wrap: break-word;\n        color: black;\n      }\n"]))),X=k.a.form(K||(K=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n\n      Input {\n        margin-top: 50px;\n        width:500px;\n      }\n\n      Button {\n        background-color: #7B68EE;\n        margin-top: 15px;\n        width:500px;\n        border: none;\n      }\n\n      Button:hover {\n        background-color: #4B0082;\n        border: none;\n      }\n\n      h3 {\n        margin-top: 60px;\n        background: -webkit-linear-gradient( rgba(252,70,107,1), rgba(63,94,251,1));\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n      }\n\n      @media (max-width: 1000px) {\n        input {\n          width: 200px;\n        }\n\n        button {\n          width: 200px;\n        }\n\n        h3 {\n          width: 300px;\n          display: block;\n          margin-right: auto;\n          margin-left: auto;\n          word-wrap: break-word;\n        }\n\n        .noAlbum {\n          text-align: center;\n        }\n      }\n"])));function Z(){var n=Object(o.useState)(""),t=Object(v.a)(n,2),e=t[0],r=t[1],a=Object(o.useState)(!1),i=Object(v.a)(a,2),c=i[0],s=i[1],u=Object(o.useState)([]),l=Object(v.a)(u,2),d=l[0],p=l[1],b=Object(o.useState)(""),x=Object(v.a)(b,2),j=x[0],h=x[1],f=function(){var n=Object(O.a)(g.a.mark((function n(t){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),s(!0),n.next=4,L(e);case 4:a=n.sent,r(""),p(a),s(!1);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(D.jsxs)("div",{"data-testid":"page-search",children:[c?Object(D.jsx)(z,{}):Object(D.jsxs)(X,{onSubmit:f,children:[Object(D.jsx)(y.b,{type:"text","data-testid":"search-artist-input",value:e,onChange:function(n){var t=n.target;r(t.value)},placeholder:"m\xfasica ou artista"}),Object(D.jsx)(y.a,{disabled:e.length<2,type:"submit","data-testid":"search-artist-button",onClick:function(){return h(e)},children:"Pesquisar"}),0===d.length?Object(D.jsx)("h3",{className:"noAlbum",children:"Nenhum \xe1lbum foi encontrado"}):Object(D.jsxs)("section",{style:{textAlign:"center"},children:[Object(D.jsx)("h3",{children:"Resultado de \xe1lbuns de: ".concat(j)}),Object(D.jsx)(V,{children:d.map((function(n,t){return Object(D.jsx)(m.b,{"data-testid":"link-to-album-".concat(n.collectionId),to:"/album/".concat(n.collectionId),style:{textDecoration:"none"},className:"link",replace:!0,children:Object(D.jsxs)(W,{className:"musicCard",children:[Object(D.jsx)("img",{src:n.artworkUrl100,alt:n.artistName}),Object(D.jsx)("h4",{children:n.collectionName})]})},t)}))})]})]}),Object(D.jsx)(Q,{})]})}var $=e(31),nn=e(42),tn="favorite_songs";JSON.parse(localStorage.getItem(tn))||localStorage.setItem(tn,JSON.stringify([]));var en,rn=function(){return JSON.parse(localStorage.getItem(tn))},an=function(n){return localStorage.setItem(tn,JSON.stringify(n))},cn=function(n){return function(t){setTimeout((function(){t(n)}),500)}},on=function(){return new Promise((function(n){var t=rn();cn(t)(n)}))},sn=function(n){return new Promise((function(t){if(n){var e=rn();an([].concat(Object(nn.a)(e),[n]))}cn("OK")(t)}))},un=function(n){return new Promise((function(t){var e=rn();an(e.filter((function(t){return t.trackId!==n.trackId}))),cn("OK")(t)}))},ln=k.a.article(en||(en=Object(w.a)(["\n      margin-bottom: 50px;;\n  \n      svg {\n        height: 30px;\n        width: 30px;\n        margin-left: 400px;\n        color: red;\n        margin-top: 15px;;\n      }\n\n      svg:hover {\n        cursor: pointer;\n      }\n\n      input {\n        display: none;\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      audio {\n        position: absolute;\n      }\n\n      p {\n        margin-top: 30px;\n        margin-bottom: 30px;\n      }\n\n      audio::-webkit-media-controls-panel {\n        background: rgb(63,94,251);\n        background: radial-gradient(circle, \n          rgba(63,94,251,1) 0%, \n          rgba(252,70,107,1) 100%);\n      }\n\n      @media (max-width: 1000px) {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        width: 360px;\n        margin-bottom: 65px;\n         \n        svg {\n          position: relative;\n          margin-left: 0px;\n          margin-top: 120px;\n        }\n\n        p {\n          font-size: 20px;\n          width: 320px;\n          overflow: hidden;\n          max-height: 80px;\n          margin-bottom: -30px;\n        }\n          \n        }\n      \n"])));function dn(n){var t=n.track,e=Object(o.useState)([]),r=Object(v.a)(e,2),a=r[0],i=r[1],c=Object(o.useState)(!1),s=Object(v.a)(c,2),u=s[0],l=s[1],d=t.trackName,p=t.previewUrl,b=t.trackId,x=-1!==a.findIndex((function(n){return n.trackId===b})),j=function(){var n=Object(O.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,on();case 2:t=n.sent,i(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=Object(O.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!x){n.next=6;break}return l(!0),n.next=4,un(t);case 4:n.next=9;break;case 6:return l(!0),n.next=9,sn(t);case 9:return n.next=11,j();case 11:l(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){j()}),[a]),Object(o.useEffect)((function(){return function(){l(!1),i([])}}),[]),Object(D.jsxs)(ln,{children:[Object(D.jsx)("p",{children:d}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("audio",{"data-testid":"audio-component",src:p,controls:!0,children:[Object(D.jsx)("track",{kind:"captions"}),Object(D.jsx)("code",{children:"audio"})]}),u?Object(D.jsx)(z,{isMusicCard:!0}):Object(D.jsxs)("label",{htmlFor:b,children:[x?Object(D.jsx)($.a,{}):Object(D.jsx)($.b,{}),Object(D.jsx)("input",{checked:x,"data-testid":"checkbox-music-".concat(b),type:"checkbox",id:b,onChange:m})]})]})]})}var pn,bn,xn=function(){var n=Object(O.a)(g.a.mark((function n(t){var e,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),jn=xn,mn=k.a.div(pn||(pn=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n\n      h2 {\n        margin-top: 200px;\n        text-align: center;\n        color: rgb(63,94,251)\n      }\n\n\n      p {\n        margin-top: 15px;\n        font-size: 25px;\n      }\n\n\n      img {\n        margin-top: 50px;\n        height: 200px;\n        width: 200px;\n        border-radius: 50%;\n        border: 8px solid rgb(63,94,251);\n        margin-bottom: 20px;\n      }\n\n      @media (max-width: 1000px) {\n\n        h1 {\n          text-align: center;\n          max-width: 300px;\n          word-wrap: break-word;\n          overflow: hidden;\n          color: rgb(63,94,251);\n        }\n\n        h2 {\n          margin-top: 200px;\n          text-align: center;\n          max-width: 300px;\n          font-size: 20px;\n          word-wrap: break-word;\n          color: rgb(63,94,251);\n        }\n        \n\n        .album-name {\n          text-align: center;\n          word-wrap: break-word;\n          max-width: 300px;\n          color: rgb(63,94,251);\n        }\n\n      }\n\n"])));function hn(n){var t=Object(o.useState)([]),e=Object(v.a)(t,2),r=e[0],a=e[1];return Object(o.useEffect)((function(){var t=function(){var t=Object(O.a)(g.a.mark((function t(){var e,r,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.match.params,r=e.id,t.next=4,jn(r);case 4:i=t.sent,a(i);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),Object(D.jsxs)("div",{"data-testid":"page-album",children:[r&&0===r.length?Object(D.jsx)(z,{}):Object(D.jsx)(mn,{children:r?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("section",{children:[Object(D.jsx)("img",{src:r[0].artworkUrl100,alt:r[0].collectionName}),Object(D.jsx)("h1",{"data-testid":"artist-name",children:r[0].artistName}),Object(D.jsx)("p",{"data-testid":"album-name",className:"album-name",children:r[0].collectionName})]}),Object(D.jsx)("section",{children:r.slice(1).map((function(n){return Object(D.jsx)(dn,{track:n},n.trackId)}))})]}):Object(D.jsx)("h2",{children:"Desculpe, n\xe3o conseguimos encontrar esse \xe1lbum"})}),Object(D.jsx)(Q,{})]})}var fn=k.a.div(bn||(bn=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      flex-direction: column;\n      margin-bottom: 60px;\n\n      p {\n        font-size: 20px;\n      }\n\n      /* https://css-tricks.com/snippets/css/gradient-text/ */\n      .favoritesP {\n        margin-top: 15px;\n        font-size: 25px;\n        background: -webkit-linear-gradient( rgba(252,70,107,1), rgba(63,94,251,1));\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n      }\n"])));function gn(){var n=Object(o.useState)([]),t=Object(v.a)(n,2),e=t[0],r=t[1],a=Object(o.useState)(!0),i=Object(v.a)(a,2),c=i[0],s=i[1],u=function(){var n=Object(O.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,on();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(o.useEffect)((function(){u().then((function(){return s(!1)}))}),[]),Object(o.useEffect)((function(){u()}),[e]),Object(o.useEffect)((function(){return function(){r([]),s({})}}),[]);var l=1===e.length?"1 M\xfasica curtida":"".concat(e.length," M\xfasicas curtidas");return Object(D.jsxs)(fn,{"data-testid":"page-favorites",children:[c?Object(D.jsx)(z,{}):Object(D.jsxs)(D.Fragment,{children:[e.length>0?Object(D.jsx)("p",{className:"favoritesP",children:l}):Object(D.jsx)("p",{className:"favoritesP",children:"Ainda n\xe3o h\xe1 m\xfasicas curtidas"}),e.map((function(n){return Object(D.jsx)(dn,{track:n},n.trackId)}))]}),Object(D.jsx)(Q,{})]})}var On,vn,wn,kn=e.p+"static/media/img.3bbfa889.png",yn=k.a.div(On||(On=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n"]))),Sn=k.a.div(vn||(vn=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      margin-top: 100px;;\n      width: 800px;\n      text-align: center;\n      word-wrap: break-word;\n\n      label {\n        font-size: 25px;\n        color: #7B68EE;\n      }\n\n      p {\n        margin-top: 30px;\n        margin-bottom: 30px;\n        text-align: justify;\n        max-width: 600px;\n      }\n\n      img {\n        height: 200px;\n        width: 200px;\n        border-radius: 50%;\n        margin-bottom: 30px;\n        border: 3px solid  #7B68EE;\n      }\n\n      Button {\n        width: 150px;\n        border: none;\n        background-color: #7B68EE;\n        margin-top: 50px;\n        margin-bottom: 20px;;\n      }\n\n      Button:hover {\n        border: none;\n        background-color: #4B0082;\n      }\n\n      .exitButton {\n          width: 150px;\n          margin-top: 15px;\n          margin-bottom: 80px;\n        }\n\n      @media (max-width: 1000px) {\n        margin-top: 50px;\n        p {\n        font-size: 25px;\n        margin-top: 30px;\n        margin-bottom: 30px;\n        text-align: justify;\n        max-width: 290px;\n        word-wrap: break-word\n        }\n\n        img {\n        height: 80px;\n        width: 80px;\n        border-radius: 50%;\n        margin-bottom: 30px;\n        border: 3px solid  #7B68EE;\n        }\n\n        Button {\n        border: none;\n        background-color: #7B68EE;\n        margin-top: 30px;\n        margin-bottom: 0px;\n        }\n\n      }\n\n"])));function En(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],i=r[1],c=Object(o.useState)(!1),s=Object(v.a)(c,2),u=s[0],l=s[1],d=function(){var n=Object(O.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.next=3,I();case 3:t=n.sent,i(t),l(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){d()}),[]),Object(D.jsxs)(yn,{"data-testid":"page-profile",children:[u?Object(D.jsx)(z,{}):Object(D.jsxs)(Sn,{children:[Object(D.jsx)("img",{src:""===a.image?kn:a.image,alt:"user","data-testid":"profile-image"}),Object(D.jsxs)("label",{htmlFor:"userName",children:["Nome:",Object(D.jsx)("p",{id:"userName",children:a.name})]}),Object(D.jsxs)("label",{htmlFor:"userEmail",children:["E-mail:",Object(D.jsx)("p",{id:"userEmail",children:a.email})]}),Object(D.jsxs)("label",{htmlFor:"userDescription",children:["Descri\xe7\xe3o:",Object(D.jsx)("p",{id:"userDescription",children:a.description})]}),Object(D.jsx)(y.a,{onClick:function(){t.push("/profile/edit")},children:"Editar perfil"}),Object(D.jsx)(y.a,{className:"exitButton",onClick:function(){t.push("/")},children:"Sair"})]}),Object(D.jsx)(Q,{})]})}var Nn=k.a.form(wn||(wn=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n\n      Input {\n        width: 400px;\n        margin-bottom: 30px;\n      }\n\n      label {\n        font-size: 25px;\n        margin-top: 20px;\n        color: #fff;\n        margin-left: 10px;\n        margin-bottom: 5px;;\n      }\n\n      Button {\n        border: none;\n        background-color: #7B68EE;\n        margin-top: 70px;\n        margin-bottom: 40px;\n        width: 400px;\n      }\n\n      Button:hover {\n        border: none;\n        background-color: #4B0082;\n      }\n\n      .description { \n        width: 400px;\n        height: 100px;\n      }\n\n      @media (max-width: 1000px) {\n        input {\n          width: 200px;\n        }\n\n        .description {\n          width: 200px;\n        }\n\n        button {\n          margin-top: 50px;\n          margin-bottom: 100px;\n          width: 200px;\n        }\n      }\n\n"])));function In(n){var t=n.history,e=Object(o.useState)(""),r=Object(v.a)(e,2),a=r[0],i=r[1],c=Object(o.useState)(""),s=Object(v.a)(c,2),u=s[0],l=s[1],d=Object(o.useState)(""),p=Object(v.a)(d,2),b=p[0],x=p[1],j=Object(o.useState)(""),m=Object(v.a)(j,2),h=m[0],f=m[1],w=Object(o.useState)(!1),k=Object(v.a)(w,2),S=k[0],E=k[1],N=function(){var n=Object(O.a)(g.a.mark((function n(e){var r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),E(!0),r={name:a,email:u,image:b,description:h},n.next=5,C(r);case 5:E(!1),t.push("/profile");case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),B=function(){var n=Object(O.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),n.next=3,I();case 3:t=n.sent,i(t.name),l(t.email),x(t.image),f(t.description),E(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){B()}),[]),Object(o.useEffect)((function(){return function(){E(!1)}}),[]),Object(D.jsxs)("div",{"data-testid":"page-profile-edit",children:[S?Object(D.jsx)(z,{}):Object(D.jsxs)(Nn,{onSubmit:N,children:[Object(D.jsx)("label",{htmlFor:"input-name",children:"Nome"}),Object(D.jsx)(y.b,{type:"text",value:a,onChange:function(n){var t=n.target;return i(t.value)},"data-testid":"edit-input-name",id:"input-name",maxLength:"15"}),Object(D.jsx)("label",{htmlFor:"input-email",children:"Email"}),Object(D.jsx)(y.b,{type:"email",value:u,onChange:function(n){var t=n.target;return l(t.value)},"data-testid":"edit-input-email",id:"input-email"}),Object(D.jsx)("label",{htmlFor:"input-image",children:"URL da imagem"}),Object(D.jsx)(y.b,{type:"text",value:b,onChange:function(n){var t=n.target;return x(t.value)},"data-testid":"edit-input-image",id:"input-image"}),Object(D.jsx)("label",{htmlFor:"input-description",children:"Descri\xe7\xe3o"}),Object(D.jsx)(y.b,{className:"description",type:"textarea",value:h,onChange:function(n){var t=n.target;return f(t.value)},"data-testid":"edit-input-description",id:"input-description"}),Object(D.jsx)(y.a,{type:"submit","data-testid":"edit-button-save",disabled:0===a.length||!u.includes("@")||!u.includes(".com")||0===b.length||0===h.length,children:"Salvar"})]}),Object(D.jsx)(Q,{})]})}var Bn,Cn=function(n){Object(x.a)(e,n);var t=Object(j.a)(e);function e(){return Object(p.a)(this,e),t.apply(this,arguments)}return Object(b.a)(e,[{key:"render",value:function(){return Object(D.jsx)("div",{"data-testid":"page-not-found"})}}]),e}(o.Component),Dn=k.a.header(Bn||(Bn=Object(w.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n      background: rgb(63,94,251);\n      background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n      height: 100px;\n\n      h2 {\n        font-size: 50px; \n        color: black;\n      }\n\n      h3 {\n        margin-top: 10px;\n        color: black;\n      }\n\n      nav {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .link {\n        color: black;\n        font-size: 35px;\n        margin-right: 20px;\n        margin-left: 20px;\n        transition: all 0.6s ease;\n      }\n\n\n      div {\n       display: flex;\n       align-items: center;\n       justify-content: center;\n       width: 300px;\n      }\n\n      img {\n        border: 1px solid black;\n        border-radius: 50%;\n        width: 60px;\n        height: 60px;\n        margin-right: 15px;\n        margin-top: 5px;;\n      }\n\n      .link:hover {\n        color: #fff;\n      }\n\n      @media (max-width: 1000px) {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        height: 60px;\n        border-radius: 0px 0px 8px 8px;\n\n        nav {\n          display: none\n        }\n\n        h2 {\n          margin-top: 10px;\n          font-size: 30px;\n        }\n\n        div {\n          display: none;\n        }\n      }\n"])));function Fn(){var n=Object(o.useState)(""),t=Object(v.a)(n,2),e=t[0],r=t[1],a=Object(o.useState)(!1),i=Object(v.a)(a,2),c=i[0],s=i[1],u=Object(o.useState)(""),l=Object(v.a)(u,2),d=l[0],p=l[1],b=function(){var n=Object(O.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,I();case 3:t=n.sent,r(t),p(t.image),s(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){b()}),[]),Object(o.useEffect)((function(){return function(){r(""),s(!1),p("")}}),[]),Object(D.jsx)("header",{"data-testid":"header-component",children:Object(D.jsxs)(Dn,{children:[Object(D.jsx)("h2",{children:"TrybeTunes"}),Object(D.jsxs)("nav",{children:[Object(D.jsx)(m.b,{"data-testid":"link-to-search",to:"/search",style:{textDecoration:"none"},className:"link",children:"Pesquisar"}),Object(D.jsx)(m.b,{"data-testid":"link-to-favorites",to:"/favorites",style:{textDecoration:"none"},className:"link",children:"M\xfasicas Favoritas"}),Object(D.jsx)(m.b,{"data-testid":"link-to-profile",to:"/profile",style:{textDecoration:"none"},className:"link",children:"Perfil"})]}),c?Object(D.jsx)(z,{isHeader:!0}):Object(D.jsxs)("div",{children:[Object(D.jsx)("img",{src:""===d?kn:d,alt:"profile"}),Object(D.jsx)("h3",{"data-testid":"header-user-name",children:e.name})]})]})})}var Pn=function(n){Object(x.a)(e,n);var t=Object(j.a)(e);function e(){return Object(p.a)(this,e),t.apply(this,arguments)}return Object(b.a)(e,[{key:"render",value:function(){return Object(D.jsxs)(m.a,{children:[Object(D.jsx)(h.a,{exact:!0,path:"/",render:function(n){return Object(D.jsx)(U,Object(d.a)({},n))}}),Object(D.jsx)(h.a,{path:"/search",render:function(n){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Fn,{}),Object(D.jsx)(Z,Object(d.a)({},n))]})}}),Object(D.jsx)(h.a,{path:"/album/:id",render:function(n){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Fn,{}),Object(D.jsx)(hn,Object(d.a)({},n))]})}}),Object(D.jsx)(h.a,{path:"/favorites",render:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Fn,{}),Object(D.jsx)(gn,{})]})}}),Object(D.jsx)(h.a,{exact:!0,path:"/profile",render:function(n){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Fn,{}),Object(D.jsx)(En,Object(d.a)({},n))]})}}),Object(D.jsx)(h.a,{exact:!0,path:"/profile/edit",render:function(n){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Fn,{}),Object(D.jsx)(In,Object(d.a)({},n))]})}}),Object(D.jsx)(h.a,{path:"*",render:function(){return Object(D.jsx)(Cn,{})}})]})}}]),e}(s.a.Component),zn=Pn;l.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(zn,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.4d614149.chunk.js.map