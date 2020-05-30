const tsRes = (date) => ({
    'unix': date.getTime(), 
    'utc': date.toUTCString()
})


module.exports = (req, res) => {
    let dateString = req.params.date_string;
    let timestamp;
    if (dateString) {
        if (isNaN(dateString)) {
            res.json(tsRes(new Date(dateString)));
        }
        else if (!isNaN(Number(dateString))) {
            res.json(tsRes(new Date(Number(dateString))));
        }
        else {
            res.json({'error': 'Invalid Date'});
        }
    }
    else {
        res.json(tsRes(new Date()));
    }
}