import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';
import InvestmentsForm from './InvestmentsForm';

function Investments() {
    const { addIncome, investments, getInvestments, deleteInvestments, totalInvestments } = useGlobalContext()

    useEffect(() => {
        getInvestments()
    }, [])
    return (
        <Investmentstyled>
            <InnerLayout>
                <h1>Investments</h1>
                <h2 className="total-Investments">Total Investments: <span>₹{totalInvestments()}</span></h2>
                <div className="Investments-content">
                    <div className="form-container">
                        <InvestmentsForm />
                    </div>
                    <div className="investments">
                        {investments.map((investment) => {
                            const { _id, title, amount, date, description, type } = investment;
                            console.log(investment)
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteInvestments}
                            />
                        })

                        }
                    </div>
                </div>
            </InnerLayout>
        </Investmentstyled>
    )
}

const Investmentstyled = styled.div`
    display: flex;
    overflow: auto;
    .total-Investments{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .Investments-content{
        display: flex;
        gap: 2rem;
        .Investmentss{
            flex: 1;
        }
    }
`;

export default Investments