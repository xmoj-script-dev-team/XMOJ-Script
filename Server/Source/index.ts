import { Process } from "./Process";

export default {
    async fetch(RequestData: Request, Environment, ctx) {
        var Processor = new Process(RequestData, Environment);
        return new Response(JSON.stringify(await Processor.Process()), {
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
    }
};