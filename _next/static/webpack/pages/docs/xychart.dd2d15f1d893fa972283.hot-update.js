webpackHotUpdate_N_E("pages/docs/xychart",{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md":
/*!**********************************************************************************************************!*\
  !*** /Users/christopher-williams/dev/visx/node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"# @visx/xychart\\n\\nIn contrast to other `visx` packages which are low-level, this package seeks to abstract some of the\\ncomplexity of common visualization engineering, and exposes a **high-level** x,y (cartesian\\ncoordinate) chart API. However, it is implemented using modularized `React.context` layers for\\ntheme, canvas dimensions, x/y/color scales, data, events, and tooltips which allows for more\\nexpressivity and advanced use cases.\\n\\nOut of the box it supports the following:\\n\\n- many common `<*Series />` types (animated or not) such as lines, bars, etc. (can be easily\\n  extended to support more in the future)\\n- `<Axis />` (animated or not)\\n- `<Grid />` (animated or not)\\n- `<Annotation />` (animated or not)\\n- `<Tooltip />`\\n- `theme`ing\\n\\nSee the comprehensive API below for more details.\\n\\n<hr />\\n\\n## Basic usage\\n\\nThe following illustrates basic usage for an animated line chart with a bottom `Axis`, `Grid`, and\\n`Tooltip`, try it on codesandbox [here](todo, simplify code below):\\n\\n```tsx\\nimport { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, XYChart } from '@visx/xychart';\\n\\nconst data1 = [\\n  { x: '2020-01-01', y: 50 },\\n  { x: '2020-01-02', y: 10 },\\n  { x: '2020-01-03', y: 20 },\\n  { x: '2020-01-04', y: 10 },\\n  { x: '2020-01-05', y: 0 },\\n];\\n\\nconst data2 = [\\n  { x: '2020-01-01', y: 30 },\\n  { x: '2020-01-02', y: 40 },\\n  { x: '2020-01-03', y: 80 },\\n  { x: '2020-01-04', y: 70 },\\n  { x: '2020-01-05', y: 20 },\\n];\\n\\nconst xAccessor = d => d.x;\\nconst yAccessor = d => d.y;\\n\\nconst render = () => (\\n  <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>\\n    <AnimatedAxis orientation=\\\"bottom\\\" />\\n    <AnimatedGrid columns={false} numTicks={4} />\\n    <AnimatedLineSeries dataKey=\\\"Line 1\\\" data={data1} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <AnimatedLineSeries dataKey=\\\"Line 2\\\" data={data2} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <Tooltip\\n      snapTooltipToDatumX\\n      snapTooltipToDatumY\\n      showVerticalCrosshair\\n      showSeriesGlyphs\\n      renderTooltip={({ tooltipData, colorScale }) => (\\n        <div>\\n          <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>\\n            {tooltipData.nearestDatum.key || 'No key'}\\n          </div>\\n          {tooltipData.nearestDatum.datum.x || 'No date'}\\n          {', '}\\n          {tooltipData.nearestDatum.datum.y || 'No value'}\\n        </div>\\n      )}\\n    />\\n  </XYChart>\\n);\\n```\\n\\nExpand for more, or explore the detailed API below\\n\\n**Basic usage**\\n\\n<ul>\\n  <li><a href=\\\"###series-types\\\">Series types</a></li>\\n  <li><a  href=\\\"#theming\\\">Theming</a></li>\\n  <li><a  href=\\\"#tooltips\\\">Tooltips</a></li>\\n</ul>\\n\\n**Advanced usage**\\n\\n<details>\\n\\n### Series types\\n\\nThe following `Series` types are currently supported and we are happy to review or consider\\nadditional Series types in the future.\\n\\n| Component name        | Description                                                                                      | Usage                                                |\\n| --------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |\\n| (Animated)AreaSeries  | Connect data points with a `<path />`, with a color fill to the zero baseline                    | `<AreaSeries />`                                     |\\n| (Animated)BarSeries   | Render a `<rect />` for each data point                                                          | `<BarSeries />`                                      |\\n| (Animated)BarGroup    | Group multiple child `<BarSeries />` values together                                             | `<BarGroup><BarSeries /><BarSeries />...</BarGroup>` |\\n| (Animated)BarStack    | Stack multiple child `<BarSeries />` values together                                             | `<BarStack><BarSeries /><BarSeries />...</BarStack>` |  |\\n| (Animated)GlyphSeries | Render a `Glyph` (any shape, defaults to `<circle />`) for each data point, e.g., a scatter plot | `<GlyphSeries renderGlyph={() => ...} />`            |\\n| (Animated)LineSeries  | Connect data points with a `<path>`                                                              | `<GlyphSeries />`                                    |\\n\\nAll `Series` have animated and non-animated variants to give you more control over your bundle size,\\nsupport missing (`null`) data, and can be rendered vertically or horizontally.\\n\\n### Theming\\n\\nDefault `lightTheme` and `darkTheme` themes are exported from `@visx/xychart` and the utility\\n`buildChartTheme` is exported to support easy creation of custom themes.\\n\\n```ts\\nimport { buildTheme, XYChart } from '@visx/xychart';\\nimport { TextProps as SVGTextProps } from '@visx/text/lib/Text'; // just for types\\n\\nconst customTheme = buildTheme({\\n  // colors\\n  backgroundColor: string; // used by Tooltip, Annotation\\n  colors: string[]; // categorical colors, mapped to series via `dataKey`s\\n\\n  // labels\\n  svgLabelBig?: SVGTextProps;\\n  svgLabelSmall?: SVGTextProps;\\n  htmlLabel?: HTMLTextStyles;\\n\\n  // lines\\n  xAxisLineStyles?: LineStyles;\\n  yAxisLineStyles?: LineStyles;\\n  xTickLineStyles?: LineStyles;\\n  yTickLineStyles?: LineStyles;\\n  tickLength: number;\\n\\n  // grid\\n  gridColor: string;\\n  gridColorDark: string; // used for axis baseline if x/yxAxisLineStyles not set\\n  gridStyles?: CSSProperties;\\n});\\n\\n() => <XYChart theme={customTheme} />\\n\\n```\\n\\n### Tooltips\\n\\n`@visx/tooltip` `Tooltip`s are integrated into `@visx/xychart`, and should be rendered as a child of\\n`XYChart` (or a child where `TooltipContext` is provided).\\n\\n**`Tooltip` positioning** is handled by the `Tooltip` itself, based on `TooltipContext`. `Tooltip`\\nis rendered inside a `Portal`, avoiding clipping by parent DOM elements with higher z-index\\ncontexts. See the API below for a full list of `props` to support additional behavior, such as\\nsnapping to data point positions and rendering cross-hairs.\\n\\n**`Tooltip` content** is controlled by the specified `prop.renderTooltip` which has access to:\\n\\n- `tooltipData.nearestDatum` – the globally closest `Datum`, **across all** `Series`'s `dataKey`s\\n- `tooltipData.datumByKey` – the closest `Datum` **for each** `Series`'s `dataKey`; this enables\\n  \\\"shared tooltips\\\" where you can render the nearest data point for each `Series`.\\n- a shared `colorScale` which maps `Series`'s `dataKey`s to `theme` colors\\n\\n### Event handlers\\n\\nThe following `PointerEvent`s (handling both `MouseEvent`s and `TouchEvent`s) are currently\\nsupported. They may be set on individual `Series` components (e.g.,\\n`<BarSeries onPointerMove={() => ...} />`), or at the chart level (e.g.,\\n`<XYChart onPointerMove={() => {}} />`) in which case they are invoked once for _every_ `*Series`.\\nTo **disable** event emitting for any `Series` set `<*Series enableEvents=false />`.\\n\\nBelow, `HandlerParms` has the following type signature:\\n\\n```ts\\ntype EventHandlerParams<Datum> = {\\n  datum: Datum; // nearest Datum to event, for Series with `dataKey=key`\\n  distanceX: number; // x distance between event and Datum, in px\\n  distanceY;: number; // y distance between event and Datum, in px\\n  event: React.PointerEvent | React.FocusEvent; // the event\\n  index: number; // index of Datum in Series `data` array\\n  key: string; // `dataKey` of Series to which `Datum` belongs\\n  svgPoint: { x: number; y: number }; // event position in svg-coordinates\\n};\\n```\\n\\n| Prop name       | Signature                                     | `XYChart` support | `*Series` support |\\n| --------------- | --------------------------------------------- | ----------------- | ----------------- |\\n| `onPointerMove` | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onPointerOut`  | `(event: React.PointerEvent) => void`         | ✅                | ✅                |\\n| `onPointerUp`   | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onFocus`       | `(params: EventHandlerParams<Datum>) => void` | ❌                | ✅                |\\n| `onBlur`        | `(event: React.TouchEvent) => void`           | ❌                | ✅                |\\n\\n### Annotations\\n\\n`@visx/annotations` annotations are integrated into `@visx/xychart`, and allow you to annotate\\nindividual points, or x- or y-thresholds\\n\\n<hr />\\n\\n## Advanced usage\\n\\n`XYChart` is implemented using modularized `React.context` layers for scales, canvas dimensions,\\ndata, events, and tooltips which enables more advanced usage than many other chart-level\\nabstractions.\\n\\nBy default `XYChart` renders all context providers if a given context is not available, but you can\\nshare context across multiple `XYChart`s to implement functionality such as linked tooltips, shared\\nthemes, or shared data.\\n\\n**Examples**\\n\\n- TODO - Custom chart background using theme and chart dimensions\\n- TODO - Linked tooltips\\n- TODO - Programmatically control tooltips\\n\\n### DataContext\\n\\nThis context provides chart canvas dimensions (`width`, `height`, and `margin`), x/y/color scales,\\nand a data registry. The data registry includes data from all child `*Series`, and x/y/color scales\\nare updated accordingly accounting for canvas dimensions.\\n\\n### ThemeContext\\n\\nThis context provides an `XYChart` theme.\\n\\n### EventEmitterContext\\n\\nThis context provides an event publishing / subscription object which can be used via the\\n`useEventEmitter` hook. `Series` and `XYChart` events, including tooltip updates, are emitted and\\nhandled with through this context.\\n\\n```tsx\\nimport { useEventEmitter, EventEmitterContext } from '@visx/xychart';\\n\\nconst eventSourceId = 'optional-source-id-filter';\\n\\n() => (\\n  <EventEmitterContext>\\n    {/** emit events */}\\n    {() => {\\n      const emit = useEventEmitter();\\n      return (\\n        <button onPointerUp={event => emit('pointerup', event, eventSourceId)}>emit event</button>\\n      );\\n    }}\\n    {/** subscribe to events */}\\n    {() => {\\n      const [clickCount, setClickCount] = useState(0);\\n      useEventEmitter('pointerUp', () => setClickCount(clickCount + 1), [eventSourceId]);\\n\\n      return <div>Pressed {clickCount} times</div>;\\n    }}\\n  </EventEmitterContext>\\n);\\n```\\n\\n### TooltipContext\\n\\nThis context provides access to `@visx/tooltip`s `useTooltip` state, including whether the tooltip\\nis visible (`tooltipOpen`), tooltlip position (`tooltipLeft`, `tooltipTop`),\\n`tooltipData: { nearestDatum, datumByKey }` described above, and functions to update context\\n(`hideTooltip`, `showTooltip`, and `updateTooltip`).\\n\\n## Roadmap 🔜\\n\\n- new `*Series` types\\n  - `StackedAreaSeries`\\n  - `BoxPlotSeries`\\n  - `ViolinPlotSeries`\\n- integrate `@visx/brush`\\n- integrate `@visx/zoom` + `@visx/drag` for panning and zooming\\n\\n</details>\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3Zpc3gteHljaGFydC9SZWFkbWUubWQ/ZjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLHFrQ0FBc2dDLDBEQUEwRCxzQkFBc0Isd0JBQXdCLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHdCQUF3QixLQUFLLHdCQUF3Qix5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsS0FBSywrQkFBK0IsNkJBQTZCLCtDQUErQyxJQUFJLFVBQVUsZ0JBQWdCLFVBQVUsa0JBQWtCLDJFQUEyRSxNQUFNLFdBQVcsRUFBRSxzREFBc0QsTUFBTSxZQUFZLFVBQVUsWUFBWSxVQUFVLHNEQUFzRCxNQUFNLFlBQVksVUFBVSxZQUFZLFVBQVUsbUpBQW1KLEVBQUUsMEJBQTBCLDhDQUE4QyxtREFBbUQsZ0JBQWdCLHlDQUF5QywrQkFBK0IsOENBQThDLGFBQWEsS0FBSyxhQUFhLCtDQUErQywwQkFBMEIsMEJBQTBCLCtvREFBK29ELFVBQVUsMmtCQUEya0Isc0JBQXNCLHNCQUFzQixVQUFVLDRCQUE0Qiw0QkFBNEIsc0RBQXNELHlDQUF5QyxvREFBb0QscUdBQXFHLGlDQUFpQywrQkFBK0IsK0NBQStDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLHVCQUF1QixtQ0FBbUMsMEJBQTBCLHVGQUF1RixHQUFHLEVBQUUsMEJBQTBCLFlBQVksMHpCQUEwekIsc1lBQXNZLFVBQVUsOERBQThELFNBQVMsOFBBQThQLGlCQUFpQiwrRUFBK0UsMkRBQTJELFNBQVMsOEZBQThGLCtCQUErQix5REFBeUQsK0RBQStELFdBQVcsYUFBYSx5Q0FBeUMsZ25FQUFnbkUsdUNBQXVDLHNCQUFzQixzREFBc0QsMkNBQTJDLG1CQUFtQixPQUFPLE9BQU8sdUNBQXVDLCtDQUErQyxpREFBaUQsOEJBQThCLFFBQVEsT0FBTywyQkFBMkIsT0FBTyxPQUFPLHdEQUF3RCwyRkFBMkYsK0JBQStCLFdBQVcsYUFBYSxRQUFRLDhCQUE4QixnT0FBZ08sMkJBQTJCLHFVQUFxVSIsImZpbGUiOiIuLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuLi92aXN4LXh5Y2hhcnQvUmVhZG1lLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjIEB2aXN4L3h5Y2hhcnRcXG5cXG5JbiBjb250cmFzdCB0byBvdGhlciBgdmlzeGAgcGFja2FnZXMgd2hpY2ggYXJlIGxvdy1sZXZlbCwgdGhpcyBwYWNrYWdlIHNlZWtzIHRvIGFic3RyYWN0IHNvbWUgb2YgdGhlXFxuY29tcGxleGl0eSBvZiBjb21tb24gdmlzdWFsaXphdGlvbiBlbmdpbmVlcmluZywgYW5kIGV4cG9zZXMgYSAqKmhpZ2gtbGV2ZWwqKiB4LHkgKGNhcnRlc2lhblxcbmNvb3JkaW5hdGUpIGNoYXJ0IEFQSS4gSG93ZXZlciwgaXQgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9kdWxhcml6ZWQgYFJlYWN0LmNvbnRleHRgIGxheWVycyBmb3JcXG50aGVtZSwgY2FudmFzIGRpbWVuc2lvbnMsIHgveS9jb2xvciBzY2FsZXMsIGRhdGEsIGV2ZW50cywgYW5kIHRvb2x0aXBzIHdoaWNoIGFsbG93cyBmb3IgbW9yZVxcbmV4cHJlc3Npdml0eSBhbmQgYWR2YW5jZWQgdXNlIGNhc2VzLlxcblxcbk91dCBvZiB0aGUgYm94IGl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XFxuXFxuLSBtYW55IGNvbW1vbiBgPCpTZXJpZXMgLz5gIHR5cGVzIChhbmltYXRlZCBvciBub3QpIHN1Y2ggYXMgbGluZXMsIGJhcnMsIGV0Yy4gKGNhbiBiZSBlYXNpbHlcXG4gIGV4dGVuZGVkIHRvIHN1cHBvcnQgbW9yZSBpbiB0aGUgZnV0dXJlKVxcbi0gYDxBeGlzIC8+YCAoYW5pbWF0ZWQgb3Igbm90KVxcbi0gYDxHcmlkIC8+YCAoYW5pbWF0ZWQgb3Igbm90KVxcbi0gYDxBbm5vdGF0aW9uIC8+YCAoYW5pbWF0ZWQgb3Igbm90KVxcbi0gYDxUb29sdGlwIC8+YFxcbi0gYHRoZW1lYGluZ1xcblxcblNlZSB0aGUgY29tcHJlaGVuc2l2ZSBBUEkgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cXG5cXG48aHIgLz5cXG5cXG4jIyBCYXNpYyB1c2FnZVxcblxcblRoZSBmb2xsb3dpbmcgaWxsdXN0cmF0ZXMgYmFzaWMgdXNhZ2UgZm9yIGFuIGFuaW1hdGVkIGxpbmUgY2hhcnQgd2l0aCBhIGJvdHRvbSBgQXhpc2AsIGBHcmlkYCwgYW5kXFxuYFRvb2x0aXBgLCB0cnkgaXQgb24gY29kZXNhbmRib3ggW2hlcmVdKHRvZG8sIHNpbXBsaWZ5IGNvZGUgYmVsb3cpOlxcblxcbmBgYHRzeFxcbmltcG9ydCB7IEFuaW1hdGVkQXhpcywgQW5pbWF0ZWRHcmlkLCBBbmltYXRlZExpbmVTZXJpZXMsIFhZQ2hhcnQgfSBmcm9tICdAdmlzeC94eWNoYXJ0JztcXG5cXG5jb25zdCBkYXRhMSA9IFtcXG4gIHsgeDogJzIwMjAtMDEtMDEnLCB5OiA1MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wMicsIHk6IDEwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAzJywgeTogMjAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDQnLCB5OiAxMCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wNScsIHk6IDAgfSxcXG5dO1xcblxcbmNvbnN0IGRhdGEyID0gW1xcbiAgeyB4OiAnMjAyMC0wMS0wMScsIHk6IDMwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAyJywgeTogNDAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDMnLCB5OiA4MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wNCcsIHk6IDcwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTA1JywgeTogMjAgfSxcXG5dO1xcblxcbmNvbnN0IHhBY2Nlc3NvciA9IGQgPT4gZC54O1xcbmNvbnN0IHlBY2Nlc3NvciA9IGQgPT4gZC55O1xcblxcbmNvbnN0IHJlbmRlciA9ICgpID0+IChcXG4gIDxYWUNoYXJ0IGhlaWdodD17MzAwfSB4U2NhbGU9e3sgdHlwZTogJ2JhbmQnIH19IHlTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fT5cXG4gICAgPEFuaW1hdGVkQXhpcyBvcmllbnRhdGlvbj1cXFwiYm90dG9tXFxcIiAvPlxcbiAgICA8QW5pbWF0ZWRHcmlkIGNvbHVtbnM9e2ZhbHNlfSBudW1UaWNrcz17NH0gLz5cXG4gICAgPEFuaW1hdGVkTGluZVNlcmllcyBkYXRhS2V5PVxcXCJMaW5lIDFcXFwiIGRhdGE9e2RhdGExfSB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn0geUFjY2Vzc29yPXt5QWNjZXNzb3J9IC8+XFxuICAgIDxBbmltYXRlZExpbmVTZXJpZXMgZGF0YUtleT1cXFwiTGluZSAyXFxcIiBkYXRhPXtkYXRhMn0geEFjY2Vzc29yPXt4QWNjZXNzb3J9IHlBY2Nlc3Nvcj17eUFjY2Vzc29yfSAvPlxcbiAgICA8VG9vbHRpcFxcbiAgICAgIHNuYXBUb29sdGlwVG9EYXR1bVhcXG4gICAgICBzbmFwVG9vbHRpcFRvRGF0dW1ZXFxuICAgICAgc2hvd1ZlcnRpY2FsQ3Jvc3NoYWlyXFxuICAgICAgc2hvd1Nlcmllc0dseXBoc1xcbiAgICAgIHJlbmRlclRvb2x0aXA9eyh7IHRvb2x0aXBEYXRhLCBjb2xvclNjYWxlIH0pID0+IChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IGNvbG9yU2NhbGUodG9vbHRpcERhdGEubmVhcmVzdERhdHVtLmtleSkgfX0+XFxuICAgICAgICAgICAge3Rvb2x0aXBEYXRhLm5lYXJlc3REYXR1bS5rZXkgfHwgJ05vIGtleSd9XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICB7dG9vbHRpcERhdGEubmVhcmVzdERhdHVtLmRhdHVtLnggfHwgJ05vIGRhdGUnfVxcbiAgICAgICAgICB7JywgJ31cXG4gICAgICAgICAge3Rvb2x0aXBEYXRhLm5lYXJlc3REYXR1bS5kYXR1bS55IHx8ICdObyB2YWx1ZSd9XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICApfVxcbiAgICAvPlxcbiAgPC9YWUNoYXJ0Plxcbik7XFxuYGBgXFxuXFxuRXhwYW5kIGZvciBtb3JlLCBvciBleHBsb3JlIHRoZSBkZXRhaWxlZCBBUEkgYmVsb3dcXG5cXG4qKkJhc2ljIHVzYWdlKipcXG5cXG48dWw+XFxuICA8bGk+PGEgaHJlZj1cXFwiIyMjc2VyaWVzLXR5cGVzXFxcIj5TZXJpZXMgdHlwZXM8L2E+PC9saT5cXG4gIDxsaT48YSAgaHJlZj1cXFwiI3RoZW1pbmdcXFwiPlRoZW1pbmc8L2E+PC9saT5cXG4gIDxsaT48YSAgaHJlZj1cXFwiI3Rvb2x0aXBzXFxcIj5Ub29sdGlwczwvYT48L2xpPlxcbjwvdWw+XFxuXFxuKipBZHZhbmNlZCB1c2FnZSoqXFxuXFxuPGRldGFpbHM+XFxuXFxuIyMjIFNlcmllcyB0eXBlc1xcblxcblRoZSBmb2xsb3dpbmcgYFNlcmllc2AgdHlwZXMgYXJlIGN1cnJlbnRseSBzdXBwb3J0ZWQgYW5kIHdlIGFyZSBoYXBweSB0byByZXZpZXcgb3IgY29uc2lkZXJcXG5hZGRpdGlvbmFsIFNlcmllcyB0eXBlcyBpbiB0aGUgZnV0dXJlLlxcblxcbnwgQ29tcG9uZW50IG5hbWUgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVXNhZ2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxufCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcXG58IChBbmltYXRlZClBcmVhU2VyaWVzICB8IENvbm5lY3QgZGF0YSBwb2ludHMgd2l0aCBhIGA8cGF0aCAvPmAsIHdpdGggYSBjb2xvciBmaWxsIHRvIHRoZSB6ZXJvIGJhc2VsaW5lICAgICAgICAgICAgICAgICAgICB8IGA8QXJlYVNlcmllcyAvPmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgKEFuaW1hdGVkKUJhclNlcmllcyAgIHwgUmVuZGVyIGEgYDxyZWN0IC8+YCBmb3IgZWFjaCBkYXRhIHBvaW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDxCYXJTZXJpZXMgLz5gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxufCAoQW5pbWF0ZWQpQmFyR3JvdXAgICAgfCBHcm91cCBtdWx0aXBsZSBjaGlsZCBgPEJhclNlcmllcyAvPmAgdmFsdWVzIHRvZ2V0aGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgPEJhckdyb3VwPjxCYXJTZXJpZXMgLz48QmFyU2VyaWVzIC8+Li4uPC9CYXJHcm91cD5gIHxcXG58IChBbmltYXRlZClCYXJTdGFjayAgICB8IFN0YWNrIG11bHRpcGxlIGNoaWxkIGA8QmFyU2VyaWVzIC8+YCB2YWx1ZXMgdG9nZXRoZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGA8QmFyU3RhY2s+PEJhclNlcmllcyAvPjxCYXJTZXJpZXMgLz4uLi48L0JhclN0YWNrPmAgfCAgfFxcbnwgKEFuaW1hdGVkKUdseXBoU2VyaWVzIHwgUmVuZGVyIGEgYEdseXBoYCAoYW55IHNoYXBlLCBkZWZhdWx0cyB0byBgPGNpcmNsZSAvPmApIGZvciBlYWNoIGRhdGEgcG9pbnQsIGUuZy4sIGEgc2NhdHRlciBwbG90IHwgYDxHbHlwaFNlcmllcyByZW5kZXJHbHlwaD17KCkgPT4gLi4ufSAvPmAgICAgICAgICAgICB8XFxufCAoQW5pbWF0ZWQpTGluZVNlcmllcyAgfCBDb25uZWN0IGRhdGEgcG9pbnRzIHdpdGggYSBgPHBhdGg+YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgPEdseXBoU2VyaWVzIC8+YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcXG5cXG5BbGwgYFNlcmllc2AgaGF2ZSBhbmltYXRlZCBhbmQgbm9uLWFuaW1hdGVkIHZhcmlhbnRzIHRvIGdpdmUgeW91IG1vcmUgY29udHJvbCBvdmVyIHlvdXIgYnVuZGxlIHNpemUsXFxuc3VwcG9ydCBtaXNzaW5nIChgbnVsbGApIGRhdGEsIGFuZCBjYW4gYmUgcmVuZGVyZWQgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXFxuXFxuIyMjIFRoZW1pbmdcXG5cXG5EZWZhdWx0IGBsaWdodFRoZW1lYCBhbmQgYGRhcmtUaGVtZWAgdGhlbWVzIGFyZSBleHBvcnRlZCBmcm9tIGBAdmlzeC94eWNoYXJ0YCBhbmQgdGhlIHV0aWxpdHlcXG5gYnVpbGRDaGFydFRoZW1lYCBpcyBleHBvcnRlZCB0byBzdXBwb3J0IGVhc3kgY3JlYXRpb24gb2YgY3VzdG9tIHRoZW1lcy5cXG5cXG5gYGB0c1xcbmltcG9ydCB7IGJ1aWxkVGhlbWUsIFhZQ2hhcnQgfSBmcm9tICdAdmlzeC94eWNoYXJ0JztcXG5pbXBvcnQgeyBUZXh0UHJvcHMgYXMgU1ZHVGV4dFByb3BzIH0gZnJvbSAnQHZpc3gvdGV4dC9saWIvVGV4dCc7IC8vIGp1c3QgZm9yIHR5cGVzXFxuXFxuY29uc3QgY3VzdG9tVGhlbWUgPSBidWlsZFRoZW1lKHtcXG4gIC8vIGNvbG9yc1xcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7IC8vIHVzZWQgYnkgVG9vbHRpcCwgQW5ub3RhdGlvblxcbiAgY29sb3JzOiBzdHJpbmdbXTsgLy8gY2F0ZWdvcmljYWwgY29sb3JzLCBtYXBwZWQgdG8gc2VyaWVzIHZpYSBgZGF0YUtleWBzXFxuXFxuICAvLyBsYWJlbHNcXG4gIHN2Z0xhYmVsQmlnPzogU1ZHVGV4dFByb3BzO1xcbiAgc3ZnTGFiZWxTbWFsbD86IFNWR1RleHRQcm9wcztcXG4gIGh0bWxMYWJlbD86IEhUTUxUZXh0U3R5bGVzO1xcblxcbiAgLy8gbGluZXNcXG4gIHhBeGlzTGluZVN0eWxlcz86IExpbmVTdHlsZXM7XFxuICB5QXhpc0xpbmVTdHlsZXM/OiBMaW5lU3R5bGVzO1xcbiAgeFRpY2tMaW5lU3R5bGVzPzogTGluZVN0eWxlcztcXG4gIHlUaWNrTGluZVN0eWxlcz86IExpbmVTdHlsZXM7XFxuICB0aWNrTGVuZ3RoOiBudW1iZXI7XFxuXFxuICAvLyBncmlkXFxuICBncmlkQ29sb3I6IHN0cmluZztcXG4gIGdyaWRDb2xvckRhcms6IHN0cmluZzsgLy8gdXNlZCBmb3IgYXhpcyBiYXNlbGluZSBpZiB4L3l4QXhpc0xpbmVTdHlsZXMgbm90IHNldFxcbiAgZ3JpZFN0eWxlcz86IENTU1Byb3BlcnRpZXM7XFxufSk7XFxuXFxuKCkgPT4gPFhZQ2hhcnQgdGhlbWU9e2N1c3RvbVRoZW1lfSAvPlxcblxcbmBgYFxcblxcbiMjIyBUb29sdGlwc1xcblxcbmBAdmlzeC90b29sdGlwYCBgVG9vbHRpcGBzIGFyZSBpbnRlZ3JhdGVkIGludG8gYEB2aXN4L3h5Y2hhcnRgLCBhbmQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGEgY2hpbGQgb2ZcXG5gWFlDaGFydGAgKG9yIGEgY2hpbGQgd2hlcmUgYFRvb2x0aXBDb250ZXh0YCBpcyBwcm92aWRlZCkuXFxuXFxuKipgVG9vbHRpcGAgcG9zaXRpb25pbmcqKiBpcyBoYW5kbGVkIGJ5IHRoZSBgVG9vbHRpcGAgaXRzZWxmLCBiYXNlZCBvbiBgVG9vbHRpcENvbnRleHRgLiBgVG9vbHRpcGBcXG5pcyByZW5kZXJlZCBpbnNpZGUgYSBgUG9ydGFsYCwgYXZvaWRpbmcgY2xpcHBpbmcgYnkgcGFyZW50IERPTSBlbGVtZW50cyB3aXRoIGhpZ2hlciB6LWluZGV4XFxuY29udGV4dHMuIFNlZSB0aGUgQVBJIGJlbG93IGZvciBhIGZ1bGwgbGlzdCBvZiBgcHJvcHNgIHRvIHN1cHBvcnQgYWRkaXRpb25hbCBiZWhhdmlvciwgc3VjaCBhc1xcbnNuYXBwaW5nIHRvIGRhdGEgcG9pbnQgcG9zaXRpb25zIGFuZCByZW5kZXJpbmcgY3Jvc3MtaGFpcnMuXFxuXFxuKipgVG9vbHRpcGAgY29udGVudCoqIGlzIGNvbnRyb2xsZWQgYnkgdGhlIHNwZWNpZmllZCBgcHJvcC5yZW5kZXJUb29sdGlwYCB3aGljaCBoYXMgYWNjZXNzIHRvOlxcblxcbi0gYHRvb2x0aXBEYXRhLm5lYXJlc3REYXR1bWAg4oCTIHRoZSBnbG9iYWxseSBjbG9zZXN0IGBEYXR1bWAsICoqYWNyb3NzIGFsbCoqIGBTZXJpZXNgJ3MgYGRhdGFLZXlgc1xcbi0gYHRvb2x0aXBEYXRhLmRhdHVtQnlLZXlgIOKAkyB0aGUgY2xvc2VzdCBgRGF0dW1gICoqZm9yIGVhY2gqKiBgU2VyaWVzYCdzIGBkYXRhS2V5YDsgdGhpcyBlbmFibGVzXFxuICBcXFwic2hhcmVkIHRvb2x0aXBzXFxcIiB3aGVyZSB5b3UgY2FuIHJlbmRlciB0aGUgbmVhcmVzdCBkYXRhIHBvaW50IGZvciBlYWNoIGBTZXJpZXNgLlxcbi0gYSBzaGFyZWQgYGNvbG9yU2NhbGVgIHdoaWNoIG1hcHMgYFNlcmllc2AncyBgZGF0YUtleWBzIHRvIGB0aGVtZWAgY29sb3JzXFxuXFxuIyMjIEV2ZW50IGhhbmRsZXJzXFxuXFxuVGhlIGZvbGxvd2luZyBgUG9pbnRlckV2ZW50YHMgKGhhbmRsaW5nIGJvdGggYE1vdXNlRXZlbnRgcyBhbmQgYFRvdWNoRXZlbnRgcykgYXJlIGN1cnJlbnRseVxcbnN1cHBvcnRlZC4gVGhleSBtYXkgYmUgc2V0IG9uIGluZGl2aWR1YWwgYFNlcmllc2AgY29tcG9uZW50cyAoZS5nLixcXG5gPEJhclNlcmllcyBvblBvaW50ZXJNb3ZlPXsoKSA9PiAuLi59IC8+YCksIG9yIGF0IHRoZSBjaGFydCBsZXZlbCAoZS5nLixcXG5gPFhZQ2hhcnQgb25Qb2ludGVyTW92ZT17KCkgPT4ge319IC8+YCkgaW4gd2hpY2ggY2FzZSB0aGV5IGFyZSBpbnZva2VkIG9uY2UgZm9yIF9ldmVyeV8gYCpTZXJpZXNgLlxcblRvICoqZGlzYWJsZSoqIGV2ZW50IGVtaXR0aW5nIGZvciBhbnkgYFNlcmllc2Agc2V0IGA8KlNlcmllcyBlbmFibGVFdmVudHM9ZmFsc2UgLz5gLlxcblxcbkJlbG93LCBgSGFuZGxlclBhcm1zYCBoYXMgdGhlIGZvbGxvd2luZyB0eXBlIHNpZ25hdHVyZTpcXG5cXG5gYGB0c1xcbnR5cGUgRXZlbnRIYW5kbGVyUGFyYW1zPERhdHVtPiA9IHtcXG4gIGRhdHVtOiBEYXR1bTsgLy8gbmVhcmVzdCBEYXR1bSB0byBldmVudCwgZm9yIFNlcmllcyB3aXRoIGBkYXRhS2V5PWtleWBcXG4gIGRpc3RhbmNlWDogbnVtYmVyOyAvLyB4IGRpc3RhbmNlIGJldHdlZW4gZXZlbnQgYW5kIERhdHVtLCBpbiBweFxcbiAgZGlzdGFuY2VZOzogbnVtYmVyOyAvLyB5IGRpc3RhbmNlIGJldHdlZW4gZXZlbnQgYW5kIERhdHVtLCBpbiBweFxcbiAgZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudCB8IFJlYWN0LkZvY3VzRXZlbnQ7IC8vIHRoZSBldmVudFxcbiAgaW5kZXg6IG51bWJlcjsgLy8gaW5kZXggb2YgRGF0dW0gaW4gU2VyaWVzIGBkYXRhYCBhcnJheVxcbiAga2V5OiBzdHJpbmc7IC8vIGBkYXRhS2V5YCBvZiBTZXJpZXMgdG8gd2hpY2ggYERhdHVtYCBiZWxvbmdzXFxuICBzdmdQb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9OyAvLyBldmVudCBwb3NpdGlvbiBpbiBzdmctY29vcmRpbmF0ZXNcXG59O1xcbmBgYFxcblxcbnwgUHJvcCBuYW1lICAgICAgIHwgU2lnbmF0dXJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYFhZQ2hhcnRgIHN1cHBvcnQgfCBgKlNlcmllc2Agc3VwcG9ydCB8XFxufCAtLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tIHxcXG58IGBvblBvaW50ZXJNb3ZlYCB8IGAocGFyYW1zOiBFdmVudEhhbmRsZXJQYXJhbXM8RGF0dW0+KSA9PiB2b2lkYCB8IOKchSAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxufCBgb25Qb2ludGVyT3V0YCAgfCBgKGV2ZW50OiBSZWFjdC5Qb2ludGVyRXZlbnQpID0+IHZvaWRgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcbnwgYG9uUG9pbnRlclVwYCAgIHwgYChwYXJhbXM6IEV2ZW50SGFuZGxlclBhcmFtczxEYXR1bT4pID0+IHZvaWRgIHwg4pyFICAgICAgICAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHxcXG58IGBvbkZvY3VzYCAgICAgICB8IGAocGFyYW1zOiBFdmVudEhhbmRsZXJQYXJhbXM8RGF0dW0+KSA9PiB2b2lkYCB8IOKdjCAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxufCBgb25CbHVyYCAgICAgICAgfCBgKGV2ZW50OiBSZWFjdC5Ub3VjaEV2ZW50KSA9PiB2b2lkYCAgICAgICAgICAgfCDinYwgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcblxcbiMjIyBBbm5vdGF0aW9uc1xcblxcbmBAdmlzeC9hbm5vdGF0aW9uc2AgYW5ub3RhdGlvbnMgYXJlIGludGVncmF0ZWQgaW50byBgQHZpc3gveHljaGFydGAsIGFuZCBhbGxvdyB5b3UgdG8gYW5ub3RhdGVcXG5pbmRpdmlkdWFsIHBvaW50cywgb3IgeC0gb3IgeS10aHJlc2hvbGRzXFxuXFxuPGhyIC8+XFxuXFxuIyMgQWR2YW5jZWQgdXNhZ2VcXG5cXG5gWFlDaGFydGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9kdWxhcml6ZWQgYFJlYWN0LmNvbnRleHRgIGxheWVycyBmb3Igc2NhbGVzLCBjYW52YXMgZGltZW5zaW9ucyxcXG5kYXRhLCBldmVudHMsIGFuZCB0b29sdGlwcyB3aGljaCBlbmFibGVzIG1vcmUgYWR2YW5jZWQgdXNhZ2UgdGhhbiBtYW55IG90aGVyIGNoYXJ0LWxldmVsXFxuYWJzdHJhY3Rpb25zLlxcblxcbkJ5IGRlZmF1bHQgYFhZQ2hhcnRgIHJlbmRlcnMgYWxsIGNvbnRleHQgcHJvdmlkZXJzIGlmIGEgZ2l2ZW4gY29udGV4dCBpcyBub3QgYXZhaWxhYmxlLCBidXQgeW91IGNhblxcbnNoYXJlIGNvbnRleHQgYWNyb3NzIG11bHRpcGxlIGBYWUNoYXJ0YHMgdG8gaW1wbGVtZW50IGZ1bmN0aW9uYWxpdHkgc3VjaCBhcyBsaW5rZWQgdG9vbHRpcHMsIHNoYXJlZFxcbnRoZW1lcywgb3Igc2hhcmVkIGRhdGEuXFxuXFxuKipFeGFtcGxlcyoqXFxuXFxuLSBUT0RPIC0gQ3VzdG9tIGNoYXJ0IGJhY2tncm91bmQgdXNpbmcgdGhlbWUgYW5kIGNoYXJ0IGRpbWVuc2lvbnNcXG4tIFRPRE8gLSBMaW5rZWQgdG9vbHRpcHNcXG4tIFRPRE8gLSBQcm9ncmFtbWF0aWNhbGx5IGNvbnRyb2wgdG9vbHRpcHNcXG5cXG4jIyMgRGF0YUNvbnRleHRcXG5cXG5UaGlzIGNvbnRleHQgcHJvdmlkZXMgY2hhcnQgY2FudmFzIGRpbWVuc2lvbnMgKGB3aWR0aGAsIGBoZWlnaHRgLCBhbmQgYG1hcmdpbmApLCB4L3kvY29sb3Igc2NhbGVzLFxcbmFuZCBhIGRhdGEgcmVnaXN0cnkuIFRoZSBkYXRhIHJlZ2lzdHJ5IGluY2x1ZGVzIGRhdGEgZnJvbSBhbGwgY2hpbGQgYCpTZXJpZXNgLCBhbmQgeC95L2NvbG9yIHNjYWxlc1xcbmFyZSB1cGRhdGVkIGFjY29yZGluZ2x5IGFjY291bnRpbmcgZm9yIGNhbnZhcyBkaW1lbnNpb25zLlxcblxcbiMjIyBUaGVtZUNvbnRleHRcXG5cXG5UaGlzIGNvbnRleHQgcHJvdmlkZXMgYW4gYFhZQ2hhcnRgIHRoZW1lLlxcblxcbiMjIyBFdmVudEVtaXR0ZXJDb250ZXh0XFxuXFxuVGhpcyBjb250ZXh0IHByb3ZpZGVzIGFuIGV2ZW50IHB1Ymxpc2hpbmcgLyBzdWJzY3JpcHRpb24gb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHZpYSB0aGVcXG5gdXNlRXZlbnRFbWl0dGVyYCBob29rLiBgU2VyaWVzYCBhbmQgYFhZQ2hhcnRgIGV2ZW50cywgaW5jbHVkaW5nIHRvb2x0aXAgdXBkYXRlcywgYXJlIGVtaXR0ZWQgYW5kXFxuaGFuZGxlZCB3aXRoIHRocm91Z2ggdGhpcyBjb250ZXh0LlxcblxcbmBgYHRzeFxcbmltcG9ydCB7IHVzZUV2ZW50RW1pdHRlciwgRXZlbnRFbWl0dGVyQ29udGV4dCB9IGZyb20gJ0B2aXN4L3h5Y2hhcnQnO1xcblxcbmNvbnN0IGV2ZW50U291cmNlSWQgPSAnb3B0aW9uYWwtc291cmNlLWlkLWZpbHRlcic7XFxuXFxuKCkgPT4gKFxcbiAgPEV2ZW50RW1pdHRlckNvbnRleHQ+XFxuICAgIHsvKiogZW1pdCBldmVudHMgKi99XFxuICAgIHsoKSA9PiB7XFxuICAgICAgY29uc3QgZW1pdCA9IHVzZUV2ZW50RW1pdHRlcigpO1xcbiAgICAgIHJldHVybiAoXFxuICAgICAgICA8YnV0dG9uIG9uUG9pbnRlclVwPXtldmVudCA9PiBlbWl0KCdwb2ludGVydXAnLCBldmVudCwgZXZlbnRTb3VyY2VJZCl9PmVtaXQgZXZlbnQ8L2J1dHRvbj5cXG4gICAgICApO1xcbiAgICB9fVxcbiAgICB7LyoqIHN1YnNjcmliZSB0byBldmVudHMgKi99XFxuICAgIHsoKSA9PiB7XFxuICAgICAgY29uc3QgW2NsaWNrQ291bnQsIHNldENsaWNrQ291bnRdID0gdXNlU3RhdGUoMCk7XFxuICAgICAgdXNlRXZlbnRFbWl0dGVyKCdwb2ludGVyVXAnLCAoKSA9PiBzZXRDbGlja0NvdW50KGNsaWNrQ291bnQgKyAxKSwgW2V2ZW50U291cmNlSWRdKTtcXG5cXG4gICAgICByZXR1cm4gPGRpdj5QcmVzc2VkIHtjbGlja0NvdW50fSB0aW1lczwvZGl2PjtcXG4gICAgfX1cXG4gIDwvRXZlbnRFbWl0dGVyQ29udGV4dD5cXG4pO1xcbmBgYFxcblxcbiMjIyBUb29sdGlwQ29udGV4dFxcblxcblRoaXMgY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gYEB2aXN4L3Rvb2x0aXBgcyBgdXNlVG9vbHRpcGAgc3RhdGUsIGluY2x1ZGluZyB3aGV0aGVyIHRoZSB0b29sdGlwXFxuaXMgdmlzaWJsZSAoYHRvb2x0aXBPcGVuYCksIHRvb2x0bGlwIHBvc2l0aW9uIChgdG9vbHRpcExlZnRgLCBgdG9vbHRpcFRvcGApLFxcbmB0b29sdGlwRGF0YTogeyBuZWFyZXN0RGF0dW0sIGRhdHVtQnlLZXkgfWAgZGVzY3JpYmVkIGFib3ZlLCBhbmQgZnVuY3Rpb25zIHRvIHVwZGF0ZSBjb250ZXh0XFxuKGBoaWRlVG9vbHRpcGAsIGBzaG93VG9vbHRpcGAsIGFuZCBgdXBkYXRlVG9vbHRpcGApLlxcblxcbiMjIFJvYWRtYXAg8J+UnFxcblxcbi0gbmV3IGAqU2VyaWVzYCB0eXBlc1xcbiAgLSBgU3RhY2tlZEFyZWFTZXJpZXNgXFxuICAtIGBCb3hQbG90U2VyaWVzYFxcbiAgLSBgVmlvbGluUGxvdFNlcmllc2BcXG4tIGludGVncmF0ZSBgQHZpc3gvYnJ1c2hgXFxuLSBpbnRlZ3JhdGUgYEB2aXN4L3pvb21gICsgYEB2aXN4L2RyYWdgIGZvciBwYW5uaW5nIGFuZCB6b29taW5nXFxuXFxuPC9kZXRhaWxzPlxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md\n");

/***/ })

})