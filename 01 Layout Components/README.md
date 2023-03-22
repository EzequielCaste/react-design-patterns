#Layout Components

### What are layout components?

> Layout components are components in React whose primary concern is helping us to arrange other components that we create on the page.
> 

<aside>
💡 Our components should not know where they are being displayed.
</aside>

Some examples of this that you're probably familiar with and that we're going to be taking a look at throughout the rest of this chapter are **split screens**, so arranging more than one component in different sections of the page. We also have **lists and items**, so displaying data in a list this is a surprisingly hard thing to get completely right, and **modals** which as most of you know is just content that gets displayed over top of the actual page.

So here's the basic idea of layout components and how we're going to go about creating them normally when we create a component let's say that we're creating a side navigation for our site right just a bar on the left hand side that contains some links. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48c117e5-ea84-41a8-8902-c9508b331744/Untitled.png)

The normal way we would go about doing that as you can see in this code on the left is by actually including the div and the styles that go with that side nav inside the component itself. However with layout components what we do is we split the actual layout styles into their own component and then simply display the component itself. 

In this case the side nav inside that layout component and what this does is it separates the component itself from where the components being displayed on the page and then gives us a lot more flexibility for how we use it in the future so with all that said the main idea of layout components is that **our components that we create, the main content components of our pages shouldn't know or care where it is that they're actually being displayed on the page** so just keep that in mind.