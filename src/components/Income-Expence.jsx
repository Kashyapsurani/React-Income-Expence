import { useState } from 'react'
import './IncomeExpence.css'
function IncomeExpence() {

    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")
    const [expence, setExpence] = useState("")
    const [income, setIncome] = useState("")

    const hendalAmount = (event)=>{
        setAmount(event.target.value)
        
        if(event.target.value >= 0){
            setIncome(event.target.value);
        }else{
            setExpence(event.target.value)
        }
    }

    const hendalName = (event)=>{
        setName(event.target.value)
    }

   

    return (
        <>
            <div className="page">
                <div className="incomeExpence">
                    <div className="flexs">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_srTM-O17QR2dJK2W-MypDytoDHYhILyXQ&s" alt="" width={"50px"} height={"50px"} />
                    <h2>Income And Expence</h2>
                    </div>
                    <div className="flex">
                        <div className="Income">
                            
                            {income}
                        </div>
                        <div className="Expence">
                        {expence}<br />
                            
                        </div>
                    </div>
                </div>
                <div className="history">
                    <div className="Incomes">
                        <div className="name">{name}</div>
                        <div className="price">{amount}</div>
                    </div>
                    <div className="Expences">
                       <div className="name">name</div>
                        <div className="price">- 500 $</div>
                    </div>
                    <div className="Incomes">
                        <div className="name">name</div>
                        <div className="price">+ 500 $</div>
                    </div>
                    <div className="Expences">
                       <div className="name">name</div>
                        <div className="price">- 500 $</div>
                    </div>
                    <div className="Incomes">
                        <div className="name">name</div>
                        <div className="price">+ 500 $</div>
                    </div>
                    <div className="Expences">
                       <div className="name">name</div>
                        <div className="price">- 500 $</div>
                    </div>
                </div>
                <div className="input">
                <li>For Expences Put Value in Negative <br /> And Incomes Put Value in Positve </li>
                    <input type="text" placeholder='Enter Name Of Incomes Or Expences ' 
                    value={name}
                    onChange={hendalName}
                    />
                    <input type="number" placeholder='Enter A Price Of Incomes Or Expences '
                    value={amount}
                    onChange={hendalAmount}
                    />
                          
                    <input type="submit" className='button' />
                </div>
            </div>
        </>
    )
}

export default IncomeExpence