_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[60],{"+H8D":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o);function u(n){var t=n.node,e=void 0===t?{x:0,y:0,r:15}:t;return a.a.createElement("circle",{cx:e.x,cy:e.y,r:e.r||15,fill:"#21D4FD"})}u.propTypes={node:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired,r:i.a.number})}},"1rRp":function(n,t,e){"use strict";var r=Math.PI,i=2*r,o=i-1e-6;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new a}a.prototype=u.prototype={constructor:a,moveTo:function(n,t){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,t){this._+="L"+(this._x1=+n)+","+(this._y1=+t)},quadraticCurveTo:function(n,t,e,r){this._+="Q"+ +n+","+ +t+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(n,t,e,r,i,o){this._+="C"+ +n+","+ +t+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(n,t,e,i,o){n=+n,t=+t,e=+e,i=+i,o=+o;var a=this._x1,u=this._y1,c=e-n,s=i-t,f=a-n,l=u-t,d=f*f+l*l;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=n)+","+(this._y1=t);else if(d>1e-6)if(Math.abs(l*c-s*f)>1e-6&&o){var h=e-a,p=i-u,m=c*c+s*s,y=h*h+p*p,v=Math.sqrt(m),g=Math.sqrt(d),x=o*Math.tan((r-Math.acos((m+d-y)/(2*v*g)))/2),b=x/g,O=x/v;Math.abs(b-1)>1e-6&&(this._+="L"+(n+b*f)+","+(t+b*l)),this._+="A"+o+","+o+",0,0,"+ +(l*h>f*p)+","+(this._x1=n+O*c)+","+(this._y1=t+O*s)}else this._+="L"+(this._x1=n)+","+(this._y1=t);else;},arc:function(n,t,e,a,u,c){n=+n,t=+t,c=!!c;var s=(e=+e)*Math.cos(a),f=e*Math.sin(a),l=n+s,d=t+f,h=1^c,p=c?a-u:u-a;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+d:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-d)>1e-6)&&(this._+="L"+l+","+d),e&&(p<0&&(p=p%i+i),p>o?this._+="A"+e+","+e+",0,1,"+h+","+(n-s)+","+(t-f)+"A"+e+","+e+",0,1,"+h+","+(this._x1=l)+","+(this._y1=d):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=r)+","+h+","+(this._x1=n+e*Math.cos(u))+","+(this._y1=t+e*Math.sin(u))))},rect:function(n,t,e,r){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},t.a=u},"8XUA":function(n,t,e){"use strict";e.d(t,"a",(function(){return p})),e.d(t,"c",(function(){return m})),e.d(t,"b",(function(){return y}));var r=e("1rRp"),i=e("w4to"),o=e("Df+F"),a=e("ZzoX"),u=e("oT78");function c(n){return n.source}function s(n){return n.target}function f(n){var t=c,e=s,u=a.a,f=a.b,l=null;function d(){var o,a=i.a.call(arguments),c=t.apply(this,a),s=e.apply(this,a);if(l||(l=o=Object(r.a)()),n(l,+u.apply(this,(a[0]=c,a)),+f.apply(this,a),+u.apply(this,(a[0]=s,a)),+f.apply(this,a)),o)return l=null,o+""||null}return d.source=function(n){return arguments.length?(t=n,d):t},d.target=function(n){return arguments.length?(e=n,d):e},d.x=function(n){return arguments.length?(u="function"===typeof n?n:Object(o.a)(+n),d):u},d.y=function(n){return arguments.length?(f="function"===typeof n?n:Object(o.a)(+n),d):f},d.context=function(n){return arguments.length?(l=null==n?null:n,d):l},d}function l(n,t,e,r,i){n.moveTo(t,e),n.bezierCurveTo(t=(t+r)/2,e,t,i,r,i)}function d(n,t,e,r,i){n.moveTo(t,e),n.bezierCurveTo(t,e=(e+i)/2,r,e,r,i)}function h(n,t,e,r,i){var o=Object(u.a)(t,e),a=Object(u.a)(t,e=(e+i)/2),c=Object(u.a)(r,e),s=Object(u.a)(r,i);n.moveTo(o[0],o[1]),n.bezierCurveTo(a[0],a[1],c[0],c[1],s[0],s[1])}function p(){return f(l)}function m(){return f(d)}function y(){var n=f(h);return n.angle=n.x,delete n.x,n.radius=n.y,delete n.y,n}},"Cf/J":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function c(n){var t=n.children,e=n.id,r=n.from,i=n.to,o=n.x1,c=n.y1,s=n.x2,f=n.y2,l=n.fromOffset,d=void 0===l?"0%":l,h=n.fromOpacity,p=void 0===h?1:h,m=n.toOffset,y=void 0===m?"100%":m,v=n.toOpacity,g=void 0===v?1:v,x=n.rotate,b=n.transform,O=n.vertical,_=void 0===O||O,k=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),E=o,w=s,N=c,T=f;return!_||E||w||N||T||(E="0",w="0",N="0",T="1"),a.a.createElement("defs",null,a.a.createElement("linearGradient",u({id:e,x1:E,y1:N,x2:w,y2:T,gradientTransform:x?"rotate("+x+")":b},k),!!t&&t,!t&&a.a.createElement("stop",{offset:d,stopColor:r,stopOpacity:p}),!t&&a.a.createElement("stop",{offset:y,stopColor:i,stopOpacity:g})))}c.propTypes={id:i.a.string.isRequired,from:i.a.string,to:i.a.string,x1:i.a.oneOfType([i.a.string,i.a.number]),x2:i.a.oneOfType([i.a.string,i.a.number]),y1:i.a.oneOfType([i.a.string,i.a.number]),y2:i.a.oneOfType([i.a.string,i.a.number]),fromOffset:i.a.oneOfType([i.a.string,i.a.number]),fromOpacity:i.a.oneOfType([i.a.string,i.a.number]),toOffset:i.a.oneOfType([i.a.string,i.a.number]),toOpacity:i.a.oneOfType([i.a.string,i.a.number]),rotate:i.a.oneOfType([i.a.string,i.a.number]),transform:i.a.string,children:i.a.node,vertical:i.a.bool}},"Df+F":function(n,t,e){"use strict";t.a=function(n){return function(){return n}}},Dhk8:function(n,t,e){var r=e("Syyo"),i=e("KCLV"),o=e("kHoZ"),a=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?i(n):o(n)}},E5FE:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o),u={source:{x:0,y:0},target:{x:0,y:0}};function c(n){var t=n.link,e=void 0===t?u:t;return a.a.createElement("line",{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6})}c.propTypes={link:i.a.shape({source:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired}).isRequired,target:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired}).isRequired})}},ENE1:function(n,t,e){var r=e("IBsm");n.exports=function(){return r.Date.now()}},EQf3:function(n){n.exports=JSON.parse('{"name":"@visx/demo-dendrogram","description":"Standalone visx dendrogram demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/gradient":"latest","@visx/group":"latest","@visx/hierarchy":"latest","@visx/responsive":"latest","@visx/shape":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","hierarchy","dendrogram"]}')},IBsm:function(n,t,e){var r=e("e93E"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();n.exports=o},IESj:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dendrograms",function(){return e("QGQj")}])},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o),u=e("O94r"),c=e.n(u);function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.top,e=void 0===t?0:t,r=n.left,i=void 0===r?0:r,o=n.transform,u=n.className,f=n.children,l=n.innerRef,d=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",s({ref:l,className:c()("visx-group",u),transform:o||"translate("+i+", "+e+")"},d),f)}f.propTypes={top:i.a.number,left:i.a.number,transform:i.a.string,className:i.a.string,children:i.a.node,innerRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object])}},KCLV:function(n,t,e){var r=e("Syyo"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;n.exports=function(n){var t=o.call(n,u),e=n[u];try{n[u]=void 0;var r=!0}catch(c){}var i=a.call(n);return r&&(t?n[u]=e:delete n[u]),i}},"L/jp":function(n,t,e){"use strict";e.d(t,"b",(function(){return f})),e.d(t,"a",(function(){return l}));var r=e("ERkP"),i=e.n(r),o=e("O94r"),a=e.n(o),u=e("8XUA"),c=e("kBt3");function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.source,e=n.target,r=n.x,i=n.y;return function(n){var o=Object(u.c)();return o.x(r),o.y(i),o.source(t),o.target(e),o(n)}}function l(n){var t=n.className,e=n.children,r=n.data,o=n.innerRef,u=n.path,l=n.x,d=void 0===l?c.e:l,h=n.y,p=void 0===h?c.f:h,m=n.source,y=void 0===m?c.c:m,v=n.target,g=void 0===v?c.d:v,x=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["className","children","data","innerRef","path","x","y","source","target"]),b=u||f({source:y,target:g,x:d,y:p});return e?i.a.createElement(i.a.Fragment,null,e({path:b})):i.a.createElement("path",s({ref:o,className:a()("visx-link visx-link-vertical-diagonal",t),d:b(r)||""},x))}},"M7G+":function(n,t,e){"use strict";function r(n,t){return n.parent===t.parent?1:2}function i(n,t){return n+t.x}function o(n,t){return Math.max(n,t.y)}t.a=function(){var n=r,t=1,e=1,a=!1;function u(r){var u,c=0;r.eachAfter((function(t){var e=t.children;e?(t.x=function(n){return n.reduce(i,0)/n.length}(e),t.y=function(n){return 1+n.reduce(o,0)}(e)):(t.x=u?c+=n(t,u):0,t.y=0,u=t)}));var s=function(n){for(var t;t=n.children;)n=t[0];return n}(r),f=function(n){for(var t;t=n.children;)n=t[t.length-1];return n}(r),l=s.x-n(s,f)/2,d=f.x+n(f,s)/2;return r.eachAfter(a?function(n){n.x=(n.x-r.x)*t,n.y=(r.y-n.y)*e}:function(n){n.x=(n.x-l)/(d-l)*t,n.y=(1-(r.y?n.y/r.y:1))*e})}return u.separation=function(t){return arguments.length?(n=t,u):n},u.size=function(n){return arguments.length?(a=!1,t=+n[0],e=+n[1],u):a?null:[t,e]},u.nodeSize=function(n){return arguments.length?(a=!0,t=+n[0],e=+n[1],u):a?[t,e]:null},u}},QGQj:function(n,t,e){"use strict";e.r(t);var r=e("ERkP"),i=e.n(r),o=e("6wy5"),a=e("kdqw"),u=e("EQf3"),c=i.a.createElement;t.default=function(){return c(o.a,{events:!0,title:"Dendrograms",codeSandboxDirectoryName:"visx-dendrogram",component:a.b,margin:{top:80,left:10,right:10,bottom:80},packageJson:u},"import React, { useMemo } from 'react';\nimport { Group } from '@visx/group';\nimport { Cluster, hierarchy } from '@visx/hierarchy';\nimport { HierarchyPointNode, HierarchyPointLink } from '@visx/hierarchy/lib/types';\nimport { LinkVertical } from '@visx/shape';\nimport { LinearGradient } from '@visx/gradient';\n\nconst citrus = '#ddf163';\nconst white = '#ffffff';\nexport const green = '#79d259';\nconst aqua = '#37ac8c';\nconst merlinsbeard = '#f7f7f3';\nexport const background = '#306c90';\n\ninterface NodeShape {\n  name: string;\n  children?: NodeShape[];\n}\n\nconst clusterData: NodeShape = {\n  name: '$',\n  children: [\n    {\n      name: 'A',\n      children: [\n        { name: 'A1' },\n        { name: 'A2' },\n        {\n          name: 'C',\n          children: [\n            {\n              name: 'C1',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      name: 'B',\n      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],\n    },\n    {\n      name: 'X',\n      children: [\n        {\n          name: 'Z',\n        },\n      ],\n    },\n  ],\n};\n\nfunction Node({ node }: { node: HierarchyPointNode<NodeShape> }) {\n  const isRoot = node.depth === 0;\n  const isParent = !!node.children;\n\n  if (isRoot) return <RootNode node={node} />;\n\n  return (\n    <Group top={node.y} left={node.x}>\n      {node.depth !== 0 && (\n        <circle\n          r={12}\n          fill={background}\n          stroke={isParent ? white : citrus}\n          onClick={() => {\n            alert(`clicked: ${JSON.stringify(node.data.name)}`);\n          }}\n        />\n      )}\n      <text\n        dy=\".33em\"\n        fontSize={9}\n        fontFamily=\"Arial\"\n        textAnchor=\"middle\"\n        style={{ pointerEvents: 'none' }}\n        fill={isParent ? white : citrus}\n      >\n        {node.data.name}\n      </text>\n    </Group>\n  );\n}\n\nfunction RootNode({ node }: { node: HierarchyPointNode<NodeShape> }) {\n  const width = 40;\n  const height = 20;\n  const centerX = -width / 2;\n  const centerY = -height / 2;\n\n  return (\n    <Group top={node.y} left={node.x}>\n      <rect width={width} height={height} y={centerY} x={centerX} fill=\"url('#top')\" />\n      <text\n        dy=\".33em\"\n        fontSize={9}\n        fontFamily=\"Arial\"\n        textAnchor=\"middle\"\n        style={{ pointerEvents: 'none' }}\n        fill={background}\n      >\n        {node.data.name}\n      </text>\n    </Group>\n  );\n}\n\nconst defaultMargin = { top: 40, left: 0, right: 0, bottom: 40 };\n\nexport type DendrogramProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function Example({ width, height, margin = defaultMargin }: DendrogramProps) {\n  const data = useMemo(() => hierarchy<NodeShape>(clusterData), []);\n  const xMax = width - margin.left - margin.right;\n  const yMax = height - margin.top - margin.bottom;\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <LinearGradient id=\"top\" from={green} to={aqua} />\n      <rect width={width} height={height} rx={14} fill={background} />\n      <Cluster<NodeShape> root={data} size={[xMax, yMax]}>\n        {cluster => (\n          <Group top={margin.top} left={margin.left}>\n            {cluster.links().map((link, i) => (\n              <LinkVertical<HierarchyPointLink<NodeShape>, HierarchyPointNode<NodeShape>>\n                key={`cluster-link-${i}`}\n                data={link}\n                stroke={merlinsbeard}\n                strokeWidth=\"1\"\n                strokeOpacity={0.2}\n                fill=\"none\"\n              />\n            ))}\n            {cluster.descendants().map((node, i) => (\n              <Node key={`cluster-node-${i}`} node={node} />\n            ))}\n          </Group>\n        )}\n      </Cluster>\n    </svg>\n  );\n}\n")}},RNvQ:function(n,t,e){var r=e("tQYX"),i=e("ENE1"),o=e("nvU9"),a=Math.max,u=Math.min;n.exports=function(n,t,e){var c,s,f,l,d,h,p=0,m=!1,y=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=c,r=s;return c=s=void 0,p=t,l=n.apply(r,e)}function x(n){return p=n,d=setTimeout(O,t),m?g(n):l}function b(n){var e=n-h;return void 0===h||e>=t||e<0||y&&n-p>=f}function O(){var n=i();if(b(n))return _(n);d=setTimeout(O,function(n){var e=t-(n-h);return y?u(e,f-(n-p)):e}(n))}function _(n){return d=void 0,v&&c?g(n):(c=s=void 0,l)}function k(){var n=i(),e=b(n);if(c=arguments,s=this,h=n,e){if(void 0===d)return x(h);if(y)return clearTimeout(d),d=setTimeout(O,t),g(h)}return void 0===d&&(d=setTimeout(O,t)),l}return t=o(t)||0,r(e)&&(m=!!e.leading,f=(y="maxWait"in e)?a(o(e.maxWait)||0,t):f,v="trailing"in e?!!e.trailing:v),k.cancel=function(){void 0!==d&&clearTimeout(d),p=0,c=h=s=d=void 0},k.flush=function(){return void 0===d?l:_(i())},k}},Syyo:function(n,t,e){var r=e("IBsm").Symbol;n.exports=r},ZzoX:function(n,t,e){"use strict";function r(n){return n[0]}function i(n){return n[1]}e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}))},a88S:function(n,t,e){var r=e("Dhk8"),i=e("tLQN");n.exports=function(n){return"symbol"==typeof n||i(n)&&"[object Symbol]"==r(n)}},e93E:function(n,t,e){(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.exports=e}).call(this,e("fRV1"))},fRV1:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}n.exports=e},kBt3:function(n,t,e){"use strict";function r(n){return"number"===typeof(null==n?void 0:n.x)?null==n?void 0:n.x:0}function i(n){return"number"===typeof(null==n?void 0:n.y)?null==n?void 0:n.y:0}function o(n){return null==n?void 0:n.source}function a(n){return null==n?void 0:n.target}function u(n){return null==n?void 0:n[0]}function c(n){return null==n?void 0:n[1]}e.d(t,"e",(function(){return r})),e.d(t,"f",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return c}))},kHoZ:function(n,t){var e=Object.prototype.toString;n.exports=function(n){return e.call(n)}},kdqw:function(n,t,e){"use strict";e.d(t,"c",(function(){return g})),e.d(t,"a",(function(){return x})),e.d(t,"b",(function(){return E}));var r=e("ERkP"),i=e.n(r),o=e("JmwF"),a=e("tshL"),u=e("aWzz"),c=e.n(u),s=e("O94r"),f=e.n(s),l=e("M7G+"),d=e("E5FE"),h=e("+H8D");function p(n){var t=n.top,e=n.left,r=n.className,a=n.root,u=n.size,c=n.nodeSize,s=n.separation,p=n.children,m=n.linkComponent,y=void 0===m?d.a:m,v=n.nodeComponent,g=void 0===v?h.a:v,x=Object(l.a)();u&&x.size(u),void 0!==c&&x.nodeSize(c),s&&x.separation(s);var b=x(a);return p?i.a.createElement(i.a.Fragment,null,p(b)):i.a.createElement(o.a,{top:t,left:e,className:f()("visx-cluster",r)},y&&b.links().map((function(n,t){return i.a.createElement(o.a,{key:"cluster-link-"+t},i.a.createElement(y,{link:n}))})),g&&b.descendants().map((function(n,t){return i.a.createElement(o.a,{key:"cluster-node-"+t},i.a.createElement(g,{node:n}))})))}p.propTypes={children:c.a.func,top:c.a.number,left:c.a.number,className:c.a.string,separation:c.a.func};var m=e("L/jp"),y=e("Cf/J"),v=i.a.createElement,g="#79d259",x="#306c90",b={name:"$",children:[{name:"A",children:[{name:"A1"},{name:"A2"},{name:"C",children:[{name:"C1"}]}]},{name:"B",children:[{name:"B1"},{name:"B2"},{name:"B3"}]},{name:"X",children:[{name:"Z"}]}]};function O(n){var t=n.node,e=0===t.depth,r=!!t.children;return e?v(_,{node:t}):v(o.a,{top:t.y,left:t.x},0!==t.depth&&v("circle",{r:12,fill:x,stroke:r?"#ffffff":"#ddf163",onClick:function(){alert("clicked: ".concat(JSON.stringify(t.data.name)))}}),v("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",style:{pointerEvents:"none"},fill:r?"#ffffff":"#ddf163"},t.data.name))}function _(n){var t=n.node;return v(o.a,{top:t.y,left:t.x},v("rect",{width:40,height:20,y:-10,x:-20,fill:"url('#top')"}),v("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",style:{pointerEvents:"none"},fill:x},t.data.name))}var k={top:40,left:0,right:0,bottom:40};function E(n){var t=n.width,e=n.height,i=n.margin,u=void 0===i?k:i,c=Object(r.useMemo)((function(){return Object(a.c)(b)}),[]),s=t-u.left-u.right,f=e-u.top-u.bottom;return t<10?null:v("svg",{width:t,height:e},v(y.a,{id:"top",from:g,to:"#37ac8c"}),v("rect",{width:t,height:e,rx:14,fill:x}),v(p,{root:c,size:[s,f]},(function(n){return v(o.a,{top:u.top,left:u.left},n.links().map((function(n,t){return v(m.a,{key:"cluster-link-".concat(t),data:n,stroke:"#f7f7f3",strokeWidth:"1",strokeOpacity:.2,fill:"none"})})),n.descendants().map((function(n,t){return v(O,{key:"cluster-node-".concat(t),node:n})})))})))}try{E.displayName="Example",E.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-dendrogram/Example.tsx#Example"]={docgenInfo:E.__docgenInfo,name:"Example",path:"src/sandboxes/visx-dendrogram/Example.tsx#Example"})}catch(w){}},nvU9:function(n,t,e){var r=e("tQYX"),i=e("a88S"),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=u.test(n);return e||c.test(n)?s(n.slice(2),e?2:8):a.test(n)?NaN:+n}},oT78:function(n,t,e){"use strict";t.a=function(n,t){return[(t=+t)*Math.cos(n-=Math.PI/2),t*Math.sin(n)]}},tLQN:function(n,t){n.exports=function(n){return null!=n&&"object"==typeof n}},tQYX:function(n,t){n.exports=function(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}},tshL:function(n,t,e){"use strict";function r(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return c}));function i(n,t){var e,r,i,a,s,f=new c(n),l=+n.value&&(f.value=n.value),d=[f];for(null==t&&(t=o);e=d.pop();)if(l&&(e.value=+e.data.value),(i=t(e.data))&&(s=i.length))for(e.children=new Array(s),a=s-1;a>=0;--a)d.push(r=e.children[a]=new c(i[a])),r.parent=e,r.depth=e.depth+1;return f.eachBefore(u)}function o(n){return n.children}function a(n){n.data=n.data.data}function u(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function c(n){this.data=n,this.depth=this.height=0,this.parent=null}c.prototype=i.prototype={constructor:c,count:function(){return this.eachAfter(r)},each:function(n){var t,e,r,i,o=this,a=[o];do{for(t=a.reverse(),a=[];o=t.pop();)if(n(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(n){for(var t,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),t=i.children)for(e=0,r=t.length;e<r;++e)o.push(t[e]);for(;i=a.pop();)n(i);return this},eachBefore:function(n){for(var t,e,r=this,i=[r];r=i.pop();)if(n(r),t=r.children)for(e=t.length-1;e>=0;--e)i.push(t[e]);return this},sum:function(n){return this.eachAfter((function(t){for(var e=+n(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)e+=r[i].value;t.value=e}))},sort:function(n){return this.eachBefore((function(t){t.children&&t.children.sort(n)}))},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),i=null;n=e.pop(),t=r.pop();for(;n===t;)i=n,n=e.pop(),t=r.pop();return i}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var i=r.length;n!==e;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){var n=[];return this.each((function(t){n.push(t)})),n},leaves:function(){var n=[];return this.eachBefore((function(t){t.children||n.push(t)})),n},links:function(){var n=this,t=[];return n.each((function(e){e!==n&&t.push({source:e.parent,target:e})})),t},copy:function(){return i(this).eachBefore(a)}}},w4to:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=Array.prototype.slice}},[["IESj",0,2,1,3,6]]]);