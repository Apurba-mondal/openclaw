import {select, isCancel} from "@clack/prompts";
import chalk from "chalk";//for the text
import figlet from "figlet";// for the colour
import { runCliMode } from "../modes/cli";

const BANNER_FONT = 'ANSI Shadow';
const SHADOW = chalk.hex('#5b4d9e');
const FACE = chalk.hex('#e8dcf8').bold;



function printBannerWithShadow(ascii: string) {

  const bannerLines = ascii.replace(/\s+$/, '').split('\n');
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW(('  ' + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}


export async function runWakeup(){
    let ascii:string;
    try{
        ascii = figlet.textSync("chaicodeclaw", {font:BANNER_FONT});
    }
    catch(error){
        ascii = figlet.textSync("chaicodeclaw", {font:"Standard"})
    }
    printBannerWithShadow(ascii);

    const mode = await select({
        message: "Select the mode you want to use",
        options: [
            { value: "cli", label: chalk.green("CLI") },
            { value: "telegram", label: chalk.blue("Telegram") },
            { value: "exit", label: chalk.red("Exit") }
        ]
    })
    
     if(isCancel(mode || mode==="exit")){
        console.log(chalk.red("Exiting the program..."));
        return;
     }
    else if(mode == "cli"){
        await runCliMode();
    }
    else if(mode == "telegram"){
        console.log("You selected Telegram mode");
    }
       

}