
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

// Returns the sum of two points
function add(p1, p2){
    return new Point(p1.x + p2.x, p1.y + p2.y);
}

// Returns the difference between two points
function subtract(p1, p2){
    return new Point(p1.x - p2.x, p1.y - p2.y);
}

function scale(p, scaler){
    return new Point(p.x * scaler, p.y * scaler);
}

function translate(loc, angle, offset){
    return new Point(
        loc.x + Math.cos(angle) * offset,
        loc.y + Math.sin(angle) * offset
    );

}

function angle(p){
    return Math.atan2(p.y, p.x);
}