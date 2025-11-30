# Tech Stack

Framework: React.js (Vite)
Language: TypeScript
Styling: Tailwind CSS
Icons: Lucide-React
State Management: React Hooks (useState, useEffect, Custom Hooks)



## Design Process & Research

As part of the assignment requirements, I analyzed several leading AI interfaces to inform the design decisions for Spark.AI.

1. Competitive Analysis
   I reviewed the following AI User Interfaces:
   ChatGPT (OpenAI)
   Summary: Sets the industry standard with a clean, centered chat layout and a history sidebar that can be hidden. Focuses purely on the conversation flow.
   Copilot
   Summary: Uses warmer tones and serif fonts to feel more "human." Standout feature is the "Artifacts" view where code/documents open in a side panel.
   

2. Selected Features for Spark.AI
   Based on the analysis above, I combined the following 5 key features into my design:
   Collapsible Sidebar: Inspired by ChatGPT, giving users the ability to focus entirely on the chat or access history when needed.
   Typewriter Effect: Mimics the token-by-token generation of LLMs to make the bot feel "alive" rather than displaying static text blocks instantly.
   Dark & Light Mode Support: Essential for accessibility and user preference, utilizing Tailwind's dark: class strategy with smooth color transitions.
   Responsive Mobile Layout: A mobile-first approach where the sidebar becomes an overlay on smaller screens (hamburger menu), ensuring usability on all devices.
   Clean, Distraction-Free Typography: Using high contrast for text and subtle backgrounds (Zinc/Slate palettes) to reduce eye strain during long usage.
   
   
   ### Key Functionalities implemented
   Simulated AI Logic: A custom hook (useChat.ts) simulates API latency and message handling.
   Dynamic UI: Auto-scrolling to the latest message.
   Theme Switcher: Toggles between Dark (bg-zinc-950) and Light (bg-gray-50) modes.
   Optimized Assets: Using Lucide-React for lightweight SVG icons.
