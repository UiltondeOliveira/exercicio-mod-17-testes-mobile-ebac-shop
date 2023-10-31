pipeline{
    agent any

    stages {
        stage ('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/UiltondeOliveira/exercicio-mod-17-testes-mobile-ebac-shop.git'
            }
        }
        stage('BrowserStack login') {
            steps {
                browserstack(credentialsId: '164f4f9c-dcef-4df4-8ff5-62c068bc4170') {
            }
         }
      }
        stage ('Install Dependencies') {
            steps {
                sh 'npm i node@16.13'
            }
        }
        stage ('Run tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
