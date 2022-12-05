## Node.js REST API in Typescript 

Implementing SOLID principles, domain-driven design and clean architecture. 

### Build up MongoDB container
docker run --name mongodb -d -p 27017:27017 mongo:latest

### Emailer feature
At this development stage, Emailer is configured to use my personal gmail account as email sender. It might be substituted for an admin account with authentication set for that purpouse or explore other hosts/options. 

### Following steps.. 
Authentication and more complex authorization middleware to filter and check if its an admin request. 
Move the logic of email validation to domain.
Finish member create usecase/controller.. , and apply ValidMember validation on create nomination use case. 
Improve TDD coverage