_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"67po":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("uKU/"),a=e("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(n){return i(Object(r.a)(),n)}},"9Jhr":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i),c=e("1Wmu"),s=e("dGDr");function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function l(n){var t=n.x,e=n.x0,r=n.x1,i=n.y,l=n.y1,h=n.y0,f=n.yScale,d=n.data,p=void 0===d?[]:d,g=n.defined,m=void 0===g?function(){return!0}:g,b=n.className,x=n.curve,y=n.innerRef,v=n.children,k=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),O=Object(s.b)({x:t,x0:e,x1:r,defined:m,curve:x});return null==h?O.y0(f.range()[0]):Object(c.a)(O.y0,h),i&&!l&&Object(c.a)(O.y1,i),l&&!i&&Object(c.a)(O.y1,l),v?a.a.createElement(a.a.Fragment,null,v({path:O})):a.a.createElement("path",u({ref:y,className:o()("visx-area-closed",b),d:O(p)||""},k))}},"Cf/J":function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function s(n){var t=n.children,e=n.id,r=n.from,a=n.to,i=n.x1,s=n.y1,u=n.x2,l=n.y2,h=n.fromOffset,f=void 0===h?"0%":h,d=n.fromOpacity,p=void 0===d?1:d,g=n.toOffset,m=void 0===g?"100%":g,b=n.toOpacity,x=void 0===b?1:b,y=n.rotate,v=n.transform,k=n.vertical,O=void 0===k||k,M=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),_=i,S=u,w=s,B=l;return!O||_||S||w||B||(_="0",S="0",w="0",B="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",c({id:e,x1:_,y1:w,x2:S,y2:B,gradientTransform:y?"rotate("+y+")":v},M),!!t&&t,!t&&o.a.createElement("stop",{offset:f,stopColor:r,stopOpacity:p}),!t&&o.a.createElement("stop",{offset:m,stopColor:a,stopOpacity:x})))}s.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},EbDF:function(n,t,e){"use strict";function r(n){return n<0?-1:1}function a(n,t,e){var a=n._x1-n._x0,i=t-n._x1,o=(n._y1-n._y0)/(a||i<0&&-0),c=(e-n._y1)/(i||a<0&&-0),s=(o*i+c*a)/(a+i);return(r(o)+r(c))*Math.min(Math.abs(o),Math.abs(c),.5*Math.abs(s))||0}function i(n,t){var e=n._x1-n._x0;return e?(3*(n._y1-n._y0)/e-t)/2:t}function o(n,t,e){var r=n._x0,a=n._y0,i=n._x1,o=n._y1,c=(i-r)/3;n._context.bezierCurveTo(r+c,a+c*t,i-c,o-c*e,i,o)}function c(n){this._context=n}function s(n){this._context=new u(n)}function u(n){this._context=n}function l(n){return new c(n)}function h(n){return new s(n)}e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return h})),c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){var e=NaN;if(t=+t,(n=+n)!==this._x1||t!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;break;case 2:this._point=3,o(this,i(this,e=a(this,n,t)),e);break;default:o(this,this._t0,e=a(this,n,t))}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t,this._t0=e}}},(s.prototype=Object.create(c.prototype)).point=function(n,t){c.prototype.point.call(this,t,n)},u.prototype={moveTo:function(n,t){this._context.moveTo(t,n)},closePath:function(){this._context.closePath()},lineTo:function(n,t){this._context.lineTo(t,n)},bezierCurveTo:function(n,t,e,r,a,i){this._context.bezierCurveTo(t,n,r,e,i,a)}}},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i),c=e("O94r"),s=e.n(c);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function l(n){var t=n.top,e=void 0===t?0:t,r=n.left,a=void 0===r?0:r,i=n.transform,c=n.className,l=n.children,h=n.innerRef,f=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["top","left","transform","className","children","innerRef"]);return o.a.createElement("g",u({ref:h,className:s()("visx-group",c),transform:i||"translate("+a+", "+e+")"},f),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},OfPM:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brush",function(){return e("pRTK")}])},"VB+g":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("rkTo"),a=e("ZQHj");function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var o={x:0,y:0};function c(n,t){if(!n||!t)return null;var e=function(n){if(!n)return i({},o);if(Object(a.g)(n))return n.changedTouches.length>0?{x:n.changedTouches[0].clientX,y:n.changedTouches[0].clientY}:i({},o);if(Object(a.c)(n))return{x:n.clientX,y:n.clientY};var t=null==n?void 0:n.target,e=t&&"getBoundingClientRect"in t?t.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:i({},o)}(t),c=Object(a.d)(n)?n.ownerSVGElement:n,s=Object(a.e)(c)?c.getScreenCTM():null;if(Object(a.f)(c)&&s){var u=c.createSVGPoint();return u.x=e.x,u.y=e.y,u=u.matrixTransform(s.inverse()),new r.a({x:u.x,y:u.y})}var l=n.getBoundingClientRect();return new r.a({x:e.x-l.left-n.clientLeft,y:e.y-l.top-n.clientTop})}},VFFr:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i);function c(n){var t=n.id,e=n.width,r=n.height,a=n.children;return o.a.createElement("defs",null,o.a.createElement("pattern",{id:t,width:e,height:r,patternUnits:"userSpaceOnUse"},a))}c.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,children:a.a.node.isRequired}},ZQHj:function(n,t,e){"use strict";function r(n){return!!n&&n instanceof Element}function a(n){return!!n&&(n instanceof SVGElement||"ownerSVGElement"in n)}function i(n){return!!n&&"createSVGPoint"in n}function o(n){return!!n&&"getScreenCTM"in n}function c(n){return!!n&&"changedTouches"in n}function s(n){return!!n&&"clientX"in n}function u(n){return!!n&&(n instanceof Event||"nativeEvent"in n&&n.nativeEvent instanceof Event)}e.d(t,"a",(function(){return r})),e.d(t,"d",(function(){return a})),e.d(t,"f",(function(){return i})),e.d(t,"e",(function(){return o})),e.d(t,"g",(function(){return c})),e.d(t,"c",(function(){return s})),e.d(t,"b",(function(){return u}))},Zbhd:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("PB0s"),a=e("XAd9"),i=e("Cyas"),o=e("VBI3");function c(n,t,e,c){var s,u=Object(r.c)(n,t,e);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(t));return null!=c.precision||isNaN(s=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(n)))}(u,l))||(c.precision=s),Object(o.b)(c,l);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(s=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(i.a)(t)-Object(i.a)(n))+1}(u,Math.max(Math.abs(n),Math.abs(t))))||(c.precision=s-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(s=function(n){return Math.max(0,-Object(i.a)(Math.abs(n)))}(u))||(c.precision=s-2*("%"===c.type))}return Object(o.a)(c)}},a49c:function(n,t,e){"use strict";e.d(t,"a",(function(){return g}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i),c=e("O94r"),s=e.n(c),u=e("VFFr"),l="horizontal",h="vertical",f="diagonal",d="diagonalRightToLeft";function p(n){var t=n.height;switch(n.orientation){case l:return"M 0,"+t/2+" l "+t+",0";case f:return"M 0,"+t+" l "+t+","+-t+" M "+-t/4+","+t/4+" l "+t/2+","+-t/2+"\n             M "+3/4*t+","+5/4*t+" l "+t/2+","+-t/2;case d:return"M 0,0 l "+t+","+t+"\n        M "+-t/4+","+3/4*t+" l "+t/2+","+t/2+"\n        M "+3/4*t+","+-t/4+" l "+t/2+","+t/2;case h:default:return"M "+t/2+", 0 l 0, "+t}}function g(n){var t=n.id,e=n.width,r=n.height,a=n.stroke,i=n.strokeWidth,c=n.strokeDasharray,l=n.strokeLinecap,h=void 0===l?"square":l,f=n.shapeRendering,d=void 0===f?"auto":f,g=n.orientation,m=void 0===g?["vertical"]:g,b=n.background,x=n.className,y=Array.isArray(m)?m:[m];return o.a.createElement(u.a,{id:t,width:e,height:r},!!b&&o.a.createElement("rect",{className:s()("visx-pattern-line-background"),width:e,height:r,fill:b}),y.map((function(n,e){return o.a.createElement("path",{key:"visx-"+t+"-line-"+n+"-"+e,className:s()("visx-pattern-line",x),d:p({orientation:n,height:r}),stroke:a,strokeWidth:i,strokeDasharray:c,strokeLinecap:h,shapeRendering:d})})))}g.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number]),orientation:a.a.array}},g2fB:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function s(n){var t=n.className,e=n.innerRef,r=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["className","innerRef"]);return a.a.createElement("rect",c({ref:e,className:o()("visx-bar",t)},r))}},jpI8:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("VB+g"),a=e("ZQHj");function i(n,t){if(Object(a.a)(n)&&t)return Object(r.a)(n,t);if(Object(a.b)(n)){var e=n,i=e.target;if(i)return Object(r.a)(i,e)}return null}},pRTK:function(n,t,e){"use strict";e.r(t);var r=e("ERkP"),a=e.n(r),i=e("6wy5"),o=e("Hn+V"),c=e("MrGM"),s=a.a.createElement;t.default=function(){return s(i.a,{component:o.c,title:"Brush",margin:{top:40,left:50,right:20,bottom:10},codeSandboxDirectoryName:"visx-brush",packageJson:c},"import React, { useRef, useState, useMemo } from 'react';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { Brush } from '@visx/brush';\nimport { Bounds } from '@visx/brush/lib/types';\nimport BaseBrush, { BaseBrushState, UpdateBrush } from '@visx/brush/lib/BaseBrush';\nimport { PatternLines } from '@visx/pattern';\nimport { LinearGradient } from '@visx/gradient';\nimport { max, extent } from 'd3-array';\n\nimport AreaChart from './AreaChart';\n\n// Initialize some variables\nconst stock = appleStock.slice(1000);\nconst brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };\nconst chartSeparation = 30;\nconst PATTERN_ID = 'brush_pattern';\nconst GRADIENT_ID = 'brush_gradient';\nexport const accentColor = '#f6acc8';\nexport const background = '#584153';\nexport const background2 = '#af8baf';\nconst selectedBrushStyle = {\n  fill: `url(#${PATTERN_ID})`,\n  stroke: 'white',\n};\n\n// accessors\nconst getDate = (d: AppleStock) => new Date(d.date);\nconst getStockValue = (d: AppleStock) => d.close;\n\nexport type BrushProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n  compact?: boolean;\n};\n\nfunction BrushChart({\n  compact = false,\n  width,\n  height,\n  margin = {\n    top: 20,\n    left: 50,\n    bottom: 20,\n    right: 20,\n  },\n}: BrushProps) {\n  const brushRef = useRef<BaseBrush | null>(null);\n  const [filteredStock, setFilteredStock] = useState(stock);\n\n  const onBrushChange = (domain: Bounds | null) => {\n    if (!domain) return;\n    const { x0, x1, y0, y1 } = domain;\n    const stockCopy = stock.filter(s => {\n      const x = getDate(s).getTime();\n      const y = getStockValue(s);\n      return x > x0 && x < x1 && y > y0 && y < y1;\n    });\n    setFilteredStock(stockCopy);\n  };\n\n  const innerHeight = height - margin.top - margin.bottom;\n  const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10;\n  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;\n  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;\n\n  // bounds\n  const xMax = Math.max(width - margin.left - margin.right, 0);\n  const yMax = Math.max(topChartHeight, 0);\n  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);\n  const yBrushMax = Math.max(bottomChartHeight - brushMargin.top - brushMargin.bottom, 0);\n\n  // scales\n  const dateScale = useMemo(\n    () =>\n      scaleTime<number>({\n        range: [0, xMax],\n        domain: extent(filteredStock, getDate) as [Date, Date],\n      }),\n    [xMax, filteredStock],\n  );\n  const stockScale = useMemo(\n    () =>\n      scaleLinear<number>({\n        range: [yMax, 0],\n        domain: [0, max(filteredStock, getStockValue) || 0],\n        nice: true,\n      }),\n    [yMax, filteredStock],\n  );\n  const brushDateScale = useMemo(\n    () =>\n      scaleTime<number>({\n        range: [0, xBrushMax],\n        domain: extent(stock, getDate) as [Date, Date],\n      }),\n    [xBrushMax],\n  );\n  const brushStockScale = useMemo(\n    () =>\n      scaleLinear({\n        range: [yBrushMax, 0],\n        domain: [0, max(stock, getStockValue) || 0],\n        nice: true,\n      }),\n    [yBrushMax],\n  );\n\n  const initialBrushPosition = useMemo(\n    () => ({\n      start: { x: brushDateScale(getDate(stock[50])) },\n      end: { x: brushDateScale(getDate(stock[100])) },\n    }),\n    [brushDateScale],\n  );\n\n  // event handlers\n  const handleClearClick = () => {\n    if (brushRef?.current) {\n      setFilteredStock(stock);\n      brushRef.current.reset();\n    }\n  };\n\n  const handleResetClick = () => {\n    if (brushRef?.current) {\n      const updater: UpdateBrush = prevBrush => {\n        const newExtent = brushRef.current!.getExtent(\n          initialBrushPosition.start,\n          initialBrushPosition.end,\n        );\n\n        const newState: BaseBrushState = {\n          ...prevBrush,\n          start: { y: newExtent.y0, x: newExtent.x0 },\n          end: { y: newExtent.y1, x: newExtent.x1 },\n          extent: newExtent,\n        };\n\n        return newState;\n      };\n      brushRef.current.updateBrush(updater);\n    }\n  };\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        <LinearGradient id={GRADIENT_ID} from={background} to={background2} rotate={45} />\n        <rect x={0} y={0} width={width} height={height} fill={`url(#${GRADIENT_ID})`} rx={14} />\n        <AreaChart\n          hideBottomAxis={compact}\n          data={filteredStock}\n          width={width}\n          margin={{ ...margin, bottom: topChartBottomMargin }}\n          yMax={yMax}\n          xScale={dateScale}\n          yScale={stockScale}\n          gradientColor={background2}\n        />\n        <AreaChart\n          hideBottomAxis\n          hideLeftAxis\n          data={stock}\n          width={width}\n          yMax={yBrushMax}\n          xScale={brushDateScale}\n          yScale={brushStockScale}\n          margin={brushMargin}\n          top={topChartHeight + topChartBottomMargin + margin.top}\n          gradientColor={background2}\n        >\n          <PatternLines\n            id={PATTERN_ID}\n            height={8}\n            width={8}\n            stroke={accentColor}\n            strokeWidth={1}\n            orientation={['diagonal']}\n          />\n          <Brush\n            xScale={brushDateScale}\n            yScale={brushStockScale}\n            width={xBrushMax}\n            height={yBrushMax}\n            margin={brushMargin}\n            handleSize={8}\n            innerRef={brushRef}\n            resizeTriggerAreas={['left', 'right']}\n            brushDirection=\"horizontal\"\n            initialBrushPosition={initialBrushPosition}\n            onChange={onBrushChange}\n            onClick={() => setFilteredStock(stock)}\n            selectedBoxStyle={selectedBrushStyle}\n          />\n        </AreaChart>\n      </svg>\n      <button onClick={handleClearClick}>Clear</button>&nbsp;\n      <button onClick={handleResetClick}>Reset</button>\n    </div>\n  );\n}\n\nexport default BrushChart;\n")}},"uKU/":function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return s}));var r=e("PB0s"),a=e("2+fR"),i=e("W1cA"),o=e("Zbhd");function c(n){var t=n.domain;return n.ticks=function(n){var e=t();return Object(r.a)(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var r=t();return Object(o.a)(r[0],r[r.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var a,i,o=t(),c=0,s=o.length-1,u=o[c],l=o[s],h=10;for(l<u&&(i=u,u=l,l=i,i=c,c=s,s=i);h-- >0;){if((i=Object(r.b)(u,l,e))===a)return o[c]=u,o[s]=l,t(o);if(i>0)u=Math.floor(u/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;u=Math.ceil(u*i)/i,l=Math.floor(l*i)/i}a=i}return n},n}function s(){var n=Object(a.b)();return n.copy=function(){return Object(a.a)(n,s())},i.b.apply(n,arguments),c(n)}},ue4z:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return l})),e.d(t,"e",(function(){return s})),e.d(t,"f",(function(){return h}));var r=function(n,t){return n<t?-1:n>t?1:n>=t?0:NaN},a=function(n){var t;return 1===n.length&&(t=n,n=function(n,e){return r(t(n),e)}),{left:function(t,e,r,a){for(null==r&&(r=0),null==a&&(a=t.length);r<a;){var i=r+a>>>1;n(t[i],e)<0?r=i+1:a=i}return r},right:function(t,e,r,a){for(null==r&&(r=0),null==a&&(a=t.length);r<a;){var i=r+a>>>1;n(t[i],e)>0?a=i:r=i+1}return r}}};var i=a(r);i.right,i.left;var o=function(n,t){var e,r,a,i=n.length,o=-1;if(null==t){for(;++o<i;)if(null!=(e=n[o])&&e>=e)for(r=a=e;++o<i;)null!=(e=n[o])&&(r>e&&(r=e),a<e&&(a=e))}else for(;++o<i;)if(null!=(e=t(n[o],o,n))&&e>=e)for(r=a=e;++o<i;)null!=(e=t(n[o],o,n))&&(r>e&&(r=e),a<e&&(a=e));return[r,a]},c=Array.prototype,s=(c.slice,c.map,function(n,t,e){n=+n,t=+t,e=(a=arguments.length)<2?(t=n,n=0,1):a<3?1:+e;for(var r=-1,a=0|Math.max(0,Math.ceil((t-n)/e)),i=new Array(a);++r<a;)i[r]=n+r*e;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var u=function(n,t){var e,r,a=n.length,i=-1;if(null==t){for(;++i<a;)if(null!=(e=n[i])&&e>=e)for(r=e;++i<a;)null!=(e=n[i])&&e>r&&(r=e)}else for(;++i<a;)if(null!=(e=t(n[i],i,n))&&e>=e)for(r=e;++i<a;)null!=(e=t(n[i],i,n))&&e>r&&(r=e);return r},l=function(n){for(var t,e,r,a=n.length,i=-1,o=0;++i<a;)o+=n[i].length;for(e=new Array(o);--a>=0;)for(t=(r=n[a]).length;--t>=0;)e[--o]=r[t];return e},h=function(n){if(!(a=n.length))return[];for(var t=-1,e=function(n,t){var e,r,a=n.length,i=-1;if(null==t){for(;++i<a;)if(null!=(e=n[i])&&e>=e)for(r=e;++i<a;)null!=(e=n[i])&&r>e&&(r=e)}else for(;++i<a;)if(null!=(e=t(n[i],i,n))&&e>=e)for(r=e;++i<a;)null!=(e=t(n[i],i,n))&&r>e&&(r=e);return r}(n,f),r=new Array(e);++t<e;)for(var a,i=-1,o=r[t]=new Array(a);++i<a;)o[i]=n[i][t];return r};function f(n){return n.length}},zjfJ:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return r}))}},[["OfPM",0,2,1,3,4,5,6,7,11,12,15,16,44]]]);