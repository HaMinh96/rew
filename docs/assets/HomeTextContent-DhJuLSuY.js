import{a as X,R as Z,s as J}from"./index-DEvEhani.js";import{s as ee}from"./index-DegWSrBm.js";import{s as H}from"./index-BZZyB39h.js";import{B as U,o as i,c as g,s as d,a as m,m as b,w as c,A as N,v as A,l as x,V as q,g as _,T as M,n as V,D,z as te,U as j,r as L,F as K,E as z,b as r,t as F,W as ne,X as oe,i as ae,k as re,u,d as f}from"./index-C2t267js.js";import{s as ce}from"./index-DODwBDYV.js";import{s as ie,a as le}from"./index-CmeO1le5.js";import{u as se}from"./loading-CPdZ9CVe.js";import{c as O}from"./index-DIdd2rVb.js";import{u as de}from"./useHomeText-BHz9B9OS.js";var ue=function(n){var e=n.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding: `).concat(e("textarea.padding.y")," ").concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-fluid .p-textarea {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},pe={root:function(n){var e=n.instance,a=n.props;return["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":a.autoResize,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.$primevue.config.inputStyle==="filled"||e.$primevue.config.inputVariant==="filled"}]}},he=U.extend({name:"textarea",theme:ue,classes:pe}),fe={name:"BaseTextarea",extends:H,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:he,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},G={name:"Textarea",extends:fe,inheritAttrs:!1,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(n){this.autoResize&&this.resize(),this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},me=["value","aria-invalid"];function ve(t,n,e,a,p,o){return i(),g("textarea",d({class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:n[0]||(n[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},t.ptmi("root",o.ptmParams)),null,16,me)}G.render=ve;var E={name:"ChevronUpIcon",extends:X},ge=m("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1),be=[ge];function ye(t,n,e,a,p,o){return i(),g("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),be,16)}E.render=ye;var Ae={root:"p-accordioncontent",content:"p-accordioncontent-content"},$e=U.extend({name:"accordioncontent",classes:Ae}),Pe={name:"BaseAccordionContent",extends:H,props:{as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1}},style:$e,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},k={name:"AccordionContent",extends:Pe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function xe(t,n,e,a,p,o){return t.asChild?x(t.$slots,"default",{key:1,class:V(t.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs}):(i(),b(M,d({key:0,name:"p-toggleable-content"},t.ptm("transition",o.ptParams)),{default:c(function(){return[!o.$pcAccordion.lazy||o.$pcAccordionPanel.active?N((i(),b(A(t.as),d({key:0,class:t.cx("root")},o.attrs),{default:c(function(){return[m("div",d({class:t.cx("content")},t.ptm("content",o.ptParams)),[x(t.$slots,"default")],16)]}),_:3},16,["class"])),[[q,o.$pcAccordion.lazy?!0:o.$pcAccordionPanel.active]]):_("",!0)]}),_:3},16))}k.render=xe;var we={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},ke=U.extend({name:"accordionheader",classes:we}),Te={name:"BaseAccordionHeader",extends:H,props:{as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ke,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},T={name:"AccordionHeader",extends:Te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var e=this.findNextPanel(this.findPanel(n.currentTarget));e?this.changeFocusedPanel(n,e):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var e=this.findPrevPanel(this.findPanel(n.currentTarget));e?this.changeFocusedPanel(n,e):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var e=this.findFirstPanel();this.changeFocusedPanel(n,e),n.preventDefault()},onEndKey:function(n){var e=this.findLastPanel();this.changeFocusedPanel(n,e),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return D.findSingle(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e?n:n.nextElementSibling;return a?D.getAttribute(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e?n:n.previousElementSibling;return a?D.getAttribute(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,e){D.focus(this.findHeader(e))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:E,ChevronDownIcon:ie},directives:{ripple:Z}};function Ce(t,n,e,a,p,o){var l=te("ripple");return t.asChild?x(t.$slots,"default",{key:1,class:V(t.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):N((i(),b(A(t.as),d({key:0,class:t.cx("root"),onClick:o.onClick},o.attrs),{default:c(function(){return[x(t.$slots,"default",{active:o.$pcAccordionPanel.active}),x(t.$slots,"toggleicon",{active:o.$pcAccordionPanel.active,class:V(t.cx("toggleicon"))},function(){return[o.$pcAccordionPanel.active?(i(),b(A(o.$pcAccordion.$slots.collapseicon?o.$pcAccordion.$slots.collapseicon:o.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),d({key:0,class:[o.$pcAccordion.collapseIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",o.ptParams)),null,16,["class"])):(i(),b(A(o.$pcAccordion.$slots.expandicon?o.$pcAccordion.$slots.expandicon:o.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),d({key:1,class:[o.$pcAccordion.expandIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",o.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[l]])}T.render=Ce;var _e={root:function(n){var e=n.instance,a=n.props;return["p-accordionpanel",{"p-accordionpanel-active":e.active,"p-disabled":a.disabled}]}},Se=U.extend({name:"accordionpanel",classes:_e}),Ie={name:"BaseAccordionPanel",extends:H,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1}},style:Se,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},C={name:"AccordionPanel",extends:Ie,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ve(t,n,e,a,p,o){return t.asChild?x(t.$slots,"default",{key:1,class:V(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs}):(i(),b(A(t.as),d({key:0,class:t.cx("root")},o.attrs),{default:c(function(){return[x(t.$slots,"default")]}),_:3},16,["class"]))}C.render=Ve;var He=function(n){var e=n.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(e("accordion.panel.border.width"),`;
    border-color: `).concat(e("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(e("accordion.header.padding"),`;
    color: `).concat(e("accordion.header.color"),`;
    background: `).concat(e("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(e("accordion.header.border.width"),`;
    border-color: `).concat(e("accordion.header.border.color"),`;
    font-weight: `).concat(e("accordion.header.font.weight"),`;
    border-radius: `).concat(e("accordion.header.border.radius"),`;
    transition: background `).concat(e("accordion.transition.duration"),"; color ").concat(e("accordion.transition.duration"),"color ").concat(e("accordion.transition.duration"),", outline-color ").concat(e("accordion.transition.duration"),", box-shadow ").concat(e("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(e("accordion.header.first.border.width"),`;
    border-top-left-radius: `).concat(e("accordion.header.first.top.border.radius"),`;
    border-top-right-radius: `).concat(e("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-bottom-left-radius: `).concat(e("accordion.header.last.bottom.border.radius"),`;
    border-bottom-right-radius: `).concat(e("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-bottom-left-radius: `).concat(e("accordion.header.last.active.bottom.border.radius"),`;
    border-bottom-right-radius:`).concat(e("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(e("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(e("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(e("accordion.header.focus.ring.width")," ").concat(e("accordion.header.focus.ring.style")," ").concat(e("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(e("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(e("accordion.header.hover.background"),`;
    color: `).concat(e("accordion.header.hover.color"),`
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(e("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(e("accordion.header.active.background"),`;
    color: `).concat(e("accordion.header.active.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(e("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: `).concat(e("accordion.header.active.hover.background"),`;
    color: `).concat(e("accordion.header.active.hover.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: `).concat(e("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(e("accordion.content.border.width"),`;
    border-color: `).concat(e("accordion.content.border.color"),`;
    background: color: `).concat(e("accordion.content.background"),`;
    color: `).concat(e("accordion.content.color"),`;
    padding: `).concat(e("accordion.content.padding"),`
}
`)},Ue={root:"p-accordion p-component"},Be=U.extend({name:"accordion",theme:He,classes:Ue}),De={name:"BaseAccordion",extends:H,props:{value:{type:[String,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Be,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},Y={name:"Accordion",extends:De,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||j()},value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},mounted:function(){this.id=this.id||j()},methods:{isItemActive:function(n){var e;return this.multiple?(e=this.d_value)===null||e===void 0?void 0:e.includes(n):this.d_value===n},updateValue:function(n){var e,a=this.isItemActive(n);this.multiple?a?this.d_value=this.d_value.filter(function(p){return p!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=a?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(e=this.d_value)===null||e===void 0?void 0:e.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,e){return n.props?n.props[e]:void 0},getKey:function(n,e){return this.getTabProp(n,"header")||e},getHeaderPT:function(n,e){var a=this;return{root:d({onClick:function(o){return a.onTabClick(o,e)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",e)),toggleicon:d(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",e))}},getContentPT:function(n,e){return{root:d(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",e)),transition:this.getTabPT(n,"transition",e),content:this.getTabPT(n,"content",e)}},getTabPT:function(n,e,a){var p=this.tabs.length,o={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:p,first:a===0,last:a===p-1,active:this.isItemActive("".concat(a))}};return d(this.ptm("accordiontab.".concat(e),o),this.ptmo(this.getTabProp(n,"pt"),e,o))},onTabClick:function(n,e){this.$emit("tab-click",{originalEvent:n,index:e})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(e,a){return n.isAccordionTab(a)?e.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(p){n.isAccordionTab(p)&&e.push(p)}),e},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:C,AccordionHeader:T,AccordionContent:k,ChevronUpIcon:E,ChevronRightIcon:le}};function Ke(t,n,e,a,p,o){var l=L("AccordionHeader"),S=L("AccordionContent"),R=L("AccordionPanel");return i(),g("div",d({class:t.cx("root")},t.ptmi("root")),[o.hasAccordionTab?(i(!0),g(K,{key:0},z(o.tabs,function(s,v){return i(),b(R,{key:o.getKey(s,v),value:"".concat(v),pt:{root:o.getTabPT(s,"root",v)},disabled:o.getTabProp(s,"disabled")},{default:c(function(){return[r(l,{class:V(o.getTabProp(s,"headerClass")),pt:o.getHeaderPT(s,v)},{toggleicon:c(function(y){return[y.active?(i(),b(A(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),d({key:0,class:[t.collapseIcon,y.class],"aria-hidden":"true",ref_for:!0},o.getTabPT(s,"headericon",v)),null,16,["class"])):(i(),b(A(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronUpIcon"),d({key:1,class:[t.expandIcon,y.class],"aria-hidden":"true",ref_for:!0},o.getTabPT(s,"headericon",v)),null,16,["class"]))]}),default:c(function(){return[s.children&&s.children.headericon?(i(),b(A(s.children.headericon),{key:0,isTabActive:o.isItemActive("".concat(v)),active:o.isItemActive("".concat(v)),index:v},null,8,["isTabActive","active","index"])):_("",!0),s.props&&s.props.header?(i(),g("span",d({key:1,ref_for:!0},o.getTabPT(s,"headertitle",v)),F(s.props.header),17)):_("",!0),s.children&&s.children.header?(i(),b(A(s.children.header),{key:2})):_("",!0)]}),_:2},1032,["class","pt"]),r(S,{pt:o.getContentPT(s,v)},{default:c(function(){return[(i(),b(A(s)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(t.$slots,"default",{key:1})],16)}Y.render=Ke;const ze={class:"m-2 px-3 px-sm-0 content-group"},Fe={class:"pb-5"},Re={class:"d-flex flex-column ms-4"},Le={class:"d-flex flex-column ms-4"},Ne={key:1,class:"d-flex justify-content-end gap-2 p-2 bg-white position-absolute actions border-top"},Ee={class:"position-absolute align-items-center justify-content-center top-50 start-50 translate-middle",style:{display:"flex"}},We=m("div",{class:"loading-indicator"},null,-1),je=[We],et={__name:"HomeTextContent",setup(t){const{textContent:n,getTextContent:e,setTextContent:a}=de(),p=se(),o=ne(),l=oe({home:{callToAction:"Let's Get Started",subText:"We team up with higher education institutions to cultivate evergreen enrollment systems, operations, and processes for their Slate CRM instances."},about:{block1:{title:"Putting Down Roots",content:"Whether serving temporary Slater coverage or as an ongoing Slate Captain, ReW’s sustainable solutions remain the same. Our work stands the test of time."},block2:{title:"Slate Support to the Core",content:"The acreage of ReW’s higher education expertise is vast. However, our mission focuses on providing Slate support tailored for enrollment management systems and operations."},block3:{title:"Great Oaks from Little Acorns Grow",content:"ReW is a lean collaborative of Slaters from diverse higher education backgrounds who hold the shared belief that no Slate instance is too small to make a mighty impact."},block4:{title:"Into the SIS Weeds",content:"Our team has extensive experience administering student information systems. We thrive on challenges to optimize Slate with data integrations and business processes."}},services:{block1:{title:"Captaining",content:"Team up with our Slate subject matter experts to have embedded project management, cycle prep, and strategic advisement at the ready."},block2:{title:"Engineering",content:"Let’s dream big together for implementing next-level Slate enhancements from portals and dashboards to workflow automations and system integrations."},block3:{title:"Operationalizing",content:"Troubleshooting, routine maintenance, querying, data integrity, you name it! ReW’s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities."},block4:{title:"ReInforcing",content:"Looking for Slate-skilled seasonal readers and/or application processors? In need of temporary coverage for a key Slater going on leave? Unexpected turnover putting you in a bind? Call on ReW to bridge the gap."}},faq:{subText:"In a quandary of not knowing what you don’t know about Slate? You’re not alone! Here are some of the questions that we help Slate schools answer:",block1:"My staff spends a significant amount of time/effort on completing manual operations processes and serving as human bridges for data integrations. How can we automate?",block2:"Our Admission Office is overwhelmed by a NeverEnding Story of internal Slate requests from campus stakeholders. How can we optimize our in-house Slate Support and get ahead?",block3:"We are ready to take our Slate systems and operations documentation to the next level. Where do we start?",block4:"I watched a webinar where a Slater showcased an awesome portal their school has. How can we build something similar?",block5:"We are hiring for a Slate position, but we continue to have failed searches. What more can we do?"},footer:{callToAction:"Contact Us",copyright:"ReWorkflow, LLC. All Rights Reserved ©, 2024."}}),S=ae(!1),R=async()=>{S.value=!0;const y=await a(l);S.value=!1,y!=null&&y.success&&(n.value=l.value)},s=()=>{O(o,{message:"Do you want to cancel?",accept:()=>{l.value=n.value}})},v=()=>{O(o,{message:"Do you want to save changes?",accept:R})};return re(async()=>{await e(),l.value=n.value}),(y,P)=>{const I=ce,B=G,Q=ee,W=J;return i(),g("div",ze,[u(p).loading?_("",!0):(i(),b(Q,{key:0,style:{height:"calc(100vh - 16px)",overflow:"auto"}},{content:c(()=>[m("div",Fe,[r(u(Y),{value:"0"},{default:c(()=>[r(u(C),{value:"0"},{default:c(()=>[r(u(T),null,{default:c(()=>[f("Home")]),_:1}),r(u(k),null,{default:c(()=>[m("ul",null,[m("li",null,[f(" Call to action: "),r(I,{modelValue:l.home.callToAction,"onUpdate:modelValue":P[0]||(P[0]=h=>l.home.callToAction=h),autocomplete:"off"},null,8,["modelValue"])]),m("li",null,[f(" subText: "),r(B,{rows:"3",modelValue:l.home.subText,"onUpdate:modelValue":P[1]||(P[1]=h=>l.home.subText=h),autocomplete:"off"},null,8,["modelValue"])])])]),_:1})]),_:1}),r(u(C),{value:"1"},{default:c(()=>[r(u(T),null,{default:c(()=>[f("About")]),_:1}),r(u(k),null,{default:c(()=>[m("ul",null,[(i(!0),g(K,null,z(l.about,(h,w)=>(i(),g("li",null,[f(F(w)+": ",1),m("div",Re,[f(" Title: "),r(I,{modelValue:h.title,"onUpdate:modelValue":$=>h.title=$,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"]),f(" Content: "),r(B,{rows:"3",modelValue:h.content,"onUpdate:modelValue":$=>h.content=$,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])])]))),256))])]),_:1})]),_:1}),r(u(C),{value:"2"},{default:c(()=>[r(u(T),null,{default:c(()=>[f("Services")]),_:1}),r(u(k),null,{default:c(()=>[m("ul",null,[(i(!0),g(K,null,z(l.services,(h,w)=>(i(),g("li",null,[f(F(w)+": ",1),m("div",Le,[f(" Title: "),r(I,{modelValue:h.title,"onUpdate:modelValue":$=>h.title=$,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"]),f(" Content: "),r(B,{rows:"3",modelValue:h.content,"onUpdate:modelValue":$=>h.content=$,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])])]))),256))])]),_:1})]),_:1}),r(u(C),{value:"3"},{default:c(()=>[r(u(T),null,{default:c(()=>[f("FAQ")]),_:1}),r(u(k),null,{default:c(()=>[m("ul",null,[(i(!0),g(K,null,z(l.faq,(h,w)=>(i(),g("li",null,[f(F(w)+": ",1),r(B,{rows:"3",modelValue:l.faq[w],"onUpdate:modelValue":$=>l.faq[w]=$,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]))),256))])]),_:1})]),_:1}),r(u(C),{value:"4"},{default:c(()=>[r(u(T),null,{default:c(()=>[f("Footer")]),_:1}),r(u(k),null,{default:c(()=>[m("ul",null,[m("li",null,[f(" Call to action: "),r(I,{modelValue:l.footer.callToAction,"onUpdate:modelValue":P[2]||(P[2]=h=>l.footer.callToAction=h),autocomplete:"off"},null,8,["modelValue"])]),m("li",null,[f(" Copyright: "),r(I,{modelValue:l.footer.copyright,"onUpdate:modelValue":P[3]||(P[3]=h=>l.footer.copyright=h),autocomplete:"off"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1})])]),_:1})),u(p).loading?_("",!0):(i(),g("div",Ne,[r(W,{label:"Cancel",severity:"secondary",onClick:s}),r(W,{label:"Save",onClick:v,loading:S.value},null,8,["loading"])])),r(M,null,{default:c(()=>[N(m("div",Ee,je,512),[[q,u(p).loading]])]),_:1})])}}};export{et as default};
