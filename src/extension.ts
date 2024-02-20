import * as vscode from "vscode";
import { config } from "./config";
import * as utils from "./utils";

const REFRESH_COMMAND = "solidity-developer-studio.sds.reload";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vscode-extension-starter.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from vscode-extension-starter!"
      );
      console.log(config.hover());
      console.log(config.abc());
    }
  );

  let refresh = vscode.commands.registerCommand(REFRESH_COMMAND, () => {
    // console.log("Reloading");
    vscode.commands.executeCommand("workbench.action.reloadWindow");
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(refresh);
}

utils.watchForExtensionChanges(REFRESH_COMMAND);

// This method is called when your extension is deactivated
export function deactivate() {}
