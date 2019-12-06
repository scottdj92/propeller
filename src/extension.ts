import vscode, { languages, Hover, Disposable } from "vscode";

// called when your extension is activated
export function activate(context: vscode.ExtensionContext): void {
    languages.registerHoverProvider({ language: "typescriptreact", scheme: "file" }, {
        provideHover(document, position, token) {
            console.log(document, position, token);
            return new Hover("I am hovering");
        }
    });

    const dispose = languages.registerDefinitionProvider({ language: "typescriptreact", scheme: "file"}, {
        provideDefinition(document) {
            console.log(document);
            return new Location();
        }
    });

    context.subscriptions.push(dispose);
}

// called when the extension is deactivated - do cleanup here?
//@ts-ignore
export function deactivate(): void {
    console.log("deactivated");
}
