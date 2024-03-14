const express = require("express");
const AWS = require("aws-sdk");

// Configure AWS SDK
AWS.config.update({
    region: 'ap-south-1',
});
const lambda = new AWS.Lambda();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
 return res.json({
    message: "Hello from /",
 });
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


app.post("/shopify-webhook-request", async (req, res) => {
 console.log(req.body);

//  const reqBody = req.body;
 const variants = req.body.variants;
 console.log("variants:::::::", variants);
 await delay(60000);

 const events = variants.map(variant => {
    return {
      titleProd: req.body.title,
      titleVariant: variant.title,
      sku: variant.sku,
      price: variant.price,
    };
 });

 console.log("Event Array: " + events);

 const lambdaResponses = await Promise.all(events.map(async (event) => {

    const params = {
        FunctionName: "lambda-dev-firstLambda",
        Payload: JSON.stringify(event),
     };
    
     try {
        const lambdaResponse = await lambda.invoke(params).promise();
        console.log("Lambda response:", lambdaResponse);
        return res.json({
          message: "Shopify webhook request received and Lambda function invoked",
          lambdaResponse: lambdaResponse.Payload,
        });
     } catch (error) {
        console.error("Error invoking Lambda function:", error);
        return res.status(500).json({
          message: "Error invoking Lambda function",
          error: error,
        });
     }
    
 }));

 return res.status(200)//.send(lambdaResponses);
});

app.post("/shopify-order-create", async (req, res) => {
    console.log(req.body)

    const lineItems = req.body.line_items;

    function extractSKU(lineItems) {
        return lineItems.map(item => item.sku)
    }
    const productNumbers = extractSKU(lineItems);

    console.log("Extracted SKUs:   ", productNumbers)


    const shopifyFields = {
        id: req.body.id,
        name: req.body.customer.first_name + req.body.customer.last_name,
        email: req.body.customer.email,
        phone: req.body.customer.phone,
        currency: req.body.currency,
        city: req.body.customer.city || req.body.shipping_address.city,
        address: req.body.customer.default_address.zip,
        country: req.body.customer.default_address.country,
        paymentTerms: req.body.payment_terms,
        vatZone: req.body.customer.default_address.country === 'India' ? 
        1 : ( req.body.customer.default_address.country === 'European Union' ? 2 : 3),
        productNumber: productNumbers,
        lineItems: req.body.line_items

    }

        const params = {
            FunctionName: "lambda2-dev-secondLambda",
            Payload: JSON.stringify(shopifyFields),
         };
        
         try {
            const lambdaResponse = await lambda.invoke(params).promise();
            console.log("Lambda response:", lambdaResponse);
            return res.json({
              message: "Shopify webhook request received and Lambda function invoked",
              lambdaResponse: lambdaResponse.Payload,
            });
         } catch (error) {
            console.error("Error invoking Lambda function:", error);
            return res.status(500).json({
              message: "Error invoking Lambda function",
              error: error,
            });
         }
;
//     console.log("First Name:", req.body.customer.first_name)
// console.log("Last Name:", req.body.customer.last_name)
// console.log("City:", req.body.customer.city || req.body.shipping_address.city)
// console.log("Phone:", req.body.customer.phone)
// console.log("Address:", req.body.customer.default_address)
// console.log("Zip:", req.body.customer.default_address.zip)
// console.log("Country:", req.body.customer.default_address.country)
// console.log("Currency:", req.body.currency)
})

app.listen(port, () => console.log(`Listening on ${port}`));