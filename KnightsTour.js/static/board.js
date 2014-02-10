function board(knight) {
    this.knight = knight;
    this.rows = 8;
    this.columns = 8;

    this.isLegalMove = function isLegalMove(space) {
        return this.hasSpaceBeenVisited(space) == false && Math.abs(space.x - knight.currentPosition.x) == 2 && Math.abs(space.y - knight.currentPosition.y) == 1
            || this.hasSpaceBeenVisited(space) == false && Math.abs(space.x - knight.currentPosition.x) == 1 && Math.abs(space.y - knight.currentPosition.y) == 2
            || this.knight.turns == 0
    }

    this.hasSpaceBeenVisited = function hasSpaceBeenVisited(space) {
        for (var i = 0; i < this.knight.visitedSpaces.length; i++)
            if (space.x === this.knight.visitedSpaces[i].x && space.y == this.knight.visitedSpaces[i].y)
                return true;

        return false;
    }
}