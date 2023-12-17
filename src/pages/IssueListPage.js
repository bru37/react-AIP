// IssueListPage.js
import React from "react";
import IssueList from "../components/IssueList";

const IssueListPage = () => {
    return (
        <div>
            <h1>GitHub Issues</h1>
            {/* 이슈 목록 컴포넌트를 렌더링 */}
            <IssueList />
        </div>
    );
};

export default IssueListPage;
