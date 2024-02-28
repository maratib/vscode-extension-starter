import * as vs from "vscode";
import * as utils from "./utils";

const console = utils;

export function activate(context: vs.ExtensionContext) {
  console.log("Activated");

  let disposable = vs.commands.registerCommand(
    "vscode-extension-starter.helloWorld",
    () => {
      vs.window.showInformationMessage(
        "Hello World from vscode-extension-starter!"
      );
      console.log(utils.getConfig("hover"));
      console.log(utils.getConfig("showCommon"));
    }
  );

  context.subscriptions.push(disposable);
} // end activate

utils.watchForExtensionChanges();

// This method is called when your extension is deactivated
export function deactivate() {}
