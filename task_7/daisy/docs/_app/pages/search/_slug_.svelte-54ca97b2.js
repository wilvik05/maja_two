import{S as j,i as S,s as q,Z as d,e as g,w as p,k as x,c as k,a as b,x as _,m as B,d as i,b as C,g as v,y as h,J as y,_ as E,q as u,o as m,B as $,t as A,h as D,f as I,j as J,Q as f}from"../../chunks/vendor-548886bf.js";import M from"./Spinner.svelte-631d26a8.js";import N from"./Results.svelte-320170a6.js";import P from"./Search.svelte-85443403.js";import"../../chunks/singletons-a6a7384f.js";function Q(r){let e,n=r[2].message+"",t;return{c(){e=g("p"),t=A(n),this.h()},l(s){e=k(s,"P",{style:!0});var o=b(e);t=D(o,n),o.forEach(i),this.h()},h(){I(e,"color","red")},m(s,o){v(s,e,o),y(e,t)},p(s,o){o&1&&n!==(n=s[2].message+"")&&J(t,n)},i:f,o:f,d(s){s&&i(e)}}}function R(r){let e,n;return e=new N({props:{json:r[1]}}),{c(){p(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){h(e,t,s),n=!0},p(t,s){const o={};s&1&&(o.json=t[1]),e.$set(o)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function U(r){let e,n;return e=new M({}),{c(){p(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){h(e,t,s),n=!0},p:f,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Z(r){let e,n,t,s,o;n=new P({});let a={ctx:r,current:null,token:null,hasCatch:!0,pending:U,then:R,catch:Q,value:1,error:2,blocks:[,,,]};return d(s=r[0],a),{c(){e=g("main"),p(n.$$.fragment),t=x(),a.block.c(),this.h()},l(c){e=k(c,"MAIN",{class:!0});var l=b(e);_(n.$$.fragment,l),t=B(l),a.block.l(l),l.forEach(i),this.h()},h(){C(e,"class","svelte-1uyrjmu")},m(c,l){v(c,e,l),h(n,e,null),y(e,t),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=null,o=!0},p(c,[l]){r=c,a.ctx=r,l&1&&s!==(s=r[0])&&d(s,a)||E(a,r,l)},i(c){o||(u(n.$$.fragment,c),u(a.block),o=!0)},o(c){m(n.$$.fragment,c);for(let l=0;l<3;l+=1){const w=a.blocks[l];m(w)}o=!1},d(c){c&&i(e),$(n),a.block.d(),a.token=null,a=null}}}async function T({params:r,fetch:e,session:n,stuff:t}){return{props:{promise:z("https://demo.dataverse.org/api/search?q="+r.slug)}}}async function z(r){return await(await fetch(r)).json()}function F(r,e,n){let{promise:t}=e;return r.$$set=s=>{"promise"in s&&n(0,t=s.promise)},[t]}class V extends j{constructor(e){super();S(this,e,F,Z,q,{promise:0})}}export{V as default,T as load};
