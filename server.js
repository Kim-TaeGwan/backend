const express = require('express');
const app = express();

app.listen(4000);

app.get('/company',function(req,res) {
    res.json({ title : 'company' }) // json으로 넘겨줌(json으로 응답하겠다는뜻)
});