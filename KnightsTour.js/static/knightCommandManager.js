function knightCommandManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.execute = function execute(command) {
        command.execute();
        this.undoStack.push(knightCommand);
        this.redoStack = [];
    }

    this.undo = function undo() {
        if (this.undoStack.length > 1) {
            var command = this.undoStack.pop();
            command.undo();
            this.redoStack.push(command);
        }
    }

    this.redo = function redo() {
        if (this.redoStack.length > 0) {
            var command = this.redoStack.pop();
            command.redo();
            this.undoStack.push(command);
        }
    }
}