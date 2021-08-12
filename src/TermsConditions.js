import React from 'react'

const listItems = [
   {
       text: 'i. The objective of the organization is to promote the economic interests of members by:',
       subtexts: [
          '1.The creation of funds to be lent to members for necessary or productive purposes',
        ' 2.The provision of facilities for the accumulation of funds by members without such savings being removed from their control.',
        '3.Any other measures designed on cooperative principles to encourage among its members the spirit and practice of thrift and self-help.',
        '4.Acquiring of shares in viable and going concerns.',
        '5.Buying of Developments Stocks, Treasury Bills, securities guaranteed by the government.',
        '6.Establisment of viable projects e.g. setting up of industries, catering services, consumers shops, housing and farming projects etc.'
       ]
   },
   {
    text: 'ii. The members shall consist of:',
    subtexts: [
        '1.persons wo join in the application for registration.',
        '2.persons admitted in accordance with these terms and conditions.'
    ]
   },
   {
    text: 'iii. Every member of the society must be:',
    subtexts: [
        '1.ordinarily resident in Nigeria; but a member who leaves the field of membership of this organization may retain his membership therein but may not borrow from in excess of his savings and share capital.',
      '2.of good character',
      '3.of not less than 18 years of age except in the case of a minor taking the place of a deceased member or a situation where the registrar grants an exemption from this qualification.',
     '4.not a member of any other society whose primary object is to grant loans to its members except with the permission of the registrar'
    ]
   },
   {
       text:'iv. The liability of members for the debt of the society is limited to two times the nominal value of one share.',
       subtexts: [
       ]
   },
   {
       text: 'v. Every member shall nominate one person to whom, should he die or become permanently insane, his shares shall be transferred. The member may at any time change his nominee. If this nominated person is not a member, in the case of death or permanent insanity of the member the nominee will be paid the value of the share or interest less any sum due to the society.',
       subtexts: [
        
       ]
   },
   {
      text: 'vi. Membership shall be terminated by:' ,
      subtexts: [
        '1.death',
        '2.permanent insanity',
        '3.ceasing to reside in the area of operations',
        '4.ceasing to hold full share.',
        '5.withdrawal after 6 months’ notice conveyed in a letter to the administrative department of the organization provided the member is not in debt to the society nor surety for an unpaid debt.',
        '6.expulsion'
      ]  
   },
   {
       text: 'vii. A member may be expelled for:',
       subtexts: [
        '1.repeated failure to make thrift savings',
        '2.repeated failure to pay the share instalments or due from him to the society.',
        '3.conviction on criminal offence involving dishonesty',
        '4.misconduct or other acts contrary the stated objectives/interests of the organization.'
       ]
   },
   {
       text: 'viii. Liability of past members:',
       subtexts:[
        '1.a past member shall be liable for the debts due by the organization as they existed on the date when he ceased to be a member, for a period of two years from the date on which he deased to be a member',
         '2.The estate of a deceased member shall be liable for the debts due by the society as they existed at the date of his decease for a period of two years after his decease'
       ]
   },
   {
       text: 'ix. Any money due on any account from this organization to a member or a past member shall be set off in payment of any sum which he owes or for which he stands surety.',
       subtexts: [

       ]
   },
   {
       text: 'x. The ultimate authority under the law in all the affairs of this society shall be the Annual General Meeting held mid-year and would be physical and virtual. The presence of at least one-fourth of the members will be necessary.',
       subtexts: [] 
   },
   {
       text: 'xi. The funds of the organization shall be composed of:',
       subtexts: [
        '1.Savings of members',
        '2.surplus arising out of the business of the organization',
        '3.miscellaneous sources approved by the registrar'
       ]
   },
   {
       text: 'xiii. Every member must hold full shares which shall not be transferable except to a nominee.',
       subtexts: []
   },
   {
       text: 'xiv. Shares are not unconditionally withdrawable; but if at the end of the financial year the organization’s financial situation is favorable, the administrative department may repay to any member whose membership has been terminated during the year a sum not exceeding the amount paid by him on account of shares. Provided that not more than five percent of the total paid up share capital shall be thus paid out in any one year.',
       subtexts: [

       ]
   },
   {
     text: 'xv. Shares shall be paid up in not more than 12 instalments. Any member may pay up the full value in advance at any time. Members not paying their instalments by due date may be fined.',
     subtexts: []   
   },
   {
       text: 'xvi. No member shall hold more than one-fifth of the number of shares actually paid up. If any member by inheritance or otherwise possesses more than the maximum holding permitted, the organization may sell the excess or buy them.',
       subtexts: []
   },
   {
    text: 'xvii. Compulsory Savings:',
    subtexts: [
        '1.Every member shall make regular thrift savings which shall be withdrawable only by the permission of the administrative department for necessary or productive purposes.',
        '2.Savings shall be governed by rules framed by the organization.',
        '3.The rate of interest paid on regular thrift savings shall be determined after the surplus has been ascertained and necessary reserves created.',
        '4.The organization may exempt a member from the obligation to make compulsory savings for any period during which his circumstances do not permit such savings.'
    ]
   },
   {
     text: 'xviii. Use and Custody of Funds',
     subtexts:[
        ' a. The funds of the society may be held in the form of:',
         'b. Such of the funds of the society as are not required for current use may be invested in any'
      ]
   },
   {
       text: 'xix. Loans',
       subtexts: [
           ' a. Loans  may be granted to members only for purposes which in the opinion of the administrative department are necessary and in the best interest of the borrower. '
       ]
   },
   {
     text: 'xx. Disposal of Surplus',
     subtexts: [
         ' a. At the close of each financial year the society’s expenses including the interest payable on deposits and loans from non-members and audit supervision fees due shall be deducted from the organization’s income. The net surplus shall be carried to the reserve fund.'
     ] 
   },
   {
       text: 'xxi. Reserve Fund',
       subtexts: [
           'The reserve fund is indivisible and no member is entitled to claim a specified share in it. It shall not be utilized in the business of the organization but shall be deposited or invested.'
       ]
   },
   {
    text: 'xxii. Audit and Supervision Fees at the rate assessed by the registrar and published in the Oyo state of Nigeria Gazette shall be paid annually to the Oyo state Cooperative Federation Limited not later than the thirtieth of June.',
    subtexts: []
   }
]

const mainList = listItems.map((item, i) =>
   <div key={i}>
       <div className='item-text'>{item.text}</div>
       <ul className='sub-texts'>
           {item.subtexts.map((subtext, i) =>
             <li key={i}>
                 <div>{subtext}</div>
                </li>
           )}
       </ul>
   </div>
)
export default function TermsConditions() {
    return (
        <div className='page terms'>
            <div className='essay fade-in'>
           <h3>Terms and Conditions</h3> 
          <p> All words and expressions used in these terms and conditions defined section 2 of the cooperative societies law (cap. 35 of the laws of Oyo state of Nigeria) shall have the meaning assigned to them in the above-named section. If there shall arise any doubt regarding the meaning or intention of any of these terms and conditions, the matter shall be referred to the Registrar for a ruling.</p>
{mainList}
       </div>
        </div>
    )
}
 