import {WaniClient} from "../src";
import 'dotenv/config';

(async () => {
    const client = new WaniClient(process.env.WANI_TOKEN);
    const response = await client.getAllSRSStages()
    console.log(response);
})();