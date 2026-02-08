# 🌌 Tambo MMT: The UI Strikes Back 🚀

**Live Demo:** [tambo-mmt.vercel.app](https://tambo-mmt.vercel.app/)

> "Your journey, simply easier. Powered by the Force of Generative UI."

Welcome to **Tambo MMT**, a next-generation travel booking experience built for "The UI Strikes Back" Hackathon. In a galaxy of static, rigid interfaces, we’ve built a "Rebel Alliance" application that adapts to the user in real-time using **Tambo's Generative UI SDK**.

---

## 🎭 The Problem: A Galaxy of Static Interfaces
Traditional travel apps force users through endless forms, filters, and rigid workflows. If a user wants to "Find a luxury hotel in Udaipur for 3 nights," they usually have to click through 10 screens. 

## ✨ The Solution: Generative UI Powered by Tambo
Tambo MMT transforms the travel experience into a **single, intelligent conversation**. 
Instead of navigating the app, the app navigates the user. By integrating Tambo's AI orchestrator, our interface dynamically decides which components to render—be it a Flight Result Carousel, a Seat Selector, or a Hotel Booking Review—based on the user's natural language intent.

---

## 🛠️ How the Force Works (Tambo Integration)

This project isn't just a chatbot; it's a **Generative UI Orchestrator**. 

- **Component Discovery:** We've registered core MMT components (Hotels, Flights, Seats, Checkout) with Tambo.
- **Natural Language Intent:** The AI understands complex requests like *"Show me flights from Delhi to Mumbai"* or *"Book a room at the Taj Palace"* and instantly renders the precise interaction window required.
- **Dynamic Interaction:** Using `withInteractable`, the AI can influence the state of the UI, pre-filling passenger details or selecting seats based on conversational context.

### 🔌 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Generative UI:** [@tambo-ai/react](https://tambo.ai)
- **Styling:** Tailwind CSS (Premium Dark/MMT Blue Aesthetic)
- **Animations:** Framer Motion (Smooth Transitions)
- **Type Safety:** TypeScript & Zod

---

## 📝 Note on Data Coverage
> **⚠️ IMPORTANT:** To maintain high performance for the hackathon demo, data is pulled from a **local .csv dataset**. 
>
> Because of this, only limited searches (e.g., Delhi to Mumbai, Udaipur, Jaisalmer, Manali) will return visible flight/hotel results. This is intentional to ensure the Generative UI demonstrates pinpoint accuracy within the available flight paths and property listings.

---

## 🚀 Key Features

*   **AI Flight Concierge:** Talk your way into the cheapest flights.
*   **Generative Seat Map:** Interactive seat selection that feels fluid and alive.
*   **Adaptive Checkout:** The UI evolves based on the number of passengers and trip type.
*   **MMT Aesthetics:** A premium, high-fidelity reconstruction of the MakeMyTrip experience, optimized for Generative AI.

---

## 🏗️ Getting Started

1.  **Clone the Rebellion:**
    ```bash
    git clone https://github.com/sankalp771/tambo_starter.git
    cd my-tambo-app
    ```

2.  **Install Supplies:**
    ```bash
    npm install
    ```

3.  **Awaken the App:**
    ```bash
    npm run dev
    ```

---

## 🏆 Hackathon: The UI Strikes Back
This project was built during the Tambo Online Hackathon (Feb 2026). It demonstrates how Tambo turns the "User Interface" into a "User Conversation," proving that in the future of web dev, **The AI is the Interface.**

---

**Built with ❤️ and the Force by [Sankalp](https://github.com/sankalp771)**
**Powered by [Tambo](https://tambo.ai)**
