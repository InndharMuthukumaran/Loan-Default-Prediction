const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to run the model prediction
app.post('/predict', (req, res) => {
    const { amt_credit, amt_annuity, days_birth, days_employed, amt_income_total, ext_source_1, ext_source_2, ext_source_3 } = req.body;
    
    const pythonProcess = exec(`python predict.py ${amt_credit} ${amt_annuity} ${days_birth} ${days_employed} ${amt_income_total} ${ext_source_1} ${ext_source_2} ${ext_source_3}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            res.status(500).send('Server error');
            return;
        }
        const prediction = stdout.trim();
        res.json({ prediction });
    });
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
