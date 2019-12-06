import vscode from "vscode";

// called when your extension is activated
export function activate(context: vscode.ExtensionContext): void {
    console.log("started extension");

    const dispose = vscode.commands.registerCommand("extension.helloWorld", () => {
        // TODO: execute commands here

        vscode.window.showInformationMessage("hello world");
    });

    context.subscriptions.push(dispose);
}

// called when the extension is deactivated - do cleanup here?
//@ts-ignore
export function deactivate(): void {
    console.log("deactivated");
}
