import{S as y,i as w,s as S,e as c,c as f,a as m,d as _,b as p,g as q,K as d,T as h,L as v,U as E,R as $,V as I,F as M,w as N,k as F,x as O,m as R,y as T,M as U,N as V,O as k,q as g,o as b,B as z}from"../../chunks/vendor-8982b92d.js";import{c as u}from"../../chunks/singletons-d1fb5791.js";u.disable_scroll_handling;const A=u.goto;u.invalidate;u.prefetch;u.prefetch_routes;u.before_navigate;u.after_navigate;function B(r){let e,a,n,l,i;return{c(){e=c("div"),a=c("form"),n=c("input"),this.h()},l(s){e=f(s,"DIV",{class:!0});var t=m(e);a=f(t,"FORM",{class:!0});var o=m(a);n=f(o,"INPUT",{class:!0}),o.forEach(_),t.forEach(_),this.h()},h(){p(n,"class","svelte-10awlpb"),p(a,"class","svelte-10awlpb"),p(e,"class","svelte-10awlpb")},m(s,t){q(s,e,t),d(e,a),d(a,n),h(n,r[0]),l||(i=[v(n,"input",r[1]),v(a,"submit",E(r[2]))],l=!0)},p(s,[t]){t&1&&n.value!==s[0]&&h(n,s[0])},i:$,o:$,d(s){s&&_(e),l=!1,I(i)}}}function C(r,e,a){let n;function l(){n=this.value,a(0,n)}return[n,l,()=>{A(`/search/${n}`)}]}class D extends y{constructor(e){super();w(this,e,C,B,S,{})}}function K(r){let e,a,n,l;a=new D({});const i=r[1].default,s=M(i,r,r[0],null);return{c(){e=c("main"),N(a.$$.fragment),n=F(),s&&s.c(),this.h()},l(t){e=f(t,"MAIN",{class:!0});var o=m(e);O(a.$$.fragment,o),n=R(o),s&&s.l(o),o.forEach(_),this.h()},h(){p(e,"class","svelte-1uz4agv")},m(t,o){q(t,e,o),T(a,e,null),d(e,n),s&&s.m(e,null),l=!0},p(t,[o]){s&&s.p&&(!l||o&1)&&U(s,i,t,t[0],l?k(i,t[0],o,null):V(t[0]),null)},i(t){l||(g(a.$$.fragment,t),g(s,t),l=!0)},o(t){b(a.$$.fragment,t),b(s,t),l=!1},d(t){t&&_(e),z(a),s&&s.d(t)}}}function L(r,e,a){let{$$slots:n={},$$scope:l}=e;return r.$$set=i=>{"$$scope"in i&&a(0,l=i.$$scope)},[l,n]}class G extends y{constructor(e){super();w(this,e,L,K,S,{})}}export{G as default};
