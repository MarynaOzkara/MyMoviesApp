"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{9274:function(n,e,r){r.d(e,{Bc:function(){return v},Dr:function(){return w},Ff:function(){return y},jj:function(){return j},kI:function(){return z},lX:function(){return b},qn:function(){return k},vw:function(){return g},yh:function(){return f},yt:function(){return Z}});var t,o,i,u,a,c,p,s,d,l,x=r(168),m=r(5867),h=r(1087),f=m.ZP.form(t||(t=(0,x.Z)(["\n  width: 100%;\n  max-width: 500px;\n  padding: 30px;\n  margin-top: 50px;\n  background-color: ",";\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.movieWrap})),g=m.ZP.h3(o||(o=(0,x.Z)(["\n  font-size: 22px;\n  color: ",";\n\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.text})),b=m.ZP.label(i||(i=(0,x.Z)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  color: ",";\n  border: 1px solid ",";\n  display: block;\n  margin-top: 20px;\n  /* margin-bottom: 20px; */\n  border-radius: 10px;\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.text})),Z=m.ZP.input(u||(u=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  font-size: 13px;\n  color: ",";\n  background: transparent;\n  font-size: 16px;\n  position: absolute;\n  bottom: 0;\n  &::placeholder {\n    color: ",";\n  }\n  &:valid + span {\n    top: -8px;\n    padding: 0 5px;\n    background: ",";\n  }\n  &:focus + span {\n    top: -8px;\n    padding: 0 5px;\n    background: ",";\n  }\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.movieWrap}),(function(n){return n.theme.movieWrap})),j=m.ZP.div(a||(a=(0,x.Z)(["\n  margin-top: 5px;\n"]))),v=m.ZP.p(c||(c=(0,x.Z)(["\n  color: red;\n  font-size: 14px;\n"]))),w=m.ZP.span(p||(p=(0,x.Z)(["\n  font-size: 12px;\n  text-transform: uppercase;\n  color: ",";\n  position: absolute;\n  top: 16px;\n  left: 10px;\n  cursor: text;\n  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(n){return n.theme.text})),k=m.ZP.button(s||(s=(0,x.Z)(["\n  font-size: 18px;\n  border: none;\n  padding: 14px 0;\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  margin-top: 20px;\n\n  border: 2px solid ",";\n  cursor: pointer;\n  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    border: 2px solid ",";\n  }\n"])),(function(n){return n.theme.regBtn}),(function(n){return n.theme.movieWrap}),(function(n){return n.theme.regBtn}),(function(n){return n.theme.movieWrap}),(function(n){return n.theme.regBtn}),(function(n){return n.theme.regBtn})),y=m.ZP.p(d||(d=(0,x.Z)(["\n  text-align: center;\n  margin-top: 20px;\n  color: ",";\n  font-size: 16px;\n"])),(function(n){return n.theme.text})),z=(0,m.ZP)(h.rU)(l||(l=(0,x.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.regBtn}))},5099:function(n,e,r){r.r(e),r.d(e,{default:function(){return s}});var t=r(1413),o=(r(2791),r(9274)),i=r(1134),u=r(9434),a=r(7764),c=r(184),p=function(){var n,e,r=(0,u.I0)(),p=(0,i.cI)({mode:"onChange"}),s=p.handleSubmit,d=p.register,l=p.formState.errors;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.yh,{autoComplete:"off",onSubmit:s((function(n){r((0,a.x4)(n)),console.log(n)})),children:[(0,c.jsx)(o.vw,{children:"Sign up"}),(0,c.jsxs)(o.lX,{htmlFor:"email",children:[(0,c.jsx)(o.yt,(0,t.Z)((0,t.Z)({type:"email"},d("email",{pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})),{},{id:"email",required:!0})),(0,c.jsx)(o.Dr,{children:"Email"})]}),(0,c.jsx)(o.jj,{children:"pattern"===(null===(n=l.email)||void 0===n?void 0:n.type)&&(0,c.jsx)(o.Bc,{children:"Type valid email addres"})}),(0,c.jsxs)(o.lX,{htmlFor:"password",children:[(0,c.jsx)(o.yt,(0,t.Z)((0,t.Z)({type:"password"},d("password",{pattern:/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12})*$/})),{},{id:"password",required:!0})),(0,c.jsx)(o.Dr,{children:"Password"})]}),(0,c.jsx)(o.jj,{children:"pattern"===(null===(e=l.password)||void 0===e?void 0:e.type)&&(0,c.jsx)(o.Bc,{children:"Password should have min 6 max 12 simbols: one digit from 0-9, 1 lowercase and 1 uppercase characters"})}),(0,c.jsx)(o.qn,{type:"submit",children:"Sign up"}),(0,c.jsxs)(o.Ff,{children:["Don't have an account, please ",(0,c.jsx)(o.kI,{to:"/signup",children:"Sign up"})]})]})})},s=function(){return(0,c.jsx)("main",{children:(0,c.jsx)(p,{})})}}}]);
//# sourceMappingURL=99.f91ad7f8.chunk.js.map