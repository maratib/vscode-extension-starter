import { workspace } from "vscode";

function getConfig(key: string, section = "vscode-extension-starter") {
  return workspace.getConfiguration(section)?.get(key);
}

export const config = {
  //#region DEPRECATED
  /**
   * @deprecated
   * TODO: REMOVE THIS
   * User specified color.
   */
  hover: () => getConfig("hover") as string,
  abc: () => getConfig("abc") as boolean,
};
