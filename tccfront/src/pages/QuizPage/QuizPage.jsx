import React from 'react'
import Header from '../../components/Header/Header'
import SubHeaderArea from '../../components/SubHeaderArea/SubHeaderArea.jsx'
import QuestionCardBalloon from '../../components/QuestionCardBalloon/QuestionCardBalloon.jsx'
import ResponseCardBalloon from '../../components/ResponseCardBalloon/ResponseCardBalloon.jsx'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js'
import arrowToHereContext from '../../assets/img/arrow-my-task.svg'
import questionIcon from '../../assets/img/question-icon.svg'
import BronzeAchiviment from '../../assets/img/bronze-achiviment.svg'
import filterByDifficulty from '../../assets/img/filter-by-difficulty.svg'
import tpMoney from '../../assets/img/tp-money.svg'
export default function QuizPage() {
    const { setToken } = useAuth();
    return (
        <div className='flex flex-col w-full font-jersey font-bold text-base md:text-lg '>
            <header>
                <Header withPhoto={false} />
            </header>
            <main className='flex flex-col mb-8 items-center '>
                <SubHeaderArea BackToOthersPages={arrowToHereContext} PageToBack={"/Home"} TextIndicatorPage={"Quiz"} RepresentativeIcon={questionIcon} IconBadgeRank={BronzeAchiviment} NameRank={'Bronze'} FilterAdd={filterByDifficulty} infoMonetaryOrFilter={false} TextFilter={'Filtros'} IconMoney={tpMoney} QtdMoney={300} lvlProgressLeasson={true} />
                <div className='flex flex-col mt-5 w-[85%] items-center '>
                    <QuestionCardBalloon NumberQuestion={"1"} TextQuestion={"Qual é a forma correta da Sintax do For"} />
                    <div className="grid grid-cols-1 w-full my-2  md:grid-cols-2 gap-4">
                        <div className="flex flex-col w-full  md:items-start space-y-4">
                            <ResponseCardBalloon PossibleResponse={"for (let i = 0; i < 5; i++) { console.log(i); }"} className="md:self-start" />
                            <ResponseCardBalloon PossibleResponse={"for (let i = 0; ; i++) { console.log(i); }"} className="md:self-start" />
                        </div>
                        <div className="flex flex-col w-full md:items-end space-y-4">
                            <ResponseCardBalloon PossibleResponse={"for (let i = 0 i < 5 i++) { console.log(i); }"} className="md:self-end" />
                            <ResponseCardBalloon PossibleResponse={"for (; i < 5;) { console.log(i); i++; }"} className="md:self-end" />
                        </div>
                    </div>
                    <div className='flex flex-col w-full items-center my-2 space-y-3'>
                        <div className='flex justify-center py-2 rounded-lg px-4 lg:w-[25%] md:w-[35%] w-[45%] bg-send-response-question-1 border-2 border-send-response-question-2'>
                            <p className='text-white'>Entregar</p>
                        </div>
                        <div className='flex justify-center py-2 rounded-lg px-4 lg:w-[25%] md:w-[35%] w-[45%] border-gray-600 border-2 bg-gray-400'>
                            <p className='text-white'>Entregar</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
