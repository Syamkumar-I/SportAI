

# 🏆 SportAI

### AI-Powered Platform for Democratizing Sports Talent Assessment

SportAI is an AI-driven platform designed to **identify and evaluate sports talent using video analysis**.
The system allows athletes to upload performance videos from their smartphones, after which AI models analyze movement patterns, posture, and activity to generate **objective performance insights and talent scores**.

The goal of SportAI is to **democratize sports talent discovery**, making professional-level performance analysis accessible to athletes regardless of their location or access to coaching infrastructure.

---

# 🎯 Problem Statement

Traditional sports talent identification systems face several challenges:

* Limited access to professional coaches and training facilities
* Subjective evaluation during trials
* High cost of sports infrastructure
* Lack of opportunities for rural athletes

SportAI addresses these issues by providing:

* AI-based performance evaluation
* Video-based skill analysis
* Automated scoring and feedback
* Remote athlete assessment

---

# 🚀 Key Features

### Athlete Video Upload

Athletes can upload videos of their sports performance directly from their device.

### AI-Based Motion Analysis

Computer vision models analyze:

* Body posture
* Movement patterns
* Performance metrics

### Talent Scoring System

The system generates scores based on multiple parameters such as:

* Speed
* Agility
* Balance
* Technique

### Cheat Detection

AI mechanisms detect possible cheating or video manipulation.

### Athlete Dashboard

Athletes can view:

* Performance scores
* AI feedback
* Improvement suggestions

### Scout / Coach Dashboard

Sports scouts and coaches can:

* Discover athletes
* Compare performance data
* Track talent rankings

---

# 🧠 System Architecture

```
Athlete Device
     │
     ▼
Video Upload
     │
     ▼
Backend API
     │
     ▼
Video Processing Pipeline
(Frame Extraction & Preprocessing)
     │
     ▼
AI Model Inference
(Pose Estimation & Motion Analysis)
     │
     ▼
Performance Metrics Generation
     │
     ▼
Talent Scoring System
     │
     ▼
Dashboard Visualization
```

---

# 🛠 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui

### Backend

* Node.js
* Express.js

### AI / Machine Learning

* Python
* OpenCV
* TensorFlow / PyTorch

### Database

* MongoDB / Firebase

### Development Tools

* Git
* GitHub
* VS Code

---

# 📂 Project Structure

```
SportAI
│
├── src
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── App.tsx
│
├── public
│
├── backend
│   ├── routes
│   ├── controllers
│   └── server.js
│
├── ai-model
│   ├── train.py
│   ├── predict.py
│   └── dataset
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Syamkumar-I/SportAI.git
cd SportAI
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

The application will start locally.

---

# 🧪 AI Model Usage

Train model:

```bash
python train.py
```

Run prediction:

```bash
python predict.py --video sample.mp4
```

---

# 📊 Example Output

```
Athlete: Rahul
Sport: Sprint

Speed Score: 8.6
Agility Score: 8.1
Technique Score: 7.9

Overall Talent Score: 8.2
```

AI Suggestions:

* Improve acceleration phase
* Maintain balanced posture during sprint

---

# 🌍 Impact

SportAI can significantly improve sports talent discovery by:

* Identifying hidden talent in rural areas
* Providing data-driven athlete evaluation
* Reducing dependency on physical trials
* Supporting sports academies and scouting programs

---

# 🔮 Future Enhancements

* Real-time AI analysis during recording
* Wearable sensor integration
* Multi-sport evaluation system
* Athlete ranking and leaderboard
* Personalized training recommendations

---

# 👨‍💻 Team

Developed for **Smart India Hackathon (SIH)**

Team Members:

* Syam Kumar
* Ismail
* Dhrakshayani
* Pushpa
* Shabena
* Akhila

---

