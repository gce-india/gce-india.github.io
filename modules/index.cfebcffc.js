import{j as e,a as u,N as w,b as $,C as I,c as T,d as f,e as p,F as A,U as L,s as y,r as D,f as x,R as b,g as o,h as M,i as O}from"./vendor.ec641b1b.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}};R();const _="Campus Experts India",E={English:"Hello!",Hindi:"\u0928\u092E\u0938\u094D\u0924\u0947 \u0964",Punjabi:"\u0A38\u0A24\u0A3F \u0A38\u0A3C\u0A4D\u0A30\u0A40 \u0A05\u0A15\u0A3E\u0A32 \u0964",Bangla:"\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0 \u0964",Kashmiri:"\u0906\u0926\u093E\u092C \u0964",Urdu:"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645\u06D4",UPBihar:"\u{110A3}\u{110A9}\u{1109D}\u{110B0}\u{110A7} \u{110C0}",Marathi:"\u0928\u092E\u0938\u094D\u0915\u093E\u0930 \u0964",Gujarati:"\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7.",Tamil:"\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD.",Malayalam:"\u0D28\u0D2E\u0D38\u0D4D\u0D15\u0D3E\u0D30\u0D02.",Telugu:"\u0C28\u0C2E\u0C38\u0C4D\u0C15\u0C30\u0C02.",Kannada:"\u0CA8\u0CAE\u0CB8\u0CCD\u0CA4\u0CC6.",Braj:"\u0930\u093E\u0927\u0947 \u0930\u093E\u0927\u0947 \u0964",Odia:"\u0B28\u0B2E\u0B38\u0B4D\u0B15\u0B3E\u0B30 \u0964",Tibetan:"\u0F56\u0F40\u0FB2\u0F0B\u0F64\u0F72\u0F66\u0F0B\u0F56\u0F51\u0F7A\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0D",Manipuri:"\uABC8\uABE8\uABD4\uABE8\uABDD\uABD6\uABD4\uABE4 \uABEB",Marwari:"\u{11156}\u{1116C}\u{1116C}\u{11150} \u{11158}\u{11162}\u{11151} \u0964",Mizo:"Chibai!",Ao:"Salem!",Chokri:"Vebatho!",Kokborok:"Khulumkha!"},v={diff:.5,len:Object.keys(E).length,charLen:2};v.frac=parseFloat((100/v.len).toFixed(4));const U=.02,j=200,C=_,F=E,s=v,m=U,g=j,S=()=>e("header",{children:u(w,{color:"dark",expand:"md",className:"mb-2",dark:!0,children:[u($,{href:"/",children:[e("img",{alt:C,src:"/assets/logo.png",style:{marginRight:"1ex"},width:30}),C]}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar",children:e("span",{className:"navbar-toggler-icon"})}),e(I,{id:"navbar",navbar:!0,children:u(T,{className:"ms-auto",navbar:!0,children:[e(f,{children:e(p,{href:"/",children:"Home"})}),e(f,{children:e(p,{href:"/discover",children:"Discover"})}),e(f,{children:e(p,{href:"/about",children:"About"})}),e(f,{children:e(p,{href:"/contact",children:"Contact Us"})})]})})]})});const Y=()=>e(A,{children:Object.keys(F).map((r,n)=>{const i=F[r],l=L`
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			${n*s.frac}% {
				transform: translateY(0);
				opacity: 0;
			}
			${n*s.frac+s.diff}% {
				transform: translateY(-${s.charLen}em);
				opacity: 1;
			}
			${(n+1)*s.frac-s.diff}% {
				transform: translateY(-${s.charLen}em);
				opacity: 1;
			}
			${(n+1)*s.frac}% {
				transform: translateY(-${s.charLen*2}em);
				opacity: 0;
			}
			100% {
				transform: translateY(-${s.charLen*2}em);
			}
		`,t=y.h1`
			position: relative;
			opacity: 0;
			user-select: none;
			animation: ${l} ${s.len}s infinite forwards;
		`;return e("div",{className:"greeting-minidiv",style:{position:"absolute",transform:"translateY(8em)",left:0,right:0,marginLeft:0,marginRight:0,zIndex:-(s.len+1)},children:e(t,{className:"greeting",children:i},n)},n)})}),H=()=>{const r=D.exports.useRef(null),n=D.exports.useRef(null);let i;const l=({type:a,limit:c})=>{switch(a){case"in":{const d=()=>{var h;if(r.current.volume+m>=c){r.current.volume=c;return}((h=r.current)==null?void 0:h.volume)!==c&&(r.current.volume+=m,i=setTimeout(d,g))};d()}break;case"out":{const d=()=>{if(r.current.volume-m<=0){r.current.volume=0;return}r.current.volume>=0&&(r.current.volume-=m,i=setTimeout(d,g))};d()}break}};return u(x,{fluid:"lg",className:"p-responsive gutter-spacious mx-auto",color:"dark",children:[e("div",{ref:n,className:"hidden",style:{position:"absolute",right:30},children:e("img",{src:"/assets/sound.gif",style:{width:40,opacity:.2,borderRadius:"50%"}})}),e(b,{children:u(o,{className:"text-center",children:[e(o,{xs:"6",md:"4",lg:"2",className:"mx-auto my-4",children:e("a",{onClick:async()=>{var c,d,h,B;const a=.3;i!=null&&clearInterval(i),((c=r.current)==null?void 0:c.paused)?(r.current.currentTime=0,r.current.volume=0,l({type:"in",limit:a}),(d=n.current)==null||d.classList.add("show"),i=setTimeout(()=>l({type:"out"}),r.current.duration*1e3-g*(a/m)),await((h=r.current)==null?void 0:h.play()),r.current.volume=0):(l({type:"out"}),(B=n.current)==null||B.classList.remove("show"),i=setTimeout(()=>{var N;(N=r.current)==null||N.pause(),r.current.volume=0,r.current.currentTime=0},g*(a/m)))},href:"#",children:e("img",{src:"/assets/logo.png",alt:"Logo",className:"w-100"})})}),e(o,{className:"levitating",children:e(Y,{})})]})}),u(b,{className:"text-center px-1",style:{marginTop:`${5*s.charLen}em`,zIndex:4},children:[e(o,{xs:"12 mb-2",children:e("h5",{children:"We are GitHub Campus Experts from India."})}),e(o,{xs:"12",children:u(b,{children:[e("audio",{ref:r,src:"/assets/Vande_Mataram.mp3"}),e(o,{className:"col-12 col-md-2 offset-md-3 mb-1",children:e("a",{href:"https://apply.githubcampus.expert/",target:"_blank",className:"btn d-block w-100 btn-light",style:{backgroundColor:"#DD5522",borderColor:"#DD5522",color:"white"},children:e("b",{children:"\u{1F6A9} Apply"})})}),e(o,{className:"col-12 col-md-2 mb-1",children:e("a",{href:"#",className:"btn d-block w-100 btn-light text-black",children:e("b",{children:"\u{1F3AD} Discover"})})}),e(o,{className:"col-12 col-md-2 mb-1",children:e("a",{href:"#",className:"btn d-block w-100 btn-success",children:e("b",{children:"\u{1F4E8} Contact"})})})]})})]})]})};const k=1,z=y.footer`
	opacity: 0.8;
	filter: blur(0.5px);
	transition: all ${k}s;

	&:hover {
		filter: blur(0);
		opacity: 1;
	}
`,G=y.div`
	z-index: -100;
	position: absolute;
	opacity: 0.05;
	left: 50%;
	transform: translate(-50%, -1.2em);
	width: 100%;
	max-width: 900px;
	height: 100%;
	border-radius: 50%;
	height: 140%;
	filter: blur(3px);
	background-color: white;
	transition: all ${k}s;

	&:hover {
		opacity: 0.08;
	}
`,K=()=>u(A,{children:[u(z,{id:"footer",className:"container mt-5 pt-2 mb-5 pb-2 text-center",children:[e(G,{}),u(o,{children:["\xA9 ",C," 2021-",new Date().getFullYear()]}),u(o,{children:["Made with ",e("span",{className:"heart",children:"\u2764"})," by ",e("a",{style:{color:"pink"},href:"https://www.paramsid.com",target:"_blank",children:"Param"}),"."]})]}),e(x,{style:{transform:"scale(80%)",opacity:.3},children:u(b,{className:"text-center",children:[e(o,{xs:"12",className:"offset-md-8 col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/terms",target:"_blank",children:"Terms of service"})}),e(o,{xs:"12",className:"col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/",target:"_blank",children:"Campus Experts"})})]})})]}),P=()=>u(A,{children:[e(S,{}),e(H,{}),e(K,{})]});M.render(e(O.StrictMode,{children:e(P,{})}),document.getElementById("root"));
