import referimg from '@/Components/Assets/refer.png'
import Image from 'next/image'
import './Refer.css'
function Refer() {
    return (
        <div className='refer-wrapper'>
            <div className='refer-left'>
                <div className='refer-tag'>
                    <span>
                        Invite Friends, Win
                    </span>
                    <span className='refer-tag-green'>
                         Rewards
                    </span>
                </div>
                <div>
                <div className='referbtn'>
                    Sign Up
                </div>
                </div>
            </div>
            <div className='refer-right'>
                <Image className='referimg' src={referimg} alt='refer' />
            </div>
        </div>
    )
}

export default Refer