let click: 'click';

click = 'click';
console.log(click);

function letsClick() {
    return click;
}

// error TS2322: Type '"dbclick"' is not assignable to type '"click"'.
// click = 'dbclick';

let mouseEvent: 'click' | 'dbclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click';
console.log(mouseEvent);
mouseEvent = 'dbclick';
console.log(mouseEvent, '\n');
// error TS2322: Type '"mouseover"' is not assignable to type '"click" | "dbclick" | "mouseup" | "mousedown"'.
// mouseEvent = 'mouseover';

function getSomeMouseEvent() {
    return mouseEvent;
}

type MouseEventType = 'click' | 'dbclick' | 'mouseup' | 'mousedown';
let mouseTypeEvent: MouseEventType;

mouseTypeEvent = 'click';
console.log(mouseTypeEvent);
// error TS2322: Type '"mouseover"' is not assignable to type 'MouseEventType'.
// mouseEvent2 = 'mouseover';

function getSomeMouseTypeEvent() {
    return mouseTypeEvent;
}
