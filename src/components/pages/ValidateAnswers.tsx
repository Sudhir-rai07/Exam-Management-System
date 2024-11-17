import QueryForm from '../utils/QueryForm'
import StaticStarRating from '../utils/StaticStarRating'
import ValidateAnswersCard from '../utils/ValidateAnswersCard'

const ValidateAnswers = () => {
  return (
    <section className='w-full h-full'>
        <QueryForm />
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>

        <div className="grid grid-cols-1 gap-6 mt-4 overflow-x-scroll overflow-y-scroll lg:grid-cols-3 md:gri`d-cols-2 h-1/2 place-items-center">
        {Array.from({length: 5}).map((_, idx: number)=>{
            return (
                <ValidateAnswersCard date='20/07/2004' difficulty={<StaticStarRating rating={3}/>}
                exam_name='Midterm'
                group={"4"}
                time={30}
                key={idx}
                />
            )
        })}

      </div>
    </section>


  )
}

export default ValidateAnswers