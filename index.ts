import {left,right} from "trim";

export function ifmLength(text:string) {
    if (text) {
        return left(right(text)).length;
    } else {
        return 0;
    }
}

