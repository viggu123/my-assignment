
Assignment: Lit Web Components POD T-Shirt Store

Part 1:
I converted the referenced animation site into a Single Page Application (SPA) using Lit by creating a custom web component called <image-transition>. This component mimics the original animation using CSS keyframes and is embedded in the main <pod-app> component.

State management was handled within each component using Lit's reactive properties, allowing UI elements to reflect state changes. Routing was minimal, as this SPA operates as a single page with component-based layout rather than distinct pages.

Part 2:
I implemented a T-shirt customizer using a Lit component <tshirt-customizer>. It features dropdowns (inspired by the referenced CodePens) for selecting width, height, and color. These inputs update reactive properties, which then dynamically adjust the preview area using CSS variables and Lit's rendering capabilities.
