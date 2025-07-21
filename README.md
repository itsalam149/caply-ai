#  Reel Caption Pro 🪄

**Steal Their Style. Caption Your Reels. Instantly.**

Reel Caption Pro is a modern web application that allows users to transfer eye-catching caption styles from any viral video to their own. This project provides a powerful, intuitive, and beautiful frontend built with Next.js, Tailwind CSS, and TypeScript.

![Reel Caption Pro Hero](public/images/demo-video-thumbnail.jpg) ## ✨ Key Features

* **Modern SaaS Landing Page**: A beautiful, animated landing page that clearly explains the product's value.
* **Simple Upload Process**: Easily provide a reference video (via URL) and your own video file (MP4).
* **Canvas-Based Video Editor**: A highly interactive editor to fine-tune your captions.
    * **Text Editing**: Directly modify the content of each caption.
    * **Drag-and-Drop Positioning**: Click and drag captions on the video canvas to place them perfectly.
    * **Visual Timeline**: See all your caption segments on a timeline, and adjust their start and end times.
    * **Style Customization**: Change font size, color, and more in a dedicated style panel.
* **.ASS Parser**: Includes a client-side parser to read style and event data from `.ass` subtitle files.
* **Fully Responsive**: Looks and works great on desktop, tablet, and mobile devices.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v18 or later) and [npm](https://www.npmjs.com/) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/reel-caption-pro.git](https://github.com/your-username/reel-caption-pro.git)
    cd reel-caption-pro
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **UI Components**: [Radix UI](https://www.radix-ui.com/) (for primitives like Dialog, Slider) & [tailwind-variants](https://www.tailwind-variants.org/)
* **Animation**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **File Uploads**: [React Dropzone](https://react-dropzone.js.org/)

## 📁 Project Structure

The project uses a feature-based structure without a `src` directory for simplicity and alignment with modern Next.js conventions.

```
reel-caption-pro/
├── public/              # Static assets (images, icons, fonts)
├── app/                 # Next.js App Router (pages, layouts, API routes)
│   ├── api/             # API routes
│   ├── editor/          # Editor page
│   ├── upload/          # Upload page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home/Landing page
├── components/          # React components
│   ├── ui/              # Reusable, unstyled UI components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── home/            # Components specific to the landing page
│   ├── upload/          # Components for the upload page
│   ├── editor/          # Components for the editor page
│   └── common/          # Shared components (Loaders, Error Boundaries)
├── lib/                 # Core logic, utilities, helper functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── ...                  # Config files (next.config.js, tailwind.config.js, etc.)
└── README.md
```

## next step

* **Backend Integration**: Connect the upload form to the real backend service for video processing.
* **Advanced Editor Features**: Implement font family selection, color pickers, and shadow/outline controls.
* **Video Export**: Use a library like `ffmpeg.wasm` to process the video and burn the captions directly into the MP4 file on the client-side or via a serverless function.
* **Authentication**: Add user accounts to save projects and preferences.

---

Happy coding!# caply-ai
