import React, { useEffect, useRef, useState } from 'react'
import './karaokae.css'

const Karaokae = () =>{
    const [calResult, setCalResult] = useState(0)

    const noStCard = useRef(null);
    const noStCardHr = useRef(null);

    const haveStCard = useRef(null);
    const haveStCardHr = useRef(null);

    const result = useRef();

    const calculate = () =>{
        const alertText = "กรุณากรอกจำนวนชั่วโมง"

        if(noStCard.current.checked){
            if(noStCardHr.current.value != ""){
                setCalResult(parseFloat(noStCardHr.current.value) * 120)
            }else{
                alert(alertText)
            }
        }else if(haveStCard.current.checked){
            if(haveStCardHr.current.value != ""){
                setCalResult(parseFloat(haveStCardHr.current.value) * 80)
            }else{
                alert(alertText)
            }
        }
    }

    useEffect(() => {
        result.current.value = calResult
    },[calResult])

    return (
        <div className='app'>
            <table width="400" border="2" bordercolor="#000000">
                <tr><td colspan="2" id="karaokae">ร้านคาราโอเกะ</td></tr>
                <tr>
                    <td>
                        <br/>&nbsp;&nbsp;
                        <input type="radio" name="c1" id="nohave" value="ไม่มีบัตร" ref={noStCard}/>ไม่มีบัตรนักศึกษา <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
                        <input type="text" size="2" id="txtqty1" ref={noStCardHr}/> ชั่วโมง <br/>

                        &nbsp;&nbsp;<input type="radio" name="c1" id="have" value="มีบัตร" ref={haveStCard}/>มีบัตรนักศึกษา <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
                        <input type="text" size="2" id="txtqty2" ref={haveStCardHr}/> ชั่วโมง <br/><br/>
                    </td>
                </tr>
            </table><br/>
            <button onClick={calculate}>คิดเงิน</button><br/>    
            รวมเป็นเงินทั้งสิ้น = <input type="text" id="txtTotal" ref={result} readOnly/> บาท
        </div>
    )
}

export default Karaokae