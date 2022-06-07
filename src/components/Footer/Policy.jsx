import React from 'react'
import "./policy.css"
// import { Translation } from 'react-i18next'
// import { useTranslation } from 'react-i18next'

export const Policy = () => {
    // const { t } = useTranslation('xx');

    return (
        <div className="dad">

            <ul className="policyUl">
                <h5 className="policyH5"> General Gym Rules</h5>
                <li>Use your own PIN number every time you visit PureGym. As it’s personal to you, please don’t let anyone else use it or we’ll have to change it. We monitor PIN usage by CCTV 24/7 to ensure the safety of our members and misuse may result in us applying additional charges to your membership fees. For full details of our Pin Abuse Policy please refer to your Membership Terms and Conditions.</li>
                <li>On joining all members are offered a comprehensive induction to instruct you on the use of the gym equipment. You are strongly advised to undertake this. Pure Gym Limited will not accept any liability for any claim for personal injury if you use the gym equipment having not undertaken an induction from a qualified member of Pure Gym staff.</li>
                <li>Induction bookings can be made via the members area on the Pure Gym website.</li>
                <li>For safety reasons, bags are not permitted onto the gym floor and correct attire must be worn when exercising i.e. suitable comfortable exercise clothing and appropriate footwear. Clothing such as jeans, boots, flip-flops/sandals or work wear are not permitted. Football tops may also not be deemed appropriate in the gym. Any member not wearing suitable attire may be asked to leave the gym.</li>
                <li>If you are unsure as to how to use any piece of equipment you must seek advice from a qualified member of Pure Gym staff before use such equipment.</li>
            </ul>
        </div>
    )
}