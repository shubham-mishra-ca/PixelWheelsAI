class Graph{
    constructor(points = [], segments = []){
        this.points = points;
        this.segments = segments;
}

    //Adds point on the graph
    addPoint(point){
        this.points.push(point);
    }

    //Adds segment on the graph
    addSegment(seg){
        this.segments.push(seg);
    }

    //Checks to see if there are two segments with same co-ordinates
    containsSegment(seg){
        return this.segments.find((s) => s.equals(seg));
    }

    tryAddSegment(seg){
        if(!this.containsSegment(seg) && !seg.p1.equals(seg.p2)){
            this.addSegment(seg);
            return true;
        }
        return false;
    }

    //Checks to see if there are two points with same co-ordinates
    containsPoint(point){
        return this.points.find((p) => p.equals(point));
    }

    //Checks to see if there are two points with same co-ordinates
    tryAddPoint(point){
        if(!this.containsPoint(point)){
            this.addPoint(point);
            return true;
        }
        return false;
    }
    
    //Removes a point from the graph
    removeSegment(seg){
        this.segments.splice(this.segments.indexOf(seg), 1);
    }


    //Draws all segments and points in the graph
    draw(ctx){
        for (const seg of this.segments){
            seg.draw(ctx);
        }

        for(const point of this.points){
            point.draw(ctx);
        }
    }
}