import { EyeSVG } from "./svg.component";
import { useState } from "react";
export default function Main() {
    const [attendance, setAttendance] = useState([
      {id:1,eNo:51,fname:'John',lname:'Doe',datap:false,dataa:true,datal:false},
      {id:2,eNo:21,fname:'Malik',lname:'Ali',datap:true,dataa:false,datal:false},
      {id:3,eNo:56,fname:'Smith',lname:'Khan',datap:false,dataa:true,datal:false},
      {id:4,eNo:53,fname:'John',lname:'Doe',datap:true,dataa:false,datal:false},
      {id:5,eNo:58,fname:'John',lname:'Doe',datap:false,dataa:false,datal:true},
      {id:6,eNo:54,fname:'John',lname:'Doe',datap:false,dataa:false,datal:true},
      {id:7,eNo:26,fname:'John',lname:'Doe',datap:true,dataa:false,datal:false},
      {id:8,eNo:51,fname:'John',lname:'Doe',datap:false,dataa:true,datal:false},
    ]);
  return (
    <>
      <div className="userdash__top__main">
        <div className="userdash__top__main__table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Emp&nbsp;#</th>
                <th>First&nbsp;Name</th>
                <th>Last&nbsp;Name</th>
                <th>P</th>
                <th>A</th>
                <th>L</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map(data => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.eNo}</td>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>
                    <input type="radio" name={`radioDefault[${data.id}]`} checked={data.datap}/>
                  </td>
                  <td>
                    <input type="radio" name={`radioDefault[${data.id}]`} checked={data.dataa}/>
                  </td>
                  <td>
                    <input type="radio" name={`radioDefault[${data.id}]`} checked={data.datal}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
