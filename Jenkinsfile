pipeline {
    stages {
        when {
        branch 'master'
        }
        stage('Build') {
            steps {
               echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Tezst') {
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