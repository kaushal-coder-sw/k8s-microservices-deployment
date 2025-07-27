# k8s-microservices-deployment
---

## 🧰 Prerequisites

Make sure you're using a **Linux distro (Ubuntu 22.04/24.04)** and that **Docker Desktop is NOT installed**. We use native `docker.io`.

---

📦 Step 1: Install Dependencies

```bash
sudo apt update -y
sudo apt install -y curl wget apt-transport-https ca-certificates conntrack

🐳 Step 2: Install Docker (Native - No Docker Desktop)

sudo apt install -y docker.io
sudo usermod -aG docker $USER
newgrp docker


☸️ Step 3: Install kubectl (Kubernetes CLI)

curl -LO "https://dl.k8s.io/release/$(curl -sL https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

🚀 Step 4: Install Minikube

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube


▶️ Step 5: Start Minikube with Native Docker Driver

minikube start --driver=docker

🧪 Step 6: Verify Installation

minikube status
kubectl get nodes

🏗️ Step 7: Build Docker Images Locally

cd k8s-project

# Build backend
docker build -t backend ./backend

# Build frontend
docker build -t frontend ./frontend

🛠️ Step 8: Load Images into Minikube

minikube image load backend
minikube image load frontend

📜 Step 9: Apply Kubernetes Manifests

cd k8s-project/k8s
kubectl apply -f .

🔍 Step 10: Check Deployment Status

kubectl get pods
kubectl get services

🌐 Step 11: Access the Frontend and Backend

minikube service frontend
minikube service backend

🧼 Bonus Commands

# Stop the cluster
minikube stop

# Delete the cluster
minikube delete

# View Minikube dashboard
minikube dashboard
