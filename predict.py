import joblib
import numpy as np
import sys

# Load pre-trained model and scaler
model = joblib.load('loan_default_model.pkl')
scaler = joblib.load('scaler.pkl')

# Retrieve input features from command line arguments
features = [float(arg) for arg in sys.argv[1:]]
features_scaled = scaler.transform([features])

# Make prediction
prediction = model.predict(features_scaled)

# Output the prediction
output = 'Default' if prediction[0] == 1 else 'No Default'
print(output)
