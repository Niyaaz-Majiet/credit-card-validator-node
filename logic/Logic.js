exports.register = function (app) {
    app.get('/api/binlist-details/:digits', getBinListDetails);
}

function getBinListDetails(request, response) {
    try {
        const digits = request.params.digits;
        let lookup = require('binlookup')();
 
        lookup(digits,
            function( err, data ){
                if(err){
                    response.status(500).send({message: err}) 
                }

            response.status(200).send(data); 
        });

        lookup('45717360').then(
            data => console.log(data));
        } catch (e) {
        response.status(500).send({message: e})
        }
}
