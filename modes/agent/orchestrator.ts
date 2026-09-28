import {isCancel, text} from "@clack/prompts";
import clack from 'chalk';
import { defaultAgentConfig } from "./types.ts";


export async function runAgentModel(){
    console.log(clack.bold("\n 🤖 Running agent model\n"));

    const goal = await text({
        message: "what is your goal for the model",
        placeholder: "Enter your goal here",
    })
    if(isCancel(goal) || !goal.trim())return;

    const config = defaultAgentConfig();
}

