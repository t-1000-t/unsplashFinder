(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={photocard:"PhotoCard_photocard__17R2x",fullscreenbutton:"PhotoCard_fullscreenbutton__2evET",stats:"PhotoCard_stats__1KyZh",statsitem:"PhotoCard_statsitem__2ntLJ"}},,,function(e,t,a){e.exports={overlay:"Modal_overlay__hI4mN",modal:"Modal_modal__3KEMj"}},function(e,t,a){e.exports={picturLoad:"Loader_picturLoad__2A8a3",bgcolorWrapper:"Loader_bgcolorWrapper__2Z8_a"}},function(e,t,a){e.exports={btnWrap:"SearchForm_btnWrap__UTXek",button:"SearchForm_button__2R1FR"}},,,function(e,t,a){},function(e,t,a){e.exports={gallery:"Gallery_gallery__2i2YX"}},function(e,t,a){e.exports=a.p+"static/media/loading.8fdc7be1.gif"},function(e,t,a){e.exports={searchform:"Search_searchform__urJdw"}},function(e,t,a){e.exports=a(27)},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(16),a(14)),i=a(3),s=a(4),u=a(6),m=a(5),d=a(7),h=a(1),p=a.n(h),f=a(17),b=a.n(f),g=a(8),y=a.n(g),v=a(11),E=a.n(v),_=document.querySelector("#modal-root"),O=[E.a.modal],j=[E.a.overlay],N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).modalRef=Object(n.createRef)(),a.handleKey=function(e){"Escape"===e.code&&a.props.onClose()},a.handleMouseClick=function(e){console.log(e.target),console.log(a.modalRef),e.target&&a.modalRef.current!==e.target||a.props.onClose()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.largeImageURL;return Object(o.createPortal)(r.a.createElement("div",{className:j,ref:this.modalRef,onClick:this.handleMouseClick,role:"presentation"},r.a.createElement("div",{className:O},r.a.createElement("img",{src:a,alt:"img",id:t}))),_)}}]),t}(n.Component),w=[y.a.photocard],k=[y.a.stats],C=[y.a.statsitem],L=[y.a.fullscreenbutton],S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).static={},a.state={isOpen:!1},a.handleOnModal=function(){var e=a.state.isOpen;a.setState({isOpen:!e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.webformatURL,n=e.likes,o=e.views,c=e.comments,l=e.downloads,i=e.largeImageURL,s=this.state.isOpen;return r.a.createElement("div",{key:t,className:w},r.a.createElement("img",{src:a,alt:"img"}),r.a.createElement("div",{className:k},r.a.createElement("p",{className:C},r.a.createElement("i",{className:"material-icons"},"thumb_up"),n),r.a.createElement("p",{className:C},r.a.createElement("i",{className:"material-icons"},"visibility"),o),r.a.createElement("p",{className:C},r.a.createElement("i",{className:"material-icons"},"comment"),c),r.a.createElement("p",{className:C},r.a.createElement("i",{className:"material-icons"},"cloud_download"),l)),r.a.createElement("button",{type:"button",className:L,onClick:this.handleOnModal},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")),s&&r.a.createElement(N,{id:t,largeImageURL:i,onClose:this.handleOnModal}))}}]),t}(n.Component),R=[b.a.gallery],q=function(e){var t=e.articles;return r.a.createElement("ul",{className:R},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(S,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}))})))};q.propType={PhotoCard:p.a.string.isRequired,articles:p.a.array.isRequired};var A=q,x={fetchArticles:function(e,t){return fetch("https://pixabay.com/api/?key=14147963-1172996dfbc4032cf6219bd1a&q=".concat(e,"&page=").concat(t,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){return e.hits}))}},U=a(18),I=a.n(U),M=a(12),P=a.n(M),T=[P.a.picturLoad],W=[P.a.bgcolorWrapper],F=document.querySelector("#loader-root"),K=function(){return Object(o.createPortal)(r.a.createElement("div",{className:W},r.a.createElement("div",{className:T},r.a.createElement("img",{src:I.a,alt:"load"}))),F)},J=a(10),B=document.querySelector("#error-root"),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).errorNotyf=function(){return c()(J.c.error("\u041e\u0448\u0438\u0431\u043a\u0430!",{position:J.c.POSITION.BOTTOM_LEFT}),B)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{autoClose:2500,transition:J.b})}}]),t}(n.Component),X=a(19),Z=[a.n(X).a.searchform],z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={query:""},a.searchRef=Object(n.createRef)(),a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.query,n=a.props,r=n.onSearch,o=n.onFetch;""===a.searchRef.current.value&&o(),r(t),a.setState({query:""})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("form",{className:Z,onSubmit:this.handleSubmit},r.a.createElement("input",{ref:this.searchRef,type:"text",onChange:this.handleChange,value:e,autoComplete:"off",placeholder:"Search images..."}))}}]),t}(n.Component),G=a(13),H=a.n(G),Y=[H.a.button],Q=[H.a.btnWrap],V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,articles:[],error:null,pageNum:1,query:""},a.onSearch=function(e){a.setState({query:e,articles:[],isLoading:!0,pageNum:1})},a.fetchArticles=function(){a.setState({isLoading:!0});var e=a.state,t=e.pageNum,n=e.query;x.fetchArticles(n,t).then((function(e){a.setState((function(t){return{articles:[].concat(Object(l.a)(t.articles),Object(l.a)(e)),pageNum:t.pageNum+1}}))})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1}),window.scrollTo({top:document.getElementById("root").scrollHeight,behavior:"smooth"})}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.query;t.query!==a&&this.fetchArticles()}},{key:"render",value:function(){var e=this.state,t=e.articles,a=e.isLoading,n=e.error;return r.a.createElement("div",null,r.a.createElement(z,{onSearch:this.onSearch,onFetch:this.fetchArticles}),n&&r.a.createElement(D,null),a&&r.a.createElement(K,null),r.a.createElement("div",null,t.length>0&&r.a.createElement(A,{articles:t})),r.a.createElement("div",{className:Q},t.length>0&&r.a.createElement("button",{className:Y,type:"button",onClick:this.fetchArticles},"Load more articles")))}}]),t}(n.Component),$=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V,null))};c.a.render(r.a.createElement($,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.1e26743b.chunk.js.map