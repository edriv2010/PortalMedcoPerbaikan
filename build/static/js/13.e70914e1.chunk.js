(this.webpackJsonpsbmap_design1=this.webpackJsonpsbmap_design1||[]).push([[13],{1279:function(e,t,a){"use strict";a.r(t);var n=a(26),l=a(22),r=a(18),s=a(28),c=a(29),i=a(0),d=a.n(i),o=a(712),m=a(757),u=a(14),h=a.n(u),p=a(746),g=(a(747),a(1)),f=a(593),b=a(594),E=a(588),v=a(727),S=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleClick=function(){l.props.toggleAdd()},l.handleClear=function(){l.setState({selectedOptionArea:null,rca:!1,fmea:!1,sc:!1})},l.handleSubmit=function(){if(l.state.issue&&l.state.selectedOptionArea&&Object.keys(l.state.selectedOptionArea).length>0){var e={issue:l.state.issue,area:l.state.selectedOptionArea,rca:l.state.rca,fmea:l.state.fmea,sc:l.state.sc};l.props.btnSubmit(e)}else h.a.fire({title:"Failed",icon:"warning",text:"Please complete data.",showConfirmButton:!1,timer:1500})},l.onChangeIssue=function(e){l.setState({issue:e.target.value})},l.onChangeArea=function(e){l.setState({selectedOptionArea:e})},l.onChangeCB=function(e,t){switch(t){case"rca":l.setState({rca:e.target.checked});break;case"fmea":l.setState({fmea:e.target.checked});break;case"sc":l.setState({sc:e.target.checked})}},l.state={issue:"",selectedOptionArea:[],rca:!1,fmea:!1,sc:!1},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return d.a.createElement(o.i,{isOpen:this.props.modalAdd,toggle:this.handleClick},d.a.createElement(o.l,{toggle:this.handleClick},"Create New Issue"),d.a.createElement(o.j,null,d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Issue"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.g,{type:"text",name:"issue",value:this.state.issue,onChange:this.onChangeIssue,placeholder:""}))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Area"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(v.a,{options:[{value:"1",label:"Block A"},{value:"2",label:"South Natuna Sea Block B"},{value:"3",label:"South Sokang"},{value:"4",label:"South & Central Sumatera"},{value:"5",label:"Rimau"},{value:"6",label:"Lematang"},{value:"7",label:"Bengara"},{value:"8",label:"Tarakan"},{value:"9",label:"Simenggaris"},{value:"10",label:"Bangkanai"},{value:"11",label:"Sampang"},{value:"12",label:"Madura Offshore"},{value:"13",label:"Senoro-Toili"}],value:this.state.selectedOptionArea,onChange:this.onChangeArea,isClearable:!0,styles:{menuPortal:function(e){return Object(g.a)(Object(g.a)({},e),{},{zIndex:9999})}},menuPortalTarget:document.body}))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Data Context"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(f.a,{row:!0},d.a.createElement(b.a,{control:d.a.createElement(E.a,{color:"primary",checked:this.state.rca,value:this.state.rca,onChange:function(t){return e.onChangeCB(t,"rca")}}),label:"RCA"}),d.a.createElement(b.a,{control:d.a.createElement(E.a,{color:"primary",checked:this.state.fmea,value:this.state.fmea,onChange:function(t){return e.onChangeCB(t,"fmea")}}),label:"FMEA"}),d.a.createElement(b.a,{control:d.a.createElement(E.a,{color:"primary",checked:this.state.sc,value:this.state.sc,onChange:function(t){return e.onChangeCB(t,"sc")}}),label:"SC"}))))),d.a.createElement(o.k,null,d.a.createElement(o.b,{className:"btn-vine btn-brand btn-sm",onClick:this.handleSubmit},d.a.createElement("i",{className:"icon-checkmark4"}," "),d.a.createElement("span",null,"Submit")),d.a.createElement(o.b,{className:"btn-vine btn-brand btn-sm",onClick:this.handleClear},d.a.createElement("i",{className:"icon-eraser2"}," "),d.a.createElement("span",null,"Clear")),d.a.createElement(o.b,{className:"btn-google-plus btn-brand btn-sm",onClick:this.handleClick},d.a.createElement("i",{className:"icon-cross2"}," "),d.a.createElement("span",null,"Cancel"))))}}]),a}(i.Component),A=a(771),k=a.n(A),C=a(762),x=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleClick=function(){l.props.toggleSchedule()},l.handleSubmit=function(){var e={area:l.state.selectedOptionArea,status:l.state.selectedOptionStatus,rca:l.state.rca,fmea:l.state.fmea,sc:l.state.sc};l.props.btnSubmit(e)},l.state={datas:[{id:1,dt1:"Alternatif 1",dt2:!0,dt3:"Initiate",dt4:"Rp. 210.000.000",dt5:"Pending",dt6:!0,dt7:"2020-07-16",dt8:"2020-07-23",dt9:"7"},{id:2,dt1:"Alternatif 5",dt2:!0,dt3:"Design",dt4:"Rp. 146.000.000",dt5:"Pending",dt6:!0,dt7:"2020-07-18",dt8:"2020-07-28",dt9:"10"},{id:3,dt1:"Alternatif 3",dt2:!0,dt3:"Build",dt4:"Rp. 379.000.000",dt5:"Pending",dt6:!0,dt7:"2020-08-03",dt8:"2020-08-08",dt9:"5"},{id:4,dt1:"Alternatif 1",dt2:!1,dt3:"Test",dt4:"Rp. 1.090.000.000",dt5:"Ongoing",dt6:!1,dt7:"2020-07-29",dt8:"2020-08-15",dt9:"18"},{id:5,dt1:"Alternatif 6",dt2:!1,dt3:"Deploy",dt4:"Rp. 110.000.000",dt5:"Ongoing",dt6:!0,dt7:"2020-08-15",dt8:"2020-08-25",dt9:"10"},{id:6,dt1:"Alternatif 6",dt2:!0,dt3:"Complete",dt4:"Rp. 310.000.000",dt5:"Ongoing",dt6:!1,dt7:"2020-08-26",dt8:"2020-08-26",dt9:"1"}],currentPage:1,sizePerPage:2},l.handlePageChange=l.handlePageChange.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handlePageChange",value:function(e,t){this.setState({currentPage:e,sizePerPage:t})}},{key:"render",value:function(){var e=this,t=[{dataField:"#",text:"#",headerAlign:"center",align:"center",formatter:function(t,a,n){var l=(e.state.currentPage-1)*e.state.sizePerPage+(n+1);return d.a.createElement("span",null,l)},headerStyle:function(e,t){return{width:"40px"}}},{dataField:"dt3",text:"Task",headerAlign:"center",align:"left",editable:!1,headerStyle:function(e,t){return{width:"270px"}}},{dataField:"dt7",text:"Start",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"110px"}},formatter:function(e,t,a){return t.dt7?d.a.createElement("span",null,t.dt7):d.a.createElement("span",null,"-")}},{dataField:"dt8",text:"Finish",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"110px"}},formatter:function(e,t,a){return t.dt7?d.a.createElement("span",null,t.dt8):d.a.createElement("span",null,"-")}},{dataField:"dt9",text:"Duration",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"90px"}}}];return d.a.createElement(o.i,{isOpen:this.props.modalSchedule,toggle:this.handleClick,className:"modal-lg"},d.a.createElement(o.l,{toggle:this.handleClick},"Implementation Form ",d.a.createElement(o.a,{color:"primary"},"Pending")),d.a.createElement(o.j,null,d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Title"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.h,{className:"labelForm"},"Sample Title 2"))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Technology"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.h,{className:"labelForm"},"Alternatif 1"))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Budget"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.h,{className:"labelForm"},"Rp. 146.000.000"))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Schedule"),d.a.createElement("span",{className:"spanForm"},":"))),d.a.createElement(o.q,null,d.a.createElement(o.f,null,d.a.createElement("div",{className:"freeze1"},d.a.createElement(C.a,{caption:"",tableHead:t,datas:this.state.datas,handlePageChange:this.handlePageChange})))),d.a.createElement(o.q,null,d.a.createElement(o.f,null,d.a.createElement(k.a,{tasks:[{id:"Task 1",name:"Initiate",start:"2020-07-16",end:"2020-07-23",progress:0,dependencies:"Task 0",custom_class:"bar-milestone"},{id:"Task 2",name:"Design",start:"2020-07-18",end:"2020-07-28",progress:0,dependencies:"Task 1",custom_class:"bar-milestone"},{id:"Task 3",name:"Build",start:"2020-07-29",end:"2020-08-08",progress:0,dependencies:"Task 2",custom_class:"bar-milestone"},{id:"Task 4",name:"Test",start:"2020-08-03",end:"2020-08-15",progress:0,dependencies:"Task 3",custom_class:"bar-milestone"},{id:"Task 5",name:"Deploy",start:"2020-08-15",end:"2020-08-25",progress:0,dependencies:"Task 4",custom_class:"bar-milestone"},{id:"Task 6",name:"Complete",start:"2020-08-26",end:"2020-08-26",progress:0,dependencies:"Task 5",custom_class:"bar-milestone"}],viewMode:"Day",onClick:function(){return!1}})))))}}]),a}(i.Component),P=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleClick=function(){l.props.toggleApprove()},l.handleApproval=function(e,t){var a=l.props.passData.id;l.props.clickBtnApproval(e,t,a)},l.state={datas:[{id:1,dt1:"Alternatif 1",dt2:!0,dt3:"Initiate",dt4:"Rp. 210.000.000",dt5:"Pending",dt6:!0,dt7:"2020-07-16",dt8:"2020-07-23",dt9:"7"},{id:2,dt1:"Alternatif 5",dt2:!0,dt3:"Design",dt4:"Rp. 146.000.000",dt5:"Pending",dt6:!0,dt7:"2020-07-18",dt8:"2020-07-28",dt9:"10"},{id:3,dt1:"Alternatif 3",dt2:!0,dt3:"Build",dt4:"Rp. 379.000.000",dt5:"Pending",dt6:!0,dt7:"2020-08-03",dt8:"2020-08-08",dt9:"5"},{id:4,dt1:"Alternatif 1",dt2:!1,dt3:"Test",dt4:"Rp. 1.090.000.000",dt5:"Ongoing",dt6:!1,dt7:"2020-07-29",dt8:"2020-08-15",dt9:"18"},{id:5,dt1:"Alternatif 6",dt2:!1,dt3:"Deploy",dt4:"Rp. 110.000.000",dt5:"Ongoing",dt6:!0,dt7:"2020-08-15",dt8:"2020-08-25",dt9:"10"},{id:6,dt1:"Alternatif 6",dt2:!0,dt3:"Complete",dt4:"Rp. 310.000.000",dt5:"Ongoing",dt6:!1,dt7:"2020-08-26",dt8:"2020-08-26",dt9:"1"}],currentPage:1,sizePerPage:2},l.handlePageChange=l.handlePageChange.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handlePageChange",value:function(e,t){this.setState({currentPage:e,sizePerPage:t})}},{key:"render",value:function(){var e=this,t=[{dataField:"#",text:"#",headerAlign:"center",align:"center",formatter:function(t,a,n){var l=(e.state.currentPage-1)*e.state.sizePerPage+(n+1);return d.a.createElement("span",null,l)},headerStyle:function(e,t){return{width:"40px"}}},{dataField:"dt3",text:"Task",headerAlign:"center",align:"left",editable:!1,headerStyle:function(e,t){return{width:"270px"}}},{dataField:"dt7",text:"Start",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"110px"}},formatter:function(e,t,a){return t.dt7?d.a.createElement("span",null,t.dt7):d.a.createElement("span",null,"-")}},{dataField:"dt8",text:"Finish",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"110px"}},formatter:function(e,t,a){return t.dt7?d.a.createElement("span",null,t.dt8):d.a.createElement("span",null,"-")}},{dataField:"dt9",text:"Duration",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"90px"}}}];return d.a.createElement(o.i,{isOpen:this.props.modalApprove,toggle:this.handleClick,className:"modal-lg"},d.a.createElement(o.l,{toggle:this.handleClick},"Implementation Form ",d.a.createElement(o.a,{color:"primary"},"Pending")),d.a.createElement(o.j,null,d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Issue"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.h,{className:"labelForm"},"Sample issue 2"))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Solution"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.h,{className:"labelForm"},"Alternatif 1"))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Budget"),d.a.createElement("span",{className:"spanForm"},":")),d.a.createElement(o.f,{xs:"8"},d.a.createElement(o.h,{className:"labelForm"},"Rp. 146.000.000"))),d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"4"},d.a.createElement(o.h,{className:"labelForm"},"Schedule"),d.a.createElement("span",{className:"spanForm"},":"))),d.a.createElement(o.q,null,d.a.createElement(o.f,null,d.a.createElement("div",{className:"freeze1"},d.a.createElement(C.a,{caption:"",tableHead:t,datas:this.state.datas,handlePageChange:this.handlePageChange})))),d.a.createElement(o.q,null,d.a.createElement(o.f,null,d.a.createElement(k.a,{tasks:[{id:"Task 1",name:"Initiate",start:"2020-07-16",end:"2020-07-23",progress:0,dependencies:"Task 0",custom_class:"bar-milestone"},{id:"Task 2",name:"Design",start:"2020-07-18",end:"2020-07-28",progress:0,dependencies:"Task 1",custom_class:"bar-milestone"},{id:"Task 3",name:"Build",start:"2020-07-29",end:"2020-08-08",progress:0,dependencies:"Task 2",custom_class:"bar-milestone"},{id:"Task 4",name:"Test",start:"2020-08-03",end:"2020-08-15",progress:0,dependencies:"Task 3",custom_class:"bar-milestone"},{id:"Task 5",name:"Deploy",start:"2020-08-15",end:"2020-08-25",progress:0,dependencies:"Task 4",custom_class:"bar-milestone"},{id:"Task 6",name:"Complete",start:"2020-08-26",end:"2020-08-26",progress:0,dependencies:"Task 5",custom_class:"bar-milestone"}],viewMode:"Day",onClick:function(){return!1}})))),d.a.createElement(o.k,null,d.a.createElement(o.b,{className:"btn-vine btn-brand btn-sm",onClick:function(t){return e.handleApproval(t,"approve")}},d.a.createElement("i",{className:"icon-checkmark4"}," "),d.a.createElement("span",null,"Approve")),d.a.createElement(o.b,{className:"btn-google-plus btn-brand btn-sm",onClick:function(t){return e.handleApproval(t,"reject")}},d.a.createElement("i",{className:"icon-cross2"}," "),d.a.createElement("span",null,"Reject"))))}}]),a}(i.Component),N=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).toggleAdd=function(){l.setState({modalAdd:!l.state.modalAdd})},l.addSubmitBtn=function(e){var t="",a="",n=[];e.area&&(a=e.area.label),t=!0===e.rca&&!0===e.fmea&&!0===e.sc?"Pending":"Ongoing",n=[{id:l.state.datas.length+1,dt1:a,dt2:e.rca,dt3:e.issue,dt4:e.fmea,dt5:t,dt6:e.sc}],n=l.state.datas.concat(n),l.setState({datas:n},(function(){h.a.fire({title:"Success",icon:"success",text:"Issue has been submited.",showConfirmButton:!1,timer:1500}),l.toggleAdd()}))},l.toggleSchedule=function(){l.setState({modalSchedule:!l.state.modalSchedule})},l.scheduleSubmitBtn=function(e){l.setState({datas:l.state.orgData,selectedOptionArea:e.area,selectedOptionStatus:e.status});var t=l.state.orgData;if(e.area&&e.area.length>0&&e.status&&e.status.length>0){t=[],e.area.forEach((function(e){t=t.concat(l.state.orgData.filter((function(t){return t.dt1===e.label})))}));var a=[];e.status.forEach((function(e){t=a.concat(t.filter((function(t){return t.dt5===e.label})))}))}else e.area&&e.area.length>0?(t=[],e.area.forEach((function(e){t=t.concat(l.state.orgData.filter((function(t){return t.dt1===e.label})))}))):e.status&&e.status.length>0&&(t=[],e.status.forEach((function(e){t=t.concat(l.state.orgData.filter((function(t){return t.dt5===e.label})))})));l.setState({datas:t},(function(){l.toggleSchedule()}))},l.toggleApprove=function(){l.setState({modalApprove:!l.state.modalApprove})},l.handleApproval=function(e,t,a){e.preventDefault(),"reject"===t?h.a.fire({title:"Reject Issue",text:"Are you sure to reject this issue?",icon:"warning",cancelButtonColor:"#d33",confirmButtonText:"Yes!",confirmButtonColor:"#3085d6",showCancelButton:!0}).then((function(e){e.value&&l.setState({datas:l.state.datas.map((function(e){return e.id===a?Object.assign(e,{dt5:"Reject"}):e}))},(function(){h.a.fire({title:"Success!",icon:"success",text:"Issue has been rejected.",showConfirmButton:!1,timer:1500}),l.toggleApprove()}))})):h.a.fire({title:"Approve Issue",text:"Are you sure to approve this issue?",icon:"question",cancelButtonColor:"#d33",confirmButtonText:"Yes!",confirmButtonColor:"#3085d6",showCancelButton:!0}).then((function(e){e.value&&l.setState({datas:l.state.datas.map((function(e){return e.id===a?Object.assign(e,{dt5:"Approve"}):e}))},(function(){h.a.fire({title:"Success!",icon:"success",text:"Issue has been approved.",showConfirmButton:!1,timer:1500}),l.toggleApprove()}))}))},l.handleAction=function(e,t,a){switch(e.preventDefault(),a){case"delete":l.setState({blocking:!0}),h.a.fire({title:"Delete Data",text:"Are you sure to delete this data?",icon:"warning",cancelButtonColor:"#d33",confirmButtonText:"Yes!",confirmButtonColor:"#3085d6",showCancelButton:!0}).then((function(e){e.value?l.setState((function(e){return{datas:e.datas.filter((function(e){return e.id!==t.id}))}}),(function(){h.a.fire({title:"Success!",icon:"success",text:"Delete Success.",showConfirmButton:!1,timer:1500}).then((function(){})),l.setState({blocking:!1})})):l.setState({blocking:!1})}));break;case"schedule":l.toggleSchedule();break;case"approve":if("Reject"!==t.dt5&&"Approve"!==t.dt5){var n={issue:t.dt3,area:t.dt1,id:t.id};l.setState({passData:n}),l.toggleApprove()}}},l.state={selectedOptionArea:[],selectedOptionStatus:[],rca:!1,fmea:!1,sc:!1,blocking:!1,modalAdd:!1,modalSchedule:!1,modalApprove:!1,currentPage:1,sizePerPage:2,passData:[],orgData:[],datas:[{id:1,dt1:"Alternatif 1",dt2:!0,dt3:"Sample title 1",dt4:"200.000 (USD)",dt5:"New",dt6:!0,dt7:"2020-07-14",dt8:"2020-08-14",dt9:"30",benefit:"860.000 (USD)"},{id:2,dt1:"Alternatif 5",dt2:!0,dt3:"Sample title 2",dt4:"100.000 (USD)",dt5:"New",dt6:!0,dt7:"2020-07-10",dt8:"2020-08-24",dt9:"44",benefit:"390.000 (USD)"},{id:3,dt1:"Alternatif 3",dt2:!0,dt3:"Sample title 3",dt4:"70.000 (USD)",dt5:"New",dt6:!0,dt7:"2020-07-17",dt8:"2020-09-17",dt9:"60",benefit:"250.000 (USD)"},{id:4,dt1:"Alternatif 1",dt2:!1,dt3:"Sample title 4",dt4:"40.000 (USD)",dt5:"Pending",dt6:!1,dt7:"2020-07-18",dt8:"2020-08-18",dt9:"30",benefit:"120.000 (USD)"},{id:5,dt1:"Alternatif 6",dt2:!1,dt3:"Sample title 5",dt4:"400.000 (USD)",dt5:"Waiting Approval",dt6:!0,dt7:"2020-06-10",dt8:"2020-09-10",dt9:"90",benefit:"1.360.000 (USD)"}]},l.handlePageChange=l.handlePageChange.bind(Object(r.a)(l)),l.handleAction=l.handleAction.bind(Object(r.a)(l)),l.handleApproval=l.handleApproval.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({orgData:this.state.datas})}},{key:"handlePageChange",value:function(e,t){this.setState({currentPage:e,sizePerPage:t})}},{key:"render",value:function(){var e=this,t=[{dataField:"#",text:"#",headerAlign:"center",align:"center",formatter:function(t,a,n){var l=(e.state.currentPage-1)*e.state.sizePerPage+(n+1);return d.a.createElement("span",null,l)},headerStyle:function(e,t){return{width:"40px"}}},{dataField:"dt3",text:"Title",headerAlign:"center",align:"left",editable:!1,headerStyle:function(e,t){return{width:"200px"}}},{dataField:"dt1",text:"Technology",headerAlign:"center",align:"left",editable:!1,headerStyle:function(e,t){return{width:"200px"}}},{dataField:"dt4",text:"Budget",headerAlign:"center",align:"right",editable:!1,headerStyle:function(e,t){return{width:"130px"}}},{dataField:"benefit",text:"Benefit",headerAlign:"center",align:"right",editable:!1,headerStyle:function(e,t){return{width:"130px"}}},{dataField:"dt6",text:"Schedule",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"160px"}},formatter:function(e,t,a){return t.dt7?d.a.createElement("span",null,t.dt7," / ",t.dt8):d.a.createElement("span",null,"-")}},{dataField:"dt9",text:"Duration",headerAlign:"center",align:"center",editable:!1,headerStyle:function(e,t){return{width:"90px"}}},{dataField:"dt5",text:"Status",headerAlign:"center",align:"center",editable:!1,formatter:function(e,t,a){var n="#000",l="400";switch(t.dt5){case"Reject":n="red",l="700";break;case"Approve":n="green",l="700"}return d.a.createElement("span",{style:{color:n,fontWeight:l}},t.dt5)},headerStyle:function(e,t){return{width:"120px"}}},{dataField:"dt2",text:"Action",headerAlign:"center",align:"center",editable:!1,isDummyField:!0,headerStyle:function(e,t){return{width:"110px"}},formatter:function(t,a){return d.a.createElement("div",null,d.a.createElement("span",{className:"btnInTable"},d.a.createElement(o.b,{className:"btn-facebook btn-brand btn-sm icon",onClick:function(t){return e.handleAction(t,a,"schedule")}},d.a.createElement("i",{className:"icon-inbox"}," "))),d.a.createElement("span",{className:"btnInTable"},d.a.createElement(o.b,{className:"btn-twitter btn-brand btn-sm icon",onClick:function(t){return e.handleAction(t,a,"schedule")}},d.a.createElement("i",{className:"icon-pencil"}," "))),d.a.createElement("span",{className:"btnInTable"},d.a.createElement(o.b,{className:"btn-vine btn-brand btn-sm icon",onClick:function(t){return e.handleAction(t,a,"schedule")}},d.a.createElement("i",{className:"icon-file-check"}," "))))}}];return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(p.a,{tag:"div",blocking:this.state.blocking},d.a.createElement(o.q,null,d.a.createElement(o.f,{xs:"12",md:"12"},d.a.createElement(o.c,{style:{marginBottom:"0"}},d.a.createElement(o.d,null,d.a.createElement(o.q,null,d.a.createElement(o.f,{md:"12"},d.a.createElement("div",{className:"titleFilter"},d.a.createElement("i",{className:"icon-stack"})," Implement Selected Technology"),d.a.createElement("div",{className:"freeze1"},d.a.createElement(m.a,{caption:"",tableHead:t,datas:this.state.datas,handlePageChange:this.handlePageChange}))))))))),d.a.createElement(S,{modalAdd:this.state.modalAdd,toggleAdd:this.toggleAdd,btnSubmit:this.addSubmitBtn}),d.a.createElement(x,{modalSchedule:this.state.modalSchedule,toggleSchedule:this.toggleSchedule,btnSubmit:this.scheduleSubmitBtn}),d.a.createElement(P,{modalApprove:this.state.modalApprove,toggleApprove:this.toggleApprove,passData:this.state.passData,clickBtnApproval:this.handleApproval}))}}]),a}(i.Component);t.default=N},757:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(743),s=a.n(r),c=(a(744),a(769)),i=a.n(c),d=a(745),o=a.n(d);t.a=function(e){var t=function(e){var t,a=function(){e.onSearch(t.value)};return l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px"}},l.a.createElement("input",{type:"text",ref:function(e){return t=e},onChange:a,className:"textSearch"}),l.a.createElement("i",{className:"icon-cross2 iconSearch",onClick:function(){t.value="",a()}}),l.a.createElement("input",{type:"submit",onClick:a,value:"",className:"btnSearch"}))},a={onPageChange:function(t,a){e.handlePageChange(t,a)},paginationSize:4,pageStartIndex:1,alwaysShowAllBtns:!1,hideSizePerPage:!0,firstPageText:"<<",prePageText:"<",nextPageText:">",lastPageText:">>",showTotal:!0,paginationTotalRenderer:function(e,t,a){return l.a.createElement("div",{className:"react-bootstrap-table-pagination-total",style:{position:"absolute",border:"1px solid #C8CED3",padding:"3px 4px",borderRadius:"4px",backgroundColor:"white"}},"Total ",l.a.createElement("b",null,a))},disablePageTitle:!0,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"All",value:e.datas.length}]};return l.a.createElement("div",null,l.a.createElement(o.a,{keyField:"id",data:e.datas,columns:e.tableHead,search:!0,caption:e.caption},(function(e){return l.a.createElement("div",null,l.a.createElement(t,e.searchProps),l.a.createElement(s.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,wrapperClasses:"table-responsive",pagination:i()(a)})))})))}},762:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(743),s=a.n(r),c=(a(744),a(745)),i=a.n(c);t.a=function(e){return l.a.createElement("div",null,l.a.createElement(i.a,{keyField:"id",data:e.datas,columns:e.tableHead,caption:e.caption},(function(e){return l.a.createElement("div",null,l.a.createElement(s.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,wrapperClasses:"table-responsive"})))})))}}}]);
//# sourceMappingURL=13.e70914e1.chunk.js.map