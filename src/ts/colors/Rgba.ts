import {Rgb} from "./Rgb";
import {IColor} from "../types/IColor";

export class Rgba extends Rgb implements IColor {
    private _alpha: number;

    set alpha(value: number) {
        this._alpha = Math.max(0, Math.min(value, 1));
    }

    constructor(red: number, green: number, blue: number, alpha: number) {
        super(red, green, blue);
        this.alpha = alpha;
    }

    toString(): string {
        return `Rgba(${this.red},${this.green},${this.blue},${this._alpha})`;
    }
}