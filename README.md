# 💰 Loan Default Prediction System

A web-based **Machine Learning** project that predicts whether a loan applicant is likely to default.  
Built using **Python**, **Flask**, **HTML**, **CSS**, and **JavaScript**, this system integrates a trained ML model with an intuitive web interface for real-time predictions.

---

## 🧠 Overview

This project helps financial institutions and analysts assess **loan risk** by predicting whether an applicant is likely to default on their loan.  
It uses a **CSV-based dataset** to train a machine learning model on features such as applicant income, credit history, loan amount, and more.

---

## 🚀 Features

- 🧾 Uses Kaggle dataset for model training  
- 🤖 Machine Learning model built using **scikit-learn**, **pandas**, and **NumPy**  
- 💻 Simple and interactive **Flask web interface** for predictions  
- 📊 Displays prediction results clearly: **Default / No Default**  
- 💾 Model persistence using **joblib/pickle**  
- 🔒 Clean and modular project structure for easy deployment  

---

## 🧩 Dataset

The dataset used for this project comes from the **[Home Credit Default Risk Competition on Kaggle](https://www.kaggle.com/competitions/home-credit-default-risk/data)**.  

> ⚠️ The dataset is too large to be stored on GitHub (over 25 MB).  
> To use the project:
> 1. Download the dataset from the Kaggle link above.  
> 2. Place the required CSV files in the `dataset/` folder of the project directory.  

You can also include a smaller `sample_dataset.csv` for demonstration purposes in the repository.

---

## 🛠️ Technologies Used

### **Backend (ML + Web Server)**
- Python 3.x  
- Flask (for routing and serving predictions)  
- pandas, NumPy, scikit-learn (for data preprocessing and model training)  
- joblib / pickle (for saving and loading trained models)

### **Frontend**
- HTML5, CSS3, JavaScript (for web interface)

### **Development Tools**
- VS Code (IDE)  
- Git + GitHub (Version control)  
- Kaggle (Dataset source)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Loan-Default-Prediction.git
cd Loan-Default-Prediction
