
// Returns the nearest point to the given location from the given array of points
function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER){
    let minDist = Number.MAX_SAFE_INTEGER;
    let nearest = null;
    for (const point of points){
        const dist = distance(point, loc);
        if(dist < minDist && dist < threshold){
            minDist = dist;
            nearest = point;
        }
    }
    return nearest;
}

// Returns the distance between two points
function distance(p1, p2){
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}