(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2175:function(e,r,s){Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,4486)),Promise.resolve().then(s.bind(s,1882))},4486:function(e,r,s){"use strict";s.d(r,{default:function(){return u}});var a=s(7437),t=s(2265),o=s(2974),l=s(2218),n=s(4839),c=s(6164);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=t.forwardRef((e,r)=>{let{className:s,variant:t,size:l,asChild:d=!1,...u}=e,p=d?o.g7:"button";return(0,a.jsx)(p,{className:function(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,c.m6)((0,n.W)(r))}(i({variant:t,size:l,className:s})),ref:r,...u})});function u(){let[e,r]=(0,t.useState)({nombre:"",apellidos:"",email:"",mensaje:""}),s=e=>{let{name:s,value:a}=e.target;r(e=>({...e,[s]:a}))};return(0,a.jsx)("section",{className:"bg-[#E8E8E8] py-16 px-4",children:(0,a.jsx)("div",{className:"max-w-[75%] mx-auto",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-12",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-5xl font-serif text-[#817A7A] mb-4",children:"Cont\xe1ctanos"}),(0,a.jsx)("p",{className:"text-[#817A7A] mb-8",children:"\xbfQuieres que trabajemos juntos? Ingresa tus datos y nos pondremos en contacto contigo en breve. Esperamos tener noticias tuyas pronto."})]}),(0,a.jsxs)("form",{onSubmit:s=>{s.preventDefault(),console.log("Form submitted:",e),r({nombre:"",apellidos:"",email:"",mensaje:""})},className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",id:"nombre",name:"nombre",value:e.nombre,onChange:s,required:!0,className:"block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer",placeholder:" "}),(0,a.jsxs)("label",{htmlFor:"nombre",className:"absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:["Nombre ",(0,a.jsx)("span",{className:"text-[#817A7A]",children:"(obligatorio)"})]})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",id:"apellidos",name:"apellidos",value:e.apellidos,onChange:s,className:"block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer",placeholder:" "}),(0,a.jsx)("label",{htmlFor:"apellidos",className:"absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Apellidos"})]})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:s,required:!0,className:"block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer",placeholder:" "}),(0,a.jsxs)("label",{htmlFor:"email",className:"absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:["Correo electr\xf3nico ",(0,a.jsx)("span",{className:"text-[#999999]",children:"(obligatorio)"})]})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("textarea",{id:"mensaje",name:"mensaje",value:e.mensaje,onChange:s,required:!0,rows:4,className:"block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer",placeholder:" "}),(0,a.jsxs)("label",{htmlFor:"mensaje",className:"absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:["Mensaje ",(0,a.jsx)("span",{className:"text-[#999999]",children:"(obligatorio)"})]})]}),(0,a.jsx)(d,{type:"submit",className:"bg-[#333333] text-white hover:bg-[#4a4a4a] px-8 py-3 rounded-full",children:"Enviar"})]})]})})})}d.displayName="Button"},1882:function(e,r,s){"use strict";s.d(r,{default:function(){return l}});var a=s(7437),t=s(2265),o=s(6648);function l(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let r=e.current;if(r){let{offsetWidth:e}=r;r.style.setProperty("--scroll-duration","".concat(e/100,"s"))}},[]),(0,a.jsxs)("section",{className:"relative overflow-hidden bg-[#E8E8E8] py-24",children:[(0,a.jsxs)("div",{ref:e,className:"absolute top-[-25%] left-0 h-full flex items-center whitespace-nowrap animate-scroll",style:{width:"max-content"},children:[(0,a.jsx)("span",{className:"inline-block font-libre text-[10vw] text-[#817A7A]",children:"Producto Destacado Producto Destacado\xa0"}),(0,a.jsx)("span",{className:"inline-block font-libre text-[10vw] text-[#817A7A]",children:"Producto Destacado Producto Destacado\xa0"}),(0,a.jsx)("span",{className:"inline-block font-libre text-[10vw] text-[#817A7A]",children:"Producto Destacado Producto Destacado\xa0"})]}),(0,a.jsxs)("div",{className:"relative z-10 max-w-[75%] mx-auto px-4 flex flex-col lg:flex-row items-center justify-evenly",children:[(0,a.jsx)("div",{className:"lg:w-1/3 mb-8 lg:mb-0",children:(0,a.jsx)(o.default,{src:"https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/4.JPG",alt:"Modern sculptural chair",width:550,height:400,className:"shadow-lg"})}),(0,a.jsxs)("div",{className:"lg:w-1/3 lg:pl-12 text-left",children:[(0,a.jsx)("h2",{className:"text-4xl font-serif mb-4 text-[#333333]",children:"Producto Destacado"}),(0,a.jsx)("p",{className:"text-[#666666] mb-6",children:"Usa este espacio para hablar sobre tu tienda y tus productos. \xbfC\xf3mo y d\xf3nde se hacen? \xbfQu\xe9 los hace \xfanicos?"}),(0,a.jsx)("button",{className:"bg-[#333333] text-white px-8 py-3 rounded-full hover:bg-[#4a4a4a] transition-colors",children:"Ver todo"})]})]})]})}}},function(e){e.O(0,[604,971,23,744],function(){return e(e.s=2175)}),_N_E=e.O()}]);