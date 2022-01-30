import{j as e,a,N,b as D,C as x,c as v,d as o,e as l,F as m,U as E,s as f,f as A,R as c,g as n,h as F,i as $}from"./vendor.07530c09.js";const k=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function d(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(r){if(r.ep)return;r.ep=!0;const u=d(r);fetch(r.href,u)}};k();const w="Campus Experts India",B={English:"Hello!",Hindi:"\u0928\u092E\u0938\u094D\u0924\u0947 \u0964",Punjabi:"\u0A38\u0A24\u0A3F \u0A38\u0A3C\u0A4D\u0A30\u0A40 \u0A05\u0A15\u0A3E\u0A32 \u0964",Bangla:"\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0 \u0964",Kashmiri:"\u0906\u0926\u093E\u092C \u0964",Urdu:"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645\u06D4",UPBihar:"\u{110A3}\u{110A9}\u{1109D}\u{110B0}\u{110A7} \u{110C0}",Marathi:"\u0928\u092E\u0938\u094D\u0915\u093E\u0930 \u0964",Gujarati:"\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7.",Tamil:"\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD.",Malayalam:"\u0D28\u0D2E\u0D38\u0D4D\u0D15\u0D3E\u0D30\u0D02.",Telugu:"\u0C28\u0C2E\u0C38\u0C4D\u0C15\u0C30\u0C02.",Kannada:"\u0CA8\u0CAE\u0CB8\u0CCD\u0CA4\u0CC6.",Braj:"\u0930\u093E\u0927\u0947 \u0930\u093E\u0927\u0947 \u0964",Odia:"\u0B28\u0B2E\u0B38\u0B4D\u0B15\u0B3E\u0B30 \u0964",Tibetan:"\u0F56\u0F40\u0FB2\u0F0B\u0F64\u0F72\u0F66\u0F0B\u0F56\u0F51\u0F7A\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0D",Manipuri:"\uABC8\uABE8\uABD4\uABE8\uABDD\uABD6\uABD4\uABE4 \uABEB",Marwari:"\u{11156}\u{1116C}\u{1116C}\u{11150} \u{11158}\u{11162}\u{11151} \u0964",Mizo:"Chibai!",Ao:"Salem!",Chokri:"Vebatho!",Kokborok:"Khulumkha!"},p={diff:.5,len:Object.keys(B).length,charLen:2};p.frac=parseFloat((100/p.len).toFixed(4));const b=w,C=B,t=p,L=()=>e("header",{children:a(N,{color:"dark",expand:"md",className:"mb-2",dark:!0,children:[a(D,{href:"/",children:[e("img",{alt:b,src:"/assets/logo.png",style:{marginRight:"1ex"},width:30}),b]}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar",children:e("span",{className:"navbar-toggler-icon"})}),e(x,{id:"navbar",navbar:!0,children:a(v,{className:"ms-auto",navbar:!0,children:[e(o,{children:e(l,{href:"/",children:"Home"})}),e(o,{children:e(l,{href:"/discover",children:"Discover"})}),e(o,{children:e(l,{href:"/about",children:"About"})}),e(o,{children:e(l,{href:"/contact",children:"Contact Us"})})]})})]})});const I=()=>e(m,{children:Object.keys(C).map((g,s)=>{const d=C[g],i=E`
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			${s*t.frac}% {
				transform: translateY(0);
				opacity: 0;
			}
			${s*t.frac+t.diff}% {
				transform: translateY(-${t.charLen}em);
				opacity: 1;
			}
			${(s+1)*t.frac-t.diff}% {
				transform: translateY(-${t.charLen}em);
				opacity: 1;
			}
			${(s+1)*t.frac}% {
				transform: translateY(-${t.charLen*2}em);
				opacity: 0;
			}
			100% {
				transform: translateY(-${t.charLen*2}em);
			}
		`,r=f.h1`
			position: relative;
			opacity: 0;
			user-select: none;
			animation: ${i} ${t.len}s infinite forwards;
		`;return e("div",{className:"greeting-minidiv",style:{position:"absolute",transform:"translateY(8em)",left:0,right:0,marginLeft:0,marginRight:0,zIndex:-(t.len+1)},children:e(r,{className:"greeting",children:d},s)},s)})}),M=()=>a(A,{fluid:"lg",className:"p-responsive gutter-spacious mx-auto",color:"dark",children:[e(c,{children:a(n,{className:"text-center",children:[e(n,{xs:"6",md:"4",lg:"2",className:"mx-auto my-4",children:e("a",{href:"#",children:e("img",{src:"/assets/logo.png",alt:"Logo",className:"w-100"})})}),e(n,{className:"levitating",children:e(I,{})})]})}),a(c,{className:"text-center px-1",style:{marginTop:`${5*t.charLen}em`,zIndex:4},children:[e(n,{xs:"12 mb-2",children:e("h5",{children:"We are GitHub Campus Experts from India."})}),e(n,{xs:"12",children:a(c,{children:[e(n,{className:"col-12 col-md-2 offset-md-3 mb-1",children:e("a",{href:"https://apply.githubcampus.expert/",target:"_blank",className:"btn d-block w-100 btn-light",style:{backgroundColor:"#DD5522",borderColor:"#DD5522",color:"white"},children:e("b",{children:"\u{1F6A9} Apply"})})}),e(n,{className:"col-12 col-md-2 mb-1",children:e("a",{href:"#",className:"btn d-block w-100 btn-light text-black",children:e("b",{children:"\u{1F3AD} Discover"})})}),e(n,{className:"col-12 col-md-2 mb-1",children:e("a",{href:"#",className:"btn d-block w-100 btn-success",children:e("b",{children:"\u{1F4E8} Contact"})})})]})})]})]});const y=1,T=f.footer`
	opacity: 0.8;
	filter: blur(0.5px);
	transition: all ${y}s;

	&:hover {
		filter: blur(0);
		opacity: 1;
	}
`,O=f.div`
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
	transition: all ${y}s;

	&:hover {
		opacity: 0.08;
	}
`,j=()=>a(m,{children:[a(T,{id:"footer",className:"container mt-5 pt-2 mb-5 pb-2 text-center",children:[e(O,{}),a(n,{children:["\xA9 ",b," 2021-",new Date().getFullYear()]}),a(n,{children:["Made with ",e("span",{className:"heart",children:"\u2764"})," by ",e("a",{style:{color:"pink"},href:"https://www.paramsid.com",target:"_blank",children:"Param"}),"."]})]}),e(A,{style:{transform:"scale(80%)",opacity:.3},children:a(c,{className:"text-center",children:[e(n,{xs:"12",className:"offset-md-8 col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/terms",target:"_blank",children:"Terms of service"})}),e(n,{xs:"12",className:"col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/",target:"_blank",children:"Campus Experts"})})]})})]}),R=()=>a(m,{children:[e(L,{}),e(M,{}),e(j,{})]});F.render(e($.StrictMode,{children:e(R,{})}),document.getElementById("root"));
