interface CircleData {
    position: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

/**
 * Creates and returns an array of Circle objects which, when visualised, do not overlap each other.
 * @param areaWidth the width of the area within which circles may be generated
 * @param areaHeight the height of the area within which circles may be generated
 * @return an array of generated Circle data objects
 */
function calculatePackedCircles(
    areaWidth: number,
    areaHeight: number
): CircleData[] {
    //TODO: you need to implement this function properly!
    //These are just a couple of random circles, with no consideration yet for avoiding overlap.
    const circleDataOne: CircleData = {
        position: { x: 300, y: 300 },
        radius: 100,
    };
    const circleDataTwo: CircleData = {
        position: { x: random(0, areaWidth), y: random(0, areaHeight) },
        radius: 40,
    };
    return [circleDataOne, circleDataTwo];
}

/** Returns the distance between two given positions.
    This function doesn't require the p5.js library.
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}
