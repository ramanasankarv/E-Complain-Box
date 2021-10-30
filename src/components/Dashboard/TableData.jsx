const columns=[
    { 
        id: 'complaint_ID', 
        label: 'Complain ID', 
        minWidth: 100,
        align:"center" },
    { 
        id: 'subject', 
        label: 'Subject', 
        minWidth: 170,
        align:"center"},
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'created_date',
        label: 'Created Date',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'resolved_date',
        label: 'Resolved Date',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

const rowsData=[
    {
        complaint_ID:"234532",
        subject:"OPD",
        status:"Raised",
        created_date:"05-Oct-2021",
        resolved_date:"05-Oct-2021"
    },
    {
        complaint_ID:"234532",
        subject:"OPD",
        status:"Raised",
        created_date:"05-Oct-2021",
        resolved_date:"05-Oct-2021"
    },
    {
        complaint_ID:"234532",
        subject:"OPD",
        status:"Drain",
        created_date:"05-Oct-2021",
        resolved_date:"05-Oct-2021"
    },
    {
        complaint_ID:"234532",
        subject:"Electricity",
        status:"In progress",
        created_date:"05-Oct-2021",
        resolved_date:"05-Oct-2021"
    },
    {
        complaint_ID:"234532",
        subject:"Covid",
        status:"Resolved",
        created_date:"27-Sep-2021",
        resolved_date:"05-Oct-2021"
    },

]

export {columns,rowsData};