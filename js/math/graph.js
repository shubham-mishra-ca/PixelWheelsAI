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

    //Gets all segments that contain a point
    getSegmentsWithPoint(point){
        const segs = [];
        for (const seg of this.segments){
            if(seg.includes(point)){
                segs.push(seg);
            }
        }
        return segs;
    }

    //Removes a point from the graph
    removePoint(point){
        const segs = this.getSegmentsWithPoint(point);
        for (const seg of segs){
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point), 1);
    }

    //Removes all points and segments from the graph
    dispose(){
        this.points.length = 0;
        this.segments.length = 0;
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