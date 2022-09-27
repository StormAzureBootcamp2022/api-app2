import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // if (name) {
    //     context.bindings.outputDocument = JSON.stringify({
    //         // create a random ID
    //         id: new Date().toISOString() + Math.random().toString().substring(2, 10),
    //         name: name
    //     });
    // }

    var mongoClient = require("mongodb").MongoClient;
    mongoClient.connect("mongodb://cosmosdb-storm-chaos-customer-single:DEDYI8pHVQVY0Y0sF81ClYNDhHKLEkyV8PREUcgEjB91it7NcSZzRjaPCUjyRWSAmnlURkN9cGPmkIUyhOKoow==@cosmosdb-storm-chaos-customer-single.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmosdb-storm-chaos-customer-single@", function (err, db) {
        context.log('MongoDB connection successful!');
        db.close();
    });

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;