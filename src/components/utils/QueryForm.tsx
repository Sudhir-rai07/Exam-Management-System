import { useState } from "react";
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

const QueryForm = () => {
    const [examName, setExamName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [state, setState] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);
    const difficulty = questionDifficulty(selectedRating)

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log({examName, startTime, endTime, state, selectedRating, difficulty})
    }

    const resetForm = () => {
        setExamName("");
        setStartTime("");
        setEndTime("");
        setState("");
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
                                value={examName}
                                onChange={(e) => setExamName(e.target.value)}
                                placeholder="Please enter exam name"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="start-time">Start Time</label>
                            <Input
                                type="datetime-local"
                                name="start-time"
                                id="start-time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                placeholder="Start Time"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="end-time">End Time</label>
                            <Input
                                type="datetime-local"
                                name="end-time"
                                id="end-time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                placeholder="End Time"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="name">State</label>
                            <Select onValueChange={(value)=> setState(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="State" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
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

export default QueryForm;
