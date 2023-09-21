import React from 'react'
import './TopWinnerCard.css'
import user from '@/Components/Assets/user.png'
import Image from 'next/image'
import bnb from '@/Components/Assets/bnb.png'
import apt from '@/Components/Assets/apt.png'
import neo from '@/Components/Assets/neo.png'
import mana from '@/Components/Assets/mana.png'
import dash from '@/Components/Assets/dash.png'

function TopWinnerCard({ index }) {
    return (
        <div className={` top-winner-card ${index % 2 == 0 ? 'darkbg' : 'lightbg'}`}>
            <div className='table-globalrank'>
                <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0962 35.4982L17.7077 32.4482C17.6525 32.4103 17.5871 32.39 17.5202 32.39C17.4532 32.39 17.3879 32.4103 17.3327 32.4482L12.8604 35.5062C12.8107 35.5398 12.7527 35.5593 12.6928 35.5625C12.6328 35.5658 12.5731 35.5527 12.5201 35.5246C12.467 35.4965 12.4225 35.4546 12.3915 35.4032C12.3604 35.3518 12.3439 35.2929 12.3438 35.2329V20.5015C12.3437 20.4581 12.3523 20.4152 12.369 20.3751C12.3857 20.335 12.4101 20.2987 12.4409 20.2681C12.4716 20.2375 12.5082 20.2133 12.5483 20.1968C12.5885 20.1804 12.6315 20.1721 12.6749 20.1724H22.2857C22.3289 20.1724 22.3717 20.1809 22.4117 20.1974C22.4516 20.214 22.4879 20.2382 22.5184 20.2688C22.549 20.2993 22.5732 20.3356 22.5898 20.3756C22.6063 20.4155 22.6148 20.4583 22.6148 20.5015V35.2269C22.6145 35.2871 22.5978 35.3461 22.5665 35.3975C22.5352 35.4489 22.4905 35.4908 22.4372 35.5187C22.3839 35.5466 22.3239 35.5594 22.2638 35.5558C22.2038 35.5522 22.1458 35.5323 22.0962 35.4982Z" fill="#1EAF76" stroke="#0D0D0D" stroke-width="0.191816" stroke-miterlimit="10" />
                    <path d="M31.5603 17.077C31.5603 18.5093 29.765 19.6423 29.3561 20.9349C28.9212 22.2734 29.6832 24.2363 28.8713 25.3513C28.0595 26.4664 25.945 26.3487 24.818 27.1746C23.6909 28.0004 23.1723 30.0331 21.8258 30.4679C20.5332 30.8868 18.9075 29.5583 17.4752 29.5583C16.043 29.5583 14.4252 30.8968 13.1306 30.4679C11.7921 30.0331 11.2615 27.9864 10.1384 27.1746C9.01538 26.3627 6.90491 26.4784 6.08506 25.3513C5.26521 24.2243 6.04716 22.2734 5.60831 20.9349C5.18941 19.6423 3.41406 18.5093 3.41406 17.077C3.41406 15.6448 5.19739 14.5118 5.60831 13.2191C6.04317 11.8787 5.28117 9.91579 6.09304 8.80072C6.90491 7.68564 9.01937 7.80333 10.1464 6.9775C11.2735 6.15166 11.7921 4.12098 13.1386 3.68413C14.4312 3.26522 16.0589 4.59574 17.4912 4.59574C18.9234 4.59574 20.5492 3.26522 21.8418 3.68413C23.1803 4.12098 23.7109 6.16562 24.8339 6.9775C25.957 7.78937 28.0675 7.67567 28.8873 8.80072C29.7072 9.92577 28.9372 11.8787 29.372 13.2191C29.785 14.5118 31.5603 15.6448 31.5603 17.077Z" fill="#FBBC5B" />
                    <path d="M31.5603 17.077C31.5603 18.5093 29.765 19.6423 29.3561 20.9349C28.9212 22.2734 29.6832 24.2363 28.8713 25.3513C28.0595 26.4664 25.945 26.3487 24.818 27.1746C23.6909 28.0004 23.1723 30.0331 21.8258 30.4679C20.5332 30.8868 18.9075 29.5583 17.4752 29.5583C16.043 29.5583 14.4252 30.8968 13.1306 30.4679C11.7921 30.0331 11.2615 27.9864 10.1384 27.1746C9.01538 26.3627 6.90491 26.4784 6.08506 25.3513C5.26521 24.2243 6.04716 22.2734 5.60831 20.9349C5.18941 19.6423 3.41406 18.5093 3.41406 17.077C3.41406 15.6448 5.19739 14.5118 5.60831 13.2191C6.04317 11.8787 5.28117 9.91579 6.09304 8.80072C6.90491 7.68564 9.01937 7.80333 10.1464 6.9775C11.2735 6.15166 11.7921 4.12098 13.1386 3.68413C14.4312 3.26522 16.0589 4.59574 17.4912 4.59574C18.9234 4.59574 20.5492 3.26522 21.8418 3.68413C23.1803 4.12098 23.7109 6.16562 24.8339 6.9775C25.957 7.78937 28.0675 7.67567 28.8873 8.80072C29.7072 9.92577 28.9372 11.8787 29.372 13.2191C29.7849 14.5118 31.5603 15.6448 31.5603 17.077Z" stroke="#0D0D0D" stroke-width="0.191816" stroke-miterlimit="10" />
                    <path d="M31.5603 15.6366C31.5603 17.0709 29.765 18.2039 29.3561 19.4965C28.9212 20.835 29.6832 22.7979 28.8713 23.913C28.0595 25.028 25.945 24.9103 24.818 25.7362C23.6909 26.562 23.1723 28.5947 21.8258 29.0295C20.5332 29.4484 18.9075 28.1179 17.4752 28.1179C16.043 28.1179 14.4252 29.4484 13.1306 29.0295C11.7921 28.5947 11.2615 26.548 10.1384 25.7362C9.01538 24.9243 6.90491 25.038 6.08506 23.913C5.26521 22.7879 6.04716 20.835 5.60831 19.4965C5.18941 18.2039 3.41406 17.0709 3.41406 15.6366C3.41406 14.2024 5.19739 13.0714 5.60831 11.7788C6.04716 10.4403 5.28117 8.4774 6.09304 7.35834C6.90491 6.23927 9.01937 6.36095 10.1464 5.53511C11.2735 4.70928 11.7921 2.6766 13.1386 2.24174C14.4312 1.82284 16.0589 3.15336 17.4912 3.15336C18.9234 3.15336 20.5492 1.82284 21.8418 2.24174C23.1803 2.6766 23.7109 4.72324 24.8339 5.53511C25.957 6.34699 28.0675 6.23129 28.8873 7.35834C29.7072 8.48538 28.9372 10.4363 29.372 11.7748C29.785 13.0714 31.5603 14.2044 31.5603 15.6366Z" fill="#FBDB54" />
                    <path d="M31.5603 15.6366C31.5603 17.0709 29.765 18.2039 29.3561 19.4965C28.9212 20.835 29.6832 22.7979 28.8713 23.913C28.0595 25.028 25.945 24.9103 24.818 25.7362C23.6909 26.562 23.1723 28.5947 21.8258 29.0295C20.5332 29.4484 18.9075 28.1179 17.4752 28.1179C16.043 28.1179 14.4252 29.4484 13.1306 29.0295C11.7921 28.5947 11.2615 26.548 10.1384 25.7362C9.01538 24.9243 6.90491 25.038 6.08506 23.913C5.26521 22.7879 6.04716 20.835 5.60831 19.4965C5.18941 18.2039 3.41406 17.0709 3.41406 15.6366C3.41406 14.2024 5.19739 13.0714 5.60831 11.7788C6.04716 10.4403 5.28117 8.4774 6.09304 7.35834C6.90491 6.23927 9.01937 6.36095 10.1464 5.53511C11.2735 4.70928 11.7921 2.6766 13.1386 2.24174C14.4312 1.82284 16.0589 3.15336 17.4912 3.15336C18.9234 3.15336 20.5492 1.82284 21.8418 2.24174C23.1803 2.6766 23.7109 4.72324 24.8339 5.53511C25.957 6.34699 28.0675 6.23129 28.8873 7.35834C29.7072 8.48538 28.9372 10.4363 29.372 11.7748C29.7849 13.0714 31.5603 14.2044 31.5603 15.6366Z" stroke="#0D0D0D" stroke-width="0.191816" stroke-miterlimit="10" />
                    <g opacity="0.8">
                        <mask id="mask0_51_1674" maskUnits="userSpaceOnUse" x="3" y="2" width="29" height="28">
                            <path d="M21.2942 29.0523C20.7177 29.0523 20.0973 28.8169 19.449 28.5675C18.8007 28.3182 18.1245 28.0589 17.4902 28.0589C16.8558 28.0589 16.1816 28.3182 15.5293 28.5675C14.877 28.8169 14.2626 29.0523 13.6841 29.0523C13.5042 29.0541 13.325 29.0272 13.1535 28.9725C12.4035 28.7291 11.9008 27.9491 11.4141 27.1951C11.0471 26.6266 10.668 26.0401 10.1833 25.6871C9.69859 25.334 9.0084 25.1465 8.34813 24.969C7.48639 24.7396 6.59672 24.5002 6.13992 23.8738C5.68311 23.2475 5.74096 22.3418 5.78285 21.4562C5.81876 20.77 5.85466 20.0598 5.66317 19.4614C5.48164 18.9188 5.05676 18.3782 4.62389 17.8616C4.05937 17.1594 3.46094 16.4353 3.46094 15.6274C3.46094 14.8196 4.05937 14.0974 4.62189 13.3953C5.05676 12.8786 5.48164 12.3361 5.65519 11.7855C5.85466 11.1871 5.81078 10.4869 5.77487 9.79073C5.72899 8.90505 5.68311 7.99544 6.13393 7.37307C6.58475 6.7507 7.47841 6.50734 8.34015 6.27794C9.00042 6.1004 9.68263 5.91888 10.1753 5.55982C10.668 5.20076 11.0391 4.62028 11.4061 4.04978C11.8928 3.29775 12.4035 2.51779 13.1456 2.27443C13.317 2.21974 13.4962 2.1928 13.6762 2.19464C14.2546 2.19464 14.873 2.43002 15.5213 2.67937C16.1696 2.92871 16.8479 3.18803 17.4822 3.18803C18.1165 3.18803 18.7908 2.92871 19.4411 2.67937C20.0914 2.43002 20.7097 2.19464 21.2862 2.19464C21.4662 2.19249 21.6454 2.21943 21.8168 2.27443C22.5669 2.51779 23.0695 3.29775 23.5563 4.05177C23.9233 4.62028 24.3043 5.20674 24.789 5.55982C25.2738 5.91289 25.964 6.1004 26.6242 6.27794C27.484 6.50734 28.3736 6.74471 28.8304 7.37307C29.2873 8.00142 29.2294 8.90505 29.1875 9.79073C29.1536 10.4769 29.1177 11.1871 29.3072 11.7855C29.4887 12.342 29.9256 12.8786 30.3465 13.3953C30.917 14.0974 31.5094 14.8215 31.5094 15.6274C31.5094 16.4333 30.911 17.1594 30.3465 17.8616C29.9256 18.3782 29.4887 18.9148 29.3072 19.4714C29.1077 20.0698 29.1536 20.77 29.1875 21.4661C29.2334 22.3518 29.2813 23.2614 28.8304 23.8838C28.3796 24.5062 27.484 24.7495 26.6242 24.9789C25.964 25.1565 25.2798 25.338 24.789 25.697C24.2983 26.0561 23.9233 26.6366 23.5563 27.2051C23.0695 27.9591 22.5589 28.7391 21.8168 28.9824C21.6474 29.0332 21.471 29.0568 21.2942 29.0523Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_51_1674)">
                            <path d="M9.90695 0.495401L3.32031 6.6526L25.8581 30.7623L32.4448 24.6051L9.90695 0.495401Z" fill="white" />
                        </g>
                    </g>
                    <path opacity="0.9" d="M15.8828 11.9321V13.3065H17.3629V19.3387H19.0784V11.9321H15.8828Z" fill="#0D0D0D" />
                    <path d="M4.75178 1.04612C6.33364 5.56229 6.10224 6.05499 0.510897 8.82972C0.484965 8.84169 0.510897 8.88558 0.530845 8.8756C6.3496 6.61553 6.87422 6.7791 9.14028 10.9901C9.15425 11.016 9.18816 11.002 9.17818 10.9721C7.59433 6.46193 7.82772 5.96124 13.4251 3.18851C13.451 3.17654 13.4251 3.13066 13.4051 3.14063C7.58037 5.4027 7.05575 5.23913 4.78968 1.02817C4.77572 1.00024 4.74181 1.0162 4.75178 1.04612Z" fill="white" stroke="#0D0D0D" stroke-width="0.191816" stroke-miterlimit="10" />
                    <path opacity="0.8" d="M17.4803 6.01074C15.5759 6.01074 13.7143 6.57546 12.1309 7.63348C10.5474 8.6915 9.31329 10.1953 8.58451 11.9547C7.85573 13.7142 7.66505 15.6502 8.03658 17.518C8.40811 19.3858 9.32516 21.1015 10.6718 22.4481C12.0184 23.7947 13.7341 24.7117 15.6019 25.0833C17.4697 25.4548 19.4057 25.2641 21.1651 24.5353C22.9245 23.8066 24.4283 22.5724 25.4864 20.989C26.5444 19.4055 27.1091 17.5439 27.1091 15.6395C27.1091 13.0858 26.0946 10.6367 24.2889 8.83094C22.4832 7.0252 20.034 6.01074 17.4803 6.01074ZM17.4803 23.7363C15.8785 23.7363 14.3126 23.2613 12.9807 22.3713C11.6488 21.4813 10.6108 20.2163 9.99785 18.7363C9.38493 17.2563 9.22466 15.6279 9.53732 14.0568C9.84997 12.4857 10.6215 11.0427 11.7543 9.91011C12.8872 8.77756 14.3304 8.00638 15.9016 7.69411C17.4727 7.38184 19.1012 7.54251 20.581 8.15579C22.0608 8.76908 23.3255 9.80743 24.2152 11.1395C25.1049 12.4716 25.5795 14.0376 25.5791 15.6395C25.5791 16.703 25.3696 17.756 24.9626 18.7385C24.5556 19.721 23.959 20.6136 23.2069 21.3655C22.4548 22.1174 21.562 22.7138 20.5795 23.1205C19.5969 23.5273 18.5438 23.7366 17.4803 23.7363Z" fill="white" stroke="#0D0D0D" stroke-width="0.191816" stroke-miterlimit="10" />
                </svg>
            </div>
            <div className='table-user-wrapper'>
                <Image width={48} src={user} alt='u' />
                <div className='table-user'>
                    Parteek Garg
                </div>
            </div>
            <div className='table-amount'>
                USDT 1000
            </div>
            <div className='table-gameplayed'>
                2000
            </div>
            <div className='table-winrate'>
                85%
            </div>
            <div className='table-favcoins'>
                <div>
                    <Image className='favcion-img' src={bnb} alt='b' />
                    <div className='favcoin-title'>BNB</div>
                </div>
                <div>
                    <Image className='favcion-img' src={apt} alt='b' />
                    <div className='favcoin-title'>APT</div>
                </div>
                <div>
                    <Image className='favcion-img' src={neo} alt='b' />
                    <div className='favcoin-title'>NEO</div>
                </div>
                <div>
                    <Image className='favcion-img' src={mana} alt='b' />
                    <div className='favcoin-title'>MANA</div>
                </div>
                <div>
                    <Image className='favcion-img' src={dash} alt='b' />
                    <div className='favcoin-title'>DASH</div>
                </div>
            </div>
            <div className='table-favgame'>
                Coin League
            </div>
        </div>

    )
}

export default TopWinnerCard