import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Table from './Table';

function Content() {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/home" element={<>홈 페이지</>}></Route>
        <Route path="/1" element={<>신청수업관리<Table></Table></>}></Route>
        <Route path="/2" element={<>진행수업관리<Table></Table></>}></Route>
        <Route path="/3" element={<>종강수업관리<Table></Table></>}></Route>
        <Route path="/4" element={<>홀드수업관리<Table></Table></>}></Route>
      </Routes>
    </div>
  );
}

export default Content;