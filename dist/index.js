"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var p=c(function(F,j){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),k=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(i,r,s,o,a,t,q){var e,f,u,n,v;if(i<=0)return a;if(f=o,u=q,e=r[f],a[u]=e,u+=t,v=1,m(e)===!1)for(v;v<i;v++){if(f+=s,n=r[f],m(n)){e=n;break}(n<e||n===e&&k(n))&&(e=n),a[u]=e,u+=t}if(m(e))for(v;v<i;v++)a[u]=e,u+=t;return a}j.exports=E
});var d=c(function(G,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),O=p();function Z(i,r,s,o,a){var t=l(i,s),q=l(i,a);return O(i,r,s,t,o,a,q)}y.exports=Z
});var b=c(function(H,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),w=p();h(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=b(),x,g=A(z(__dirname,"./native.js"));B(g)?x=C:x=g;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
