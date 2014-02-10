function knightCommand(knight, space) {
    this.knight = knight;
    this.space = space;

    this.execute = function execute() {
        this.knight.visitSpace(this.space);
    }

    this.undo = function undo() {
        this.knight.leaveSpace();
    }

    this.redo = function redo() {
        this.knight.visitSpace(this.space);
    }
}