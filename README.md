# Signup and Authenticate with REACT

- make a form
- post it up
- get an authentication back

## Notes on What I Have Learned in this Workshop:

- Now have starting a new Vite project and starting a new github repo down!
- Read the directions carefully! I deleted the app.css file and then had to find it and put it back in!
- the handleSubmit function gets called just through `{handleSubmit}` and no need to do `onSubmit={(e) => handleSubmit(e)}
- handleSubmit goes in the FORM and __not__ the button. 
- remember: state variables are declared __inside__ the main function.
- save files before doing a "git add ."
- If there's a ternary that's not a ternary and only a "two"-nary* (not a real term) just use the logical operator  `{error && <p>{error}</p>}` rather than something like error? `<p>{error}</p>  : <p>this should show nothing, but I'm typing it in so it will</p>`
- backticks make code look like `code` in markdown.