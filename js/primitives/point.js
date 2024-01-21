class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    //Checks to see the X and Y co-ordinates of two points are equal
    equals(point){
        return this.x == point.x && this.y == point.y;
    }

    //Draws a point on the canvas
    draw(ctx, size = 18, color = "black"){
        const rad = size/2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}
