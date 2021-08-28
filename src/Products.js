import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank, faWallet } from '@fortawesome/free-solid-svg-icons'

export default function Products() {
    return (
        <div className='page'>
           <div className='products-cover-text fade-in'>
             <h3>We offer a variety of specifc financial services to SMEs and business owners.</h3>
           </div>
           <h3>Savings <span><FontAwesomeIcon icon={faPiggyBank} /></span></h3>  
             <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  Share Capital Savings
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body variant='dark' className='card-content'>
                  This is a fixed and uniform amount paid by a member at the start of their membership; this account is opened alongside the normal savings account at your decision to be a member of Jeseku. This cannot be withdrawn at anytime. 
The Share Capital Savings secures your stake as a shareholder and member of the group. You’re not eligible for a loan until you have fully paid your share capital.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  Normal Savings
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body  className='card-content'>
                  This is an account opened alongside the Share Capital Savings account at your decision to be a member of Jeseku. The Normal Savings is your regular savings paid at your chosen interval which could be a fixed amount or an amount that changes from time to time. It is also a basis for determining your eligibility to loans.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  Target Savings
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body  className='card-content'>
                  Here, you save towards the achievement of a specified goal. You can save towards your rent, rebranding/restocking your business, arrival of your child, a vacation, a date night etc. This account can be opened at any time during your course of membership. You choose how long you want to save specifying you wish to make a withdrawal before which you can’t make a free withdrawal; withdrawal before your specified date attracts a 5% withdrawal fee.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="3">
                  Thrift Savings
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body  className='card-content'>
                  This is a uniform contribution made by members of an organization at regular interval as agreed by every member; at each interval a member is entitled to receive the entire contribution made by every member of the group.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <h3 className='subtitle'>Loans <span><FontAwesomeIcon icon={faWallet}/></span> </h3>
             <Accordion>
              <Card className='bg-light-blue'>
                <Card.Header>
                  <Accordion.Toggle  as={Button} variant='light' eventKey="0">
                  Normal/Long-Term Loan
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body  className='card-content'>
                  This is a loan you have access to any time after 6 months of membership provided you have fully paid your share capital.
You are eligible to borrow an addition of your share capital savings and Normal Savings multiplied by 2. You are expected to repay this loan between 10 to 12 months with a 1.5% interest of reducing balance per month. You will need 2 members of your group or a friend of yours who is also a member of Jeseku to stand in for you as guarantors.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  Emergency Loan 
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body  className='card-content'>
                  This is a short-term loan expected to be repaid within 4 months with a flat interest of 1.5% per month.
It is a loan taken to cater to unexpected expenses such as hospital bills, car repair etc not included in your budget as at the time of arising.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  Salary Advance 
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body  className='card-content'>
                  We also grant a salary advance loan where due to the arising of an urgent expense our platform pays a member’s salary before the actual payment date set by their employer.
     This loan is expected to be repaid as soon as the employer pays the member.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </div>
    )
}
