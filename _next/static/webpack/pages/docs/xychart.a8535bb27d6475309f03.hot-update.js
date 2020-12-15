webpackHotUpdate_N_E("pages/docs/xychart",{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md":
/*!**********************************************************************************************************!*\
  !*** /Users/christopher-williams/dev/visx/node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"# @visx/xychart\\n\\nIn contrast to other `visx` packages which are low-level, this package seeks to abstract some of the\\ncomplexity of common visualization engineering, and exposes a **high-level** x,y (cartesian\\ncoordinate) chart API. However, it is implemented using modularized `React.context` layers for\\ntheme, canvas dimensions, x/y/color scales, data, events, and tooltips which allows for more\\nexpressivity and advanced use cases.\\n\\nOut of the box it supports the following:\\n\\n- many common `<*Series />` types (animated or not) such as lines, bars, etc. (can be easily\\n  extended to support more in the future)\\n- `<Axis />` (animated or not)\\n- `<Grid />` (animated or not)\\n- `<Annotation />` (animated or not)\\n- `<Tooltip />`\\n- `theme`ing\\n\\nSee the comprehensive API below for more details.\\n\\n<hr />\\n\\n## Basic usage\\n\\nThe following illustrates basic usage for an animated line chart with a bottom `Axis`, `Grid`, and\\n`Tooltip`, try it on codesandbox [here](todo, simplify code below):\\n\\n```tsx\\nimport { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, XYChart } from '@visx/xychart';\\n\\nconst data1 = [\\n  { x: '2020-01-01', y: 50 },\\n  { x: '2020-01-02', y: 10 },\\n  { x: '2020-01-03', y: 20 },\\n  { x: '2020-01-04', y: 10 },\\n  { x: '2020-01-05', y: 0 },\\n];\\n\\nconst data2 = [\\n  { x: '2020-01-01', y: 30 },\\n  { x: '2020-01-02', y: 40 },\\n  { x: '2020-01-03', y: 80 },\\n  { x: '2020-01-04', y: 70 },\\n  { x: '2020-01-05', y: 20 },\\n];\\n\\nconst xAccessor = d => d.x;\\nconst yAccessor = d => d.y;\\n\\nconst render = () => (\\n  <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>\\n    <AnimatedAxis orientation=\\\"bottom\\\" />\\n    <AnimatedGrid columns={false} numTicks={4} />\\n    <AnimatedLineSeries dataKey=\\\"Line 1\\\" data={data1} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <AnimatedLineSeries dataKey=\\\"Line 2\\\" data={data2} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <Tooltip\\n      snapTooltipToDatumX\\n      snapTooltipToDatumY\\n      showVerticalCrosshair\\n      showSeriesGlyphs\\n      renderTooltip={({ tooltipData, colorScale }) => (\\n        <div>\\n          <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>\\n            {tooltipData.nearestDatum.key || 'No key'}\\n          </div>\\n          {tooltipData.nearestDatum.datum.x || 'No date'}\\n          {', '}\\n          {tooltipData.nearestDatum.datum.y || 'No value'}\\n        </div>\\n      )}\\n    />\\n  </XYChart>\\n);\\n```\\n\\nExpand sections for more, or explore the detailed API below.\\n\\n<details>\\n\\n<summary>Series types</summary>\\n\\n### Series types\\n\\nThe following `Series` types are currently supported and we are happy to review or consider\\nadditional Series types in the future.\\n\\n| Component name        | Description                                                                                      | Usage                                                |\\n| --------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |\\n| (Animated)AreaSeries  | Connect data points with a `<path />`, with a color fill to the zero baseline                    | `<AreaSeries />`                                     |\\n| (Animated)BarSeries   | Render a `<rect />` for each data point                                                          | `<BarSeries />`                                      |\\n| (Animated)BarGroup    | Group multiple child `<BarSeries />` values together                                             | `<BarGroup><BarSeries /><BarSeries />...</BarGroup>` |\\n| (Animated)BarStack    | Stack multiple child `<BarSeries />` values together                                             | `<BarStack><BarSeries /><BarSeries />...</BarStack>` |  |\\n| (Animated)GlyphSeries | Render a `Glyph` (any shape, defaults to `<circle />`) for each data point, e.g., a scatter plot | `<GlyphSeries renderGlyph={() => ...} />`            |\\n| (Animated)LineSeries  | Connect data points with a `<path>`                                                              | `<GlyphSeries />`                                    |\\n\\nAll `Series` have animated and non-animated variants to give you more control over your bundle size,\\nsupport missing (`null`) data, and can be rendered vertically or horizontally.\\n\\n</details>\\n\\n<details>\\n\\n<summary>Theming</summary>\\n\\n### Theming\\n\\nDefault `lightTheme` and `darkTheme` themes are exported from `@visx/xychart` and the utility\\n`buildChartTheme` is exported to support easy creation of custom themes.\\n\\n```ts\\nimport { buildTheme, XYChart } from '@visx/xychart';\\nimport { TextProps as SVGTextProps } from '@visx/text/lib/Text'; // just for types\\n\\nconst customTheme = buildTheme({\\n  // colors\\n  backgroundColor: string; // used by Tooltip, Annotation\\n  colors: string[]; // categorical colors, mapped to series via `dataKey`s\\n\\n  // labels\\n  svgLabelBig?: SVGTextProps;\\n  svgLabelSmall?: SVGTextProps;\\n  htmlLabel?: HTMLTextStyles;\\n\\n  // lines\\n  xAxisLineStyles?: LineStyles;\\n  yAxisLineStyles?: LineStyles;\\n  xTickLineStyles?: LineStyles;\\n  yTickLineStyles?: LineStyles;\\n  tickLength: number;\\n\\n  // grid\\n  gridColor: string;\\n  gridColorDark: string; // used for axis baseline if x/yxAxisLineStyles not set\\n  gridStyles?: CSSProperties;\\n});\\n\\n() => <XYChart theme={customTheme} />\\n```\\n\\n</details>\\n\\n<details>\\n\\n<summary>Tooltips</summary>\\n\\n### Tooltips\\n\\n`@visx/tooltip` `Tooltip`s are integrated into `@visx/xychart`, and should be rendered as a child of\\n`XYChart` (or a child where `TooltipContext` is provided).\\n\\n**`Tooltip` positioning** is handled by the `Tooltip` itself, based on `TooltipContext`. `Tooltip`\\nis rendered inside a `Portal`, avoiding clipping by parent DOM elements with higher z-index\\ncontexts. See the API below for a full list of `props` to support additional behavior, such as\\nsnapping to data point positions and rendering cross-hairs.\\n\\n**`Tooltip` content** is controlled by the specified `prop.renderTooltip` which has access to:\\n\\n- `tooltipData.nearestDatum` – the globally closest `Datum`, **across all** `Series`'s `dataKey`s\\n- `tooltipData.datumByKey` – the closest `Datum` **for each** `Series`'s `dataKey`; this enables\\n  \\\"shared tooltips\\\" where you can render the nearest data point for each `Series`.\\n- a shared `colorScale` which maps `Series`'s `dataKey`s to `theme` colors\\n\\n</details>\\n\\n<details>\\n\\n  <summary>Event handlers</summary>\\n\\n### Event handlers\\n\\nThe following `PointerEvent`s (handling both `MouseEvent`s and `TouchEvent`s) are currently\\nsupported. They may be set on individual `Series` components (e.g.,\\n`<BarSeries onPointerMove={() => ...} />`), or at the chart level (e.g.,\\n`<XYChart onPointerMove={() => {}} />`) in which case they are invoked once for _every_ `*Series`.\\nTo **disable** event emitting for any `Series` set `<*Series enableEvents=false />`.\\n\\nBelow, `HandlerParms` has the following type signature:\\n\\n```ts\\ntype EventHandlerParams<Datum> = {\\n  datum: Datum; // nearest Datum to event, for Series with `dataKey=key`\\n  distanceX: number; // x distance between event and Datum, in px\\n  distanceY;: number; // y distance between event and Datum, in px\\n  event: React.PointerEvent | React.FocusEvent; // the event\\n  index: number; // index of Datum in Series `data` array\\n  key: string; // `dataKey` of Series to which `Datum` belongs\\n  svgPoint: { x: number; y: number }; // event position in svg-coordinates\\n};\\n```\\n\\n| Prop name       | Signature                                     | `XYChart` support | `*Series` support |\\n| --------------- | --------------------------------------------- | ----------------- | ----------------- |\\n| `onPointerMove` | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onPointerOut`  | `(event: React.PointerEvent) => void`         | ✅                | ✅                |\\n| `onPointerUp`   | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onFocus`       | `(params: EventHandlerParams<Datum>) => void` | ❌                | ✅                |\\n| `onBlur`        | `(event: React.TouchEvent) => void`           | ❌                | ✅                |\\n\\n  </details>\\n\\n  <details>\\n\\n  <summary>Annotations</summary>\\n\\n### Annotations\\n\\n`@visx/annotations` annotations are integrated into `@visx/xychart`, and allow you to annotate\\nindividual points, or x- or y-thresholds\\n\\n  </details>\\n\\n<details>\\n\\n  <details>\\n\\n  <summary>Advanced usage</summary>\\n\\n## Advanced usage\\n\\n`XYChart` is implemented using modularized `React.context` layers for scales, canvas dimensions,\\ndata, events, and tooltips which enables more advanced usage than many other chart-level\\nabstractions.\\n\\nBy default `XYChart` renders all context providers if a given context is not available, but you can\\nshare context across multiple `XYChart`s to implement functionality such as linked tooltips, shared\\nthemes, or shared data.\\n\\n**Examples**\\n\\n- TODO - Custom chart background using theme and chart dimensions\\n- TODO - Linked tooltips\\n- TODO - Programmatically control tooltips\\n\\n  </details>\\n\\n  <details>\\n\\n    <summary>DataContext</summary>\\n\\n    ### DataContext\\n\\n    This context provides chart canvas dimensions (`width`, `height`, and `margin`), x/y/color scales,\\n    and a data registry. The data registry includes data from all child `*Series`, and x/y/color scales\\n    are updated accordingly accounting for canvas dimensions.\\n\\n  </details>\\n\\n  <details>\\n    <summary>ThemeContext</summary>\\n\\n    ### ThemeContext\\n\\n    This context provides an `XYChart` theme.\\n\\n  </details>\\n  <details>\\n    <summary>EventEmitterContext</summary>\\n\\n    ### EventEmitterContext\\n\\n    This context provides an event publishing / subscription object which can be used via the\\n    `useEventEmitter` hook. `Series` and `XYChart` events, including tooltip updates, are emitted and\\n    handled with through this context.\\n\\n    ```tsx\\n    import { useEventEmitter, EventEmitterContext } from '@visx/xychart';\\n\\n    const eventSourceId = 'optional-source-id-filter';\\n\\n    () => (\\n      <EventEmitterContext>\\n        {/** emit events */}\\n        {() => {\\n          const emit = useEventEmitter();\\n          return (\\n            <button onPointerUp={event => emit('pointerup', event, eventSourceId)}>emit event</button>\\n          );\\n        }}\\n        {/** subscribe to events */}\\n        {() => {\\n          const [clickCount, setClickCount] = useState(0);\\n          useEventEmitter('pointerUp', () => setClickCount(clickCount + 1), [eventSourceId]);\\n\\n          return <div>Pressed {clickCount} times</div>;\\n        }}\\n      </EventEmitterContext>\\n    );\\n    ```\\n\\n  </details>\\n\\n  <details>\\n\\n  <summary>TooltipContext</summary>\\n\\n### TooltipContext\\n\\nThis context provides access to `@visx/tooltip`s `useTooltip` state, including whether the tooltip\\nis visible (`tooltipOpen`), tooltlip position (`tooltipLeft`, `tooltipTop`),\\n`tooltipData: { nearestDatum, datumByKey }` described above, and functions to update context\\n(`hideTooltip`, `showTooltip`, and `updateTooltip`).\\n\\n  </details>\\n\\n</details>\\n\\n## Roadmap 🔜\\n\\n- new `*Series` types\\n  - `StackedAreaSeries`\\n  - `BoxPlotSeries`\\n  - `ViolinPlotSeries`\\n- integrate `@visx/brush`\\n- integrate `@visx/zoom` + `@visx/drag` for panning and zooming\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3Zpc3gteHljaGFydC9SZWFkbWUubWQ/ZjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLHFrQ0FBc2dDLDBEQUEwRCxzQkFBc0Isd0JBQXdCLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHdCQUF3QixLQUFLLHdCQUF3Qix5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsS0FBSywrQkFBK0IsNkJBQTZCLCtDQUErQyxJQUFJLFVBQVUsZ0JBQWdCLFVBQVUsa0JBQWtCLDJFQUEyRSxNQUFNLFdBQVcsRUFBRSxzREFBc0QsTUFBTSxZQUFZLFVBQVUsWUFBWSxVQUFVLHNEQUFzRCxNQUFNLFlBQVksVUFBVSxZQUFZLFVBQVUsbUpBQW1KLEVBQUUsMEJBQTBCLDhDQUE4QyxtREFBbUQsZ0JBQWdCLHlDQUF5QywrQkFBK0IsOENBQThDLGFBQWEsS0FBSyxhQUFhLCtDQUErQywwQkFBMEIsMEJBQTBCLDYrQ0FBNitDLFVBQVUsb29CQUFvb0Isc0JBQXNCLHNCQUFzQixVQUFVLDRCQUE0Qiw0QkFBNEIsc0RBQXNELHlDQUF5QyxvREFBb0QscUdBQXFHLGlDQUFpQywrQkFBK0IsK0NBQStDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLHVCQUF1QixtQ0FBbUMsMEJBQTBCLHVGQUF1RixHQUFHLEVBQUUsMEJBQTBCLFlBQVksazNCQUFrM0Isd2NBQXdjLFVBQVUsOERBQThELFNBQVMsOFBBQThQLGlCQUFpQiwrRUFBK0UsMkRBQTJELFNBQVMsOEZBQThGLCtCQUErQix5REFBeUQsK0RBQStELFdBQVcsYUFBYSx5Q0FBeUMsOC9FQUE4L0UsdUNBQXVDLHNCQUFzQiwwREFBMEQsdURBQXVELG1CQUFtQixXQUFXLE9BQU8sMkNBQTJDLHVEQUF1RCxpREFBaUQsa0NBQWtDLFlBQVksV0FBVywyQkFBMkIsV0FBVyxPQUFPLDREQUE0RCwrRkFBK0YsbUNBQW1DLFdBQVcsYUFBYSxZQUFZLHNDQUFzQywwU0FBMFMsMkJBQTJCLHFWQUFxViIsImZpbGUiOiIuLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuLi92aXN4LXh5Y2hhcnQvUmVhZG1lLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjIEB2aXN4L3h5Y2hhcnRcXG5cXG5JbiBjb250cmFzdCB0byBvdGhlciBgdmlzeGAgcGFja2FnZXMgd2hpY2ggYXJlIGxvdy1sZXZlbCwgdGhpcyBwYWNrYWdlIHNlZWtzIHRvIGFic3RyYWN0IHNvbWUgb2YgdGhlXFxuY29tcGxleGl0eSBvZiBjb21tb24gdmlzdWFsaXphdGlvbiBlbmdpbmVlcmluZywgYW5kIGV4cG9zZXMgYSAqKmhpZ2gtbGV2ZWwqKiB4LHkgKGNhcnRlc2lhblxcbmNvb3JkaW5hdGUpIGNoYXJ0IEFQSS4gSG93ZXZlciwgaXQgaXMgaW1wbGVtZW50ZWQgdXNpbmcgbW9kdWxhcml6ZWQgYFJlYWN0LmNvbnRleHRgIGxheWVycyBmb3JcXG50aGVtZSwgY2FudmFzIGRpbWVuc2lvbnMsIHgveS9jb2xvciBzY2FsZXMsIGRhdGEsIGV2ZW50cywgYW5kIHRvb2x0aXBzIHdoaWNoIGFsbG93cyBmb3IgbW9yZVxcbmV4cHJlc3Npdml0eSBhbmQgYWR2YW5jZWQgdXNlIGNhc2VzLlxcblxcbk91dCBvZiB0aGUgYm94IGl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XFxuXFxuLSBtYW55IGNvbW1vbiBgPCpTZXJpZXMgLz5gIHR5cGVzIChhbmltYXRlZCBvciBub3QpIHN1Y2ggYXMgbGluZXMsIGJhcnMsIGV0Yy4gKGNhbiBiZSBlYXNpbHlcXG4gIGV4dGVuZGVkIHRvIHN1cHBvcnQgbW9yZSBpbiB0aGUgZnV0dXJlKVxcbi0gYDxBeGlzIC8+YCAoYW5pbWF0ZWQgb3Igbm90KVxcbi0gYDxHcmlkIC8+YCAoYW5pbWF0ZWQgb3Igbm90KVxcbi0gYDxBbm5vdGF0aW9uIC8+YCAoYW5pbWF0ZWQgb3Igbm90KVxcbi0gYDxUb29sdGlwIC8+YFxcbi0gYHRoZW1lYGluZ1xcblxcblNlZSB0aGUgY29tcHJlaGVuc2l2ZSBBUEkgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cXG5cXG48aHIgLz5cXG5cXG4jIyBCYXNpYyB1c2FnZVxcblxcblRoZSBmb2xsb3dpbmcgaWxsdXN0cmF0ZXMgYmFzaWMgdXNhZ2UgZm9yIGFuIGFuaW1hdGVkIGxpbmUgY2hhcnQgd2l0aCBhIGJvdHRvbSBgQXhpc2AsIGBHcmlkYCwgYW5kXFxuYFRvb2x0aXBgLCB0cnkgaXQgb24gY29kZXNhbmRib3ggW2hlcmVdKHRvZG8sIHNpbXBsaWZ5IGNvZGUgYmVsb3cpOlxcblxcbmBgYHRzeFxcbmltcG9ydCB7IEFuaW1hdGVkQXhpcywgQW5pbWF0ZWRHcmlkLCBBbmltYXRlZExpbmVTZXJpZXMsIFhZQ2hhcnQgfSBmcm9tICdAdmlzeC94eWNoYXJ0JztcXG5cXG5jb25zdCBkYXRhMSA9IFtcXG4gIHsgeDogJzIwMjAtMDEtMDEnLCB5OiA1MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wMicsIHk6IDEwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAzJywgeTogMjAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDQnLCB5OiAxMCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wNScsIHk6IDAgfSxcXG5dO1xcblxcbmNvbnN0IGRhdGEyID0gW1xcbiAgeyB4OiAnMjAyMC0wMS0wMScsIHk6IDMwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAyJywgeTogNDAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDMnLCB5OiA4MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wNCcsIHk6IDcwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTA1JywgeTogMjAgfSxcXG5dO1xcblxcbmNvbnN0IHhBY2Nlc3NvciA9IGQgPT4gZC54O1xcbmNvbnN0IHlBY2Nlc3NvciA9IGQgPT4gZC55O1xcblxcbmNvbnN0IHJlbmRlciA9ICgpID0+IChcXG4gIDxYWUNoYXJ0IGhlaWdodD17MzAwfSB4U2NhbGU9e3sgdHlwZTogJ2JhbmQnIH19IHlTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fT5cXG4gICAgPEFuaW1hdGVkQXhpcyBvcmllbnRhdGlvbj1cXFwiYm90dG9tXFxcIiAvPlxcbiAgICA8QW5pbWF0ZWRHcmlkIGNvbHVtbnM9e2ZhbHNlfSBudW1UaWNrcz17NH0gLz5cXG4gICAgPEFuaW1hdGVkTGluZVNlcmllcyBkYXRhS2V5PVxcXCJMaW5lIDFcXFwiIGRhdGE9e2RhdGExfSB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn0geUFjY2Vzc29yPXt5QWNjZXNzb3J9IC8+XFxuICAgIDxBbmltYXRlZExpbmVTZXJpZXMgZGF0YUtleT1cXFwiTGluZSAyXFxcIiBkYXRhPXtkYXRhMn0geEFjY2Vzc29yPXt4QWNjZXNzb3J9IHlBY2Nlc3Nvcj17eUFjY2Vzc29yfSAvPlxcbiAgICA8VG9vbHRpcFxcbiAgICAgIHNuYXBUb29sdGlwVG9EYXR1bVhcXG4gICAgICBzbmFwVG9vbHRpcFRvRGF0dW1ZXFxuICAgICAgc2hvd1ZlcnRpY2FsQ3Jvc3NoYWlyXFxuICAgICAgc2hvd1Nlcmllc0dseXBoc1xcbiAgICAgIHJlbmRlclRvb2x0aXA9eyh7IHRvb2x0aXBEYXRhLCBjb2xvclNjYWxlIH0pID0+IChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IGNvbG9yU2NhbGUodG9vbHRpcERhdGEubmVhcmVzdERhdHVtLmtleSkgfX0+XFxuICAgICAgICAgICAge3Rvb2x0aXBEYXRhLm5lYXJlc3REYXR1bS5rZXkgfHwgJ05vIGtleSd9XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICB7dG9vbHRpcERhdGEubmVhcmVzdERhdHVtLmRhdHVtLnggfHwgJ05vIGRhdGUnfVxcbiAgICAgICAgICB7JywgJ31cXG4gICAgICAgICAge3Rvb2x0aXBEYXRhLm5lYXJlc3REYXR1bS5kYXR1bS55IHx8ICdObyB2YWx1ZSd9XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICApfVxcbiAgICAvPlxcbiAgPC9YWUNoYXJ0Plxcbik7XFxuYGBgXFxuXFxuRXhwYW5kIHNlY3Rpb25zIGZvciBtb3JlLCBvciBleHBsb3JlIHRoZSBkZXRhaWxlZCBBUEkgYmVsb3cuXFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+U2VyaWVzIHR5cGVzPC9zdW1tYXJ5PlxcblxcbiMjIyBTZXJpZXMgdHlwZXNcXG5cXG5UaGUgZm9sbG93aW5nIGBTZXJpZXNgIHR5cGVzIGFyZSBjdXJyZW50bHkgc3VwcG9ydGVkIGFuZCB3ZSBhcmUgaGFwcHkgdG8gcmV2aWV3IG9yIGNvbnNpZGVyXFxuYWRkaXRpb25hbCBTZXJpZXMgdHlwZXMgaW4gdGhlIGZ1dHVyZS5cXG5cXG58IENvbXBvbmVudCBuYW1lICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFVzYWdlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XFxufCAoQW5pbWF0ZWQpQXJlYVNlcmllcyAgfCBDb25uZWN0IGRhdGEgcG9pbnRzIHdpdGggYSBgPHBhdGggLz5gLCB3aXRoIGEgY29sb3IgZmlsbCB0byB0aGUgemVybyBiYXNlbGluZSAgICAgICAgICAgICAgICAgICAgfCBgPEFyZWFTZXJpZXMgLz5gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcXG58IChBbmltYXRlZClCYXJTZXJpZXMgICB8IFJlbmRlciBhIGA8cmVjdCAvPmAgZm9yIGVhY2ggZGF0YSBwb2ludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGA8QmFyU2VyaWVzIC8+YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgKEFuaW1hdGVkKUJhckdyb3VwICAgIHwgR3JvdXAgbXVsdGlwbGUgY2hpbGQgYDxCYXJTZXJpZXMgLz5gIHZhbHVlcyB0b2dldGhlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDxCYXJHcm91cD48QmFyU2VyaWVzIC8+PEJhclNlcmllcyAvPi4uLjwvQmFyR3JvdXA+YCB8XFxufCAoQW5pbWF0ZWQpQmFyU3RhY2sgICAgfCBTdGFjayBtdWx0aXBsZSBjaGlsZCBgPEJhclNlcmllcyAvPmAgdmFsdWVzIHRvZ2V0aGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgPEJhclN0YWNrPjxCYXJTZXJpZXMgLz48QmFyU2VyaWVzIC8+Li4uPC9CYXJTdGFjaz5gIHwgIHxcXG58IChBbmltYXRlZClHbHlwaFNlcmllcyB8IFJlbmRlciBhIGBHbHlwaGAgKGFueSBzaGFwZSwgZGVmYXVsdHMgdG8gYDxjaXJjbGUgLz5gKSBmb3IgZWFjaCBkYXRhIHBvaW50LCBlLmcuLCBhIHNjYXR0ZXIgcGxvdCB8IGA8R2x5cGhTZXJpZXMgcmVuZGVyR2x5cGg9eygpID0+IC4uLn0gLz5gICAgICAgICAgICAgfFxcbnwgKEFuaW1hdGVkKUxpbmVTZXJpZXMgIHwgQ29ubmVjdCBkYXRhIHBvaW50cyB3aXRoIGEgYDxwYXRoPmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDxHbHlwaFNlcmllcyAvPmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxuXFxuQWxsIGBTZXJpZXNgIGhhdmUgYW5pbWF0ZWQgYW5kIG5vbi1hbmltYXRlZCB2YXJpYW50cyB0byBnaXZlIHlvdSBtb3JlIGNvbnRyb2wgb3ZlciB5b3VyIGJ1bmRsZSBzaXplLFxcbnN1cHBvcnQgbWlzc2luZyAoYG51bGxgKSBkYXRhLCBhbmQgY2FuIGJlIHJlbmRlcmVkIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxcblxcbjwvZGV0YWlscz5cXG5cXG48ZGV0YWlscz5cXG5cXG48c3VtbWFyeT5UaGVtaW5nPC9zdW1tYXJ5PlxcblxcbiMjIyBUaGVtaW5nXFxuXFxuRGVmYXVsdCBgbGlnaHRUaGVtZWAgYW5kIGBkYXJrVGhlbWVgIHRoZW1lcyBhcmUgZXhwb3J0ZWQgZnJvbSBgQHZpc3gveHljaGFydGAgYW5kIHRoZSB1dGlsaXR5XFxuYGJ1aWxkQ2hhcnRUaGVtZWAgaXMgZXhwb3J0ZWQgdG8gc3VwcG9ydCBlYXN5IGNyZWF0aW9uIG9mIGN1c3RvbSB0aGVtZXMuXFxuXFxuYGBgdHNcXG5pbXBvcnQgeyBidWlsZFRoZW1lLCBYWUNoYXJ0IH0gZnJvbSAnQHZpc3gveHljaGFydCc7XFxuaW1wb3J0IHsgVGV4dFByb3BzIGFzIFNWR1RleHRQcm9wcyB9IGZyb20gJ0B2aXN4L3RleHQvbGliL1RleHQnOyAvLyBqdXN0IGZvciB0eXBlc1xcblxcbmNvbnN0IGN1c3RvbVRoZW1lID0gYnVpbGRUaGVtZSh7XFxuICAvLyBjb2xvcnNcXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nOyAvLyB1c2VkIGJ5IFRvb2x0aXAsIEFubm90YXRpb25cXG4gIGNvbG9yczogc3RyaW5nW107IC8vIGNhdGVnb3JpY2FsIGNvbG9ycywgbWFwcGVkIHRvIHNlcmllcyB2aWEgYGRhdGFLZXlgc1xcblxcbiAgLy8gbGFiZWxzXFxuICBzdmdMYWJlbEJpZz86IFNWR1RleHRQcm9wcztcXG4gIHN2Z0xhYmVsU21hbGw/OiBTVkdUZXh0UHJvcHM7XFxuICBodG1sTGFiZWw/OiBIVE1MVGV4dFN0eWxlcztcXG5cXG4gIC8vIGxpbmVzXFxuICB4QXhpc0xpbmVTdHlsZXM/OiBMaW5lU3R5bGVzO1xcbiAgeUF4aXNMaW5lU3R5bGVzPzogTGluZVN0eWxlcztcXG4gIHhUaWNrTGluZVN0eWxlcz86IExpbmVTdHlsZXM7XFxuICB5VGlja0xpbmVTdHlsZXM/OiBMaW5lU3R5bGVzO1xcbiAgdGlja0xlbmd0aDogbnVtYmVyO1xcblxcbiAgLy8gZ3JpZFxcbiAgZ3JpZENvbG9yOiBzdHJpbmc7XFxuICBncmlkQ29sb3JEYXJrOiBzdHJpbmc7IC8vIHVzZWQgZm9yIGF4aXMgYmFzZWxpbmUgaWYgeC95eEF4aXNMaW5lU3R5bGVzIG5vdCBzZXRcXG4gIGdyaWRTdHlsZXM/OiBDU1NQcm9wZXJ0aWVzO1xcbn0pO1xcblxcbigpID0+IDxYWUNoYXJ0IHRoZW1lPXtjdXN0b21UaGVtZX0gLz5cXG5gYGBcXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+VG9vbHRpcHM8L3N1bW1hcnk+XFxuXFxuIyMjIFRvb2x0aXBzXFxuXFxuYEB2aXN4L3Rvb2x0aXBgIGBUb29sdGlwYHMgYXJlIGludGVncmF0ZWQgaW50byBgQHZpc3gveHljaGFydGAsIGFuZCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYSBjaGlsZCBvZlxcbmBYWUNoYXJ0YCAob3IgYSBjaGlsZCB3aGVyZSBgVG9vbHRpcENvbnRleHRgIGlzIHByb3ZpZGVkKS5cXG5cXG4qKmBUb29sdGlwYCBwb3NpdGlvbmluZyoqIGlzIGhhbmRsZWQgYnkgdGhlIGBUb29sdGlwYCBpdHNlbGYsIGJhc2VkIG9uIGBUb29sdGlwQ29udGV4dGAuIGBUb29sdGlwYFxcbmlzIHJlbmRlcmVkIGluc2lkZSBhIGBQb3J0YWxgLCBhdm9pZGluZyBjbGlwcGluZyBieSBwYXJlbnQgRE9NIGVsZW1lbnRzIHdpdGggaGlnaGVyIHotaW5kZXhcXG5jb250ZXh0cy4gU2VlIHRoZSBBUEkgYmVsb3cgZm9yIGEgZnVsbCBsaXN0IG9mIGBwcm9wc2AgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIGJlaGF2aW9yLCBzdWNoIGFzXFxuc25hcHBpbmcgdG8gZGF0YSBwb2ludCBwb3NpdGlvbnMgYW5kIHJlbmRlcmluZyBjcm9zcy1oYWlycy5cXG5cXG4qKmBUb29sdGlwYCBjb250ZW50KiogaXMgY29udHJvbGxlZCBieSB0aGUgc3BlY2lmaWVkIGBwcm9wLnJlbmRlclRvb2x0aXBgIHdoaWNoIGhhcyBhY2Nlc3MgdG86XFxuXFxuLSBgdG9vbHRpcERhdGEubmVhcmVzdERhdHVtYCDigJMgdGhlIGdsb2JhbGx5IGNsb3Nlc3QgYERhdHVtYCwgKiphY3Jvc3MgYWxsKiogYFNlcmllc2AncyBgZGF0YUtleWBzXFxuLSBgdG9vbHRpcERhdGEuZGF0dW1CeUtleWAg4oCTIHRoZSBjbG9zZXN0IGBEYXR1bWAgKipmb3IgZWFjaCoqIGBTZXJpZXNgJ3MgYGRhdGFLZXlgOyB0aGlzIGVuYWJsZXNcXG4gIFxcXCJzaGFyZWQgdG9vbHRpcHNcXFwiIHdoZXJlIHlvdSBjYW4gcmVuZGVyIHRoZSBuZWFyZXN0IGRhdGEgcG9pbnQgZm9yIGVhY2ggYFNlcmllc2AuXFxuLSBhIHNoYXJlZCBgY29sb3JTY2FsZWAgd2hpY2ggbWFwcyBgU2VyaWVzYCdzIGBkYXRhS2V5YHMgdG8gYHRoZW1lYCBjb2xvcnNcXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuICA8c3VtbWFyeT5FdmVudCBoYW5kbGVyczwvc3VtbWFyeT5cXG5cXG4jIyMgRXZlbnQgaGFuZGxlcnNcXG5cXG5UaGUgZm9sbG93aW5nIGBQb2ludGVyRXZlbnRgcyAoaGFuZGxpbmcgYm90aCBgTW91c2VFdmVudGBzIGFuZCBgVG91Y2hFdmVudGBzKSBhcmUgY3VycmVudGx5XFxuc3VwcG9ydGVkLiBUaGV5IG1heSBiZSBzZXQgb24gaW5kaXZpZHVhbCBgU2VyaWVzYCBjb21wb25lbnRzIChlLmcuLFxcbmA8QmFyU2VyaWVzIG9uUG9pbnRlck1vdmU9eygpID0+IC4uLn0gLz5gKSwgb3IgYXQgdGhlIGNoYXJ0IGxldmVsIChlLmcuLFxcbmA8WFlDaGFydCBvblBvaW50ZXJNb3ZlPXsoKSA9PiB7fX0gLz5gKSBpbiB3aGljaCBjYXNlIHRoZXkgYXJlIGludm9rZWQgb25jZSBmb3IgX2V2ZXJ5XyBgKlNlcmllc2AuXFxuVG8gKipkaXNhYmxlKiogZXZlbnQgZW1pdHRpbmcgZm9yIGFueSBgU2VyaWVzYCBzZXQgYDwqU2VyaWVzIGVuYWJsZUV2ZW50cz1mYWxzZSAvPmAuXFxuXFxuQmVsb3csIGBIYW5kbGVyUGFybXNgIGhhcyB0aGUgZm9sbG93aW5nIHR5cGUgc2lnbmF0dXJlOlxcblxcbmBgYHRzXFxudHlwZSBFdmVudEhhbmRsZXJQYXJhbXM8RGF0dW0+ID0ge1xcbiAgZGF0dW06IERhdHVtOyAvLyBuZWFyZXN0IERhdHVtIHRvIGV2ZW50LCBmb3IgU2VyaWVzIHdpdGggYGRhdGFLZXk9a2V5YFxcbiAgZGlzdGFuY2VYOiBudW1iZXI7IC8vIHggZGlzdGFuY2UgYmV0d2VlbiBldmVudCBhbmQgRGF0dW0sIGluIHB4XFxuICBkaXN0YW5jZVk7OiBudW1iZXI7IC8vIHkgZGlzdGFuY2UgYmV0d2VlbiBldmVudCBhbmQgRGF0dW0sIGluIHB4XFxuICBldmVudDogUmVhY3QuUG9pbnRlckV2ZW50IHwgUmVhY3QuRm9jdXNFdmVudDsgLy8gdGhlIGV2ZW50XFxuICBpbmRleDogbnVtYmVyOyAvLyBpbmRleCBvZiBEYXR1bSBpbiBTZXJpZXMgYGRhdGFgIGFycmF5XFxuICBrZXk6IHN0cmluZzsgLy8gYGRhdGFLZXlgIG9mIFNlcmllcyB0byB3aGljaCBgRGF0dW1gIGJlbG9uZ3NcXG4gIHN2Z1BvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07IC8vIGV2ZW50IHBvc2l0aW9uIGluIHN2Zy1jb29yZGluYXRlc1xcbn07XFxuYGBgXFxuXFxufCBQcm9wIG5hbWUgICAgICAgfCBTaWduYXR1cmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgWFlDaGFydGAgc3VwcG9ydCB8IGAqU2VyaWVzYCBzdXBwb3J0IHxcXG58IC0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0gfFxcbnwgYG9uUG9pbnRlck1vdmVgIHwgYChwYXJhbXM6IEV2ZW50SGFuZGxlclBhcmFtczxEYXR1bT4pID0+IHZvaWRgIHwg4pyFICAgICAgICAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHxcXG58IGBvblBvaW50ZXJPdXRgICB8IGAoZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudCkgPT4gdm9pZGAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxufCBgb25Qb2ludGVyVXBgICAgfCBgKHBhcmFtczogRXZlbnRIYW5kbGVyUGFyYW1zPERhdHVtPikgPT4gdm9pZGAgfCDinIUgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcbnwgYG9uRm9jdXNgICAgICAgIHwgYChwYXJhbXM6IEV2ZW50SGFuZGxlclBhcmFtczxEYXR1bT4pID0+IHZvaWRgIHwg4p2MICAgICAgICAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHxcXG58IGBvbkJsdXJgICAgICAgICB8IGAoZXZlbnQ6IFJlYWN0LlRvdWNoRXZlbnQpID0+IHZvaWRgICAgICAgICAgICB8IOKdjCAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxuXFxuICA8L2RldGFpbHM+XFxuXFxuICA8ZGV0YWlscz5cXG5cXG4gIDxzdW1tYXJ5PkFubm90YXRpb25zPC9zdW1tYXJ5PlxcblxcbiMjIyBBbm5vdGF0aW9uc1xcblxcbmBAdmlzeC9hbm5vdGF0aW9uc2AgYW5ub3RhdGlvbnMgYXJlIGludGVncmF0ZWQgaW50byBgQHZpc3gveHljaGFydGAsIGFuZCBhbGxvdyB5b3UgdG8gYW5ub3RhdGVcXG5pbmRpdmlkdWFsIHBvaW50cywgb3IgeC0gb3IgeS10aHJlc2hvbGRzXFxuXFxuICA8L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuICA8ZGV0YWlscz5cXG5cXG4gIDxzdW1tYXJ5PkFkdmFuY2VkIHVzYWdlPC9zdW1tYXJ5PlxcblxcbiMjIEFkdmFuY2VkIHVzYWdlXFxuXFxuYFhZQ2hhcnRgIGlzIGltcGxlbWVudGVkIHVzaW5nIG1vZHVsYXJpemVkIGBSZWFjdC5jb250ZXh0YCBsYXllcnMgZm9yIHNjYWxlcywgY2FudmFzIGRpbWVuc2lvbnMsXFxuZGF0YSwgZXZlbnRzLCBhbmQgdG9vbHRpcHMgd2hpY2ggZW5hYmxlcyBtb3JlIGFkdmFuY2VkIHVzYWdlIHRoYW4gbWFueSBvdGhlciBjaGFydC1sZXZlbFxcbmFic3RyYWN0aW9ucy5cXG5cXG5CeSBkZWZhdWx0IGBYWUNoYXJ0YCByZW5kZXJzIGFsbCBjb250ZXh0IHByb3ZpZGVycyBpZiBhIGdpdmVuIGNvbnRleHQgaXMgbm90IGF2YWlsYWJsZSwgYnV0IHlvdSBjYW5cXG5zaGFyZSBjb250ZXh0IGFjcm9zcyBtdWx0aXBsZSBgWFlDaGFydGBzIHRvIGltcGxlbWVudCBmdW5jdGlvbmFsaXR5IHN1Y2ggYXMgbGlua2VkIHRvb2x0aXBzLCBzaGFyZWRcXG50aGVtZXMsIG9yIHNoYXJlZCBkYXRhLlxcblxcbioqRXhhbXBsZXMqKlxcblxcbi0gVE9ETyAtIEN1c3RvbSBjaGFydCBiYWNrZ3JvdW5kIHVzaW5nIHRoZW1lIGFuZCBjaGFydCBkaW1lbnNpb25zXFxuLSBUT0RPIC0gTGlua2VkIHRvb2x0aXBzXFxuLSBUT0RPIC0gUHJvZ3JhbW1hdGljYWxseSBjb250cm9sIHRvb2x0aXBzXFxuXFxuICA8L2RldGFpbHM+XFxuXFxuICA8ZGV0YWlscz5cXG5cXG4gICAgPHN1bW1hcnk+RGF0YUNvbnRleHQ8L3N1bW1hcnk+XFxuXFxuICAgICMjIyBEYXRhQ29udGV4dFxcblxcbiAgICBUaGlzIGNvbnRleHQgcHJvdmlkZXMgY2hhcnQgY2FudmFzIGRpbWVuc2lvbnMgKGB3aWR0aGAsIGBoZWlnaHRgLCBhbmQgYG1hcmdpbmApLCB4L3kvY29sb3Igc2NhbGVzLFxcbiAgICBhbmQgYSBkYXRhIHJlZ2lzdHJ5LiBUaGUgZGF0YSByZWdpc3RyeSBpbmNsdWRlcyBkYXRhIGZyb20gYWxsIGNoaWxkIGAqU2VyaWVzYCwgYW5kIHgveS9jb2xvciBzY2FsZXNcXG4gICAgYXJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkgYWNjb3VudGluZyBmb3IgY2FudmFzIGRpbWVuc2lvbnMuXFxuXFxuICA8L2RldGFpbHM+XFxuXFxuICA8ZGV0YWlscz5cXG4gICAgPHN1bW1hcnk+VGhlbWVDb250ZXh0PC9zdW1tYXJ5PlxcblxcbiAgICAjIyMgVGhlbWVDb250ZXh0XFxuXFxuICAgIFRoaXMgY29udGV4dCBwcm92aWRlcyBhbiBgWFlDaGFydGAgdGhlbWUuXFxuXFxuICA8L2RldGFpbHM+XFxuICA8ZGV0YWlscz5cXG4gICAgPHN1bW1hcnk+RXZlbnRFbWl0dGVyQ29udGV4dDwvc3VtbWFyeT5cXG5cXG4gICAgIyMjIEV2ZW50RW1pdHRlckNvbnRleHRcXG5cXG4gICAgVGhpcyBjb250ZXh0IHByb3ZpZGVzIGFuIGV2ZW50IHB1Ymxpc2hpbmcgLyBzdWJzY3JpcHRpb24gb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHZpYSB0aGVcXG4gICAgYHVzZUV2ZW50RW1pdHRlcmAgaG9vay4gYFNlcmllc2AgYW5kIGBYWUNoYXJ0YCBldmVudHMsIGluY2x1ZGluZyB0b29sdGlwIHVwZGF0ZXMsIGFyZSBlbWl0dGVkIGFuZFxcbiAgICBoYW5kbGVkIHdpdGggdGhyb3VnaCB0aGlzIGNvbnRleHQuXFxuXFxuICAgIGBgYHRzeFxcbiAgICBpbXBvcnQgeyB1c2VFdmVudEVtaXR0ZXIsIEV2ZW50RW1pdHRlckNvbnRleHQgfSBmcm9tICdAdmlzeC94eWNoYXJ0JztcXG5cXG4gICAgY29uc3QgZXZlbnRTb3VyY2VJZCA9ICdvcHRpb25hbC1zb3VyY2UtaWQtZmlsdGVyJztcXG5cXG4gICAgKCkgPT4gKFxcbiAgICAgIDxFdmVudEVtaXR0ZXJDb250ZXh0PlxcbiAgICAgICAgey8qKiBlbWl0IGV2ZW50cyAqL31cXG4gICAgICAgIHsoKSA9PiB7XFxuICAgICAgICAgIGNvbnN0IGVtaXQgPSB1c2VFdmVudEVtaXR0ZXIoKTtcXG4gICAgICAgICAgcmV0dXJuIChcXG4gICAgICAgICAgICA8YnV0dG9uIG9uUG9pbnRlclVwPXtldmVudCA9PiBlbWl0KCdwb2ludGVydXAnLCBldmVudCwgZXZlbnRTb3VyY2VJZCl9PmVtaXQgZXZlbnQ8L2J1dHRvbj5cXG4gICAgICAgICAgKTtcXG4gICAgICAgIH19XFxuICAgICAgICB7LyoqIHN1YnNjcmliZSB0byBldmVudHMgKi99XFxuICAgICAgICB7KCkgPT4ge1xcbiAgICAgICAgICBjb25zdCBbY2xpY2tDb3VudCwgc2V0Q2xpY2tDb3VudF0gPSB1c2VTdGF0ZSgwKTtcXG4gICAgICAgICAgdXNlRXZlbnRFbWl0dGVyKCdwb2ludGVyVXAnLCAoKSA9PiBzZXRDbGlja0NvdW50KGNsaWNrQ291bnQgKyAxKSwgW2V2ZW50U291cmNlSWRdKTtcXG5cXG4gICAgICAgICAgcmV0dXJuIDxkaXY+UHJlc3NlZCB7Y2xpY2tDb3VudH0gdGltZXM8L2Rpdj47XFxuICAgICAgICB9fVxcbiAgICAgIDwvRXZlbnRFbWl0dGVyQ29udGV4dD5cXG4gICAgKTtcXG4gICAgYGBgXFxuXFxuICA8L2RldGFpbHM+XFxuXFxuICA8ZGV0YWlscz5cXG5cXG4gIDxzdW1tYXJ5PlRvb2x0aXBDb250ZXh0PC9zdW1tYXJ5PlxcblxcbiMjIyBUb29sdGlwQ29udGV4dFxcblxcblRoaXMgY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gYEB2aXN4L3Rvb2x0aXBgcyBgdXNlVG9vbHRpcGAgc3RhdGUsIGluY2x1ZGluZyB3aGV0aGVyIHRoZSB0b29sdGlwXFxuaXMgdmlzaWJsZSAoYHRvb2x0aXBPcGVuYCksIHRvb2x0bGlwIHBvc2l0aW9uIChgdG9vbHRpcExlZnRgLCBgdG9vbHRpcFRvcGApLFxcbmB0b29sdGlwRGF0YTogeyBuZWFyZXN0RGF0dW0sIGRhdHVtQnlLZXkgfWAgZGVzY3JpYmVkIGFib3ZlLCBhbmQgZnVuY3Rpb25zIHRvIHVwZGF0ZSBjb250ZXh0XFxuKGBoaWRlVG9vbHRpcGAsIGBzaG93VG9vbHRpcGAsIGFuZCBgdXBkYXRlVG9vbHRpcGApLlxcblxcbiAgPC9kZXRhaWxzPlxcblxcbjwvZGV0YWlscz5cXG5cXG4jIyBSb2FkbWFwIPCflJxcXG5cXG4tIG5ldyBgKlNlcmllc2AgdHlwZXNcXG4gIC0gYFN0YWNrZWRBcmVhU2VyaWVzYFxcbiAgLSBgQm94UGxvdFNlcmllc2BcXG4gIC0gYFZpb2xpblBsb3RTZXJpZXNgXFxuLSBpbnRlZ3JhdGUgYEB2aXN4L2JydXNoYFxcbi0gaW50ZWdyYXRlIGBAdmlzeC96b29tYCArIGBAdmlzeC9kcmFnYCBmb3IgcGFubmluZyBhbmQgem9vbWluZ1xcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md\n");

/***/ })

})