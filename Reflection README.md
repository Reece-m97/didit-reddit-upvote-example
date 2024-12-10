Reflection

I managed to deplot to vercel. Everyhting worked fine in development but when deployed to vercel, did have a problem logging in. I would receive "The redirect_uri is not associated with this application." however, after a few redeploys and some time, it somehow fixed itself.
i also managed to change the titles for the post pages. As well as fixing the voting so that you can only vote once for one option. I added error handling for voting while not logged in, this worked in development but does not work when deployed. I haved tried to return an error message and this did not display, so had to go with my current solution.
