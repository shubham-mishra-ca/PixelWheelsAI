class GraphEditor{
    constructor(canvas, graph){
        this.canvas = canvas;
        this.graph = graph;

        this.ctx = this.canvas.getContext("2d");

        this.selected = null;
        this.hovered = null;

        this.#addEventListeners();
    }

    //Private function to add event listeners
    #addEventListeners(){
        this.canvas.addEventListener("mousedown", (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points, 10);
            if(this.hovered){
                this.selected = this.hovered;
                return;
            }
            this.graph.tryAddPoint(mouse);
            this.selected = mouse;
        });

        this.canvas.addEventListener("mousemove", (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points, 10);
            
        });
    }

    display() {
        this.graph.draw(this.ctx);
        //Draw hovered points
        if(this.hovered){
            this.hovered.draw(this.ctx, { fill: true });
        }
        //Draw selected points
        if(this.selected){
            this.selected.draw(this.ctx, { outline: true });
        }
    }

}