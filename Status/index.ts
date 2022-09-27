import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            status: "OK",
            id: new Date().toISOString() + Math.random().toString().substring(2, 10),
            timestamp: new Date().toISOString()
        }
    };
};

export default httpTrigger;