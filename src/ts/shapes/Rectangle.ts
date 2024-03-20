import {Shape} from "./Shape";
import {IColor} from "../types/IColor";

export class Rectangle extends Shape{
    private w: number;
    private h: number;
    private r: number;


    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: IColor, r: number) {
        super(ctx, x, y, color);
        this.w = w;
        this.h = h;
        this.r = r;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        this.ctx.rotate(this.r * Math.PI / 180);
        this.ctx.fillStyle = this.color.toString();
        this.ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        this.ctx.restore();
    }
}