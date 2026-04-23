# Zentra

Zentra is a full-stack application for document retrieval, embedding, and querying using a modern web interface.

## Features
- Upload and process PDF documents
- Store and embed document data
- Query documents using a chat-like interface
- User authentication (sign in/up)
- Dashboard and chat pages

## Project Structure
```
rag-doc/
├── backend/      # Node.js/TypeScript backend (API, DB, PDF processing)
├── frontend/     # React + Vite frontend (UI, components, pages)
└── uploads/      # Uploaded documents
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Details
- **backend/src/**: API endpoints, database logic, PDF processing, middleware
- **frontend/src/**: React components, pages, hooks, assets
- **uploads/**: Stores uploaded PDF files

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
