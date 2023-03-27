import * as React from 'react';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import SimpleDialog from '../admin/components/Dialog'

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

function CreateBtn (params){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {params.field}
            </Button>
            <SimpleDialog
                title = {params.field}
                open={open}
                onClose={handleClose}
            />
            </div>
    )
}

// const renderAssignButton = function(params){
//     function openPopup(){
//         console.log(params.field)
//     }

//     return (
//             <btn></btn>
//     )
// }

const columns = [
  { field: '이름', headerName: 'Name', width: 150},
  { field: '닉네임', headerName: 'NickName', width: 150 },
  { field: '연락처', headerName: 'PhoneNumber', width: 150 },
  { field: '이메일', headerName: 'Email', type: 'number', width: 150 },
    { field: '배정', headerName: 'State1', type: 'number', width: 90 , renderCell : CreateBtn},
    { field: '종강', headerName: 'State2', type: 'number', width: 90 , renderCell : CreateBtn},
    { field: '홀드', headerName: 'State3', type: 'number', width: 90 , renderCell : CreateBtn}
//   { field: '생년월일', headerName: 'Birth', type: 'number', width: 90 },
//   { field: '스카이프ID', headerName: 'SkypeId', type: 'number', width: 90 },
//   { field: '신청 과정', headerName: 'Course', type: 'number', width: 90 },
//   { field: '희망 수업시간', headerName: 'ClassTime', type: 'number', width: 90 },
//   { field: '시작일', headerName: 'DateBegin', type: 'number', width: 90 },
//   {    field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },

];

const rows = [
  { id : 1, 이름: "김경수"  , 닉네임: 'Snow'       , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 2, 이름: "김동죽"  , 닉네임: 'Lannister'  , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 3, 이름: "최혜정 " , 닉네임: 'Lannister'  , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 4, 이름: "문동은 " , 닉네임: 'Stark'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 5, 이름: "전재준 " , 닉네임: 'Targaryen'  , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 6, 이름: "이사라"  , 닉네임: 'Melisandre' , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 7, 이름: "하예솔"  , 닉네임: 'Clifford'   , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 8, 이름: "박연진"  , 닉네임: 'Frances'    , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 9, 이름: "강현남 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"   },
  { id : 10, 이름: "강현남1 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 11, 이름: "강현남2 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 12, 이름: "강현남3 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 13, 이름: "강현남4 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 14, 이름: "강현남5 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 15, 이름: "강현남6 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 16, 이름: "강현남7 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 17, 이름: "강현남8 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 18, 이름: "강현남9 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com" },
  { id : 19, 이름: "강현남11 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 20, 이름: "강현남22 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 21, 이름: "강현남33 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 22, 이름: "강현남44 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 23, 이름: "강현남55 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 24, 이름: "강현남66 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 25, 이름: "강현남77 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 26, 이름: "강현남88 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 27, 이름: "강현남99 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 28, 이름: "강현남12 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 29, 이름: "강현남13 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 30, 이름: "강현남14 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 31, 이름: "강현남15 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 32, 이름: "강현남16 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 33, 이름: "강현남17 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
  { id : 34, 이름: "강현남18 " , 닉네임: 'Roxie'      , 연락처: '010-2222-3333'    , 이메일: "Glory@naver.com"},
];

export default function DataTable() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[1]}
        initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        slots={{
            toolbar: GridToolbar,
          }}
        
      />
    </div>
  );
}