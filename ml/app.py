from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import warnings
warnings.filterwarnings('ignore')

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
# Enable CORS for Node.js backend
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",  # React frontend
            "http://localhost:4000"   # Node.js backend
        ]
    }
})

# Load and prepare data
def prepare_model():
    try:
        # Try to load existing model
        model = joblib.load('crop_recommendation_model.joblib')
        return model
    except:
        # Train new model if no saved model exists
        df = pd.read_csv('Crop_recommendation.csv.xls')
        X = df.drop('label', axis=1)
        y = df['label']
        
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, stratify=y, test_size=0.2, random_state=1
        )
        
        model = RandomForestClassifier(
            n_estimators=100,
            random_state=42,
            n_jobs=-1
        )
        
        model.fit(X_train, y_train)
        
        # Save the model
        joblib.dump(model, 'crop_recommendation_model.joblib')
        return model

# Initialize model
model = prepare_model()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Crop Prediction API is running'
    }), 200

@app.route('/api/v1/predict', methods=['POST'])
def predict():
    """Prediction endpoint"""
    try:
        data = request.get_json()
        
        # Extract features
        features = [
            float(data['N']), 
            float(data['P']),
            float(data['K']),
            float(data['temperature']),
            float(data['humidity']),
            float(data['ph']),
            float(data['rainfall'])
        ]
        
        # Make prediction
        prediction = model.predict([features])
        
        # Get probability scores
        probabilities = model.predict_proba([features])[0]
        class_labels = model.classes_
        
        # Create probability dictionary
        prob_dict = {
            class_labels[i]: float(probabilities[i]) 
            for i in range(len(class_labels))
        }
        
        return jsonify({
            'status': 'success',
            'prediction': prediction[0],
            'confidence_scores': prob_dict,
            'message': f'The recommended crop is {prediction[0]}'
        }), 200

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 400

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    debug = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    
    app.run(host='0.0.0.0', port=port, debug=debug)