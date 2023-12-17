import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IssueListPage from "./pages/IssueListPage";
import IssueDetailPage from "./pages/IssueDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/issues" element={<IssueListPage />} />
                <Route path="/issue/:id" element={<IssueDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
