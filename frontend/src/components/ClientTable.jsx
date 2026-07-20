export default function ClientTable(){

const clients=[

{
name:"John Doe",
dob:"01/01/2000",
service:"MHSS",
qmhp:"Ricardo QMHP",
auth:"06/15/2024",
status:"Yellow",
next:"Quarterly Due"
},

{
name:"Jane Smith",
dob:"05/12/2005",
service:"IIH",
qmhp:"Ricardo QMHP",
auth:"05/30/2024",
status:"Red",
next:"Weekly Supervision"
},

{
name:"Michael Brown",
dob:"11/23/1998",
service:"MHSS",
qmhp:"Sarah QMHP",
auth:"07/10/2024",
status:"Green",
next:"SRA Due"
},

{
name:"Emily Johnson",
dob:"03/19/2007",
service:"IIH",
qmhp:"Sarah QMHP",
auth:"06/20/2024",
status:"Yellow",
next:"Treatment Plan Due"
},

{
name:"Chris Davis",
dob:"09/01/2001",
service:"MHSS",
qmhp:"Ricardo QMHP",
auth:"07/05/2024",
status:"Green",
next:"None"
}

];

return(

<div className="dashboard-card">

<table className="client-table">

<thead>

<tr>

<th>Client Name</th>
<th>DOB</th>
<th>Service Type</th>
<th>QMHP</th>
<th>Auth End Date</th>
<th>Status</th>
<th>Next Due Item</th>

</tr>

</thead>

<tbody>

{clients.map((client,index)=>(

<tr key={index}>

<td>{client.name}</td>
<td>{client.dob}</td>
<td>{client.service}</td>
<td>{client.qmhp}</td>
<td>{client.auth}</td>

<td>

<span className={`status ${client.status.toLowerCase()}`}>

{client.status}

</span>

</td>

<td>{client.next}</td>

</tr>

))}

</tbody>

</table>

<div className="pagination">

<span>
Showing 1-5 of 124 clients
</span>

<div>

<button>{"<"}</button>

<button className="active">1</button>

<button>2</button>

<button>3</button>

<button>{">"}</button>

</div>

</div>

</div>

);

}