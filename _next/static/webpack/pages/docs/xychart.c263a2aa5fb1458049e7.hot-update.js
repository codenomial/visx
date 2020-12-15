webpackHotUpdate_N_E("pages/docs/xychart",{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md":
/*!**********************************************************************************************************!*\
  !*** /Users/christopher-williams/dev/visx/node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"# @visx/xychart\\n\\nIn contrast to other `visx` packages which are low-level, this package seeks to abstract some of the\\ncomplexity of common visualization engineering, and exposes a **high-level** x,y (cartesian\\ncoordinate) chart API. However, it is implemented using modularized `React.context` layers for\\ntheme, canvas dimensions, x/y/color scales, data, events, and tooltips which allows for more\\nexpressivity and advanced use cases.\\n\\nOut of the box it supports the following:\\n\\n- \\\\* many common `<*Series />` types (animated or not) such as lines, bars, etc.\\n- \\\\* `<Axis />` (animated or not)\\n- \\\\* `<Grid />` (animated or not)\\n- \\\\* `<Annotation />` (animated or not)\\n- \\\\* `<Tooltip />`\\n- \\\\* `theme`ing\\n\\nThe following illustrates basic usage for an animated line chart with a bottom `Axis`, `Grid`, and\\n`Tooltip`, try it on codesandbox [here](todo, simplify code below):\\n\\n```tsx\\nimport { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, XYChart } from '@visx/xychart';\\n\\nconst data1 = [\\n  { x: '2020-01-01', y: 50 },\\n  { x: '2020-01-02', y: 10 },\\n  { x: '2020-01-03', y: 20 },\\n  { x: '2020-01-04', y: 10 },\\n  { x: '2020-01-05', y: 0 },\\n];\\n\\nconst data2 = [\\n  { x: '2020-01-01', y: 30 },\\n  { x: '2020-01-02', y: 40 },\\n  { x: '2020-01-03', y: 80 },\\n  { x: '2020-01-04', y: 70 },\\n  { x: '2020-01-05', y: 20 },\\n];\\n\\nconst xAccessor = d => d.x;\\nconst yAccessor = d => d.y;\\n\\nconst render = () => (\\n  <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>\\n    <AnimatedAxis orientation=\\\"bottom\\\" />\\n    <AnimatedGrid columns={false} numTicks={4} />\\n    <AnimatedLineSeries dataKey=\\\"Line 1\\\" data={data1} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <AnimatedLineSeries dataKey=\\\"Line 2\\\" data={data2} xAccessor={xAccessor} yAccessor={yAccessor} />\\n    <Tooltip\\n      snapTooltipToDatumX\\n      snapTooltipToDatumY\\n      showVerticalCrosshair\\n      showSeriesGlyphs\\n      renderTooltip={({ tooltipData, colorScale }) => (\\n        <div>\\n          <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>\\n            {tooltipData.nearestDatum.key || 'No key'}\\n          </div>\\n          {tooltipData.nearestDatum.datum.x || 'No date'}\\n          {', '}\\n          {tooltipData.nearestDatum.datum.y || 'No value'}\\n        </div>\\n      )}\\n    />\\n  </XYChart>\\n);\\n```\\n\\nExpand sections for more, or explore the detailed API below.\\n\\n<hr />\\n\\n## Basic usage\\n\\n<details>\\n\\n<summary>Series types</summary>\\n\\nThe following `Series` types are currently supported and we are happy to review or consider\\nadditional Series types in the future.\\n\\n| Component name        | Description                                                                                      | Usage                                                |\\n| --------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |\\n| (Animated)AreaSeries  | Connect data points with a `<path />`, with a color fill to the zero baseline                    | `<AreaSeries />`                                     |\\n| (Animated)BarSeries   | Render a `<rect />` for each data point                                                          | `<BarSeries />`                                      |\\n| (Animated)BarGroup    | Group multiple child `<BarSeries />` values together                                             | `<BarGroup><BarSeries /><BarSeries />...</BarGroup>` |\\n| (Animated)BarStack    | Stack multiple child `<BarSeries />` values together                                             | `<BarStack><BarSeries /><BarSeries />...</BarStack>` |  |\\n| (Animated)GlyphSeries | Render a `Glyph` (any shape, defaults to `<circle />`) for each data point, e.g., a scatter plot | `<GlyphSeries renderGlyph={() => ...} />`            |\\n| (Animated)LineSeries  | Connect data points with a `<path>`                                                              | `<GlyphSeries />`                                    |\\n\\nAll `Series` have animated and non-animated variants to give you more control over your bundle size,\\nsupport missing (`null`) data, and can be rendered vertically or horizontally.\\n\\n</details>\\n\\n<details>\\n\\n<summary>Theming</summary>\\n\\nDefault `lightTheme` and `darkTheme` themes are exported from `@visx/xychart` and the utility\\n`buildChartTheme` is exported to support easy creation of custom themes.\\n\\n```ts\\nimport { buildTheme, XYChart } from '@visx/xychart';\\nimport { TextProps as SVGTextProps } from '@visx/text/lib/Text'; // just for types\\n\\nconst customTheme = buildTheme({\\n  // colors\\n  backgroundColor: string; // used by Tooltip, Annotation\\n  colors: string[]; // categorical colors, mapped to series via `dataKey`s\\n\\n  // labels\\n  svgLabelBig?: SVGTextProps;\\n  svgLabelSmall?: SVGTextProps;\\n  htmlLabel?: HTMLTextStyles;\\n\\n  // lines\\n  xAxisLineStyles?: LineStyles;\\n  yAxisLineStyles?: LineStyles;\\n  xTickLineStyles?: LineStyles;\\n  yTickLineStyles?: LineStyles;\\n  tickLength: number;\\n\\n  // grid\\n  gridColor: string;\\n  gridColorDark: string; // used for axis baseline if x/yxAxisLineStyles not set\\n  gridStyles?: CSSProperties;\\n});\\n\\n() => <XYChart theme={customTheme} />\\n```\\n\\n</details>\\n\\n<details>\\n\\n<summary>Tooltips</summary>\\n\\n`@visx/tooltip` `Tooltip`s are integrated into `@visx/xychart`, and should be rendered as a child of\\n`XYChart` (or a child where `TooltipContext` is provided).\\n\\n**`Tooltip` positioning** is handled by the `Tooltip` itself, based on `TooltipContext`. `Tooltip`\\nis rendered inside a `Portal`, avoiding clipping by parent DOM elements with higher z-index\\ncontexts. See the API below for a full list of `props` to support additional behavior, such as\\nsnapping to data point positions and rendering cross-hairs.\\n\\n**`Tooltip` content** is controlled by the specified `prop.renderTooltip` which has access to:\\n\\n- `tooltipData.nearestDatum` – the globally closest `Datum`, **across all** `Series`'s `dataKey`s\\n- `tooltipData.datumByKey` – the closest `Datum` **for each** `Series`'s `dataKey`; this enables\\n  \\\"shared tooltips\\\" where you can render the nearest data point for each `Series`.\\n- a shared `colorScale` which maps `Series`'s `dataKey`s to `theme` colors\\n\\n</details>\\n\\n<details>\\n\\n<summary>Event handlers</summary>\\n\\nThe following `PointerEvent`s (handling both `MouseEvent`s and `TouchEvent`s) are currently\\nsupported. They may be set on individual `Series` components (e.g.,\\n`<BarSeries onPointerMove={() => ...} />`), or at the chart level (e.g.,\\n`<XYChart onPointerMove={() => {}} />`) in which case they are invoked once for _every_ `*Series`.\\nTo **disable** event emitting for any `Series` set `<*Series enableEvents=false />`.\\n\\nBelow, `HandlerParms` has the following type signature:\\n\\n```ts\\ntype EventHandlerParams<Datum> = {\\n  datum: Datum; // nearest Datum to event, for Series with `dataKey=key`\\n  distanceX: number; // x distance between event and Datum, in px\\n  distanceY;: number; // y distance between event and Datum, in px\\n  event: React.PointerEvent | React.FocusEvent; // the event\\n  index: number; // index of Datum in Series `data` array\\n  key: string; // `dataKey` of Series to which `Datum` belongs\\n  svgPoint: { x: number; y: number }; // event position in svg-coordinates\\n};\\n```\\n\\n| Prop name       | Signature                                     | `XYChart` support | `*Series` support |\\n| --------------- | --------------------------------------------- | ----------------- | ----------------- |\\n| `onPointerMove` | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onPointerOut`  | `(event: React.PointerEvent) => void`         | ✅                | ✅                |\\n| `onPointerUp`   | `(params: EventHandlerParams<Datum>) => void` | ✅                | ✅                |\\n| `onFocus`       | `(params: EventHandlerParams<Datum>) => void` | ❌                | ✅                |\\n| `onBlur`        | `(event: React.TouchEvent) => void`           | ❌                | ✅                |\\n\\n</details>\\n\\n<details>\\n\\n<summary>Annotations</summary>\\n\\nComposable `@visx/annotations` annotations are integrated into `@visx/xychart` and use its theme and\\ndimension context. These components allow for annotation of individual points using\\n`AnnotationCircleSubject`, or x- or y-thresholds using `AnnotationLineSubject`.\\n\\n```tsx\\nimport {\\n  XYChart,\\n  AnimatedAnnotation,\\n  AnnotationLabel,\\n  AnnotationConnector,\\n  AnnotationCircleSubject,\\n} from '@visx/xychart';\\n\\nconst data = [\\n  { x: '2020-01-01', y: 50 },\\n  { x: '2020-01-02', y: 10 },\\n  { x: '2020-01-03', y: 20 },\\n];\\n\\n() => (\\n  <XYChart {...}>\\n    <LineSeries dataKey=\\\"line\\\" data={data} xAccessor={...} yAccessor={...} />\\n    <AnimatedAnnotation\\n      dataKey=\\\"line\\\" // use this Series's accessor functions, alternatively specify x/yAccessor here\\n      datum={data[0]}\\n      dx={labelXOffset}\\n      dy={labelYOffset}\\n      editable={isEditable}\\n      onDragEnd={({ x, y, dx, dy }) => /** handle edit */}\\n    >\\n      {/** Text label */}\\n      <AnnotationLabel title=\\\"My point\\\" subtitle=\\\"More deets\\\" />\\n      {/** Draw circle around point */}\\n      <AnnotationCircleSubject />\\n      {/** Connect label to CircleSubject */}\\n      <AnnotationConnector />\\n    </AnimatedAnnotation>\\n  </XYChart>\\n)\\n\\n```\\n\\n</details>\\n\\n<hr />\\n\\n## Advanced usage\\n\\n<details>\\n\\n<summary>Examples</summary>\\n\\n`XYChart` is implemented using modularized `React.context` layers for scales, canvas dimensions,\\ndata, events, and tooltips which enables more advanced usage than many other chart-level\\nabstractions.\\n\\nBy default `XYChart` renders all context providers if a given context is not available, but you can\\nshare context across multiple `XYChart`s to implement functionality such as linked tooltips, shared\\nthemes, or shared data.\\n\\n- 🔜 Custom chart background using theme and chart dimensions\\n- 🔜 Linked tooltips\\n- 🔜 Programmatically control tooltips\\n\\n</details>\\n\\n<details>\\n\\n<summary>DataContext</summary>\\n\\nThis context provides chart canvas dimensions (`width`, `height`, and `margin`), x/y/color scales,\\nand a data registry. The data registry includes data from all child `*Series`, and x/y/color scales\\nare updated accordingly accounting for canvas dimensions.\\n\\n</details>\\n\\n<details>\\n\\n<summary>ThemeContext</summary>\\n\\nThis context provides an `XYChart` theme, its used by all visual elements that compose a chart, and\\ncan be used to render custom visual elements that are on theme.\\n\\n</details>\\n\\n<details>\\n\\n<summary>EventEmitterContext</summary>\\n\\nThis context provides an event publishing / subscription object which can be used via the\\n`useEventEmitter` hook. `Series` and `XYChart` events, including tooltip updates, are emitted and\\nhandled with through this context.\\n\\n```tsx\\nimport { useEventEmitter, EventEmitterContext } from '@visx/xychart';\\n\\nconst eventSourceId = 'optional-source-id-filter';\\n\\n() => (\\n  <EventEmitterContext>\\n    {/** emit events */}\\n    {() => {\\n      const emit = useEventEmitter();\\n      return (\\n        <button onPointerUp={event => emit('pointerup', event, eventSourceId)}>emit event</button>\\n      );\\n    }}\\n    {/** subscribe to events */}\\n    {() => {\\n      const [clickCount, setClickCount] = useState(0);\\n      useEventEmitter('pointerUp', () => setClickCount(clickCount + 1), [eventSourceId]);\\n\\n      return <div>Pressed {clickCount} times</div>;\\n    }}\\n  </EventEmitterContext>\\n);\\n```\\n\\n</details>\\n\\n<details>\\n  <summary>TooltipContext</summary>\\n\\nThis context provides access to `@visx/tooltip`s `useTooltip` state, including whether the tooltip\\nis visible (`tooltipOpen`), tooltlip position (`tooltipLeft`, `tooltipTop`),\\n`tooltipData: { nearestDatum, datumByKey }` described above, and functions to update context\\n(`hideTooltip`, `showTooltip`, and `updateTooltip`).\\n\\n</details>\\n\\n<hr />\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3Zpc3gteHljaGFydC9SZWFkbWUubWQ/ZjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGs5QkFBbTVCLDBEQUEwRCxzQkFBc0Isd0JBQXdCLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHlCQUF5QixNQUFNLHdCQUF3QixLQUFLLHdCQUF3Qix5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsS0FBSywrQkFBK0IsNkJBQTZCLCtDQUErQyxJQUFJLFVBQVUsZ0JBQWdCLFVBQVUsa0JBQWtCLDJFQUEyRSxNQUFNLFdBQVcsRUFBRSxzREFBc0QsTUFBTSxZQUFZLFVBQVUsWUFBWSxVQUFVLHNEQUFzRCxNQUFNLFlBQVksVUFBVSxZQUFZLFVBQVUsbUpBQW1KLEVBQUUsMEJBQTBCLDhDQUE4QyxtREFBbUQsZ0JBQWdCLHlDQUF5QywrQkFBK0IsOENBQThDLGFBQWEsS0FBSyxhQUFhLCtDQUErQywwQkFBMEIsMEJBQTBCLHEvQ0FBcS9DLFVBQVUscW5CQUFxbkIsc0JBQXNCLHNCQUFzQixVQUFVLDRCQUE0Qiw0QkFBNEIsc0RBQXNELHlDQUF5QyxvREFBb0QscUdBQXFHLGlDQUFpQywrQkFBK0IsK0NBQStDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLHVCQUF1QixtQ0FBbUMsMEJBQTBCLHVGQUF1RixHQUFHLEVBQUUsMEJBQTBCLFlBQVksazJCQUFrMkIsZ2JBQWdiLFVBQVUsOERBQThELFNBQVMsOFBBQThQLGlCQUFpQiwrRUFBK0UsMkRBQTJELFNBQVMsOEZBQThGLCtCQUErQix5REFBeUQsK0RBQStELFdBQVcsYUFBYSx5Q0FBeUMsdWxDQUF1bEMsOEdBQThHLHNCQUFzQix1QkFBdUIseUJBQXlCLE1BQU0seUJBQXlCLE1BQU0seUJBQXlCLEtBQUsseUJBQXlCLElBQUksMENBQTBDLEtBQUssWUFBWSxJQUFJLFlBQVksSUFBSSxtSkFBbUosUUFBUSxZQUFZLGFBQWEsWUFBWSxhQUFhLGtCQUFrQixXQUFXLG1CQUFtQixFQUFFLGVBQWUsd0JBQXdCLGdCQUFnQixrQkFBa0IsK0VBQStFLGdDQUFnQyw0Q0FBNEMsc0NBQXNDLGtrREFBa2tELHVDQUF1QyxzQkFBc0Isc0RBQXNELDJDQUEyQyxtQkFBbUIsT0FBTyxPQUFPLHVDQUF1QywrQ0FBK0MsaURBQWlELDhCQUE4QixRQUFRLE9BQU8sMkJBQTJCLE9BQU8sT0FBTyx3REFBd0QsMkZBQTJGLCtCQUErQixXQUFXLGFBQWEsUUFBUSw4QkFBOEIsMFFBQTBRLDJCQUEyQixtSUFBbUkiLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvZGlzdC9janMuanMhLi4vdmlzeC14eWNoYXJ0L1JlYWRtZS5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiIyBAdmlzeC94eWNoYXJ0XFxuXFxuSW4gY29udHJhc3QgdG8gb3RoZXIgYHZpc3hgIHBhY2thZ2VzIHdoaWNoIGFyZSBsb3ctbGV2ZWwsIHRoaXMgcGFja2FnZSBzZWVrcyB0byBhYnN0cmFjdCBzb21lIG9mIHRoZVxcbmNvbXBsZXhpdHkgb2YgY29tbW9uIHZpc3VhbGl6YXRpb24gZW5naW5lZXJpbmcsIGFuZCBleHBvc2VzIGEgKipoaWdoLWxldmVsKiogeCx5IChjYXJ0ZXNpYW5cXG5jb29yZGluYXRlKSBjaGFydCBBUEkuIEhvd2V2ZXIsIGl0IGlzIGltcGxlbWVudGVkIHVzaW5nIG1vZHVsYXJpemVkIGBSZWFjdC5jb250ZXh0YCBsYXllcnMgZm9yXFxudGhlbWUsIGNhbnZhcyBkaW1lbnNpb25zLCB4L3kvY29sb3Igc2NhbGVzLCBkYXRhLCBldmVudHMsIGFuZCB0b29sdGlwcyB3aGljaCBhbGxvd3MgZm9yIG1vcmVcXG5leHByZXNzaXZpdHkgYW5kIGFkdmFuY2VkIHVzZSBjYXNlcy5cXG5cXG5PdXQgb2YgdGhlIGJveCBpdCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nOlxcblxcbi0gXFxcXCogbWFueSBjb21tb24gYDwqU2VyaWVzIC8+YCB0eXBlcyAoYW5pbWF0ZWQgb3Igbm90KSBzdWNoIGFzIGxpbmVzLCBiYXJzLCBldGMuXFxuLSBcXFxcKiBgPEF4aXMgLz5gIChhbmltYXRlZCBvciBub3QpXFxuLSBcXFxcKiBgPEdyaWQgLz5gIChhbmltYXRlZCBvciBub3QpXFxuLSBcXFxcKiBgPEFubm90YXRpb24gLz5gIChhbmltYXRlZCBvciBub3QpXFxuLSBcXFxcKiBgPFRvb2x0aXAgLz5gXFxuLSBcXFxcKiBgdGhlbWVgaW5nXFxuXFxuVGhlIGZvbGxvd2luZyBpbGx1c3RyYXRlcyBiYXNpYyB1c2FnZSBmb3IgYW4gYW5pbWF0ZWQgbGluZSBjaGFydCB3aXRoIGEgYm90dG9tIGBBeGlzYCwgYEdyaWRgLCBhbmRcXG5gVG9vbHRpcGAsIHRyeSBpdCBvbiBjb2Rlc2FuZGJveCBbaGVyZV0odG9kbywgc2ltcGxpZnkgY29kZSBiZWxvdyk6XFxuXFxuYGBgdHN4XFxuaW1wb3J0IHsgQW5pbWF0ZWRBeGlzLCBBbmltYXRlZEdyaWQsIEFuaW1hdGVkTGluZVNlcmllcywgWFlDaGFydCB9IGZyb20gJ0B2aXN4L3h5Y2hhcnQnO1xcblxcbmNvbnN0IGRhdGExID0gW1xcbiAgeyB4OiAnMjAyMC0wMS0wMScsIHk6IDUwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAyJywgeTogMTAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDMnLCB5OiAyMCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wNCcsIHk6IDEwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTA1JywgeTogMCB9LFxcbl07XFxuXFxuY29uc3QgZGF0YTIgPSBbXFxuICB7IHg6ICcyMDIwLTAxLTAxJywgeTogMzAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDInLCB5OiA0MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wMycsIHk6IDgwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTA0JywgeTogNzAgfSxcXG4gIHsgeDogJzIwMjAtMDEtMDUnLCB5OiAyMCB9LFxcbl07XFxuXFxuY29uc3QgeEFjY2Vzc29yID0gZCA9PiBkLng7XFxuY29uc3QgeUFjY2Vzc29yID0gZCA9PiBkLnk7XFxuXFxuY29uc3QgcmVuZGVyID0gKCkgPT4gKFxcbiAgPFhZQ2hhcnQgaGVpZ2h0PXszMDB9IHhTY2FsZT17eyB0eXBlOiAnYmFuZCcgfX0geVNjYWxlPXt7IHR5cGU6ICdsaW5lYXInIH19PlxcbiAgICA8QW5pbWF0ZWRBeGlzIG9yaWVudGF0aW9uPVxcXCJib3R0b21cXFwiIC8+XFxuICAgIDxBbmltYXRlZEdyaWQgY29sdW1ucz17ZmFsc2V9IG51bVRpY2tzPXs0fSAvPlxcbiAgICA8QW5pbWF0ZWRMaW5lU2VyaWVzIGRhdGFLZXk9XFxcIkxpbmUgMVxcXCIgZGF0YT17ZGF0YTF9IHhBY2Nlc3Nvcj17eEFjY2Vzc29yfSB5QWNjZXNzb3I9e3lBY2Nlc3Nvcn0gLz5cXG4gICAgPEFuaW1hdGVkTGluZVNlcmllcyBkYXRhS2V5PVxcXCJMaW5lIDJcXFwiIGRhdGE9e2RhdGEyfSB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn0geUFjY2Vzc29yPXt5QWNjZXNzb3J9IC8+XFxuICAgIDxUb29sdGlwXFxuICAgICAgc25hcFRvb2x0aXBUb0RhdHVtWFxcbiAgICAgIHNuYXBUb29sdGlwVG9EYXR1bVlcXG4gICAgICBzaG93VmVydGljYWxDcm9zc2hhaXJcXG4gICAgICBzaG93U2VyaWVzR2x5cGhzXFxuICAgICAgcmVuZGVyVG9vbHRpcD17KHsgdG9vbHRpcERhdGEsIGNvbG9yU2NhbGUgfSkgPT4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogY29sb3JTY2FsZSh0b29sdGlwRGF0YS5uZWFyZXN0RGF0dW0ua2V5KSB9fT5cXG4gICAgICAgICAgICB7dG9vbHRpcERhdGEubmVhcmVzdERhdHVtLmtleSB8fCAnTm8ga2V5J31cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIHt0b29sdGlwRGF0YS5uZWFyZXN0RGF0dW0uZGF0dW0ueCB8fCAnTm8gZGF0ZSd9XFxuICAgICAgICAgIHsnLCAnfVxcbiAgICAgICAgICB7dG9vbHRpcERhdGEubmVhcmVzdERhdHVtLmRhdHVtLnkgfHwgJ05vIHZhbHVlJ31cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICl9XFxuICAgIC8+XFxuICA8L1hZQ2hhcnQ+XFxuKTtcXG5gYGBcXG5cXG5FeHBhbmQgc2VjdGlvbnMgZm9yIG1vcmUsIG9yIGV4cGxvcmUgdGhlIGRldGFpbGVkIEFQSSBiZWxvdy5cXG5cXG48aHIgLz5cXG5cXG4jIyBCYXNpYyB1c2FnZVxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PlNlcmllcyB0eXBlczwvc3VtbWFyeT5cXG5cXG5UaGUgZm9sbG93aW5nIGBTZXJpZXNgIHR5cGVzIGFyZSBjdXJyZW50bHkgc3VwcG9ydGVkIGFuZCB3ZSBhcmUgaGFwcHkgdG8gcmV2aWV3IG9yIGNvbnNpZGVyXFxuYWRkaXRpb25hbCBTZXJpZXMgdHlwZXMgaW4gdGhlIGZ1dHVyZS5cXG5cXG58IENvbXBvbmVudCBuYW1lICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFVzYWdlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XFxufCAoQW5pbWF0ZWQpQXJlYVNlcmllcyAgfCBDb25uZWN0IGRhdGEgcG9pbnRzIHdpdGggYSBgPHBhdGggLz5gLCB3aXRoIGEgY29sb3IgZmlsbCB0byB0aGUgemVybyBiYXNlbGluZSAgICAgICAgICAgICAgICAgICAgfCBgPEFyZWFTZXJpZXMgLz5gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcXG58IChBbmltYXRlZClCYXJTZXJpZXMgICB8IFJlbmRlciBhIGA8cmVjdCAvPmAgZm9yIGVhY2ggZGF0YSBwb2ludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGA8QmFyU2VyaWVzIC8+YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxcbnwgKEFuaW1hdGVkKUJhckdyb3VwICAgIHwgR3JvdXAgbXVsdGlwbGUgY2hpbGQgYDxCYXJTZXJpZXMgLz5gIHZhbHVlcyB0b2dldGhlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDxCYXJHcm91cD48QmFyU2VyaWVzIC8+PEJhclNlcmllcyAvPi4uLjwvQmFyR3JvdXA+YCB8XFxufCAoQW5pbWF0ZWQpQmFyU3RhY2sgICAgfCBTdGFjayBtdWx0aXBsZSBjaGlsZCBgPEJhclNlcmllcyAvPmAgdmFsdWVzIHRvZ2V0aGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgPEJhclN0YWNrPjxCYXJTZXJpZXMgLz48QmFyU2VyaWVzIC8+Li4uPC9CYXJTdGFjaz5gIHwgIHxcXG58IChBbmltYXRlZClHbHlwaFNlcmllcyB8IFJlbmRlciBhIGBHbHlwaGAgKGFueSBzaGFwZSwgZGVmYXVsdHMgdG8gYDxjaXJjbGUgLz5gKSBmb3IgZWFjaCBkYXRhIHBvaW50LCBlLmcuLCBhIHNjYXR0ZXIgcGxvdCB8IGA8R2x5cGhTZXJpZXMgcmVuZGVyR2x5cGg9eygpID0+IC4uLn0gLz5gICAgICAgICAgICAgfFxcbnwgKEFuaW1hdGVkKUxpbmVTZXJpZXMgIHwgQ29ubmVjdCBkYXRhIHBvaW50cyB3aXRoIGEgYDxwYXRoPmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDxHbHlwaFNlcmllcyAvPmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XFxuXFxuQWxsIGBTZXJpZXNgIGhhdmUgYW5pbWF0ZWQgYW5kIG5vbi1hbmltYXRlZCB2YXJpYW50cyB0byBnaXZlIHlvdSBtb3JlIGNvbnRyb2wgb3ZlciB5b3VyIGJ1bmRsZSBzaXplLFxcbnN1cHBvcnQgbWlzc2luZyAoYG51bGxgKSBkYXRhLCBhbmQgY2FuIGJlIHJlbmRlcmVkIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxcblxcbjwvZGV0YWlscz5cXG5cXG48ZGV0YWlscz5cXG5cXG48c3VtbWFyeT5UaGVtaW5nPC9zdW1tYXJ5PlxcblxcbkRlZmF1bHQgYGxpZ2h0VGhlbWVgIGFuZCBgZGFya1RoZW1lYCB0aGVtZXMgYXJlIGV4cG9ydGVkIGZyb20gYEB2aXN4L3h5Y2hhcnRgIGFuZCB0aGUgdXRpbGl0eVxcbmBidWlsZENoYXJ0VGhlbWVgIGlzIGV4cG9ydGVkIHRvIHN1cHBvcnQgZWFzeSBjcmVhdGlvbiBvZiBjdXN0b20gdGhlbWVzLlxcblxcbmBgYHRzXFxuaW1wb3J0IHsgYnVpbGRUaGVtZSwgWFlDaGFydCB9IGZyb20gJ0B2aXN4L3h5Y2hhcnQnO1xcbmltcG9ydCB7IFRleHRQcm9wcyBhcyBTVkdUZXh0UHJvcHMgfSBmcm9tICdAdmlzeC90ZXh0L2xpYi9UZXh0JzsgLy8ganVzdCBmb3IgdHlwZXNcXG5cXG5jb25zdCBjdXN0b21UaGVtZSA9IGJ1aWxkVGhlbWUoe1xcbiAgLy8gY29sb3JzXFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZzsgLy8gdXNlZCBieSBUb29sdGlwLCBBbm5vdGF0aW9uXFxuICBjb2xvcnM6IHN0cmluZ1tdOyAvLyBjYXRlZ29yaWNhbCBjb2xvcnMsIG1hcHBlZCB0byBzZXJpZXMgdmlhIGBkYXRhS2V5YHNcXG5cXG4gIC8vIGxhYmVsc1xcbiAgc3ZnTGFiZWxCaWc/OiBTVkdUZXh0UHJvcHM7XFxuICBzdmdMYWJlbFNtYWxsPzogU1ZHVGV4dFByb3BzO1xcbiAgaHRtbExhYmVsPzogSFRNTFRleHRTdHlsZXM7XFxuXFxuICAvLyBsaW5lc1xcbiAgeEF4aXNMaW5lU3R5bGVzPzogTGluZVN0eWxlcztcXG4gIHlBeGlzTGluZVN0eWxlcz86IExpbmVTdHlsZXM7XFxuICB4VGlja0xpbmVTdHlsZXM/OiBMaW5lU3R5bGVzO1xcbiAgeVRpY2tMaW5lU3R5bGVzPzogTGluZVN0eWxlcztcXG4gIHRpY2tMZW5ndGg6IG51bWJlcjtcXG5cXG4gIC8vIGdyaWRcXG4gIGdyaWRDb2xvcjogc3RyaW5nO1xcbiAgZ3JpZENvbG9yRGFyazogc3RyaW5nOyAvLyB1c2VkIGZvciBheGlzIGJhc2VsaW5lIGlmIHgveXhBeGlzTGluZVN0eWxlcyBub3Qgc2V0XFxuICBncmlkU3R5bGVzPzogQ1NTUHJvcGVydGllcztcXG59KTtcXG5cXG4oKSA9PiA8WFlDaGFydCB0aGVtZT17Y3VzdG9tVGhlbWV9IC8+XFxuYGBgXFxuXFxuPC9kZXRhaWxzPlxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PlRvb2x0aXBzPC9zdW1tYXJ5PlxcblxcbmBAdmlzeC90b29sdGlwYCBgVG9vbHRpcGBzIGFyZSBpbnRlZ3JhdGVkIGludG8gYEB2aXN4L3h5Y2hhcnRgLCBhbmQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGEgY2hpbGQgb2ZcXG5gWFlDaGFydGAgKG9yIGEgY2hpbGQgd2hlcmUgYFRvb2x0aXBDb250ZXh0YCBpcyBwcm92aWRlZCkuXFxuXFxuKipgVG9vbHRpcGAgcG9zaXRpb25pbmcqKiBpcyBoYW5kbGVkIGJ5IHRoZSBgVG9vbHRpcGAgaXRzZWxmLCBiYXNlZCBvbiBgVG9vbHRpcENvbnRleHRgLiBgVG9vbHRpcGBcXG5pcyByZW5kZXJlZCBpbnNpZGUgYSBgUG9ydGFsYCwgYXZvaWRpbmcgY2xpcHBpbmcgYnkgcGFyZW50IERPTSBlbGVtZW50cyB3aXRoIGhpZ2hlciB6LWluZGV4XFxuY29udGV4dHMuIFNlZSB0aGUgQVBJIGJlbG93IGZvciBhIGZ1bGwgbGlzdCBvZiBgcHJvcHNgIHRvIHN1cHBvcnQgYWRkaXRpb25hbCBiZWhhdmlvciwgc3VjaCBhc1xcbnNuYXBwaW5nIHRvIGRhdGEgcG9pbnQgcG9zaXRpb25zIGFuZCByZW5kZXJpbmcgY3Jvc3MtaGFpcnMuXFxuXFxuKipgVG9vbHRpcGAgY29udGVudCoqIGlzIGNvbnRyb2xsZWQgYnkgdGhlIHNwZWNpZmllZCBgcHJvcC5yZW5kZXJUb29sdGlwYCB3aGljaCBoYXMgYWNjZXNzIHRvOlxcblxcbi0gYHRvb2x0aXBEYXRhLm5lYXJlc3REYXR1bWAg4oCTIHRoZSBnbG9iYWxseSBjbG9zZXN0IGBEYXR1bWAsICoqYWNyb3NzIGFsbCoqIGBTZXJpZXNgJ3MgYGRhdGFLZXlgc1xcbi0gYHRvb2x0aXBEYXRhLmRhdHVtQnlLZXlgIOKAkyB0aGUgY2xvc2VzdCBgRGF0dW1gICoqZm9yIGVhY2gqKiBgU2VyaWVzYCdzIGBkYXRhS2V5YDsgdGhpcyBlbmFibGVzXFxuICBcXFwic2hhcmVkIHRvb2x0aXBzXFxcIiB3aGVyZSB5b3UgY2FuIHJlbmRlciB0aGUgbmVhcmVzdCBkYXRhIHBvaW50IGZvciBlYWNoIGBTZXJpZXNgLlxcbi0gYSBzaGFyZWQgYGNvbG9yU2NhbGVgIHdoaWNoIG1hcHMgYFNlcmllc2AncyBgZGF0YUtleWBzIHRvIGB0aGVtZWAgY29sb3JzXFxuXFxuPC9kZXRhaWxzPlxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PkV2ZW50IGhhbmRsZXJzPC9zdW1tYXJ5PlxcblxcblRoZSBmb2xsb3dpbmcgYFBvaW50ZXJFdmVudGBzIChoYW5kbGluZyBib3RoIGBNb3VzZUV2ZW50YHMgYW5kIGBUb3VjaEV2ZW50YHMpIGFyZSBjdXJyZW50bHlcXG5zdXBwb3J0ZWQuIFRoZXkgbWF5IGJlIHNldCBvbiBpbmRpdmlkdWFsIGBTZXJpZXNgIGNvbXBvbmVudHMgKGUuZy4sXFxuYDxCYXJTZXJpZXMgb25Qb2ludGVyTW92ZT17KCkgPT4gLi4ufSAvPmApLCBvciBhdCB0aGUgY2hhcnQgbGV2ZWwgKGUuZy4sXFxuYDxYWUNoYXJ0IG9uUG9pbnRlck1vdmU9eygpID0+IHt9fSAvPmApIGluIHdoaWNoIGNhc2UgdGhleSBhcmUgaW52b2tlZCBvbmNlIGZvciBfZXZlcnlfIGAqU2VyaWVzYC5cXG5UbyAqKmRpc2FibGUqKiBldmVudCBlbWl0dGluZyBmb3IgYW55IGBTZXJpZXNgIHNldCBgPCpTZXJpZXMgZW5hYmxlRXZlbnRzPWZhbHNlIC8+YC5cXG5cXG5CZWxvdywgYEhhbmRsZXJQYXJtc2AgaGFzIHRoZSBmb2xsb3dpbmcgdHlwZSBzaWduYXR1cmU6XFxuXFxuYGBgdHNcXG50eXBlIEV2ZW50SGFuZGxlclBhcmFtczxEYXR1bT4gPSB7XFxuICBkYXR1bTogRGF0dW07IC8vIG5lYXJlc3QgRGF0dW0gdG8gZXZlbnQsIGZvciBTZXJpZXMgd2l0aCBgZGF0YUtleT1rZXlgXFxuICBkaXN0YW5jZVg6IG51bWJlcjsgLy8geCBkaXN0YW5jZSBiZXR3ZWVuIGV2ZW50IGFuZCBEYXR1bSwgaW4gcHhcXG4gIGRpc3RhbmNlWTs6IG51bWJlcjsgLy8geSBkaXN0YW5jZSBiZXR3ZWVuIGV2ZW50IGFuZCBEYXR1bSwgaW4gcHhcXG4gIGV2ZW50OiBSZWFjdC5Qb2ludGVyRXZlbnQgfCBSZWFjdC5Gb2N1c0V2ZW50OyAvLyB0aGUgZXZlbnRcXG4gIGluZGV4OiBudW1iZXI7IC8vIGluZGV4IG9mIERhdHVtIGluIFNlcmllcyBgZGF0YWAgYXJyYXlcXG4gIGtleTogc3RyaW5nOyAvLyBgZGF0YUtleWAgb2YgU2VyaWVzIHRvIHdoaWNoIGBEYXR1bWAgYmVsb25nc1xcbiAgc3ZnUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTsgLy8gZXZlbnQgcG9zaXRpb24gaW4gc3ZnLWNvb3JkaW5hdGVzXFxufTtcXG5gYGBcXG5cXG58IFByb3AgbmFtZSAgICAgICB8IFNpZ25hdHVyZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGBYWUNoYXJ0YCBzdXBwb3J0IHwgYCpTZXJpZXNgIHN1cHBvcnQgfFxcbnwgLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLSB8XFxufCBgb25Qb2ludGVyTW92ZWAgfCBgKHBhcmFtczogRXZlbnRIYW5kbGVyUGFyYW1zPERhdHVtPikgPT4gdm9pZGAgfCDinIUgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcbnwgYG9uUG9pbnRlck91dGAgIHwgYChldmVudDogUmVhY3QuUG9pbnRlckV2ZW50KSA9PiB2b2lkYCAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHxcXG58IGBvblBvaW50ZXJVcGAgICB8IGAocGFyYW1zOiBFdmVudEhhbmRsZXJQYXJhbXM8RGF0dW0+KSA9PiB2b2lkYCB8IOKchSAgICAgICAgICAgICAgICB8IOKchSAgICAgICAgICAgICAgICB8XFxufCBgb25Gb2N1c2AgICAgICAgfCBgKHBhcmFtczogRXZlbnRIYW5kbGVyUGFyYW1zPERhdHVtPikgPT4gdm9pZGAgfCDinYwgICAgICAgICAgICAgICAgfCDinIUgICAgICAgICAgICAgICAgfFxcbnwgYG9uQmx1cmAgICAgICAgIHwgYChldmVudDogUmVhY3QuVG91Y2hFdmVudCkgPT4gdm9pZGAgICAgICAgICAgIHwg4p2MICAgICAgICAgICAgICAgIHwg4pyFICAgICAgICAgICAgICAgIHxcXG5cXG48L2RldGFpbHM+XFxuXFxuPGRldGFpbHM+XFxuXFxuPHN1bW1hcnk+QW5ub3RhdGlvbnM8L3N1bW1hcnk+XFxuXFxuQ29tcG9zYWJsZSBgQHZpc3gvYW5ub3RhdGlvbnNgIGFubm90YXRpb25zIGFyZSBpbnRlZ3JhdGVkIGludG8gYEB2aXN4L3h5Y2hhcnRgIGFuZCB1c2UgaXRzIHRoZW1lIGFuZFxcbmRpbWVuc2lvbiBjb250ZXh0LiBUaGVzZSBjb21wb25lbnRzIGFsbG93IGZvciBhbm5vdGF0aW9uIG9mIGluZGl2aWR1YWwgcG9pbnRzIHVzaW5nXFxuYEFubm90YXRpb25DaXJjbGVTdWJqZWN0YCwgb3IgeC0gb3IgeS10aHJlc2hvbGRzIHVzaW5nIGBBbm5vdGF0aW9uTGluZVN1YmplY3RgLlxcblxcbmBgYHRzeFxcbmltcG9ydCB7XFxuICBYWUNoYXJ0LFxcbiAgQW5pbWF0ZWRBbm5vdGF0aW9uLFxcbiAgQW5ub3RhdGlvbkxhYmVsLFxcbiAgQW5ub3RhdGlvbkNvbm5lY3RvcixcXG4gIEFubm90YXRpb25DaXJjbGVTdWJqZWN0LFxcbn0gZnJvbSAnQHZpc3gveHljaGFydCc7XFxuXFxuY29uc3QgZGF0YSA9IFtcXG4gIHsgeDogJzIwMjAtMDEtMDEnLCB5OiA1MCB9LFxcbiAgeyB4OiAnMjAyMC0wMS0wMicsIHk6IDEwIH0sXFxuICB7IHg6ICcyMDIwLTAxLTAzJywgeTogMjAgfSxcXG5dO1xcblxcbigpID0+IChcXG4gIDxYWUNoYXJ0IHsuLi59PlxcbiAgICA8TGluZVNlcmllcyBkYXRhS2V5PVxcXCJsaW5lXFxcIiBkYXRhPXtkYXRhfSB4QWNjZXNzb3I9ey4uLn0geUFjY2Vzc29yPXsuLi59IC8+XFxuICAgIDxBbmltYXRlZEFubm90YXRpb25cXG4gICAgICBkYXRhS2V5PVxcXCJsaW5lXFxcIiAvLyB1c2UgdGhpcyBTZXJpZXMncyBhY2Nlc3NvciBmdW5jdGlvbnMsIGFsdGVybmF0aXZlbHkgc3BlY2lmeSB4L3lBY2Nlc3NvciBoZXJlXFxuICAgICAgZGF0dW09e2RhdGFbMF19XFxuICAgICAgZHg9e2xhYmVsWE9mZnNldH1cXG4gICAgICBkeT17bGFiZWxZT2Zmc2V0fVxcbiAgICAgIGVkaXRhYmxlPXtpc0VkaXRhYmxlfVxcbiAgICAgIG9uRHJhZ0VuZD17KHsgeCwgeSwgZHgsIGR5IH0pID0+IC8qKiBoYW5kbGUgZWRpdCAqL31cXG4gICAgPlxcbiAgICAgIHsvKiogVGV4dCBsYWJlbCAqL31cXG4gICAgICA8QW5ub3RhdGlvbkxhYmVsIHRpdGxlPVxcXCJNeSBwb2ludFxcXCIgc3VidGl0bGU9XFxcIk1vcmUgZGVldHNcXFwiIC8+XFxuICAgICAgey8qKiBEcmF3IGNpcmNsZSBhcm91bmQgcG9pbnQgKi99XFxuICAgICAgPEFubm90YXRpb25DaXJjbGVTdWJqZWN0IC8+XFxuICAgICAgey8qKiBDb25uZWN0IGxhYmVsIHRvIENpcmNsZVN1YmplY3QgKi99XFxuICAgICAgPEFubm90YXRpb25Db25uZWN0b3IgLz5cXG4gICAgPC9BbmltYXRlZEFubm90YXRpb24+XFxuICA8L1hZQ2hhcnQ+XFxuKVxcblxcbmBgYFxcblxcbjwvZGV0YWlscz5cXG5cXG48aHIgLz5cXG5cXG4jIyBBZHZhbmNlZCB1c2FnZVxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PkV4YW1wbGVzPC9zdW1tYXJ5PlxcblxcbmBYWUNoYXJ0YCBpcyBpbXBsZW1lbnRlZCB1c2luZyBtb2R1bGFyaXplZCBgUmVhY3QuY29udGV4dGAgbGF5ZXJzIGZvciBzY2FsZXMsIGNhbnZhcyBkaW1lbnNpb25zLFxcbmRhdGEsIGV2ZW50cywgYW5kIHRvb2x0aXBzIHdoaWNoIGVuYWJsZXMgbW9yZSBhZHZhbmNlZCB1c2FnZSB0aGFuIG1hbnkgb3RoZXIgY2hhcnQtbGV2ZWxcXG5hYnN0cmFjdGlvbnMuXFxuXFxuQnkgZGVmYXVsdCBgWFlDaGFydGAgcmVuZGVycyBhbGwgY29udGV4dCBwcm92aWRlcnMgaWYgYSBnaXZlbiBjb250ZXh0IGlzIG5vdCBhdmFpbGFibGUsIGJ1dCB5b3UgY2FuXFxuc2hhcmUgY29udGV4dCBhY3Jvc3MgbXVsdGlwbGUgYFhZQ2hhcnRgcyB0byBpbXBsZW1lbnQgZnVuY3Rpb25hbGl0eSBzdWNoIGFzIGxpbmtlZCB0b29sdGlwcywgc2hhcmVkXFxudGhlbWVzLCBvciBzaGFyZWQgZGF0YS5cXG5cXG4tIPCflJwgQ3VzdG9tIGNoYXJ0IGJhY2tncm91bmQgdXNpbmcgdGhlbWUgYW5kIGNoYXJ0IGRpbWVuc2lvbnNcXG4tIPCflJwgTGlua2VkIHRvb2x0aXBzXFxuLSDwn5ScIFByb2dyYW1tYXRpY2FsbHkgY29udHJvbCB0b29sdGlwc1xcblxcbjwvZGV0YWlscz5cXG5cXG48ZGV0YWlscz5cXG5cXG48c3VtbWFyeT5EYXRhQ29udGV4dDwvc3VtbWFyeT5cXG5cXG5UaGlzIGNvbnRleHQgcHJvdmlkZXMgY2hhcnQgY2FudmFzIGRpbWVuc2lvbnMgKGB3aWR0aGAsIGBoZWlnaHRgLCBhbmQgYG1hcmdpbmApLCB4L3kvY29sb3Igc2NhbGVzLFxcbmFuZCBhIGRhdGEgcmVnaXN0cnkuIFRoZSBkYXRhIHJlZ2lzdHJ5IGluY2x1ZGVzIGRhdGEgZnJvbSBhbGwgY2hpbGQgYCpTZXJpZXNgLCBhbmQgeC95L2NvbG9yIHNjYWxlc1xcbmFyZSB1cGRhdGVkIGFjY29yZGluZ2x5IGFjY291bnRpbmcgZm9yIGNhbnZhcyBkaW1lbnNpb25zLlxcblxcbjwvZGV0YWlscz5cXG5cXG48ZGV0YWlscz5cXG5cXG48c3VtbWFyeT5UaGVtZUNvbnRleHQ8L3N1bW1hcnk+XFxuXFxuVGhpcyBjb250ZXh0IHByb3ZpZGVzIGFuIGBYWUNoYXJ0YCB0aGVtZSwgaXRzIHVzZWQgYnkgYWxsIHZpc3VhbCBlbGVtZW50cyB0aGF0IGNvbXBvc2UgYSBjaGFydCwgYW5kXFxuY2FuIGJlIHVzZWQgdG8gcmVuZGVyIGN1c3RvbSB2aXN1YWwgZWxlbWVudHMgdGhhdCBhcmUgb24gdGhlbWUuXFxuXFxuPC9kZXRhaWxzPlxcblxcbjxkZXRhaWxzPlxcblxcbjxzdW1tYXJ5PkV2ZW50RW1pdHRlckNvbnRleHQ8L3N1bW1hcnk+XFxuXFxuVGhpcyBjb250ZXh0IHByb3ZpZGVzIGFuIGV2ZW50IHB1Ymxpc2hpbmcgLyBzdWJzY3JpcHRpb24gb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIHZpYSB0aGVcXG5gdXNlRXZlbnRFbWl0dGVyYCBob29rLiBgU2VyaWVzYCBhbmQgYFhZQ2hhcnRgIGV2ZW50cywgaW5jbHVkaW5nIHRvb2x0aXAgdXBkYXRlcywgYXJlIGVtaXR0ZWQgYW5kXFxuaGFuZGxlZCB3aXRoIHRocm91Z2ggdGhpcyBjb250ZXh0LlxcblxcbmBgYHRzeFxcbmltcG9ydCB7IHVzZUV2ZW50RW1pdHRlciwgRXZlbnRFbWl0dGVyQ29udGV4dCB9IGZyb20gJ0B2aXN4L3h5Y2hhcnQnO1xcblxcbmNvbnN0IGV2ZW50U291cmNlSWQgPSAnb3B0aW9uYWwtc291cmNlLWlkLWZpbHRlcic7XFxuXFxuKCkgPT4gKFxcbiAgPEV2ZW50RW1pdHRlckNvbnRleHQ+XFxuICAgIHsvKiogZW1pdCBldmVudHMgKi99XFxuICAgIHsoKSA9PiB7XFxuICAgICAgY29uc3QgZW1pdCA9IHVzZUV2ZW50RW1pdHRlcigpO1xcbiAgICAgIHJldHVybiAoXFxuICAgICAgICA8YnV0dG9uIG9uUG9pbnRlclVwPXtldmVudCA9PiBlbWl0KCdwb2ludGVydXAnLCBldmVudCwgZXZlbnRTb3VyY2VJZCl9PmVtaXQgZXZlbnQ8L2J1dHRvbj5cXG4gICAgICApO1xcbiAgICB9fVxcbiAgICB7LyoqIHN1YnNjcmliZSB0byBldmVudHMgKi99XFxuICAgIHsoKSA9PiB7XFxuICAgICAgY29uc3QgW2NsaWNrQ291bnQsIHNldENsaWNrQ291bnRdID0gdXNlU3RhdGUoMCk7XFxuICAgICAgdXNlRXZlbnRFbWl0dGVyKCdwb2ludGVyVXAnLCAoKSA9PiBzZXRDbGlja0NvdW50KGNsaWNrQ291bnQgKyAxKSwgW2V2ZW50U291cmNlSWRdKTtcXG5cXG4gICAgICByZXR1cm4gPGRpdj5QcmVzc2VkIHtjbGlja0NvdW50fSB0aW1lczwvZGl2PjtcXG4gICAgfX1cXG4gIDwvRXZlbnRFbWl0dGVyQ29udGV4dD5cXG4pO1xcbmBgYFxcblxcbjwvZGV0YWlscz5cXG5cXG48ZGV0YWlscz5cXG4gIDxzdW1tYXJ5PlRvb2x0aXBDb250ZXh0PC9zdW1tYXJ5PlxcblxcblRoaXMgY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gYEB2aXN4L3Rvb2x0aXBgcyBgdXNlVG9vbHRpcGAgc3RhdGUsIGluY2x1ZGluZyB3aGV0aGVyIHRoZSB0b29sdGlwXFxuaXMgdmlzaWJsZSAoYHRvb2x0aXBPcGVuYCksIHRvb2x0bGlwIHBvc2l0aW9uIChgdG9vbHRpcExlZnRgLCBgdG9vbHRpcFRvcGApLFxcbmB0b29sdGlwRGF0YTogeyBuZWFyZXN0RGF0dW0sIGRhdHVtQnlLZXkgfWAgZGVzY3JpYmVkIGFib3ZlLCBhbmQgZnVuY3Rpb25zIHRvIHVwZGF0ZSBjb250ZXh0XFxuKGBoaWRlVG9vbHRpcGAsIGBzaG93VG9vbHRpcGAsIGFuZCBgdXBkYXRlVG9vbHRpcGApLlxcblxcbjwvZGV0YWlscz5cXG5cXG48aHIgLz5cXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/raw-loader/dist/cjs.js!../visx-xychart/Readme.md\n");

/***/ })

})