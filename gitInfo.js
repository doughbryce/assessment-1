/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = `git is a local version control software that will keep track of your code revision history. It acts like checkpoints in a video game, where you can expirament with the code and return to the last save point in the event that something goes terribly wrong, which it will.`;

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = `similar to git, git hub is a remote, cloud based, version control system. it enables checkpoint saving, like git, but also allows you to share code with other developers and push your code to remote servers, giving it another layer of protection against the inevitable disasters.`;

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = `git init is the first step in the git lifecycle. it is how you initialize a repository with the git software, essentially saying - sign up the current directory with git.`;

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = `git clone is exactly what it sounds like - it will duplicate whatever repository is specified, creating a copy of that repo and enabling it to be manipulated without having to alter the original files.`;

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = `git status simply tells you information regarding the relationship and condition of your current directory with the git software. it will give you whatever current information it has regarding what is up to date with the last git commit or add, what has been changed but not saved yet, and a few helpful commands in case you forgot what youre supposed to type next.`;

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = `git add is like packaging up all the resources that have been changed since the last add and getting them ready for shipment. it will add to the packages everything that you specify it to add. we usually do (git add .) in order to add all that has not yet been added.`;

let gitAddCode = `git add .`;

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = `this is usually accompanied by a git message, and acts as the shipping label in our packaging analogy. it is like a label or flag that marks whatever has been added but not yet commited to be under the umbrella of whatever label is specified. kind of like the marker for the checkpoint.`;

let gitCommitCode = `git commit -m "initial commit`;


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = `this is the actual shipping. this is where we go to the post office and drop the package in. it sends the latest add and commit to your remote repository on github, making it available to whomever has access to the github repo. it is the final step in the git process. (git push origin main) or just (git push)`;