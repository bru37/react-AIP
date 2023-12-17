import React, { useState, useEffect } from "react";
import { fetchIssues } from "../api/githubapi";
//컴포넌트는 이슈 목록을 가져와 표시하며, 페이지네이션 기능도 함께 구현할수있다.
const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getIssues = async () => {
            try {
                const data = await fetchIssues(currentPage);
                setIssues(data);
            } catch (error) {
                console.error("Error fetching issues:", error);
            }
        };

        getIssues();
    }, [currentPage]); // currentPage가 변경될 때마다 다시 호출

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h1>Issue List</h1>
            <ul>
                {issues.map((issue) => (
                    <li key={issue.id}>
                        <strong>{issue.title}</strong>
                        <p>{issue.body}</p>
                    </li>
                ))}
            </ul>
            <div>
                {/* 페이지네이션 컴포넌트 또는 UI를 여기에 추가 */}
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous Page
                </button>
                <span> Page {currentPage} </span>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default IssueList;

// useEffect(() => {
//     //useEffect를 사용하면 렌더링과는 독립적으로 비동기 작업(데이터 가지고 오기)을 수행하므로, 화면의 지연을 최소화할 수 있다
//     const getIssues = async () => {

//      try {
//             const data = await fetchIssues(currentPage);
//             - getIssues 함수는 fetchIssues함수를 호출해서 이슈목록을 가지고 온다.
//             -useEffect의 두 번째 매개변수로 전달된 currentPage(의존성배열)는 상태가 변경될 때만 useEffect를 다시 실행하도록 하고
//             -페이지가 변경될 때마다 새로운 이슈 목록을 가져오게 된다,페이지가 변경되었을 때만 이슈 목록을 다시 가져와서 화면을 갱신됌
//             -다른 페이지로 이동하더라도, 화면 전환이 발생하기 전까지는 컴포넌트가 재렌더링되지않는다
//             setIssues(data);
//             -API 응답 데이터->서버로부터 받아온 이슈 목록
//             -setIssues 는 API 호출에 성공하면 해당 데이터를 상태(State)에 업데이트하여 컴포넌트가 렌더링될 때 그에 맞게 UI가 업데이트됌
//         } catch (error) {
//             console.error("Error fetching issues:", error);
//         }
//     };
