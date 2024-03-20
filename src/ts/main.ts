import {Rectangle} from "./shapes/Rectangle";
import {Circle} from "./shapes/Circle";
import {Rgb} from "./colors/Rgb";
import {Rgba} from "./colors/Rgba";
import {Hsl} from "./colors/Hsl";


const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');


const shapes = [
    new Rectangle(ctx, 150, 120, 50, 50, new Hsl(200, 30, 50), 55),
    new Circle(ctx, 120, 200, 40, new Rgba(100, 200, 0, 0.4)),
    new Circle(ctx, 120, 200, 30, new Rgb(10, 100, 100))
];

shapes.forEach((shape) => {
    shape.draw();
});

