# Portfolio
This is the repository containing a basic web project made in practical courses.

## Lighthouse
There is a folder dedicated to the tests ran by lighthouse.  
There is a first .html file to show the results of the tool before any changes.  
There is a second .html file to show the results of the tool once all of the optimisation has been applied.  
Those optimisations are explained in the `LIGHTHOUSE.md` file

## Continuous Delivery
Besides of the basic web development concepts in this project, I also used this opportunity to play with some DevOps features and tools available on GitHub.

Those tools are mainly *GitHub actions* and *GitHub secrets*  
Two action workflow are used in this project.

### Docker job : Build and upload
The first one is triggered on every push on the master branch.
This job build a Docker image based on an Nginx. Once this first task done, the job push this new image to my GitHub Docker registry called "GitHub Packages".  
Finally, it triggers the second workflow of this project.

### Ansible Job : Deploy and run
The second job simply call the ansible playbook in the project's deploy folder.  
In the **deploy**  folder, you can find a basic Ansible directory, containing files used to deploy my app on the server host.

The Ansible playbook ask for the server to have Docker installed.  
Once this first task is done, it will connect to the GitHub Package api using a few GitHub Secrets.  
Then, it will pull the Docker image I just built.  
Finally, it will start a container based on this image.  
At the end of the playbook, the website should be accessible.