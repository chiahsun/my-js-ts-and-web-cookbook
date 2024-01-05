declare let click: 'click';
declare function letsClick(): "click";
declare let mouseEvent: 'click' | 'dbclick' | 'mouseup' | 'mousedown';
declare function getSomeMouseEvent(): "click" | "mousedown" | "mouseup" | "dbclick";
type MouseEventType = 'click' | 'dbclick' | 'mouseup' | 'mousedown';
declare let mouseTypeEvent: MouseEventType;
declare function getSomeMouseTypeEvent(): MouseEventType;
