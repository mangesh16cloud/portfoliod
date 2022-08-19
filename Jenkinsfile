pipeline {
  agent any
  tools {
        nodejs "nodejs"
    }
    stages {
        stage('SCM checkout phase') {
	     agent { 
    		label 'jenkins-agent'
		}
            steps {
		checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mangesh16cloud/portfoliod.git']]])
		
		stash 'source'
            }
        }
	
        stage('build phase') {
            steps {
                unstash 'source'
                echo 'unstash successful'
        }
        }
        stage ('deploy phase UNDER CONSTRUCTION') {
            steps{
                unstash 'source'
                echo 'unstash is successfull'
                sh 'npm -v'
                echo 'node build successfull'
            }
        }
        stage ('manual test phase  UNDER CONSTRUCTION') {
            steps{
                unstash 'source'
                echo 'unstash is successfull'
                sh 'npm -v'
                echo 'node build perform here'
            }
        }
        stage ('docker-image phase for version control UNDER CONSTRUCTION') {
            steps{
                
                echo 'docker images build here'
                
                
            }
        }
    }
    
}
