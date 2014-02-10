function knight() {
    this.currentPosition = new Coordinate();
    this.visitedSpaces = [];
    this.turns = 0;

    this.addToVisitedSpaces = function addToVisitedSpaces(space) {
        this.visitedSpaces.push(space);
    }

    this.visitSpace = function visitSpace(space) {
        this.currentPosition.x = space.x;
        this.currentPosition.y = space.y;
        this.addToVisitedSpaces(space);
        this.turns++;
    }

    this.leaveSpace = function leaveSpace() {
        this.visitedSpaces.pop();
        this.currentPosition.x = this.visitedSpaces[this.visitedSpaces.length - 1].x;
        this.currentPosition.y = this.visitedSpaces[this.visitedSpaces.length - 1].y;
    }
}