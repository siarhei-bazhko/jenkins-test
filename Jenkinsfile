pipeline {
    agent { label 'master' }
    echo "Start of everything"
    stages {
        when {
        branch 'master'
        }
        stage('Build') {
            steps {
               echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..!'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}