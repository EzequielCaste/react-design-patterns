# Container Components

### What are container components?

Container components are basically React components that take care of all of the data loading and other data management for their Child components.

![image](https://user-images.githubusercontent.com/51804994/228677117-698b886c-7854-4666-842a-76d4b31a8c5d.png)

A lot of the time we need our child components to be able to share that logic and the way that container components solve that problem is by splitting that logic out into its own component which is the container and the container then takes care of loading that data and passes it automatically to the children components.

![image](https://user-images.githubusercontent.com/51804994/228677165-f5894549-5a9e-459a-be11-435c1306faf9.png)

With container components we don't want our components to know where their data is coming from or how to manage it we just want our components to be dumb and take some props and display whatever they need to display.

[CurrentUserLoader component](https://www.notion.so/CurrentUserLoader-component-ac8f42751cb34e0087f17c0c0029312f)

[UserLoader component](https://www.notion.so/UserLoader-component-b13fea20a48144e6a574c538b0d5086a)

[ResourceLoader component](https://www.notion.so/ResourceLoader-component-829206c6d1f544fd96e50acf69de2eff)

[DataSource component](https://www.notion.so/DataSource-component-05d1053789ff45d79013a068ec4bbe8b)

[Loading data from localStorage](https://www.notion.so/Loading-data-from-localStorage-73420d4d22584b1fb254dbcfbdc00e7a)
