const { core } = require("@actions/core");
const { exec } = require("node:child_process");

async function run() {
    core.info("Starting action...");
   
    const apiKey = core.getInput("api_key");
    const name = core.getInput("project_name");

    core.info("Installing Shuttle");
    exec("cargo install cargo-shuttle");

    core.info("Shuttle installed successfully, logging in");
    exec(`cargo shuttle login --api-key ${apiKey}`);

    core.info("Logged in, deploying to Shuttle");
    exec(`cargo shuttle deploy --name ${name}`);

    core.setOutput("result", "success");
    core.info("Project deployed to Shuttle successfully.");
}
run().catch(core.setFailed);