webpackHotUpdate_N_E("pages/docs/xychart",{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md":
/*!**********************************************************************************************************!*\
  !*** /Users/christopher-williams/dev/visx/node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"# @visx/xychart\\n\\nIn contrast to other `visx` packages which are low-level, this package seeks to abstract some of the\\ncomplexity of common visualization engineering, and exposes a **high-level** x,y (cartesian\\ncoordinate) chart API. However, it is implemented using modularized `React.context` layers for\\ntheme, canvas dimensions, x/y/color scales, data, events, and tooltips which allows for more\\nexpressivity and advanced use cases.\\n\\nOut of the box it supports the following:\\n\\n- \\\\* many common `<*Series />` types (animated or not) such as lines, bars, etc.\\n- \\\\* `<Axis />` (animated or not)\\n- \\\\* `<Grid />` (animated or not)\\n- \\\\* `<Annotation />` (animated or not)\\n- \\\\* `<Tooltip />`\\n- \\\\* `theme`ing\\n\\nThe following illustrates basic usage for an animated line chart with a bottom `Axis`, `Grid`, and\\n`Tooltip`, try it on codesandbox [here](todo, simplify code below):\\n\\n```tsx\\nimport { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, XYChart } from '@visx/xychart';\\n\\nconst data1 = [\\n  { x: '2020-01-01', y: 50 },\\n  { x: '2020-01-02', y: 10 },\\n  { x: '2020-01-03', y: 20 },\\n  { x: '2020-01-04', y: 10 },\\n  { x: '2020-01-05', y: 0 },\\n];\\n\\nconst data2 = [\\n  { x: '2020-01-01', y: 30 },\\n  { x: '2020-01-02', y: 40 },\\n  { x: '2020-01-03', y: 80 },\\n  { x: '2020-01-04', y: 70 },\\n  { x: '2020-01-05', y: 20 },\\n];\\n\\nconst xAccessor = d => d.x;\\nconst yAccessor = d => d.y;\\n\\nconst render = () => (\\n  <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>\\n    <AnimatedAxis orientation=\\\"bottom\\\" />\\n    <AnimatedGrid columns={false} numTicks={4} />\\n    <AnimatedLineSeries dataKey=\\\"Line 1\\\" data={data1} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <AnimatedLineSeries dataKey=\\\"Line 2\\\" data={data2} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <Tooltip\\n      snapTooltipToDatumX\\n      snapTooltipToDatumY\\n      showVerticalCrosshair\\n      showSeriesGlyphs\\n      renderTooltip={({ tooltipData, colorScale }) => (\\n        <div>\\n          <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>\\n            {tooltipData.nearestDatum.key || 'No key'}\\n          </div>\\n          {tooltipData.nearestDatum.datum.x || 'No date'}\\n          {', '}\\n          {tooltipData.nearestDatum.datum.y || 'No value'}\\n        </div>\\n      )}\\n    />\\n  </XYChart>\\n);\\n```\\n\\nExpand sections for more, or explore the detailed API below.\\n\\n<hr />\\n\\n## Basic usage\\n\\n<details>\\n\\n<summary>Series types</summary>\\n\\nThe following `Series` types are currently supported and we are happy to review or consider\\nadditional Series types in the future.\\n\\n| Component name        | Description                                                                                      | Usage                                                |\\n| --------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |\\n| (Animated)AreaSeries  | Connect data points with a `<path />`, with a color fill to the zero baseline                    | `<AreaSeries />`                                     |\\n| (Animated)BarSeries   | Render a `<rect />` for each data point                                                          | `<BarSeries />`                                      |\\n| (Animated)BarGroup    | Group multiple child `<BarSeries />` values together                                             | `<BarGroup><BarSeries /><BarSeries />...</BarGroup>` |\\n| (Animated)BarStack    | Stack multiple child `<BarSeries />` values together                                             | `<BarStack><BarSeries /><BarSeries />...</BarStack>` |  |\\n| (Animated)GlyphSeries | Render a `Glyph` (any shape, defaults to `<circle />`) for each data point, e.g., a scatter plot | `<GlyphSeries renderGlyph={() => ...} />`            |\\n| (Animated)LineSeries  | Connect data points with a `<path>`                                                              | `<GlyphSeries />`                                    |\\n\\nAll `Series` have animated and non-animated variants to give you more control over your bundle size,\\nsupport missing (`null`) data, and can be rendered vertically or horizontally.\\n\\n</details>\\n\\n<details>\\n\\n<summary>Theming</summary>\\n\\nDefault `lightTheme` and `darkTheme` themes are exported from `@visx/xychart` and the utility\\n`buildChartTheme` is exported to support easy creation of custom themes.\\n\\n```ts\\nimport { buildTheme, XYChart } from '@visx/xychart';\\nimport { TextProps as SVGTextProps } from '@visx/text/lib/Text'; // just for types\\n\\nconst customTheme = buildTheme({\\n  // colors\\n  backgroundColor: string; // used by Tooltip, Annotation\\n  colors: string[]; // categorical colors, mapped to series via `dataKey`s\\n\\n  // labels\\n  svgLabelBig?: SVGTextProps;\\n  svgLabelSmall?: SVGTextProps;\\n  htmlLabel?: HTMLTextStyles;\\n\\n  // lines\\n  xAxisLineStyles?: LineStyles;\\n  yAxisLineStyles?: LineStyles;\\n  xTickLineStyles?: LineStyles;\\n  yTickLineStyles?: LineStyles;\\n  tickLength: number;\\n\\n  // grid\\n  gridColor: string;\\n  gridColorDark: string; // used for axis baseline if x/yxAxisLineStyles not set\\n  gridStyles?: CSSProperties;\\n});\\n\\n() => <XYChart theme={customTheme} />\\n```\\n\\n</details>\\n\\n<details>\\n\\n<summary>Tooltips</summary>\\n\\n`@visx/tooltip` `Tooltip`s are integrated into `@visx/xychart`, and should be rendered as a child of\\n`XYChart` (or a child where `TooltipContext` is provided).\\n\\n**`Tooltip` positioning** is handled by the `Tooltip` itself, based on `TooltipContext`. `Tooltip`\\nis rendered inside a `Portal`, avoiding clipping by parent DOM elements with higher z-index\\ncontexts. See the API below for a full list of `props` to support additional behavior, such as\\nsnapping to data point positions and rendering cross-hairs.\\n\\n**`Tooltip` content** is controlled by the specified `prop.renderTooltip` which has access to:\\n\\n- `tooltipData.nearestDatum` – the globally closest `Datum`, **across all** `Series`'s `dataKey`s\\n- `tooltipData.datumByKey` – the closest `Datum` **for each** `Series`'s `dataKey`; this enables\\n  \\\"shared tooltips\\\" where you can render the nearest data point for each `Series`.\\n- a shared `colorScale` which maps `Series`'s `dataKey`s to `theme` colors\\n\\n</details>\\n\\n<details>\\n\\n<summary>Event handlers</summary>\\n\\nThe following `PointerEvent`s (handling both `MouseEvent`s and `TouchEvent`s) are currently\\nsupported. They may be set on individual `Series` components (e.g.,\\n`<BarSeries onPointerMove={() => ...} />`), or at the chart level (e.g.,\\n`<XYChart onPointerMove={() => {}} />`) in which case they are invoked once for _every_ `*Series`.\\nTo **disable** event emitting for any `Series` set `<*Series enableEvents=false />`.\\n\\nBelow, `HandlerParms` has the following type signature:\\n\\n```ts\\ntype EventHandlerParams<Datum> = {\\n  datum: Datum; // nearest Datum to event, for Series with `dataKey=key`\\n  distanceX: number; // x distance between event and Datum, in px\\n  distanceY;: number; // y distance between event and Datum, in px\\n  event: React.PointerEvent | React.FocusEvent; // the event\\n  index: number; // index of Datum in Series `data` array\\n  key: string; // `dataKey` of Series to which `Datum` belongs\\n  svgPoint: { x: number; y: number }; // event position in svg-coordinates\\n};\\n```\\n\\n| Prop name       | Signature                                     | `XYChart` support | `*Series` support |\\n| --------------- | --------------------------------------------- | ----------------- | ----------------- |\\n| `onPointerMove` | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onPointerOut`  | `(event: React.PointerEvent) => void`         | ✅                | ✅                |\\n| `onPointerUp`   | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onFocus`       | `(params: EventHandlerParams<Datum>) => void` | ❌                | ✅                |\\n| `onBlur`        | `(event: React.TouchEvent) => void`           | ❌                | ✅                |\\n\\n</details>\\n\\n<details>\\n\\n<summary>Annotations</summary>\\n\\n`@visx/annotations` annotations are integrated into `@visx/xychart`, and allow you to annotate\\nindividual points, or x- or y-thresholds.\\n\\n</details>\\n\\n<hr />\\n\\n## Advanced usage\\n\\n<details>\\n\\n<summary>Examples</summary>\\n\\n`XYChart` is implemented using modularized `React.context` layers for scales, canvas dimensions,\\ndata, events, and tooltips which enables more advanced usage than many other chart-level\\nabstractions.\\n\\nBy default `XYChart` renders all context providers if a given context is not available, but you can\\nshare context across multiple `XYChart`s to implement functionality such as linked tooltips, shared\\nthemes, or shared data.\\n\\n- TODO - Custom chart background using theme and chart dimensions\\n- TODO - Linked tooltips\\n- TODO - Programmatically control tooltips\\n\\n</details>\\n\\n<details>\\n\\n<summary>DataContext</summary>\\n\\nThis context provides chart canvas dimensions (`width`, `height`, and `margin`), x/y/color scales,\\nand a data registry. The data registry includes data from all child `*Series`, and x/y/color scales\\nare updated accordingly accounting for canvas dimensions.\\n\\n</details>\\n\\n<details>\\n\\n<summary>ThemeContext</summary>\\n\\nThis context provides an `XYChart` theme.\\n\\n</details>\\n\\n<details>\\n\\n<summary>EventEmitterContext</summary>\\n\\nThis context provides an event publishing / subscription object which can be used via the\\n`useEventEmitter` hook. `Series` and `XYChart` events, including tooltip updates, are emitted and\\nhandled with through this context.\\n\\n```tsx\\nimport { useEventEmitter, EventEmitterContext } from '@visx/xychart';\\n\\nconst eventSourceId = 'optional-source-id-filter';\\n\\n() => (\\n  <EventEmitterContext>\\n    {/** emit events */}\\n    {() => {\\n      const emit = useEventEmitter();\\n      return (\\n        <button onPointerUp={event => emit('pointerup', event, eventSourceId)}>emit event</button>\\n      );\\n    }}\\n    {/** subscribe to events */}\\n    {() => {\\n      const [clickCount, setClickCount] = useState(0);\\n      useEventEmitter('pointerUp', () => setClickCount(clickCount + 1), [eventSourceId]);\\n\\n      return <div>Pressed {clickCount} times</div>;\\n    }}\\n  </EventEmitterContext>\\n);\\n```\\n\\n</details>\\n<details>\\n  <summary>TooltipContext</summary>\\n  This context provides access to `@visx/tooltip`s `useTooltip` state, including whether the tooltip\\n  is visible (`tooltipOpen`), tooltlip position (`tooltipLeft`, `tooltipTop`),\\n  `tooltipData: { nearestDatum, datumByKey }` described above, and functions to update context\\n  (`hideTooltip`, `showTooltip`, and `updateTooltip`).\\n</details>\\n\\n<hr />\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3Zpc3gteHljaGFydC9SZWFkbWUubWQ/ZjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGs5QkFBbTVCLDBEQUEwRCxzQkFBc0Isd0JBQXdCLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHdCQUF3QixLQUFLLHdCQUF3Qix5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsS0FBSywrQkFBK0IsNkJBQTZCLCtDQUErQyxJQUFJLFVBQVUsZ0JBQWdCLFVBQVUsa0JBQWtCLDJFQUEyRSxNQUFNLFdBQVcsRUFBRSxzREFBc0QsTUFBTSxZQUFZLFVBQVUsWUFBWSxVQUFVLHNEQUFzRCxNQUFNLFlBQVksVUFBVSxZQUFZLFVBQVUsbUpBQW1KLEVBQUUsMEJBQTBCLDhDQUE4QyxtREFBbUQsZ0JBQWdCLHlDQUF5QywrQkFBK0IsOENBQThDLGFBQWEsS0FBSyxhQUFhLCtDQUErQywwQkFBMEIsMEJBQTBCLHEvQ0FBcS9DLFVBQVUscW5CQUFxbkIsc0JBQXNCLHNCQUFzQixVQUFVLDRCQUE0Qiw0QkFBNEIsc0RBQXNELHlDQUF5QyxvREFBb0QscUdBQXFHLGlDQUFpQywrQkFBK0IsK0NBQStDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLHVCQUF1QixtQ0FBbUMsMEJBQTBCLHVGQUF1RixHQUFHLEVBQUUsMEJBQTBCLFlBQVksazJCQUFrMkIsZ2JBQWdiLFVBQVUsOERBQThELFNBQVMsOFBBQThQLGlCQUFpQiwrRUFBK0UsMkRBQTJELFNBQVMsOEZBQThGLCtCQUErQix5REFBeUQsK0RBQStELFdBQVcsYUFBYSx5Q0FBeUMsbTBFQUFtMEUsdUNBQXVDLHNCQUFzQixzREFBc0QsMkNBQTJDLG1CQUFtQixPQUFPLE9BQU8sdUNBQXVDLCtDQUErQyxpREFBaUQsOEJBQThCLFFBQVEsT0FBTywyQkFBMkIsT0FBTyxPQUFPLHdEQUF3RCwyRkFBMkYsK0JBQStCLFdBQVcsYUFBYSxRQUFRLDhCQUE4Qiw0UUFBNFEsMkJBQTJCLG1JQUFtSSIsImZpbGUiOiIuLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuLi92aXN4LXh5Y2hhcnQvUmVhZG1lLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjIEB2aXN4L3h5Y2hhcnRcXG5cXG5JbiBjb250cmFzdCB0byBvdGhlciBgdmlzeGAgcGFja2FnZXMgd2hpY2ggYXJlIGxvdy1sZXZlbCwgdGhpcyBwYWNrYWdlIHNlZWtzIHRvIGFic3RyYWN0IHNvbWUgb2YgdGhlXFxuY29tcGxleGl0eSBvZiBjb21tb24gdmlzdWFsaXphdGlvbiBlbmdpbmVlcmluZywgYW5kIGV4cG9zZXMgYSAqKmhpZ2gtbGV2ZWwqKiB4LHkgKGNhcnRlc2lhblxcbmNvb3JkaW5hdGUpIGNoYXJ0IEFQSS4gSG93ZXZlciwgaXQgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9kdWxhcml6ZWQgYFJlYWN0LmNvbnRleHRgIGxheWVycyBmb3JcXG50aGVtZSwgY2FudmFzIGRpbWVuc2lvbnMsIHgveS9jb2xvciBzY2FsZXMsIGRhdGEsIGV2ZW50cywgYW5kIHRvb2x0aXBzIHdoaWNoIGFsbG93cyBmb3IgbW9yZVxcbmV4cHJlc3Npdml0eSBhbmQgYWR2YW5jZWQgdXNlIGNhc2VzLlxcblxcbk91dCBvZiB0aGUgYm94IGl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XFxuXFxuLSBcXFxcKiBtYW55IGNvbW1vbiBgPCpTZXJpZXMgLz5gIHR5cGVzIChhbmltYXRlZCBvciBub3QpIHN1Y2ggYXMgbGluZXMsIGJhcnMsIGV0Yy5cXG4tIFxcXFwqIGA8QXhpcyAvPmAgKGFuaW1hdGVkIG9yIG5vdClcXG4tIFxcXFwqIGA8R3JpZCAvPmAgKGFuaW1hdGVkIG9yIG5vdClcXG4tIFxcXFwqIGA8QW5ub3RhdGlvbiAvPmAgKGFuaW1hdGVkIG9yIG5vdClcXG4tIFxcXFwqIGA8VG9vbHRpcCAvPmBcXG4tIFxcXFwqIGB0aGVtZWBpbmdcXG5cXG5UaGUgZm9sbG93aW5nIGlsbHVzdHJhdGVzIGJhc2ljIHVzYWdlIGZvciBhbiBhbmltYXRlZCBsaW5lIGNoYXJ0IHdpdGggYSBib3R0b20gYEF4aXNgLCBgR3JpZGAsIGFuZFxcbmBUb29sdGlwYCwgdHJ5IGl0IG9uIGNvZGVzYW5kYm94IFtoZXJlXSh0b2RvLCBzaW1wbGlmeSBjb2RlIGJlbG93KTpcXG5cXG5gYGB0c3hcXG5pbXBvcnQgeyBBbmltYXRlZEF4aXMsIEFuaW1hdGVkR3JpZCwgQW5pbWF0ZWRMaW5lU2VyaWVzLCBYWUNoYXJ0IH0gZnJvbSAnQHZpc3gveHljaGFydCc7XFxuXFxuY29uc3QgZGF0YTEgPSBbXFxuICB7IHg6ICcyMDIwLTAxLTAxJywgeTogNTAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDInLCB5OiAxMCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wMycsIHk6IDIwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTA0JywgeTogMTAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDUnLCB5OiAwIH0sXFxuXTtcXG5cXG5jb25zdCBkYXRhMiA9IFtcXG4gIHsgeDogJzIwMjAtMDEtMDEnLCB5OiAzMCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wMicsIHk6IDQwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAzJywgeTogODAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDQnLCB5OiA3MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wNScsIHk6IDIwIH0sXFxuXTtcXG5cXG5jb25zdCB4QWNjZXNzb3IgPSBkID0+IGQueDtcXG5jb25zdCB5QWNjZXNzb3IgPSBkID0+IGQueTtcXG5cXG5jb25zdCByZW5kZXIgPSAoKSA9PiAoXFxuICA8WFlDaGFydCBoZWlnaHQ9ezMwMH0geFNjYWxlPXt7IHR5cGU6ICdiYW5kJyB9fSB5U2NhbGU9e3sgdHlwZTogJ2xpbmVhcicgfX0+XFxuICAgIDxBbmltYXRlZEF4aXMgb3JpZW50YXRpb249XFxcImJvdHRvbVxcXCIgLz5cXG4gICAgPEFuaW1hdGVkR3JpZCBjb2x1bW5zPXtmYWxzZX0gbnVtVGlja3M9ezR9IC8+XFxuICAgIDxBbmltYXRlZExpbmVTZXJpZXMgZGF0YUtleT1cXFwiTGluZSAxXFxcIiBkYXRhPXtkYXRhMX0geEFjY2Vzc29yPXt4QWNjZXNzb3J9IHlBY2Nlc3Nvcj17eUFjY2Vzc29yfSAvPlxcbiAgICA8QW5pbWF0ZWRMaW5lU2VyaWVzIGRhdGFLZXk9XFxcIkxpbmUgMlxcXCIgZGF0YT17ZGF0YTJ9IHhBY2Nlc3Nvcj17eEFjY2Vzc29yfSB5QWNjZXNzb3I9e3lBY2Nlc3Nvcn0gLz5cXG4gICAgPFRvb2x0aXBcXG4gICAgICBzbmFwVG9vbHRpcFRvRGF0dW1YXFxuICAgICAgc25hcFRvb2x0aXBUb0RhdHVtWVxcbiAgICAgIHNob3dWZXJ0aWNhbENyb3NzaGFpclxcbiAgICAgIHNob3dTZXJpZXNHbHlwaHNcXG4gICAgICByZW5kZXJUb29sdGlwPXsoeyB0b29sdGlwRGF0YSwgY29sb3JTY2FsZSB9KSA9PiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBjb2xvclNjYWxlKHRvb2x0aXBEYXRhLm5lYXJlc3REYXR1bS5rZXkpIH19PlxcbiAgICAgICAgICAgIHt0b29sdGlwRGF0YS5uZWFyZXN0RGF0dW0ua2V5IHx8ICdObyBrZXknfVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAge3Rvb2x0aXBEYXRhLm5lYXJlc3REYXR1bS5kYXR1bS54IHx8ICdObyBkYXRlJ31cXG4gICAgICAgICAgeycsICd9XFxuICAgICAgICAgIHt0b29sdGlwRGF0YS5uZWFyZXN0RGF0dW0uZGF0dW0ueSB8fCAnTm8gdmFsdWUnfVxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgKX1cXG4gICAgLz5cXG4gIDwvWFlDaGFydD5cXG4pO1xcbmBgYFxcblxcbkV4cGFuZCBzZWN0aW9ucyBmb3IgbW9yZSwgb3IgZXhwbG9yZSB0aGUgZGV0YWlsZWQgQVBJIGJlbG93LlxcblxcbjxociAvPlxcblxcbiMjIEJhc2ljIHVzYWdlXFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+U2VyaWVzIHR5cGVzPC9zdW1tYXJ5PlxcblxcblRoZSBmb2xsb3dpbmcgYFNlcmllc2AgdHlwZXMgYXJlIGN1cnJlbnRseSBzdXBwb3J0ZWQgYW5kIHdlIGFyZSBoYXBweSB0byByZXZpZXcgb3IgY29uc2lkZXJcXG5hZGRpdGlvbmFsIFNlcmllcyB0eXBlcyBpbiB0aGUgZnV0dXJlLlxcblxcbnwgQ29tcG9uZW50IG5hbWUgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVXNhZ2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxufCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcXG58IChBbmltYXRlZClBcmVhU2VyaWVzICB8IENvbm5lY3QgZGF0YSBwb2ludHMgd2l0aCBhIGA8cGF0aCAvPmAsIHdpdGggYSBjb2xvciBmaWxsIHRvIHRoZSB6ZXJvIGJhc2VsaW5lICAgICAgICAgICAgICAgICAgICB8IGA8QXJlYVNlcmllcyAvPmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgKEFuaW1hdGVkKUJhclNlcmllcyAgIHwgUmVuZGVyIGEgYDxyZWN0IC8+YCBmb3IgZWFjaCBkYXRhIHBvaW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDxCYXJTZXJpZXMgLz5gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxufCAoQW5pbWF0ZWQpQmFyR3JvdXAgICAgfCBHcm91cCBtdWx0aXBsZSBjaGlsZCBgPEJhclNlcmllcyAvPmAgdmFsdWVzIHRvZ2V0aGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgPEJhckdyb3VwPjxCYXJTZXJpZXMgLz48QmFyU2VyaWVzIC8+Li4uPC9CYXJHcm91cD5gIHxcXG58IChBbmltYXRlZClCYXJTdGFjayAgICB8IFN0YWNrIG11bHRpcGxlIGNoaWxkIGA8QmFyU2VyaWVzIC8+YCB2YWx1ZXMgdG9nZXRoZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGA8QmFyU3RhY2s+PEJhclNlcmllcyAvPjxCYXJTZXJpZXMgLz4uLi48L0JhclN0YWNrPmAgfCAgfFxcbnwgKEFuaW1hdGVkKUdseXBoU2VyaWVzIHwgUmVuZGVyIGEgYEdseXBoYCAoYW55IHNoYXBlLCBkZWZhdWx0cyB0byBgPGNpcmNsZSAvPmApIGZvciBlYWNoIGRhdGEgcG9pbnQsIGUuZy4sIGEgc2NhdHRlciBwbG90IHwgYDxHbHlwaFNlcmllcyByZW5kZXJHbHlwaD17KCkgPT4gLi4ufSAvPmAgICAgICAgICAgICB8XFxufCAoQW5pbWF0ZWQpTGluZVNlcmllcyAgfCBDb25uZWN0IGRhdGEgcG9pbnRzIHdpdGggYSBgPHBhdGg+YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgPEdseXBoU2VyaWVzIC8+YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcXG5cXG5BbGwgYFNlcmllc2AgaGF2ZSBhbmltYXRlZCBhbmQgbm9uLWFuaW1hdGVkIHZhcmlhbnRzIHRvIGdpdmUgeW91IG1vcmUgY29udHJvbCBvdmVyIHlvdXIgYnVuZGxlIHNpemUsXFxuc3VwcG9ydCBtaXNzaW5nIChgbnVsbGApIGRhdGEsIGFuZCBjYW4gYmUgcmVuZGVyZWQgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXFxuXFxuPC9kZXRhaWxzPlxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PlRoZW1pbmc8L3N1bW1hcnk+XFxuXFxuRGVmYXVsdCBgbGlnaHRUaGVtZWAgYW5kIGBkYXJrVGhlbWVgIHRoZW1lcyBhcmUgZXhwb3J0ZWQgZnJvbSBgQHZpc3gveHljaGFydGAgYW5kIHRoZSB1dGlsaXR5XFxuYGJ1aWxkQ2hhcnRUaGVtZWAgaXMgZXhwb3J0ZWQgdG8gc3VwcG9ydCBlYXN5IGNyZWF0aW9uIG9mIGN1c3RvbSB0aGVtZXMuXFxuXFxuYGBgdHNcXG5pbXBvcnQgeyBidWlsZFRoZW1lLCBYWUNoYXJ0IH0gZnJvbSAnQHZpc3gveHljaGFydCc7XFxuaW1wb3J0IHsgVGV4dFByb3BzIGFzIFNWR1RleHRQcm9wcyB9IGZyb20gJ0B2aXN4L3RleHQvbGliL1RleHQnOyAvLyBqdXN0IGZvciB0eXBlc1xcblxcbmNvbnN0IGN1c3RvbVRoZW1lID0gYnVpbGRUaGVtZSh7XFxuICAvLyBjb2xvcnNcXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nOyAvLyB1c2VkIGJ5IFRvb2x0aXAsIEFubm90YXRpb25cXG4gIGNvbG9yczogc3RyaW5nW107IC8vIGNhdGVnb3JpY2FsIGNvbG9ycywgbWFwcGVkIHRvIHNlcmllcyB2aWEgYGRhdGFLZXlgc1xcblxcbiAgLy8gbGFiZWxzXFxuICBzdmdMYWJlbEJpZz86IFNWR1RleHRQcm9wcztcXG4gIHN2Z0xhYmVsU21hbGw/OiBTVkdUZXh0UHJvcHM7XFxuICBodG1sTGFiZWw/OiBIVE1MVGV4dFN0eWxlcztcXG5cXG4gIC8vIGxpbmVzXFxuICB4QXhpc0xpbmVTdHlsZXM/OiBMaW5lU3R5bGVzO1xcbiAgeUF4aXNMaW5lU3R5bGVzPzogTGluZVN0eWxlcztcXG4gIHhUaWNrTGluZVN0eWxlcz86IExpbmVTdHlsZXM7XFxuICB5VGlja0xpbmVTdHlsZXM/OiBMaW5lU3R5bGVzO1xcbiAgdGlja0xlbmd0aDogbnVtYmVyO1xcblxcbiAgLy8gZ3JpZFxcbiAgZ3JpZENvbG9yOiBzdHJpbmc7XFxuICBncmlkQ29sb3JEYXJrOiBzdHJpbmc7IC8vIHVzZWQgZm9yIGF4aXMgYmFzZWxpbmUgaWYgeC95eEF4aXNMaW5lU3R5bGVzIG5vdCBzZXRcXG4gIGdyaWRTdHlsZXM/OiBDU1NQcm9wZXJ0aWVzO1xcbn0pO1xcblxcbigpID0+IDxYWUNoYXJ0IHRoZW1lPXtjdXN0b21UaGVtZX0gLz5cXG5gYGBcXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+VG9vbHRpcHM8L3N1bW1hcnk+XFxuXFxuYEB2aXN4L3Rvb2x0aXBgIGBUb29sdGlwYHMgYXJlIGludGVncmF0ZWQgaW50byBgQHZpc3gveHljaGFydGAsIGFuZCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYSBjaGlsZCBvZlxcbmBYWUNoYXJ0YCAob3IgYSBjaGlsZCB3aGVyZSBgVG9vbHRpcENvbnRleHRgIGlzIHByb3ZpZGVkKS5cXG5cXG4qKmBUb29sdGlwYCBwb3NpdGlvbmluZyoqIGlzIGhhbmRsZWQgYnkgdGhlIGBUb29sdGlwYCBpdHNlbGYsIGJhc2VkIG9uIGBUb29sdGlwQ29udGV4dGAuIGBUb29sdGlwYFxcbmlzIHJlbmRlcmVkIGluc2lkZSBhIGBQb3J0YWxgLCBhdm9pZGluZyBjbGlwcGluZyBieSBwYXJlbnQgRE9NIGVsZW1lbnRzIHdpdGggaGlnaGVyIHotaW5kZXhcXG5jb250ZXh0cy4gU2VlIHRoZSBBUEkgYmVsb3cgZm9yIGEgZnVsbCBsaXN0IG9mIGBwcm9wc2AgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIGJlaGF2aW9yLCBzdWNoIGFzXFxuc25hcHBpbmcgdG8gZGF0YSBwb2ludCBwb3NpdGlvbnMgYW5kIHJlbmRlcmluZyBjcm9zcy1oYWlycy5cXG5cXG4qKmBUb29sdGlwYCBjb250ZW50KiogaXMgY29udHJvbGxlZCBieSB0aGUgc3BlY2lmaWVkIGBwcm9wLnJlbmRlclRvb2x0aXBgIHdoaWNoIGhhcyBhY2Nlc3MgdG86XFxuXFxuLSBgdG9vbHRpcERhdGEubmVhcmVzdERhdHVtYCDigJMgdGhlIGdsb2JhbGx5IGNsb3Nlc3QgYERhdHVtYCwgKiphY3Jvc3MgYWxsKiogYFNlcmllc2AncyBgZGF0YUtleWBzXFxuLSBgdG9vbHRpcERhdGEuZGF0dW1CeUtleWAg4oCTIHRoZSBjbG9zZXN0IGBEYXR1bWAgKipmb3IgZWFjaCoqIGBTZXJpZXNgJ3MgYGRhdGFLZXlgOyB0aGlzIGVuYWJsZXNcXG4gIFxcXCJzaGFyZWQgdG9vbHRpcHNcXFwiIHdoZXJlIHlvdSBjYW4gcmVuZGVyIHRoZSBuZWFyZXN0IGRhdGEgcG9pbnQgZm9yIGVhY2ggYFNlcmllc2AuXFxuLSBhIHNoYXJlZCBgY29sb3JTY2FsZWAgd2hpY2ggbWFwcyBgU2VyaWVzYCdzIGBkYXRhS2V5YHMgdG8gYHRoZW1lYCBjb2xvcnNcXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+RXZlbnQgaGFuZGxlcnM8L3N1bW1hcnk+XFxuXFxuVGhlIGZvbGxvd2luZyBgUG9pbnRlckV2ZW50YHMgKGhhbmRsaW5nIGJvdGggYE1vdXNlRXZlbnRgcyBhbmQgYFRvdWNoRXZlbnRgcykgYXJlIGN1cnJlbnRseVxcbnN1cHBvcnRlZC4gVGhleSBtYXkgYmUgc2V0IG9uIGluZGl2aWR1YWwgYFNlcmllc2AgY29tcG9uZW50cyAoZS5nLixcXG5gPEJhclNlcmllcyBvblBvaW50ZXJNb3ZlPXsoKSA9PiAuLi59IC8+YCksIG9yIGF0IHRoZSBjaGFydCBsZXZlbCAoZS5nLixcXG5gPFhZQ2hhcnQgb25Qb2ludGVyTW92ZT17KCkgPT4ge319IC8+YCkgaW4gd2hpY2ggY2FzZSB0aGV5IGFyZSBpbnZva2VkIG9uY2UgZm9yIF9ldmVyeV8gYCpTZXJpZXNgLlxcblRvICoqZGlzYWJsZSoqIGV2ZW50IGVtaXR0aW5nIGZvciBhbnkgYFNlcmllc2Agc2V0IGA8KlNlcmllcyBlbmFibGVFdmVudHM9ZmFsc2UgLz5gLlxcblxcbkJlbG93LCBgSGFuZGxlclBhcm1zYCBoYXMgdGhlIGZvbGxvd2luZyB0eXBlIHNpZ25hdHVyZTpcXG5cXG5gYGB0c1xcbnR5cGUgRXZlbnRIYW5kbGVyUGFyYW1zPERhdHVtPiA9IHtcXG4gIGRhdHVtOiBEYXR1bTsgLy8gbmVhcmVzdCBEYXR1bSB0byBldmVudCwgZm9yIFNlcmllcyB3aXRoIGBkYXRhS2V5PWtleWBcXG4gIGRpc3RhbmNlWDogbnVtYmVyOyAvLyB4IGRpc3RhbmNlIGJldHdlZW4gZXZlbnQgYW5kIERhdHVtLCBpbiBweFxcbiAgZGlzdGFuY2VZOzogbnVtYmVyOyAvLyB5IGRpc3RhbmNlIGJldHdlZW4gZXZlbnQgYW5kIERhdHVtLCBpbiBweFxcbiAgZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudCB8IFJlYWN0LkZvY3VzRXZlbnQ7IC8vIHRoZSBldmVudFxcbiAgaW5kZXg6IG51bWJlcjsgLy8gaW5kZXggb2YgRGF0dW0gaW4gU2VyaWVzIGBkYXRhYCBhcnJheVxcbiAga2V5OiBzdHJpbmc7IC8vIGBkYXRhS2V5YCBvZiBTZXJpZXMgdG8gd2hpY2ggYERhdHVtYCBiZWxvbmdzXFxuICBzdmdQb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9OyAvLyBldmVudCBwb3NpdGlvbiBpbiBzdmctY29vcmRpbmF0ZXNcXG59O1xcbmBgYFxcblxcbnwgUHJvcCBuYW1lICAgICAgIHwgU2lnbmF0dXJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYFhZQ2hhcnRgIHN1cHBvcnQgfCBgKlNlcmllc2Agc3VwcG9ydCB8XFxufCAtLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tIHxcXG58IGBvblBvaW50ZXJNb3ZlYCB8IGAocGFyYW1zOiBFdmVudEhhbmRsZXJQYXJhbXM8RGF0dW0+KSA9PiB2b2lkYCB8IOKchSAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxufCBgb25Qb2ludGVyT3V0YCAgfCBgKGV2ZW50OiBSZWFjdC5Qb2ludGVyRXZlbnQpID0+IHZvaWRgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcbnwgYG9uUG9pbnRlclVwYCAgIHwgYChwYXJhbXM6IEV2ZW50SGFuZGxlclBhcmFtczxEYXR1bT4pID0+IHZvaWRgIHwg4pyFICAgICAgICAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHxcXG58IGBvbkZvY3VzYCAgICAgICB8IGAocGFyYW1zOiBFdmVudEhhbmRsZXJQYXJhbXM8RGF0dW0+KSA9PiB2b2lkYCB8IOKdjCAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxufCBgb25CbHVyYCAgICAgICAgfCBgKGV2ZW50OiBSZWFjdC5Ub3VjaEV2ZW50KSA9PiB2b2lkYCAgICAgICAgICAgfCDinYwgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcblxcbjwvZGV0YWlscz5cXG5cXG48ZGV0YWlscz5cXG5cXG48c3VtbWFyeT5Bbm5vdGF0aW9uczwvc3VtbWFyeT5cXG5cXG5gQHZpc3gvYW5ub3RhdGlvbnNgIGFubm90YXRpb25zIGFyZSBpbnRlZ3JhdGVkIGludG8gYEB2aXN4L3h5Y2hhcnRgLCBhbmQgYWxsb3cgeW91IHRvIGFubm90YXRlXFxuaW5kaXZpZHVhbCBwb2ludHMsIG9yIHgtIG9yIHktdGhyZXNob2xkcy5cXG5cXG48L2RldGFpbHM+XFxuXFxuPGhyIC8+XFxuXFxuIyMgQWR2YW5jZWQgdXNhZ2VcXG5cXG48ZGV0YWlscz5cXG5cXG48c3VtbWFyeT5FeGFtcGxlczwvc3VtbWFyeT5cXG5cXG5gWFlDaGFydGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9kdWxhcml6ZWQgYFJlYWN0LmNvbnRleHRgIGxheWVycyBmb3Igc2NhbGVzLCBjYW52YXMgZGltZW5zaW9ucyxcXG5kYXRhLCBldmVudHMsIGFuZCB0b29sdGlwcyB3aGljaCBlbmFibGVzIG1vcmUgYWR2YW5jZWQgdXNhZ2UgdGhhbiBtYW55IG90aGVyIGNoYXJ0LWxldmVsXFxuYWJzdHJhY3Rpb25zLlxcblxcbkJ5IGRlZmF1bHQgYFhZQ2hhcnRgIHJlbmRlcnMgYWxsIGNvbnRleHQgcHJvdmlkZXJzIGlmIGEgZ2l2ZW4gY29udGV4dCBpcyBub3QgYXZhaWxhYmxlLCBidXQgeW91IGNhblxcbnNoYXJlIGNvbnRleHQgYWNyb3NzIG11bHRpcGxlIGBYWUNoYXJ0YHMgdG8gaW1wbGVtZW50IGZ1bmN0aW9uYWxpdHkgc3VjaCBhcyBsaW5rZWQgdG9vbHRpcHMsIHNoYXJlZFxcbnRoZW1lcywgb3Igc2hhcmVkIGRhdGEuXFxuXFxuLSBUT0RPIC0gQ3VzdG9tIGNoYXJ0IGJhY2tncm91bmQgdXNpbmcgdGhlbWUgYW5kIGNoYXJ0IGRpbWVuc2lvbnNcXG4tIFRPRE8gLSBMaW5rZWQgdG9vbHRpcHNcXG4tIFRPRE8gLSBQcm9ncmFtbWF0aWNhbGx5IGNvbnRyb2wgdG9vbHRpcHNcXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+RGF0YUNvbnRleHQ8L3N1bW1hcnk+XFxuXFxuVGhpcyBjb250ZXh0IHByb3ZpZGVzIGNoYXJ0IGNhbnZhcyBkaW1lbnNpb25zIChgd2lkdGhgLCBgaGVpZ2h0YCwgYW5kIGBtYXJnaW5gKSwgeC95L2NvbG9yIHNjYWxlcyxcXG5hbmQgYSBkYXRhIHJlZ2lzdHJ5LiBUaGUgZGF0YSByZWdpc3RyeSBpbmNsdWRlcyBkYXRhIGZyb20gYWxsIGNoaWxkIGAqU2VyaWVzYCwgYW5kIHgveS9jb2xvciBzY2FsZXNcXG5hcmUgdXBkYXRlZCBhY2NvcmRpbmdseSBhY2NvdW50aW5nIGZvciBjYW52YXMgZGltZW5zaW9ucy5cXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+VGhlbWVDb250ZXh0PC9zdW1tYXJ5PlxcblxcblRoaXMgY29udGV4dCBwcm92aWRlcyBhbiBgWFlDaGFydGAgdGhlbWUuXFxuXFxuPC9kZXRhaWxzPlxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PkV2ZW50RW1pdHRlckNvbnRleHQ8L3N1bW1hcnk+XFxuXFxuVGhpcyBjb250ZXh0IHByb3ZpZGVzIGFuIGV2ZW50IHB1Ymxpc2hpbmcgLyBzdWJzY3JpcHRpb24gb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHZpYSB0aGVcXG5gdXNlRXZlbnRFbWl0dGVyYCBob29rLiBgU2VyaWVzYCBhbmQgYFhZQ2hhcnRgIGV2ZW50cywgaW5jbHVkaW5nIHRvb2x0aXAgdXBkYXRlcywgYXJlIGVtaXR0ZWQgYW5kXFxuaGFuZGxlZCB3aXRoIHRocm91Z2ggdGhpcyBjb250ZXh0LlxcblxcbmBgYHRzeFxcbmltcG9ydCB7IHVzZUV2ZW50RW1pdHRlciwgRXZlbnRFbWl0dGVyQ29udGV4dCB9IGZyb20gJ0B2aXN4L3h5Y2hhcnQnO1xcblxcbmNvbnN0IGV2ZW50U291cmNlSWQgPSAnb3B0aW9uYWwtc291cmNlLWlkLWZpbHRlcic7XFxuXFxuKCkgPT4gKFxcbiAgPEV2ZW50RW1pdHRlckNvbnRleHQ+XFxuICAgIHsvKiogZW1pdCBldmVudHMgKi99XFxuICAgIHsoKSA9PiB7XFxuICAgICAgY29uc3QgZW1pdCA9IHVzZUV2ZW50RW1pdHRlcigpO1xcbiAgICAgIHJldHVybiAoXFxuICAgICAgICA8YnV0dG9uIG9uUG9pbnRlclVwPXtldmVudCA9PiBlbWl0KCdwb2ludGVydXAnLCBldmVudCwgZXZlbnRTb3VyY2VJZCl9PmVtaXQgZXZlbnQ8L2J1dHRvbj5cXG4gICAgICApO1xcbiAgICB9fVxcbiAgICB7LyoqIHN1YnNjcmliZSB0byBldmVudHMgKi99XFxuICAgIHsoKSA9PiB7XFxuICAgICAgY29uc3QgW2NsaWNrQ291bnQsIHNldENsaWNrQ291bnRdID0gdXNlU3RhdGUoMCk7XFxuICAgICAgdXNlRXZlbnRFbWl0dGVyKCdwb2ludGVyVXAnLCAoKSA9PiBzZXRDbGlja0NvdW50KGNsaWNrQ291bnQgKyAxKSwgW2V2ZW50U291cmNlSWRdKTtcXG5cXG4gICAgICByZXR1cm4gPGRpdj5QcmVzc2VkIHtjbGlja0NvdW50fSB0aW1lczwvZGl2PjtcXG4gICAgfX1cXG4gIDwvRXZlbnRFbWl0dGVyQ29udGV4dD5cXG4pO1xcbmBgYFxcblxcbjwvZGV0YWlscz5cXG48ZGV0YWlscz5cXG4gIDxzdW1tYXJ5PlRvb2x0aXBDb250ZXh0PC9zdW1tYXJ5PlxcbiAgVGhpcyBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byBgQHZpc3gvdG9vbHRpcGBzIGB1c2VUb29sdGlwYCBzdGF0ZSwgaW5jbHVkaW5nIHdoZXRoZXIgdGhlIHRvb2x0aXBcXG4gIGlzIHZpc2libGUgKGB0b29sdGlwT3BlbmApLCB0b29sdGxpcCBwb3NpdGlvbiAoYHRvb2x0aXBMZWZ0YCwgYHRvb2x0aXBUb3BgKSxcXG4gIGB0b29sdGlwRGF0YTogeyBuZWFyZXN0RGF0dW0sIGRhdHVtQnlLZXkgfWAgZGVzY3JpYmVkIGFib3ZlLCBhbmQgZnVuY3Rpb25zIHRvIHVwZGF0ZSBjb250ZXh0XFxuICAoYGhpZGVUb29sdGlwYCwgYHNob3dUb29sdGlwYCwgYW5kIGB1cGRhdGVUb29sdGlwYCkuXFxuPC9kZXRhaWxzPlxcblxcbjxociAvPlxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md\n");

/***/ })

})