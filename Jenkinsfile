pipeline{
    agent any

    stages {
        stage ('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/UiltondeOliveira/exercicio-mod-17-testes-mobile-ebac-shop.git'
            }
        }
                stage ('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
                stage ('Run tests') {
            steps {
                sh 'NO_COLOR=1 npm test'
            }
        }
    }
}