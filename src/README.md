Working with the ion-nav Component
see https://ionic.io/blog/how-to-navigate-in-ionic-modals-with-ion-nav


Now that we arrived in the modal it’s time for the navigation to new pages. We can perform this both directly from the view, or from code by injecting the ion-nav component, which comes with a _bunch_ of methods, and we can make use of them to navigate to another page (push), we can go back to our root page from anywhere, or you can use any of the other methods of the component to manipulate the view stack!

We’ll keep it simple for now and only use two of them. Besides that, we will track the level of our page because we are actually reusing the same content page when we push another page on the stack.

That’s the reason why we define the nextPage to be our current component – we need a reference to this when we use the ion-nav-link

Recently added passing of data from home via base, into content-modal.
