import{j as e,a as u,N as T,b as M,C as O,c as R,d as p,e as b,F as A,U as _,s as y,r as k,f as F,R as g,g as o,h as U,i as w,B as j,k as S,l as Y}from"./vendor.451ed6f4.js";const H=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}};H();const z="Campus Experts India",L={English:"Hello!",Hindi:"\u0928\u092E\u0938\u094D\u0924\u0947 \u0964",Punjabi:"\u0A38\u0A24\u0A3F \u0A38\u0A3C\u0A4D\u0A30\u0A40 \u0A05\u0A15\u0A3E\u0A32 \u0964",Bangla:"\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0 \u0964",Kashmiri:"\u0906\u0926\u093E\u092C \u0964",Urdu:"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645\u06D4",UPBihar:"\u{110A3}\u{110A9}\u{1109D}\u{110B0}\u{110A7} \u{110C0}",Marathi:"\u0928\u092E\u0938\u094D\u0915\u093E\u0930 \u0964",Gujarati:"\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7.",Tamil:"\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD.",Malayalam:"\u0D28\u0D2E\u0D38\u0D4D\u0D15\u0D3E\u0D30\u0D02.",Telugu:"\u0C28\u0C2E\u0C38\u0C4D\u0C15\u0C30\u0C02.",Kannada:"\u0CA8\u0CAE\u0CB8\u0CCD\u0CA4\u0CC6.",Braj:"\u0930\u093E\u0927\u0947 \u0930\u093E\u0927\u0947 \u0964",Odia:"\u0B28\u0B2E\u0B38\u0B4D\u0B15\u0B3E\u0B30 \u0964",Tibetan:"\u0F56\u0F40\u0FB2\u0F0B\u0F64\u0F72\u0F66\u0F0B\u0F56\u0F51\u0F7A\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0D",Manipuri:"\uABC8\uABE8\uABD4\uABE8\uABDD\uABD6\uABD4\uABE4 \uABEB",Marwari:"\u{11156}\u{1116C}\u{1116C}\u{11150} \u{11158}\u{11162}\u{11151} \u0964",Mizo:"Chibai!",Ao:"Salem!",Chokri:"Vebatho!",Kokborok:"Khulumkha!"},B={diff:.5,len:Object.keys(L).length,charLen:2};B.frac=parseFloat((100/B.len).toFixed(4));const G=.02,K=200,C=z,$=L,s=B,m=G,v=K,P=()=>e("header",{children:u(T,{color:"dark",expand:"md",className:"mb-2",dark:!0,children:[u(M,{href:"/",children:[e("img",{alt:C,src:"/assets/logo.png",style:{marginRight:"1ex"},width:30}),C]}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar",children:e("span",{className:"navbar-toggler-icon"})}),e(O,{id:"navbar",navbar:!0,children:u(R,{className:"ms-auto",navbar:!0,children:[e(p,{children:e(b,{className:"nav-link",to:"/",children:"Home"})}),e(p,{children:e(b,{className:"nav-link",to:"/discover",children:"Discover"})}),e(p,{children:e(b,{className:"nav-link",to:"/about",children:"About"})}),e(p,{children:e(b,{className:"nav-link",to:"/contact",children:"Contact Us"})})]})})]})});const V=()=>e(A,{children:Object.keys($).map((r,a)=>{const c=$[r],l=_`
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			${a*s.frac}% {
				transform: translateY(0);
				opacity: 0;
			}
			${a*s.frac+s.diff}% {
				transform: translateY(-${s.charLen}em);
				opacity: 1;
			}
			${(a+1)*s.frac-s.diff}% {
				transform: translateY(-${s.charLen}em);
				opacity: 1;
			}
			${(a+1)*s.frac}% {
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
		`;return e("div",{className:"greeting-minidiv",style:{position:"absolute",transform:"translateY(8em)",left:0,right:0,marginLeft:0,marginRight:0,zIndex:-(s.len+1)},children:e(t,{className:"greeting",children:c},a)},a)})}),q=()=>{const r=k.exports.useRef(null),a=k.exports.useRef(null);let c;const l=({type:n,limit:i})=>{switch(n){case"in":{const d=()=>{var h;if(r.current.volume+m>=i){r.current.volume=i;return}((h=r.current)==null?void 0:h.volume)!==i&&(r.current.volume+=m,c=setTimeout(d,v))};d()}break;case"out":{const d=()=>{if(r.current.volume-m<=0){r.current.volume=0;return}r.current.volume>=0&&(r.current.volume-=m,c=setTimeout(d,v))};d()}break}},t=async()=>{var i,d,h,N,D,E;const n=.3;c!=null&&clearInterval(c),((i=r.current)==null?void 0:i.paused)?(r.current.currentTime=0,r.current.volume=0,l({type:"in",limit:n}),(d=a.current)==null||d.classList.add("show"),(h=a.current)==null||h.addEventListener("click",t),c=setTimeout(()=>{var f,x;l({type:"out"}),(f=a.current)==null||f.classList.remove("show"),(x=a.current)==null||x.removeEventListener("click",t)},r.current.duration*1e3-v*(n/m)),await((N=r.current)==null?void 0:N.play()),r.current.volume=0):(l({type:"out"}),(D=a.current)==null||D.classList.remove("show"),(E=a.current)==null||E.removeEventListener("click",t),c=setTimeout(()=>{var f;(f=r.current)==null||f.pause(),r.current.volume=0,r.current.currentTime=0},v*(n/m)))};return u(F,{fluid:"lg",className:"p-responsive gutter-spacious mx-auto",color:"dark",children:[e("div",{ref:a,className:"hidden",style:{position:"absolute",right:30},children:e("img",{src:"/assets/sound.gif",style:{width:40,opacity:.2,borderRadius:"50%"}})}),e(g,{children:u(o,{className:"text-center",children:[e(o,{xs:"6",md:"4",lg:"2",className:"mx-auto my-4",children:e("a",{onClick:t,href:"#",children:e("img",{src:"/assets/logo.png",alt:"Logo",className:"w-100"})})}),e(o,{className:"levitating",children:e(V,{})})]})}),u(g,{className:"text-center px-1",style:{marginTop:`${5*s.charLen}em`,zIndex:4},children:[e(o,{xs:"12 mb-2",children:e("h5",{children:"We are GitHub Campus Experts from India."})}),e(o,{xs:"12",children:u(g,{children:[e("audio",{ref:r,src:"/assets/Vande_Mataram.mp3"}),e(o,{className:"col-12 col-md-2 offset-md-3 mb-1",children:e("a",{href:"https://apply.githubcampus.expert/",target:"_blank",className:"btn d-block w-100 btn-light",style:{backgroundColor:"#DD5522",borderColor:"#DD5522",color:"white"},children:e("b",{children:"\u{1F6A9} Apply"})})}),e(o,{className:"col-12 col-md-2 mb-1",children:e("a",{href:"#",className:"btn d-block w-100 btn-light text-black",children:e("b",{children:"\u{1F3AD} Discover"})})}),e(o,{className:"col-12 col-md-2 mb-1",children:e("a",{href:"#",className:"btn d-block w-100 btn-success",children:e("b",{children:"\u{1F4E8} Contact"})})})]})})]})]})};const I=1,W=y.footer`
	opacity: 0.8;
	filter: blur(0.5px);
	transition: all ${I}s;

	&:hover {
		filter: blur(0);
		opacity: 1;
	}
`,J=y.div`
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
	transition: all ${I}s;

	&:hover {
		opacity: 0.08;
	}
`,Q=()=>u(A,{children:[u(W,{id:"footer",className:"container mt-5 pt-2 mb-5 pb-2 text-center",children:[e(J,{}),u(o,{children:["\xA9 ",C," 2021-",new Date().getFullYear()]}),u(o,{children:["Made with ",e("span",{className:"heart",children:"\u2764"})," by ",e("a",{style:{color:"pink"},href:"https://www.paramsid.com",target:"_blank",children:"Param"}),"."]})]}),e(F,{style:{transform:"scale(80%)",opacity:.3},children:u(g,{className:"text-center",children:[e(o,{xs:"12",className:"offset-md-8 col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/terms",target:"_blank",children:"Terms of service"})}),e(o,{xs:"12",className:"col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/",target:"_blank",children:"Campus Experts"})})]})})]}),X=()=>u(U,{children:[e(w,{path:"/",element:e(q,{})}),e(w,{path:"/discover",element:e(A,{children:"Hi"})})]}),Z=()=>u(j,{children:[e(P,{}),e(X,{}),e(Q,{})]});S.render(e(Y.StrictMode,{children:e(Z,{})}),document.getElementById("root"));
