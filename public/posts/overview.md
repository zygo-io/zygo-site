---
title: Overview
subtitle: What does zygo solve and how?
id: overview
back_img: /assets/index_bg.jpg
---

Zygo tries to provide a simple, general way of isomorphically rendering React apps. There are well known benefits for this approach to writing apps that we won't go into here. Rather, let's look at the problems that need to be solved:

1. Server Rendering  
We need to be able to render our app identically on the client and the server, including all the relevant css so that the app looks correct from the start.

2. Data Flow  
We need to bus the data required for rendering from the server to the client on page load. This allows the app to be bootstrapped seamlessly on the client.

3. Incremental App Loading  
We only want to load the parts of the app we _need_ at any given point. This optimises the bootstrapping process for the client.

The server rendering problem is solved in two ways. Firstly, zygo enforces the use of React to write your app's components. React provides two features that we find useful - it guarantees that the DOM will be updated efficiently, and provides API for rendering components identically both client and server side. Secondly, zygo enforces the use of JSPM for front-end package management. This provides the ability to specify css dependencies directly in the components themselves, providing modularity and a means of tracing the css needed at page load.
