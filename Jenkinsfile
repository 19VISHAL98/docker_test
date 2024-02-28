pipeline {
    agent any

    tools {
        maven 'maven_3_5_0' // Assuming 'Maven' is configured in Jenkins as a Maven tool
    }

    stages {
        stage('Code Pull') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/19VISHAL98/docker_test.git']])
                 echo "git pulling successfully"
            }
        }

        // stage('Build') {
        //     steps {
              
        //         // sh "mvn clean install"
        //         echo 'Building with Maven'
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         echo 'Running tests with Maven'
        //         // sh "mvn test"
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying with Maven'
        //         // sh "mvn deploy"
        //     }
        // }
    }

    post {
        success {
            echo 'Build successful - Performing additional steps if needed'
            // Add post-build steps here
        }

        failure {
            echo 'Build failed - Notify or take corrective action if needed'
            // Add post-failure steps here
        }
    }
}
