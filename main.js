const { core } = require("@actions/core");
const { exec } = require("@actions/exec");

async function run() {
    core.info("Starting action...");
   
    const apiKey = core.getInput("api_key", { required: true });
    const name = core.getInput("project_name", { required: true });

    core.info("Installing Shuttle");
    await exec.exec("cargo install cargo-shuttle");

    core.info("Shuttle installed successfully, logging in");
    await exec.exec(`cargo shuttle login --api-key ${apiKey}`);

    core.info("Logged in, deploying to Shuttle");
    await exec.exec(`cargo shuttle deploy --name ${name}`);

    core.setOutput("result", "success");
    core.info("Project deployed to Shuttle successfully.");
}
run();