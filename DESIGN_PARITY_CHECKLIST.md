# Design Parity Checklist

Use `figma_check_design_parity` (Figma Console MCP) to compare coded components against Figma specs. Requires Figma file open and plugin connected.

## Component → Figma Node ID Mapping

| Component | Figma Node ID | Notes |
|-----------|---------------|-------|
| Button | 20:3394 | Button component set (Foundations / Tokens) |
| DatePicker (single) | 549:2607 | "Date picker" 377×331 |
| DatePicker (dual) | 551:2791 | "Dual dates" 660×331 |
| DatePicker (preset) | 531:3167 | Preset selector "Menu Items" |
| Tooltip | 276:1543 | Tooltips component |
| TabGroup | 495:1517 | Tab group |
| Modals (component set, 4 patterns) | 4651:9943 | Marketplace (Sally); current Storybook canon |
| Modal (Add Business) | 478:2019 | Composed example — see **Examples → Modal** |
| Modal (Add Link) | 483:2104 | Composed example |
| Modal (Select Campaign) | 513:2383 | Composed example |
| Drawer (Add Header Text) | 486:2140 | Width sm=381, md=420 |
| CheckboxGroupItem | 497:2376 | Chekbox group items |
| Badge | 438:2780 | Badge info |

## How to Run Parity Check

1. Open the Cater Design Systems Figma file
2. Ensure Figma Console MCP plugin is connected
3. Call `figma_check_design_parity` with:
   - `nodeId`: Figma node ID (e.g. `"549:2607"`)
   - `codeSpec`: Extract from component source (visual, spacing, typography, componentAPI)
4. Resolve any reported mismatches

## Example codeSpec Structure

```json
{
  "filePath": "src/components/DatePicker/DatePicker.tsx",
  "visual": {
    "borderRadius": 12,
    "fills": [{"color": "#FFFFFF", "opacity": 1}],
    "strokes": [{"color": "rgba(217,221,228,0.5)", "width": 1}]
  },
  "spacing": {
    "paddingTop": 24,
    "paddingRight": 24,
    "paddingBottom": 24,
    "paddingLeft": 24,
    "gap": 20,
    "width": 377,
    "height": 331
  },
  "componentAPI": {
    "props": [
      {"name": "variant", "type": "string", "values": ["single", "dual", "preset-range"]},
      {"name": "value", "type": "Date | [Date, Date]"}
    ]
  }
}
```
