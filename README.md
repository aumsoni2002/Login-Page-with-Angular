## Overview of the Application

A login page that asks for a registered email address and password will be verified by an authentication service(auth.service.ts) 
that will contain those two items, and if the credentials match, a random static token will be stored in local storage and the user
will be able to log into a home page.

The user may only logout using the provided link. they cannot manually change the URL to access the Login Page. And When a user clicks 
the Logout button, the produced static token will be erased and they are promptly sent to the Login Page. 

If the user attempts to input any random or unregistered Path into the URL, a page with a 404 Not Found Error will be shown.

Application Link -- https://extraordinary-trifle-cf371a.netlify.app/login
