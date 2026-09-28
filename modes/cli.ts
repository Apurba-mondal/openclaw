import {select, isCancel} from "@clack/prompts";
import chalk from "chalk";//for the text

export async function runCliMode() {
    let mode = await select({
        message: "Select the mode you want to use",
        options: [
        { value: "agent", label:("Agent Mode") },
        { value: "plan", label: ("Plan Mode") },
        { value: "ask", label: ("Ask Mode") },
        { value: "back", label:("← Back to main menu") },
      ],
    });
    if(mode === "back") {

        return;
    }
    if(mode === "agent") {}
    if(mode === "plan") {}
    if(mode === "ask") {}
    
    if(mode !=="agent" && mode !=="plan" && mode !=="ask"){
        console.log(chalk.yellow("The mode is not available..."));
        return;
    }
    


}