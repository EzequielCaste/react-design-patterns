# Layout Components

### What are layout components?

> The Layout Components Design Pattern in React is a common pattern used to create reusable components that define the overall layout of an application. These components typically define the high-level structure of the page, such as headers, footers, sidebars, or content areas, and allow for easy 
composition and customization of the application's layout.
 

![image](https://user-images.githubusercontent.com/51804994/228676118-b08188a9-02c1-48e3-ba5a-841df9a5a753.png)

Some examples of this that you're probably familiar with and that we're going to be taking a look at throughout the rest of this chapter are **split screens**, so arranging more than one component in different sections of the page. We also have **lists and items**, so displaying data in a list this is a surprisingly hard thing to get completely right, and **modals** which as most of you know is just content that gets displayed over top of the actual page.

So here's the basic idea of layout components and how we're going to go about creating them. Normally when we create a component let's say that we're creating a side navigation for our site, just a bar on the left hand side that contains some links. 

![image](https://user-images.githubusercontent.com/51804994/228676145-8090f3b3-11be-4d1a-ab4b-c63ebecf5bb0.png)

The normal way we would go about doing that as you can see in this code on the left is by actually including the **div** and the **styles** that go with that side nav **inside the component itself**. 

However, with **layout components** what we do is we split the actual **layout styles** into their own component and then simply display the component itself, in this case the side nav, inside that layout component. 

What this does is it separates the component itself from where the components being displayed on the page and then gives us a lot more flexibility for how we use it in the future. 

So with all that said, the main idea of layout components is that **our components that we create, the main content components of our pages shouldn't know or care where it is that they're actually being displayed on the page**.

[Split-screen components](https://www.notion.so/Split-screen-components-dc5a4277eedb411e92864466f841ae57)

[Lists and List Items](https://www.notion.so/Lists-and-List-Items-97abf1438b304183a5ba11aa446311eb)

[Modal component](https://www.notion.so/Modal-component-ac038bc84a9244a782acd57b697af1ad)
