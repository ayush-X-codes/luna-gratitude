Let's understand React Helmet in the simplest possible way.

Imagine you built a house (your website).

When someone comes to your house, the first thing they see is the name plate on the door.

Example:

Ashu's Website

That name plate = page title in the browser tab.

But a house also has other information outside:

house name

description

maybe a sign telling what the house is about

On websites these are called meta tags.

Example:

<title>Luna – Understand your relationship with money</title>

<meta name="description" content="A calm expense tracker that helps you understand your money.">

Search engines like Google read this information to understand your page.

The Problem in React

In normal HTML you write this in index.html

<head>
  <title>My Website</title>
  <meta name="description" content="My website">
</head>

But React apps usually have only ONE HTML file.

Like this:

index.html

React then changes the page using JavaScript.

So the browser never reloads the whole page.

It just swaps content.

Think of it like this:

Netflix app
You click → Movies
You click → Profile
You click → Settings

The page doesn't reload.

Only the content inside changes.

The Problem That Creates

If you only write this once:

<title>Luna</title>

Then every page will have the same title.

Example:

Home page → Luna
Pricing page → Luna
About page → Luna
Contact page → Luna

That is bad for:

SEO

user experience

sharing links

Search engines like **Google cannot understand each page.

Why React Helmet Exists

React Helmet is like a worker who updates the name plate of the house every time someone enters a different room.

When the page changes:

Helmet updates:

title
description
meta tags

Automatically.

Visual Example

Without Helmet:

Browser tab

[ Luna ]

You go to About page

[ Luna ]

Still same.

With Helmet:

Home page

[ Luna – Track Your Expenses ]

About page

[ About Luna ]

Contact page

[ Contact Luna ]

Helmet changes the head section dynamically.

How Helmet Works (Step by Step)

React components control the page body.

Helmet allows components to control the page head.

Think like this:

Website

HEAD = page information
BODY = page content

Helmet lets React control both.

Step 1 Install Helmet
npm install react-helmet
Step 2 Import Helmet
import { Helmet } from "react-helmet";
Step 3 Use It Inside Each Page

Example Home Page

function Home() {
  return (
    <>
      <Helmet>
        <title>Luna - Expense Awareness</title>
        <meta name="description" content="Track your money calmly with Luna." />
      </Helmet>

      <h1>Welcome to Luna</h1>
    </>
  );
}

Now when user opens this page:

Helmet changes the head.

Example About Page
function About() {
  return (
    <>
      <Helmet>
        <title>About Luna</title>
        <meta name="description" content="Learn about the Luna expense tracker." />
      </Helmet>

      <h1>About us</h1>
    </>
  );
}

Now the title becomes:

About Luna
What Actually Happens Behind The Scenes

Helmet watches your React components.

When a page loads:

React renders component
        ↓
Helmet reads meta tags
        ↓
Helmet updates <head>
        ↓
Browser tab title changes

Simple flow:

Page loads
     ↓
Helmet sees tags
     ↓
Helmet edits HEAD
Small Sketch

Think like this:

React Page

[Component]

   |
   v

[Helmet]

   |
   v

<head>
<title>New Title</title>
<meta description>
</head>

Helmet acts like a bridge between React and the browser head.

Why This Matters (Real Example)

Imagine someone searches in **Google:

expense tracker for students

Google reads your page description.

Example result:

Luna – Calm Expense Tracker
Track your money gently and understand your habits.

Without meta tags:

Luna
React App

Nobody clicks that.

So Helmet helps people find your website.

Where You Should Use Helmet

Use it in every page component.

Example structure:

pages/

Home.jsx
About.jsx
Pricing.jsx
Contact.jsx

Each page:

<Helmet>
<title>Page title</title>
<meta description>
</Helmet>
Simple Rule To Remember

Think like this:

React controls the BODY
Helmet controls the HEAD
One Important Modern Note

The newer version is

react-helmet-async

It works better with modern React.

But react-helmet still works fine.

If you want, I can also show you the cleanest real structure used in production React apps so you only write Helmet once and reuse it on every page (much easier for projects like your Luna app).