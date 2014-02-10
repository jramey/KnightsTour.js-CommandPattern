function knightCommandManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.execute = function execute(knightCommand) {
        knightCommand.execute();
        this.undoStack.push(knightCommand);
        this.redoStack = [];
    }

    this.undo = function undo() {
        if (this.undoStack.length > 1) {
            var knightCommand = this.undoStack.pop();
            knightCommand.undo();
            this.redoStack.push(knightCommand);
        }
    }

    this.redo = function redo() {
        if (this.redoStack.length > 0) {
            var knightCommand = this.redoStack.pop();
            knightCommand.redo();
            this.undoStack.push(knightCommand);
        }
    }
}