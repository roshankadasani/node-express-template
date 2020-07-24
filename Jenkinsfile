pipeline {
    agent { docker { image 'node:6.10-slim' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}