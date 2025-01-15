export default function handler(req, res) {
    console.log({ params: req.params });
    console.log({ query: req.query });
    console.log({ body: req.body });

    // Introduce a 1-minute delay
    setTimeout(() => {
        res.status(200).send({ message: "This is delayed response", query: req.query });
    }, 180000); // Delay in milliseconds (60000ms = 1 minute)
}