import { SetStateAction, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import StarRating from "./StarRating";
import { questionDifficulty } from "./utils";
import { Button } from "../ui/button";

const QuestionsQueryForm = ({setQuery}: {setQuery: React.Dispatch<SetStateAction<string | number>>}) => {
    const [questionId, setQuestionId] = useState("");
    const [stem, setStem] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [type, setType] = useState("");
    const [updateTime, setUpdateTime] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);
    const difficulty = questionDifficulty(selectedRating)

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
    };

    const query = questionId || stem || createdBy || type || updateTime || selectedRating;

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setQuery(query)
        // console.log({examName, startTime, endTime, state, selectedRating, difficulty})
    }

    const resetForm = () => {
        setQuestionId("");
        setUpdateTime("");
        setCreatedBy("");
        setStem("")
        setType("")

        setSelectedRating(0);
    };
    return (
        <section>
            <h2 className="text-2xl font-semibold">Query Form</h2>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="query-form">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="input-container">
                            <label htmlFor="exam-name">Name</label>
                            <Input
                                type="text"
                                name="exam-name"
                                id="exam-name"
                                value={questionId}
                                onChange={(e) => setQuestionId(e.target.value)}
                                placeholder="Please enter exam name"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="Please enter stem">Stem</label>
                            <Input
                                type="text"
                                name="Please enter stem"
                                id="Please enter stem"
                                value={stem}
                                onChange={(e) => setStem(e.target.value)}
                                placeholder="Stem"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="update-time">Update Time</label>
                            <Input
                                type="text"
                                name="update-time"
                                id="update-time"
                                value={createdBy}
                                onChange={(e) => setCreatedBy(e.target.value)}
                                placeholder="Update Time"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="name">Type</label>
                            <Select onValueChange={(value)=> setType(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="multipleChoice">Multiple Choice</SelectItem>
                                    <SelectItem value="single">Single</SelectItem>
                                    <SelectItem value="t/f">T/F</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="update-time">Update Time</label>
                            <Input
                                type="datetime-local"
                                name="update-time"
                                id="update-time"
                                value={updateTime}
                                onChange={(e) => setUpdateTime(e.target.value)}
                                placeholder="Update Time"
                                className="input"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="name">Difficulty</label>
                            <StarRating totalStars={5} initialRating={0} onRatingChange={handleRatingChange} />
                            <span>{difficulty}</span>
                        </div>
                    </div>

                    <hr className="h-[50px] w-1"/>
                <div className="flex gap-2">
                   <Button type="submit">Search</Button>
                   <Button type="reset" onClick={resetForm}>Reset</Button>
                </div>
                </form>
            </div>
        </section>
    );
};

export default QuestionsQueryForm;
