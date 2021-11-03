_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"2HEe":function(e,t,n){var a,o,r;o=[t,e],void 0===(r="function"===typeof(a=function(e,t){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(e){try{delete window[e]}catch(t){window[e]=void 0}}function o(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=e,s=t.timeout||n.timeout,i=t.jsonpCallback||n.jsonpCallback,c=void 0;return new Promise((function(n,l){var u=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),p=i+"_"+u;window[u]=function(e){n({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),o(p),a(u)},r+=-1===r.indexOf("?")?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+r+i+"="+u),t.charset&&h.setAttribute("charset",t.charset),h.id=p,document.getElementsByTagName("head")[0].appendChild(h),c=setTimeout((function(){l(new Error("JSONP request to "+e+" timed out")),a(u),o(p),window[u]=function(){a(u)}}),s),h.onerror=function(){l(new Error("JSONP request to "+e+" failed")),a(u),o(p),c&&clearTimeout(c)}}))}})?a.apply(t,o):a)||(e.exports=r)},"2T9k":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-involved",function(){return n("4s6h")}])},"4s6h":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("YFqc"),s=n.n(r),i=n("JwBy"),c=n("PRYp"),l=n("+lMf"),u=n("nvq4"),p=n("mfve"),h=n("TDWf"),m=n("bIlT"),d=o.a.createElement;t.default=function(){return d(i.a,null,d(h.a,{title:"Volunteer",description:"What you know and do is interesting to us, come and share it with others. We are always looking for presenters."}),d(l.a,{title:"Get Involved"}),d("div",{className:"bg-navy-300",id:"be-social"},d("div",{className:"container mx-auto px-5 py-24 text-white text-center"},d("div",{className:"mb-10"},d("h2",{className:"h2 mb-10"},"Be Social"),d("p",null,"Interact with us on social media.")),d(m.a,{ulClassNames:"justify-center",liClassNames:"m-3",aClassNames:"text-black hover:text-white hover:filter-shadow-xl",size:"3x"}))),d("div",{className:"bg-sapphire bg-volunteer bg-no-repeat text-white",id:"volunteer"},d("div",{className:"container mx-auto px-5 pt-20 md:pt-40 pb-10"},d("div",{className:"text-center"},d("h2",{className:"h2 mb-10"},"Volunteer"),d("p",null,"What you know and do is interesting to us. Come and share it with others. We are always looking for presenters."))),d("div",{className:"container-1200 mx-auto px-5 pt-10 pb-20"},d(c.a,{title:"What can I do to help at the space?",initialOpen:!0},d("p",null,"We have a list of ongoing projects to improve the space on our get involved page. If there\u2019s a project you would like to participate in to make the hackerspace better, please contact the committee volunteers listed under that project to see what you can do.")),d(c.a,{title:"I would like to teach a class, what should I do?"},d("p",null,"You can reach out to us on Discord and let us know, or you can use the forms on the get involved page to submit your class idea so we can make it happen. We\u2019re always looking for more people who would like to teach classes or run events.")),d(c.a,{title:"Your website looks like a pile of garbage. Can I update it to make it better?"},d("p",null,"Our website source code is freely available on GitHub for anyone to fork, edit, and submit a pull request. If you\u2019d like to see something new or different on the website, feel free to submit changes for review by the volunteers who maintain it.")),d(c.a,{title:"What are the responsibilities of key holding volunteers?"},d("p",null,"Key holding volunteers will be responsible for opening the space to the public. Greet people as they come into the space or delegate that to another volunteer. Ensure that the space is being used responsibly. Know how to use any equipment in the space that is being used. Keep equipment locked otherwise. Politely enforce the 801 Labs code of conduct.")),d(c.a,{title:"I am an active volunteer, how can I get a key to the space?"},d("p",null,"As an active volunteer if you would like to take on the added responsibility of being a key holding volunteer, contact board@801labs.org.")))),d("div",{className:"bg-black text-white"},d("div",{className:"container-1400 mx-auto px-5 py-20"},d("h2",{className:"h2 text-center mb-20"},"Visit Us"),d("div",{className:"lg:flex lg:space-x-32 items-center"},d("div",{className:"lg:w-3/5"},d("p",{className:"mb-5"},"The entrance is on the north / back side of the building. To get there, walk through the tunnel off 200 South or use the gate in the Crown Burger parking lot."),d("p",null,"Street parking is plentiful in the area, however, lot parking is limited. Please use the back entrance as found on the diagram below.")),d("div",{className:"lg:w-2/5 pt-10 lg:pt-0"},d(u.a,null)))),d("div",{className:"bg-volunteer-events bg-no-repeat"},d("div",{className:"container mx-auto px-5 py-20"},d("h2",{className:"h2 text-center mb-20"},"Events"),d("div",{className:"mb-20"},d(p.a,null)),d("div",{className:"text-center"},d(s.a,{href:"/get-involved/events"},d("a",{className:"button"},"See All Events\xa0>")))))),d("div",{className:"bg-black bg-volunteer-donate bg-no-repeat gradient-v-black-navy-800 text-white"},d("div",{className:"container mx-auto px-5 pt-20 pb-40 text-center"},d("h2",{className:"h2 mb-10"},"Donate"),d("p",{className:"mb-10"},"Please visit our Donate page to learn more."),d(s.a,{href:"/donate"},d("a",{className:"button button--navy button--solid"},"Make a Donation\xa0>")))))}},DNLs:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a).a.createElement,r=function(e){var t=new Date(e.timestamp);return o("time",{dateTime:t.toISOString()},t.toLocaleDateString(e.locale,e.format))};r.defaultProps={format:{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"},locale:"en-us",offset:-216e5},t.a=r},PRYp:function(e,t,n){"use strict";var a=n("1OyB"),o=n("vuIU"),r=n("JX7q"),s=n("Ji7U"),i=n("md7G"),c=n("foSv"),l=n("rePB"),u=n("q1tI"),p=n.n(u),h=n("IP2g"),m=n("wHSu"),d=p.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var f=function(e){Object(s.a)(n,e);var t=v(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(r.a)(e),"state",{isOpen:!1}),Object(l.a)(Object(r.a)(e),"detailsElement",Object(u.createRef)()),Object(l.a)(Object(r.a)(e),"toggle",(function(){e.setState({isOpen:e.detailsElement.current.hasAttribute("open")})})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({isOpen:!!this.props.initialOpen}),this.props.initialOpen&&this.detailsElement.current.setAttribute("open",!0)}},{key:"render",value:function(){return d("details",{ref:this.detailsElement,className:"bg-white text-black mb-8",onToggle:this.toggle},d("summary",null,d("span",{className:"py-5 px-10 fluid-text-lg font-bold flex justify-between items-center"},this.props.title,d(h.a,{className:"ml-5",icon:this.state.isOpen?m.f:m.h}))),d("div",{className:"py-5 px-10 space-y-8"},this.props.children))}}]),n}(u.Component);t.a=f},mfve:function(e,t,n){"use strict";var a=n("1OyB"),o=n("vuIU"),r=n("JX7q"),s=n("Ji7U"),i=n("md7G"),c=n("foSv"),l=n("rePB"),u=n("q1tI"),p=n.n(u),h=n("o0o1"),m=n.n(h);function d(e,t,n,a,o,r,s){try{var i=e[r](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(a,o)}var v=n("2HEe"),f=n.n(v);function b(){var e;return e=m.a.mark((function e(){var t,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:4,e.abrupt("return",f()("https://api.meetup.com/801labs/events?page=".concat(t)).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})),(b=function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function s(e){d(r,a,o,s,i,"next",e)}function i(e){d(r,a,o,s,i,"throw",e)}s(void 0)}))}).apply(this,arguments)}var g=n("IP2g"),w=n("wHSu"),y=n("DNLs"),x=p.a.createElement,k=function(e){return x("span",{className:"bg-current"},"&ic;".repeat(e.characters))},N=p.a.createElement,O=function(e){var t=N(u.Fragment,null,N("div",{className:"fluid-text-sm font-bold text-gray-600 mb-1"},e.event?N(y.a,{timestamp:e.event.time,offset:e.event.utc_offset}):N(k,{characters:7})),N("h3",{className:"fluid-text-lg font-bold mb-1"},e.event?e.event.name:N(k,{characters:4})),N("p",{className:"mb-1"},e.event?e.event.group.name:N(k,{characters:2})),N("div",{className:"fluid-text-sm text-gray-600 mb-4"},N(g.a,{className:"text-gray-500 mr-2",icon:e.event?e.event.is_online_event?w.k:w.e:w.i,spin:!e.event}),e.event?e.event.is_online_event?"Online Event":e.event.venue.name:N(k,{characters:4})),N("div",{className:"flex justify-between items-center fluid-text-sm"},N("div",{className:"text-gray-600"},e.event?"".concat(e.event.yes_rsvp_count," ").concat(1===e.event.yes_rsvp_count?"attendee":"attendees"):N(k,{characters:4})),N("span",{className:"py-2 px-4 rounded-md border border-teal-600 group-focus:border-teal-800 text-teal-600 group-focus:text-white group-hover:text-white group-focus:bg-teal-600 group-hover:bg-teal-600"},e.event?"Attend":N(k,{characters:2}))));return e.event?N("a",{target:"_blank",rel:"noopener",href:e.event.link,className:"group block bg-white text-black rounded px-12 py-8 hover:shadow-2xl focus:shadow-2xl"},t):N("div",{className:"group block bg-white text-black rounded px-12 py-8 hover:shadow-2xl focus:shadow-2xl"},t)},j=p.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var _=function(e){Object(s.a)(n,e);var t=E(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(r.a)(e),"state",{events:null}),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){return b.apply(this,arguments)})(this.props.limit).then((function(t){e.setState({events:"data"in t?t.data:[]})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=null!==(e=this.state.events)&&void 0!==e?e:new Array(this.props.limit).fill(null);return j("div",{className:"grid md:grid-cols-2 xl:grid-cols-4 gap-5"},t.map((function(e,t){return j(O,{key:t,event:e})})))}}]),n}(u.Component);Object(l.a)(_,"defaultProps",{limit:4});t.a=_}},[["2T9k",0,2,4,3,1,5,7]]]);